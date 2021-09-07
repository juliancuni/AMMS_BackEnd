import { Injectable } from '@nestjs/common';
import { CreateArtikulliDto } from './dto/create-artikulli.dto';
import { UpdateArtikulliDto } from './dto/update-artikulli.dto';

@Injectable()
export class ArtikulliService {
  create(createArtikulliDto: CreateArtikulliDto) {
    return 'This action adds a new artikulli';
  }

  findAll() {
    return `This action returns all artikulli`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artikulli`;
  }

  update(id: number, updateArtikulliDto: UpdateArtikulliDto) {
    return `This action updates a #${id} artikulli`;
  }

  remove(id: number) {
    return `This action removes a #${id} artikulli`;
  }
}
