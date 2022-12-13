import { Module } from '@nestjs/common';
import { WiwistoreService } from './wiwistore.service';
import { WiwistoreController } from './wiwistore.controller';
import { WiwistoreRepo } from './wiwistore.repo';
import { MongooseModule } from '@nestjs/mongoose';
import { Wiwistore, wiwistoresSchema } from './entities/wiwistore.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wiwistore.name, schema: wiwistoresSchema }])
],
  controllers: [WiwistoreController],
  providers: [WiwistoreService, WiwistoreRepo]
})
export class WiwistoreModule {}
