import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToppingService } from './topping.service';
import { Topping } from './entities/topping.entity';

@Controller('topping')
export class ToppingController {
  constructor(private readonly toppingService: ToppingService) {}

  @Post()
  async create(@Body() Topping: Topping) {
    const res = this.toppingService.create(Topping);
    if (!res) return null;
    return res;
  }

  @Get()
  async findAll() {
    const res = this.toppingService.findAll();
    if (!res) return null;
    return res;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = this.toppingService.findOne(id);
    if (!res) return null;
    return res;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTopping: Topping,
  ) {
    const res = this.toppingService.update(id, updateTopping);
    if (!res) return null;
    return null;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.toppingService.remove(id);
  }
}
