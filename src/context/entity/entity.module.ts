import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config';
import { EquipamentEntity } from './equipament/equipament.entity';
import { IncomeEntity } from './income/income.entity';


@Module({
  exports: [
    PrismaService,
    IncomeEntity,
    EquipamentEntity,
  ],
  providers: [
    PrismaService,
    IncomeEntity,
    EquipamentEntity,
  ],
})
export class EntityModule {}
