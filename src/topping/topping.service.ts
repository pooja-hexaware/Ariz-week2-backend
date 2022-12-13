import { Injectable } from '@nestjs/common';
import { Topping } from './entities/topping.entity';
import { ToppingRepo } from './topping.repo';


@Injectable()
export class ToppingService {
  constructor(private readonly toppingRepo: ToppingRepo) { }
  async create(topping) {
    return this.toppingRepo.create(topping);
  }

  async findAll() {
    return this.toppingRepo.findAll();
  }

  async findOne(id: string) {
    return ;
  }

  async update(id: string, topping: Topping) {
    return this.toppingRepo.update(id,topping);
  }

  async remove(id: string) {
    return this.toppingRepo.delete(id);
  }
}
