import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'limit must be greater than 0' })
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'offset must be greater than 0' })
  offset?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1, { message: 'page must be greater than 0' })
  @Type(() => Number)
  page?: number;
}