import { Injectable } from '@nestjs/common';
import { Wiwistore } from './entities/wiwistore.entity';
import { WiwistoreRepo } from './wiwistore.repo';

@Injectable()
export class WiwistoreService {
  constructor(private readonly wiwiRepo: WiwistoreRepo) { }
  async create(wiwistore) {
    return this.wiwiRepo.create(wiwistore);
  }

  async findAll() {
    return this.wiwiRepo.findAll();
  }

  async findOne(id: string) {
    return ;
  }

  async update(id: string, wiwistore: Wiwistore) {
    return this.wiwiRepo.update(id,wiwistore);
  }

  async remove(id: string) {
    return this.wiwiRepo.delete(id);
  }
}
