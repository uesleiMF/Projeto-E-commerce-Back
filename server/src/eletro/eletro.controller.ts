import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EletroService } from './eletro.service';
import { Eletro } from '@prisma/client';
import { CreateEletroDto } from './dto/create-eletro.dto';
import { CreateManyEletrosDto } from './dto/create-many-eletro.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('eletro')
@Controller('eletro')
export class EletroController {
  constructor(private service: EletroService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Obter um eletro',
  })
  create(@Body() data: CreateEletroDto): Promise<Eletro> {
    return this.service.create(data);
  }

  @Post('createMany')
  @ApiOperation({
    summary: 'Obter vários eletros',
  })
  async createMany(@Body() data: CreateManyEletrosDto) {
    return this.service.createMany(data);
  }

  @Get('findMany')
  @ApiOperation({
    summary: 'Listar todos os eletros cadastrados',
  })
  findMany(): Promise<Eletro[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  @ApiOperation({
    summary: 'Procurar um eletro pelo ID',
  })
  async findUnique(@Param('id') id: string): Promise<Eletro> {
    return this.service.findUnique(id);
  }
}
