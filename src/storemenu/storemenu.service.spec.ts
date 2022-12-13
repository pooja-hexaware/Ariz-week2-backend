import { Test, TestingModule } from '@nestjs/testing';
import { StoremenuService } from './storemenu.service';

describe('StoremenuService', () => {
  let service: StoremenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoremenuService],
    }).compile();

    service = module.get<StoremenuService>(StoremenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
