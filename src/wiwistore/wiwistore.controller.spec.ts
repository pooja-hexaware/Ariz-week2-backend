import { Test, TestingModule } from '@nestjs/testing';
import { WiwistoreController } from './wiwistore.controller';
import { WiwistoreService } from './wiwistore.service';

describe('WiwistoreController', () => {
  let controller: WiwistoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WiwistoreController],
      providers: [WiwistoreService],
    }).compile();

    controller = module.get<WiwistoreController>(WiwistoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
