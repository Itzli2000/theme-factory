import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

class MuiPaletteColorDto {
  @ApiProperty({
    description: 'Main color value in hex format',
    example: '#9c27b0',
  })
  @IsString()
  main: string;

  @ApiProperty({
    description: 'Dark variant of the color',
    example: '#6a1b7a',
    required: false,
  })
  @IsOptional()
  @IsString()
  dark?: string;

  @ApiProperty({
    description: 'Light variant of the color',
    example: '#ba68c8',
    required: false,
  })
  @IsOptional()
  @IsString()
  light?: string;

  @ApiProperty({
    description: 'Contrast text color',
    example: '#ffffff',
    required: false,
  })
  @IsOptional()
  @IsString()
  contrastText?: string;
}

class MuiPaletteDto {
  @ApiProperty({
    description: 'Palette mode',
    example: 'dark',
    enum: ['light', 'dark'],
    required: false,
  })
  @IsOptional()
  @IsString()
  mode?: 'light' | 'dark';

  @ApiProperty({
    description: 'Primary color configuration',
    type: () => MuiPaletteColorDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  primary?: MuiPaletteColorDto;

  @ApiProperty({
    description: 'Secondary color configuration',
    type: () => MuiPaletteColorDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  secondary?: MuiPaletteColorDto;

  @ApiProperty({
    description: 'Error color configuration',
    type: () => MuiPaletteColorDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  error?: MuiPaletteColorDto;

  @ApiProperty({
    description: 'Warning color configuration',
    type: () => MuiPaletteColorDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  warning?: MuiPaletteColorDto;

  @ApiProperty({
    description: 'Info color configuration',
    type: () => MuiPaletteColorDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  info?: MuiPaletteColorDto;

  @ApiProperty({
    description: 'Success color configuration',
    type: () => MuiPaletteColorDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteColorDto)
  success?: MuiPaletteColorDto;
}

class MuiTypographyDto {
  @ApiProperty({
    description: 'Font family for the theme',
    example: 'Inter, sans-serif',
    required: false,
  })
  @IsOptional()
  @IsString()
  fontFamily?: string;

  @ApiProperty({
    description: 'Base font size in pixels',
    example: 14,
    required: false,
  })
  @IsOptional()
  fontSize?: number;

  @ApiProperty({
    description: 'Light font weight',
    example: 300,
    required: false,
  })
  @IsOptional()
  fontWeightLight?: number;

  @ApiProperty({
    description: 'Regular font weight',
    example: 400,
    required: false,
  })
  @IsOptional()
  fontWeightRegular?: number;

  @ApiProperty({
    description: 'Medium font weight',
    example: 500,
    required: false,
  })
  @IsOptional()
  fontWeightMedium?: number;

  @ApiProperty({
    description: 'Bold font weight',
    example: 700,
    required: false,
  })
  @IsOptional()
  fontWeightBold?: number;
}

class MuiShapeDto {
  @ApiProperty({
    description: 'Border radius in pixels',
    example: 12,
    required: false,
  })
  @IsOptional()
  borderRadius?: number;
}

export class MuiThemeConfigDto {
  @ApiProperty({
    description: 'Color palette configuration',
    type: () => MuiPaletteDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiPaletteDto)
  palette?: MuiPaletteDto;

  @ApiProperty({
    description: 'Typography configuration',
    type: () => MuiTypographyDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyDto)
  typography?: MuiTypographyDto;

  @ApiProperty({
    description: 'Shape configuration',
    type: () => MuiShapeDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiShapeDto)
  shape?: MuiShapeDto;

  @ApiProperty({
    description: 'Spacing unit in pixels',
    example: 8,
    required: false,
  })
  @IsOptional()
  spacing?: number;

  @ApiProperty({
    description: 'Array of shadow definitions',
    example: ['none', '0px 2px 4px rgba(0,0,0,0.1)'],
    required: false,
  })
  @IsOptional()
  shadows?: string[];

  @ApiProperty({
    description: 'Transition configuration object',
    example: { duration: { short: 150, standard: 300 } },
    required: false,
  })
  @IsOptional()
  @IsObject()
  transitions?: any;

  @ApiProperty({
    description: 'Z-index configuration object',
    example: { appBar: 1100, drawer: 1200 },
    required: false,
  })
  @IsOptional()
  @IsObject()
  zIndex?: any;

  @ApiProperty({
    description: 'Breakpoints configuration object',
    example: { xs: 0, sm: 600, md: 960 },
    required: false,
  })
  @IsOptional()
  @IsObject()
  breakpoints?: any;

  @ApiProperty({
    description: 'Component overrides configuration',
    example: { MuiButton: { styleOverrides: { root: { borderRadius: 8 } } } },
    required: false,
  })
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
