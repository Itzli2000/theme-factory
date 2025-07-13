import {
  IsString,
  IsOptional,
  IsObject,
  IsArray,
  ValidateNested,
  IsNotEmpty,
  MaxLength,
  ArrayMaxSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class MuiPaletteColorDto {
  @IsString()
  main: string;

  @IsOptional()
  @IsString()
  dark?: string;

  @IsOptional()
  @IsString()
  light?: string;

  @IsOptional()
  @IsString()
  contrastText?: string;
}

class MuiPaletteDto {
  @IsOptional()
  @IsString()
  mode?: 'light' | 'dark';

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  primary?: MuiPaletteColorDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  secondary?: MuiPaletteColorDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  error?: MuiPaletteColorDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  warning?: MuiPaletteColorDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  info?: MuiPaletteColorDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  success?: MuiPaletteColorDto;
}

class MuiTypographyDto {
  @IsOptional()
  @IsString()
  fontFamily?: string;

  @IsOptional()
  fontSize?: number;

  @IsOptional()
  fontWeightLight?: number;

  @IsOptional()
  fontWeightRegular?: number;

  @IsOptional()
  fontWeightMedium?: number;

  @IsOptional()
  fontWeightBold?: number;
}

class MuiShapeDto {
  @IsOptional()
  borderRadius?: number;
}

export class MuiThemeConfigDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteDto)
  palette?: MuiPaletteDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyDto)
  typography?: MuiTypographyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MuiShapeDto)
  shape?: MuiShapeDto;

  @IsOptional()
  spacing?: number;

  @IsOptional()
  shadows?: string[];

  @IsOptional()
  @IsObject()
  transitions?: any;

  @IsOptional()
  @IsObject()
  zIndex?: any;

  @IsOptional()
  @IsObject()
  breakpoints?: any;

  @IsOptional()
  @IsObject()
  components?: any;
}

export class CreateThemeDto {
  @ApiProperty({
    description: 'Unique name of the theme',
    example: 'Dark Purple Theme',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Description of the theme',
    example: 'A dark theme with purple accents for modern applications',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiProperty({
    description: 'Configuration of the theme compatible with MUI ThemeOptions',
    example: {
      palette: {
        mode: 'dark',
        primary: { main: '#9c27b0' },
        secondary: { main: '#ff5722' },
      },
      typography: {
        fontFamily: 'Inter, sans-serif',
      },
      shape: {
        borderRadius: 12,
      },
    },
  })
  @IsObject()
  @ValidateNested()
  @Type(() => MuiThemeConfigDto)
  themeConfig: MuiThemeConfigDto;

  @ApiProperty({
    description: 'Tags to categorize the theme',
    example: ['dark', 'purple', 'modern', 'enterprise'],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMaxSize(10)
  @MaxLength(30, { each: true })
  tags?: string[];
}
