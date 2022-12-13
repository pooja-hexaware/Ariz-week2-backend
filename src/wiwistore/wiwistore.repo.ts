import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wiwistore, wiwistoreDocument } from 'src/wiwistore/entities/wiwistore.entity';

@Injectable()
export class WiwistoreRepo {
    constructor(
        @InjectModel(Wiwistore.name)
        private readonly wiwistoreModel: Model<wiwistoreDocument>,) {}

    async create(data): Promise<Wiwistore> {
        return new this.wiwistoreModel(data).save();
    }

    async findAll(): Promise<Wiwistore[]> {
        return this.wiwistoreModel.find({})
            .exec();
    }

    async update(wiwistoreId, data): Promise<Wiwistore> {
        const filter = { _id: wiwistoreId };
        return this.wiwistoreModel.findOneAndUpdate(filter, data);
    }

    async delete(wiwistoreId): Promise<Wiwistore> {
        const filter = { _id: wiwistoreId };
        return this.wiwistoreModel.findByIdAndDelete(wiwistoreId);
    }
}