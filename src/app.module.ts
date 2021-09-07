import { Module } from '@nestjs/common';
import { DbModule } from './helpers/db/db.module';
import { UsersModule } from './Authentication/users/users.module';
import { RolesModule } from './Authentication/roles/roles.module';
import { ConfModule } from './helpers/config/conf.module';
import { AuthModule } from './Authentication/auth/auth.module';
import { SubjektiModule } from './subjekti/subjekti.module';
import { MagazinaModule } from './Inventari/magazina/magazina.module';

@Module({
  imports: [
    ConfModule,
    DbModule,
    UsersModule,
    RolesModule,
    AuthModule,
    SubjektiModule,
    MagazinaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
