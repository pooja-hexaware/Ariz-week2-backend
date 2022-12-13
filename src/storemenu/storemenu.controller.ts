import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoremenuService } from './storemenu.service';
import { Storemenu } from './entities/storemenu.entity';

@Controller('storemenu')
export class StoremenuController {
  constructor(private readonly storemenuService: StoremenuService) {}

  @Post()
  async create(@Body() Storemenu: Storemenu) {
    const res = await this.storemenuService.create(Storemenu);
    if (!res) return null;
    return res;
  }

  @Get()
  async findAll() {
    const res = await this.storemenuService.findAll();
    if (!res) return null;
    return res;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res =  this.storemenuService.findOne(id);
    if (!res) return null;
    return res;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStoreMenuObject: Storemenu,
  ) {
    return this.storemenuService.update(id, updateStoreMenuObject);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.storemenuService.remove(id);
  }
}
