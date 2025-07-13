import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private handleDbErrors(error: any): never {
    this.logger.error('Database error:', error);

    if (error instanceof QueryFailedError) {
      const dbError = error.driverError;

      switch (dbError.code) {
        case '23505':
          if (dbError.detail?.includes('email')) {
            throw new ConflictException('Email already registered');
          }
          throw new ConflictException('Record already exists');

        case '23503':
          throw new ConflictException(
            'Cannot delete, has related records',
          );

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
