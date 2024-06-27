import { Test, TestingModule } from '@nestjs/testing';
import { CategoryCostController } from './category-cost.controller';
import { CategoryCostService } from './category-cost.service';

describe('CategoryCostController', () => {
  let controller: CategoryCostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryCostController],
      providers: [CategoryCostService],
    }).compile();

    controller = module.get<CategoryCostController>(CategoryCostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
