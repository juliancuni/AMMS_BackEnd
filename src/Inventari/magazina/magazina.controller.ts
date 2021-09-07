import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MagazinaService } from './magazina.service';
import { MagazinaDto } from './dto/magazina.dto';
import { UpdateMagazinaDto } from './dto/update-magazina.dto';

@Controller('magazina')
export class MagazinaController {
  constructor(private readonly magazinaService: MagazinaService) {}

  @Post()
  create(@Body() createMagazinaDto: MagazinaDto) {
    return this.magazinaService.create(createMagazinaDto);
  }

  @Get()
  findAll() {
    return this.magazinaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magazinaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMagazinaDto: UpdateMagazinaDto) {
    return this.magazinaService.update(+id, updateMagazinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.magazinaService.remove(+id);
  }
}
