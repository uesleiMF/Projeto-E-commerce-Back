import { Module } from '@nestjs/common';
import { EletroService } from './eletro.service';
import { EletroController } from './eletro.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EletroController],
  providers: [EletroService, PrismaService],
})
export class EletroModule {}
