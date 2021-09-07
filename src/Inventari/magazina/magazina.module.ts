import { Module } from '@nestjs/common';
import { MagazinaService } from './magazina.service';
import { MagazinaController } from './magazina.controller';

@Module({
  controllers: [MagazinaController],
  providers: [MagazinaService]
})
export class MagazinaModule {}
