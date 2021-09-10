import { ApiProperty } from "@nestjs/swagger";
import { CarDto } from "./car.dto";
import { CarModelDto } from "./car-model.dto";

export class CarBuildDto {

    @ApiProperty()
    id?: string;

    @ApiProperty()
    model: string;

    @ApiProperty()
    car?: CarDto;

    @ApiProperty()
    car_model?: CarModelDto;


}