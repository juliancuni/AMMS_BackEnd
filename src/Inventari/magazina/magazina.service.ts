import { Injectable } from '@nestjs/common';
import { MagazinaDto } from './dto/magazina.dto';
import { UpdateMagazinaDto } from './dto/update-magazina.dto';

@Injectable()
export class MagazinaService {
  create(createMagazinaDto: MagazinaDto) {
    return 'This action adds a new magazina';
  }

  findAll() {
    return `This action returns all magazina`;
  }

  findOne(id: number) {
    return `This action returns a #${id} magazina`;
  }

  update(id: number, updateMagazinaDto: UpdateMagazinaDto) {
    return `This action updates a #${id} magazina`;
  }

  remove(id: number) {
    return `This action removes a #${id} magazina`;
  }
}
