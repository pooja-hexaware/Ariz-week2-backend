import { Test, TestingModule } from '@nestjs/testing';
import { StoremenuController } from './storemenu.controller';
import { StoremenuService } from './storemenu.service';

describe('StoremenuController', () => {
  let controller: StoremenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoremenuController],
      providers: [StoremenuService],
    }).compile();

    controller = module.get<StoremenuController>(StoremenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
