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

class MuiTypographyVariantDto {
  @ApiProperty({ description: 'Font family for the variant', required: false })
  @IsOptional()
  @IsString()
  fontFamily?: string;

  @ApiProperty({ description: 'Font weight for the variant', required: false })
  @IsOptional()
  fontWeight?: number;

  @ApiProperty({ description: 'Font size for the variant', required: false })
  @IsOptional()
  @IsString()
  fontSize?: string;

  @ApiProperty({ description: 'Line height for the variant', required: false })
  @IsOptional()
  lineHeight?: number;

  @ApiProperty({
    description: 'Letter spacing for the variant',
    required: false,
  })
  @IsOptional()
  @IsString()
  letterSpacing?: string;
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

  @ApiProperty({
    description: 'Typography variant h1',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  h1?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant h2',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  h2?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant h3',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  h3?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant h4',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  h4?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant h5',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  h5?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant h6',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  h6?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant subtitle1',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  subtitle1?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant subtitle2',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  subtitle2?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant body1',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  body1?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant body2',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  body2?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant button',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  button?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant caption',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  caption?: MuiTypographyVariantDto;

  @ApiProperty({
    description: 'Typography variant overline',
    type: () => MuiTypographyVariantDto,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => MuiTypographyVariantDto)
  overline?: MuiTypographyVariantDto;
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
    description: 'Array of Google Font names to be used in the theme',
    example: ['Roboto', 'Inter', 'Poppins'],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMaxSize(10)
  @MaxLength(50, { each: true })
  googleFonts?: string[];

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

// MuiPaletteColor
export interface MuiPaletteColor {
  main: string;
  dark?: string;
  light?: string;
  contrastText?: string;
}

// MuiPalette
export interface MuiPalette {
  mode?: 'light' | 'dark';
  primary?: MuiPaletteColor;
  secondary?: MuiPaletteColor;
  error?: MuiPaletteColor;
  warning?: MuiPaletteColor;
  info?: MuiPaletteColor;
  success?: MuiPaletteColor;
}

// MuiTypographyVariant
export interface MuiTypographyVariant {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: number;
  letterSpacing?: string;
}

// MuiTypography
export interface MuiTypography {
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  h1?: MuiTypographyVariant;
  h2?: MuiTypographyVariant;
  h3?: MuiTypographyVariant;
  h4?: MuiTypographyVariant;
  h5?: MuiTypographyVariant;
  h6?: MuiTypographyVariant;
  subtitle1?: MuiTypographyVariant;
  subtitle2?: MuiTypographyVariant;
  body1?: MuiTypographyVariant;
  body2?: MuiTypographyVariant;
  button?: MuiTypographyVariant;
  caption?: MuiTypographyVariant;
  overline?: MuiTypographyVariant;
}

// MuiShape
export interface MuiShape {
  borderRadius?: number;
}

// MuiThemeConfig
export interface MuiThemeConfig {
  palette?: MuiPalette;
  typography?: MuiTypography;
  shape?: MuiShape;
  spacing?: number;
  shadows?: string[];
  transitions?: Record<string, any>;
  zIndex?: Record<string, any>;
  breakpoints?: Record<string, any>;
  components?: Record<string, any>;
}

// CreateThemePayload
export interface CreateThemePayload {
  name: string;
  description?: string;
  googleFonts?: string[];
  themeConfig: MuiThemeConfig;
  tags?: string[];
}
