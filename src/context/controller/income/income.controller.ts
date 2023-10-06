import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IncomeService } from 'src/context/service/income/income.service';
import { IncomeGetDto, IncomeInputDto } from 'src/view/dto/income/income.dto';

@ApiTags('Income')
@Controller('/income')
export class IncomeController {
  constructor(private readonly service: IncomeService) {}
  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postIncome(@Body() input: IncomeInputDto) {
    return this.service.postIncome(input);
  }
  @ApiOperation({
    summary: '',
  })
  @Get('/')
  async getIncome(@Body() input: IncomeGetDto) {
    return this.service.getIncome(input);
  }
}
