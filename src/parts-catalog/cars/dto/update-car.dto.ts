import { PartialType } from '@nestjs/swagger';
import { CarDto } from './car.dto';

export class UpdateCarDto extends PartialType(CarDto) {}
