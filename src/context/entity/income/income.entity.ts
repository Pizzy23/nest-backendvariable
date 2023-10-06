import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import {
  incomeEmail,
  incomeInput,
} from 'src/view/interface/income/income.interface';

@Injectable()
export class IncomeEntity {
  constructor(private prisma: PrismaService) {}
  async incomeCreate(input: incomeInput) {
    await this.prisma.income.create({
      data: input,
    });
  }
  async incomeGet(input: incomeEmail) {
    await this.prisma.income.findFirst({
      where: { email: input.email },
    });
  }
}
