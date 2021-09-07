import { Module } from '@nestjs/common';
import { ArtikulliService } from './artikulli.service';
import { ArtikulliController } from './artikulli.controller';

@Module({
  controllers: [ArtikulliController],
  providers: [ArtikulliService]
})
export class ArtikulliModule {}
