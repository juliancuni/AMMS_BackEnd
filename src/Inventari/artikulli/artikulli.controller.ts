import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtikulliService } from './artikulli.service';
import { CreateArtikulliDto } from './dto/create-artikulli.dto';
import { UpdateArtikulliDto } from './dto/update-artikulli.dto';

@Controller('artikulli')
export class ArtikulliController {
  constructor(private readonly artikulliService: ArtikulliService) {}

  @Post()
  create(@Body() createArtikulliDto: CreateArtikulliDto) {
    return this.artikulliService.create(createArtikulliDto);
  }

  @Get()
  findAll() {
    return this.artikulliService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artikulliService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtikulliDto: UpdateArtikulliDto) {
    return this.artikulliService.update(+id, updateArtikulliDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artikulliService.remove(+id);
  }
}
