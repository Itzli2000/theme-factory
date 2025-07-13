import { IsOptional, IsString, IsEnum, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class ThemeQueryDto extends PaginationDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  createdBy?: string;

  @ApiProperty({
    required: false,
    description: 'Filtrar por tags',
    example: ['dark', 'modern'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty({
    required: false,
    enum: ['createdAt', 'updatedAt', 'name'],
  })
  @IsOptional()
  @IsEnum(['createdAt', 'updatedAt', 'name'])
  sortBy?: 'createdAt' | 'updatedAt' | 'name' = 'createdAt';

  @ApiProperty({
    required: false,
    enum: ['ASC', 'DESC'],
  })
  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
}
