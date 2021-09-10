import AppBaseEntity from "src/helpers/shared/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { CarEntity } from "./car.entity";
import { CarModelEntity } from "./car-model.entity";

@Entity('car_builds') 
export class CarBuildEntity extends AppBaseEntity {
    
    @Column()
    model: string;

    @ManyToOne(() => CarModelEntity, carmodel => carmodel.builds)
    car_model: CarModelEntity;
    
}