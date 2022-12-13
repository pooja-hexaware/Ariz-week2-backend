import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WiwistoreService } from './wiwistore.service';
import { Wiwistore } from './entities/wiwistore.entity';

@Controller('wiwistore')
export class WiwistoreController {
  constructor(private readonly wiwistoreService: WiwistoreService) {}

  @Post()
  async create(@Body() wiwistore: Wiwistore) {
    const res = await this.wiwistoreService.create(wiwistore);
    if (!res) return null;
    return res;
  }

  @Get()
  async findAll() {
    const res = await this.wiwistoreService.findAll();
    if (!res) return null;
    return res;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = this.wiwistoreService.findOne(id);
    if (!res) return null;
    return res;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedWiwiStoreObject: Wiwistore,
  ) {
    return this.wiwistoreService.update(id, updatedWiwiStoreObject);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.wiwistoreService.remove(id);
  }
}
