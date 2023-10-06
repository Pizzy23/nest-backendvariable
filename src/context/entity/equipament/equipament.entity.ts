import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';
import { equipamentEmail, equipamentInput } from 'src/view/interface/equipament/equipament.interface';

@Injectable()
export class EquipamentEntity {
  constructor(private prisma: PrismaService) {}
  async equipamentCreate(input: equipamentInput) {
    await this.prisma.equipament.create({
      data: input,
    });
  }
  async equipamentGet(input: equipamentEmail) {
    await this.prisma.equipament.findFirst({
      where: { email: input.email },
    });
  }
}
