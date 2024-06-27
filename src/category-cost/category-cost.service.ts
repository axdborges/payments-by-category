import { Injectable } from '@nestjs/common';
import { CreateCategoryCostDto } from './dto/create-category-cost.dto';
import { UpdateCategoryCostDto } from './dto/update-category-cost.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryCostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryCostDto: CreateCategoryCostDto) {
    const newCategory = await this.prisma.categoryCost.create({
      data: createCategoryCostDto,
    });
    return newCategory;
  }

  async findAll() {
    return `This action returns all categoryCost`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} categoryCost`;
  }

  async update(id: number, updateCategoryCostDto: UpdateCategoryCostDto) {
    return `This action updates a #${id} categoryCost`;
  }

  async remove(id: number) {
    return `This action removes a #${id} categoryCost`;
  }
}
