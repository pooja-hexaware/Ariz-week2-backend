import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Storemenu, storemenuDocument } from './entities/storemenu.entity';

@Injectable()
export class StoremenuRepo {
    constructor(
        @InjectModel(Storemenu.name)
        private readonly StoremenuModel: Model<storemenuDocument>,) {}

    async create(data): Promise<Storemenu> {
        return new this.StoremenuModel(data).save();
    }

    async findAll(): Promise<Storemenu[]> {
        return this.StoremenuModel.find({})
            .exec();
    }

    async update(StoremenuId, data): Promise<Storemenu> {
        const filter = { _id: StoremenuId };
        return this.StoremenuModel.findOneAndUpdate(filter, data);
    }

    async delete(StoremenuId): Promise<Storemenu> {
        const filter = { _id: StoremenuId };
        return this.StoremenuModel.findByIdAndDelete(StoremenuId);
    }
}