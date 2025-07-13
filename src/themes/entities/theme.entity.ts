import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

@Entity('themes')
export class Theme {
  @ApiProperty({
    description: 'Theme unique identifier',
    example: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Theme name',
    example: 'Dark Purple Theme',
  })
  @Column({ unique: true })
  name: string;

  @ApiProperty({
    description: 'Theme description',
    example: 'A dark theme with purple accents',
    required: false,
  })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({
    description: 'Theme configuration object',
    example: { palette: { mode: 'dark', primary: { main: '#9c27b0' } } },
  })
  @Column({ type: 'jsonb' })
  themeConfig: any;

  @ApiProperty({
    description: 'Theme preview image URL',
    example: 'https://example.com/preview.jpg',
    required: false,
  })
  @Column({ nullable: true })
  previewImage: string;

  @ApiProperty({
    description: 'Theme tags',
    example: ['dark', 'purple', 'modern'],
    required: false,
  })
  @Column({ type: 'simple-array', nullable: true })
  tags: string[];

  @ApiProperty({
    description: 'Theme active status',
    example: true,
  })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({
    description: 'ID of the user who created the theme',
    example: 'uuid',
  })
  @Column({ type: 'uuid' })
  createdById: string;

  @ApiProperty({
    description: 'ID of the user who last updated the theme',
    example: 'uuid',
  })
  @Column({ type: 'uuid' })
  updatedById: string;

  @ApiProperty({
    description: 'User who created the theme',
    type: () => User,
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'createdById' })
  createdBy: User;

  @ApiProperty({
    description: 'User who last updated the theme',
    type: () => User,
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'updatedById' })
  updatedBy: User;

  @ApiProperty({
    description: 'Date when theme was created',
    example: '2023-01-01T00:00:00Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Date when theme was last updated',
    example: '2023-01-01T00:00:00Z',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
