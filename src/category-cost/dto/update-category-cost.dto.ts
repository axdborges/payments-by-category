import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryCostDto } from './create-category-cost.dto';

export class UpdateCategoryCostDto extends PartialType(CreateCategoryCostDto) {}
