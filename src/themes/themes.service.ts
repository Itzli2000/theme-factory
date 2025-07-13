import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DatabaseError } from 'pg';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateThemeDto } from './dto/create-theme.dto';
import { ThemeQueryDto } from './dto/theme-query.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { Theme } from './entities/theme.entity';

@Injectable()
export class ThemesService {
  private readonly logger = new Logger(ThemesService.name);

  constructor(
    @InjectRepository(Theme)
    private readonly themeRepository: Repository<Theme>,
  ) {}

  async create(createThemeDto: CreateThemeDto, userId: string) {
    try {
      const theme = this.themeRepository.create({
        ...createThemeDto,
        createdById: userId,
        updatedById: userId,
      });
      return await this.themeRepository.save(theme);
    } catch (error) {
      this.handleDbErrors(error);
    }
  }

  async findAll(
    query: ThemeQueryDto,
  ): Promise<{ data: Theme[]; total: number; page: number; limit: number }> {
    const {
      page = 1,
      limit = 10,
      search,
      createdBy,
      tags,
      sortBy = 'createdAt',
      sortOrder = 'DESC',
    } = query;
    const skip = (page - 1) * limit;

    const queryBuilder = this.themeRepository
      .createQueryBuilder('theme')
      .leftJoinAndSelect('theme.createdBy', 'createdBy')
      .leftJoinAndSelect('theme.updatedBy', 'updatedBy')
      .where('theme.isActive = :isActive', { isActive: true });

    if (search) {
      queryBuilder.andWhere(
        '(theme.name ILIKE :search OR theme.description ILIKE :search)',
        { search: `%${search}%` },
      );
    }

    if (createdBy) {
      queryBuilder.andWhere('theme.createdById = :createdBy', { createdBy });
    }

    if (tags && tags.length > 0) {
      queryBuilder.andWhere('theme.tags && :tags', { tags });
    }

    queryBuilder.orderBy(`theme.${sortBy}`, sortOrder);
    queryBuilder.skip(skip).take(limit);

    const [data, total] = await queryBuilder.getManyAndCount();

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<Theme> {
    const theme = await this.themeRepository.findOne({
      where: { id, isActive: true },
      // relations: ['createdBy', 'updatedBy'],
    });

    if (!theme) {
      throw new NotFoundException('Theme not found');
    }

    return theme;
  }

  async update(id: string, updateThemeDto: UpdateThemeDto, userId: string) {
    await this.findOne(id);

    try {
      const updateData: Partial<Theme> = {
        ...updateThemeDto,
        updatedById: userId,
      };

      await this.themeRepository.update(id, updateData);

      return await this.findOne(id);
    } catch (error) {
      this.handleDbErrors(error);
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.themeRepository.update(id, { isActive: false });
  }

  private handleDbErrors(error: any) {
    this.logger.error('Database error:', error);

    if (error instanceof QueryFailedError) {
      const dbError = error.driverError as DatabaseError;
      switch (dbError.code) {
        case '23505':
          if (dbError.detail?.includes('name')) {
            throw new ConflictException('Theme name already exists');
          }
          throw new ConflictException('Record already exists');

        case '23503':
          throw new ConflictException('Cannot delete, has related records');

        case '23514':
          throw new ConflictException('Data does not meet constraints');

        default:
          break;
      }
    }

    this.logger.error('Unhandled database error:', error);
    throw new InternalServerErrorException('Internal server error');
  }
}
