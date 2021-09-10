import { ApiProperty } from "@nestjs/swagger";
import { CarDto } from "./car.dto";
import { CarBuildDto } from "./car-build.dto";

export class CarModelDto {

    @ApiProperty()
    id?: string;

    @ApiProperty()
    model: string;

    @ApiProperty()
    car?: CarDto;


}