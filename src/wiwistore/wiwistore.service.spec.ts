import { Test, TestingModule } from '@nestjs/testing';
import { WiwistoreService } from './wiwistore.service';

describe('WiwistoreService', () => {
  let service: WiwistoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WiwistoreService],
    }).compile();

    service = module.get<WiwistoreService>(WiwistoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
