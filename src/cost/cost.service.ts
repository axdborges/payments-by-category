import { Injectable } from '@nestjs/common';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CostService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(createCostDto: CreateCostDto) {
    const newCost = await this.prisma.cost.create({
      data: createCostDto,
    });
    return newCost;
  }

  async findAll() {
    return await this.prisma.cost.findMany();
  }

  async findOne(id: string) {
    return `This action returns a #${id} cost`;
  }

  async update(id: string, updateCostDto: UpdateCostDto) {
    return updateCostDto;
  }

  async remove(id: string) {
    return `This action removes a #${id} cost`;
  }
}
