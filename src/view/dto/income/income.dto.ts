
import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class IncomeInputDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  income: string;
}

export class IncomeGetDto {
  @ApiProperty()
  @IsString()
  email: string;
}