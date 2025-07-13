import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto';

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

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
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
