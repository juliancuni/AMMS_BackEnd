import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CarDto } from './dto/car.dto';
import { CarEntity } from './entities/car.entity';
import { CarBuildEntity } from './entities/car-build.entity';
import { CarModelEntity } from './entities/car-model.entity';

@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(CarEntity) private readonly carRepo: Repository<CarEntity>,
    @InjectRepository(CarModelEntity) private readonly carModelRepo: Repository<CarModelEntity>,
    @InjectRepository(CarBuildEntity) private readonly carModelBuildRepo: Repository<CarBuildEntity>,
    private readonly httpService: HttpService,
  ) { }

  /** Public Methods per Controller */
  async findAll(): Promise<CarDto[]> {
    return await this.carRepo.find();
  }

  async findOne(opt?: FindOneOptions<CarDto>): Promise<CarDto> {
    return await this.carRepo.findOne(opt)
  }


}