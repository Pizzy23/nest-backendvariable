import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { EquipamentEntity } from 'src/context/entity/equipament/equipament.entity';

import {
  EquipmentEmailDto,
  EquipamentInputDto,
} from 'src/view/dto/equipament/equipament.dto';
@Injectable()
export class EquipamentService {
  constructor(private repository: EquipamentEntity) {}
  async getEquipament(input: EquipmentEmailDto) {
    const equip = await this.repository.equipamentGet(input);
    return { res: equip, status: 200 };
  }

  async postEquipament(input: EquipamentInputDto) {
    await this.repository.equipamentCreate(input);
    return { res: 'Novo equipamento adicionado', status: 200 };
  }
}
