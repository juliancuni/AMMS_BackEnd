import AppBaseEntity from "src/helpers/shared/base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CarEntity } from "./car.entity";
import { CarBuildEntity } from "./car-build.entity";

@Entity('car_models')
export class CarModelEntity extends AppBaseEntity {

    @Column()
    model: string;

    @ManyToOne(() => CarEntity, car => car.models)
    car: CarEntity;

    @OneToMany(() => CarBuildEntity, carmodelbuild => carmodelbuild.car_model, { cascade: true })
    builds: CarBuildEntity[];

}