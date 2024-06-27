import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryCostService } from './category-cost.service';
import { CreateCategoryCostDto } from './dto/create-category-cost.dto';
import { UpdateCategoryCostDto } from './dto/update-category-cost.dto';

@Controller('category-cost')
export class CategoryCostController {
  constructor(private readonly categoryCostService: CategoryCostService) {}

  @Post()
  create(@Body() createCategoryCostDto: CreateCategoryCostDto) {
    return this.categoryCostService.create(createCategoryCostDto);
  }

  @Get()
  findAll() {
    return this.categoryCostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryCostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryCostDto: UpdateCategoryCostDto) {
    return this.categoryCostService.update(+id, updateCategoryCostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryCostService.remove(+id);
  }
}
