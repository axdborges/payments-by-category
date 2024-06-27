import { Injectable } from '@nestjs/common';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';

@Injectable()
export class CostService {
  create(createCostDto: CreateCostDto) {
    return 'This action adds a new cost';
  }

  findAll() {
    return `This action returns all cost`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cost`;
  }

  update(id: string, updateCostDto: UpdateCostDto) {
    return `This action updates a #${id} cost`;
  }

  remove(id: string) {
    return `This action removes a #${id} cost`;
  }
}
