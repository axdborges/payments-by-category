import { Test, TestingModule } from '@nestjs/testing';
import { CategoryCostService } from './category-cost.service';

describe('CategoryCostService', () => {
  let service: CategoryCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryCostService],
    }).compile();

    service = module.get<CategoryCostService>(CategoryCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
