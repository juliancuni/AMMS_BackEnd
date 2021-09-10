import AppBaseEntity from "src/helpers/shared/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { CarBuildEntity } from "./car-build.entity";
import { CarModelEntity } from "./car-model.entity";

@Entity('cars')
export class CarEntity extends AppBaseEntity {

    @Column()
    name: string;

    @OneToMany(() => CarModelEntity, model => model.car, { cascade: true })
    models?: CarModelEntity[];

}
