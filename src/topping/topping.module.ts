import { Module } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { ToppingController } from './topping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Topping, toppingSchema } from './entities/topping.entity';
import { ToppingRepo } from './topping.repo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Topping.name, schema: toppingSchema }])
],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingRepo]
})
export class ToppingModule {}
