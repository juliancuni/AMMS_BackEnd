import { Module } from '@nestjs/common';
import { DbModule } from './helpers/db/db.module';
import { UsersModule } from './Authentication/users/users.module';
import { RolesModule } from './Authentication/roles/roles.module';
import { ConfModule } from './helpers/config/conf.module';
import { AuthModule } from './Authentication/auth/auth.module';
import { SubjektiModule } from './subjekti/subjekti.module';
import { MagazinaModule } from './Inventari/magazina/magazina.module';
import { ArtikulliModule } from './Inventari/artikulli/artikulli.module';
import { CarsModule } from './parts-catalog/cars/cars.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfModule,
    DbModule,
    UsersModule,
    RolesModule,
    AuthModule,
    SubjektiModule,
    MagazinaModule,
    ArtikulliModule,
    CarsModule,
    ScheduleModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
