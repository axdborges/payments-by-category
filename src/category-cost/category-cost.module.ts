import { Module } from '@nestjs/common';
import { CategoryCostService } from './category-cost.service';
import { CategoryCostController } from './category-cost.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CategoryCostController],
  providers: [CategoryCostService, PrismaService],
})
export class CategoryCostModule {}
