import { ApiProperty } from "@nestjs/swagger";
import { CarBuildDto } from "./car-build.dto";
import { CarModelDto } from "./car-model.dto";

export class CarDto {

    @ApiProperty()
    id?: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    models?: CarModelDto[];

}
