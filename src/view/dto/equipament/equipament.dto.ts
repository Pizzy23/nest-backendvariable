import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class EquipamentInputDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({ required: false }) 
  @IsString()
  picture?: string | null;
}

export class EquipmentEmailDto{
  @ApiProperty()
  @IsString()
  email: string;
}