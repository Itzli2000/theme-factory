import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetUser } from 'src/auth/decorators/get-user/get-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { CreateThemeDto } from './dto/create-theme.dto';
import { ThemeQueryDto } from './dto/theme-query.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { ThemesService } from './themes.service';
import { Theme } from './entities/theme.entity';

@Controller('themes')
@UseGuards(AuthGuard())
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new theme' })
  @ApiResponse({
    status: 201,
    description: 'Theme created successfully',
    type: Theme,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  create(@Body() createThemeDto: CreateThemeDto, @GetUser() user: User) {
    return this.themesService.create(createThemeDto, user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all themes with filtering and pagination' })
  @ApiResponse({
    status: 200,
    description: 'Themes retrieved successfully',
    type: [Theme],
  })
  findAll(@Query() query: ThemeQueryDto) {
    return this.themesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get theme by ID' })
  @ApiResponse({ status: 200, description: 'Theme found', type: Theme })
  @ApiResponse({ status: 404, description: 'Theme not found' })
  findOne(@Param('id') id: string) {
    return this.themesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update theme by ID' })
  @ApiResponse({
    status: 200,
    description: 'Theme updated successfully',
    type: Theme,
  })
  @ApiResponse({ status: 404, description: 'Theme not found' })
  update(
    @Param('id') id: string,
    @Body() updateThemeDto: UpdateThemeDto,
    @GetUser() user: User,
  ) {
    return this.themesService.update(id, updateThemeDto, user.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete theme by ID' })
  @ApiResponse({
    status: 200,
    description: 'Theme deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Theme not found' })
  remove(@Param('id') id: string) {
    return this.themesService.remove(id);
  }
}
