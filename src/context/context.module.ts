import { Module } from '@nestjs/common';
import { EntityModule } from './entity/entity.module';
import { EquipamentController } from './controller/equipament/equipament.controller';
import { IncomeController } from './controller/income/income.controller';
import { EquipamentService } from './service/equipament/equipament.service';
import { IncomeService } from './service/income/income.service';

@Module({
  imports: [EntityModule],
  controllers: [EquipamentController, IncomeController],
  providers: [EquipamentService, IncomeService],
})
export class ContextModule {}
