import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EletroModule } from './eletro/eletro.module';

@Module({
  imports: [UserModule, EletroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
