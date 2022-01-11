import { CreateEletroDto } from './create-eletro.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateManyEletrosDto {
  @IsNotEmpty()
  @ApiProperty()
  eletros: CreateEletroDto[];
}
