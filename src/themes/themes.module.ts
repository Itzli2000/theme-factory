import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Theme } from './entities/theme.entity';
import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Theme]), AuthModule],
  controllers: [ThemesController],
  providers: [ThemesService],
  exports: [ThemesService, TypeOrmModule],
})
export class ThemesModule {}
