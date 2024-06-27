import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CategoryCostModule } from './category-cost/category-cost.module';
import { CostModule } from './cost/cost.module';

@Module({
  imports: [PrismaModule, UserModule, CategoryCostModule, CostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
