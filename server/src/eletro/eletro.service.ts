import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEletroDto } from './dto/create-eletro.dto';
import { CreateManyEletrosDto } from './dto/create-many-eletro.dto';
import { Eletro } from '@prisma/client';

@Injectable()
export class EletroService {
  constructor(private database: PrismaService) {}

  async create(data: CreateEletroDto): Promise<Eletro> {
    const eletro = await this.database.eletro.create({
      data,
    });
    return eletro;
  }

  async createMany(data: CreateManyEletrosDto) {
    const createdEletros = [];

    data.eletros.map(async (eletro) => {
      const eletroExist = await this.findPerName(eletro.name);

      if (!eletroExist) {
        const created = await this.create(eletro);
        createdEletros.push(created);
      }
    });

    return createdEletros;
  }

  async findPerName(name: string): Promise<Eletro> {
    const eletro = await this.database.eletro.findFirst({
      where: { name: name },
    });
    return eletro;
  }

  async findMany(): Promise<Eletro[]> {
    const eletros = await this.database.eletro.findMany();
    return eletros;
  }

  async findUnique(id: string): Promise<Eletro> {
    const eletro = await this.database.eletro.findUnique({
      where: { id },
    });

    if (!eletro) {
      throw new NotFoundException('ID não encontrado');
    }

    return eletro;
  }
}
