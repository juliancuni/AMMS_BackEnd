import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindOneOptions } from 'typeorm';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';

@ApiTags('Cars CRUD')
@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  async findAll(): Promise<CarDto[]> {
    return await this.carsService.findAll();
  }

  @Get('filter')
  async findOne(@Body() opt: FindOneOptions<CarDto>): Promise<CarDto> {
    return await this.carsService.findOne(opt);
  }
}
