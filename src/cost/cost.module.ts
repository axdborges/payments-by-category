import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostController } from './cost.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CostController],
  providers: [CostService, PrismaService],
})
export class CostModule {}
