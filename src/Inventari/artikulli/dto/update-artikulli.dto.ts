import { PartialType } from '@nestjs/swagger';
import { CreateArtikulliDto } from './create-artikulli.dto';

export class UpdateArtikulliDto extends PartialType(CreateArtikulliDto) {}
