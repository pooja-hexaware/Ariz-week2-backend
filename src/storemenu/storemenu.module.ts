import { Module } from '@nestjs/common';
import { StoremenuService } from './storemenu.service';
import { StoremenuController } from './storemenu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoremenuRepo } from './storemenu.repo';
import { Storemenu, storemenuSchema } from './entities/storemenu.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Storemenu.name, schema: storemenuSchema }])
],
  controllers: [StoremenuController],
  providers: [StoremenuService, StoremenuRepo]
})
export class StoremenuModule {}
