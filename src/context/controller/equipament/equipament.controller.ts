import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EquipamentService } from 'src/context/service/equipament/equipament.service';
import {
  EquipamentInputDto,
  EquipmentEmailDto,
} from 'src/view/dto/equipament/equipament.dto';

@ApiTags('Equipament')
@Controller('/equipament')
export class EquipamentController {
  constructor(private readonly service: EquipamentService) {}
  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postEquipament(@Body() input: EquipamentInputDto) {
    return await this.service.postEquipament(input);
  }

  @ApiOperation({
    summary: '',
  })
  @Get('/')
  async getEquipament(@Body() input: EquipmentEmailDto) {
    return await this.service.getEquipament(input);
  }
}
