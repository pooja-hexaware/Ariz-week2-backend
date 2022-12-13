import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoremenuModule } from './storemenu/storeMenu.module';
import { WiwistoreModule } from './wiwistore/Wiwistore.module';
import { ToppingModule } from './topping/topping.module';
import { CouponModule } from './coupon/coupon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({

    isGlobal: true,

  }), MongooseModule.forRoot(process.env.MONGODB_URL, {

    autoCreate: true,

  }),
  StoremenuModule, WiwistoreModule, ToppingModule, CouponModule, WiwistoreModule, StoremenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
