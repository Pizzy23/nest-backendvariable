import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IncomeEntity } from 'src/context/entity/income/income.entity';

import { IncomeGetDto, IncomeInputDto } from 'src/view/dto/income/income.dto';
@Injectable()
export class IncomeService {
  constructor(private repository: IncomeEntity) {}
  async postIncome(input: IncomeInputDto) {
    await this.repository.incomeCreate(input);
    return { res: 'Renda adicionada', status: 200 };
  }
  async getIncome(input: IncomeGetDto) {
    const income = await this.repository.incomeGet(input);
    return { res: income, status: 200 };
  }
}
