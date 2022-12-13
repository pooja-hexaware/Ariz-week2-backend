import { Injectable } from '@nestjs/common';
import { StoremenuRepo } from './storemenu.repo';
import { Storemenu } from './entities/storemenu.entity';
@Injectable()
export class StoremenuService {
  constructor(private readonly storemenuRepo: StoremenuRepo) { }
  async create(storemenu) {
    return this.storemenuRepo.create(storemenu);
  }

  async findAll() {
    return this.storemenuRepo.findAll();
  }

  async findOne(id: string) {
    return ;
  }

  async update(id: string, storemenu: Storemenu) {
    return this.storemenuRepo.update(id,storemenu);
  }

  async remove(id: string) {
    return this.storemenuRepo.delete(id);
  }
}
