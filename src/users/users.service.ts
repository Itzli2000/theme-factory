import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { DatabaseError } from 'pg';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(
        createUserDto.password,
        saltRounds,
      );

      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });

      return await this.userRepository.save(user);
    } catch (error) {
      this.handleDbErrors(error);
    }
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.userRepository.save({ ...user, ...updateUserDto });
  }

  async findByEmail(email: string, includePassword = false) {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    queryBuilder.where('user.email = :email', { email });

    if (includePassword) {
      queryBuilder.addSelect('user.password');
    }

    return queryBuilder.getOne();
  }

  async validatePassword(email: string, password: string) {
    try {
      const user = await this.findByEmail(email, true);

      if (user && (await bcrypt.compare(password, user.password))) {
        return user;
      }

      return null;
    } catch (error) {
      this.handleDbErrors(error);
    }
  }

  private handleDbErrors(error: any) {
    this.logger.error('Database error:', error);

    if (error instanceof QueryFailedError) {
      const dbError = error.driverError as DatabaseError;
      switch (dbError.code) {
        case '23505':
          if (dbError.detail?.includes('email')) {
            throw new ConflictException('Email already registered');
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
