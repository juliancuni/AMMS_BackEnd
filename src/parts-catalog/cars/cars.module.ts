import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './entities/car.entity';
import { HttpModule } from '@nestjs/axios';
import { CarModelEntity } from './entities/car-model.entity';
import { CarBuildEntity } from './entities/car-build.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([CarEntity, CarModelEntity, CarBuildEntity]),
  ],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule { }
