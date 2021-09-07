import { PartialType } from '@nestjs/swagger';
import { MagazinaDto } from './magazina.dto';

export class UpdateMagazinaDto extends PartialType(MagazinaDto) {}
