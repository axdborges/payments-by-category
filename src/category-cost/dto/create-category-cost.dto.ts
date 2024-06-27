import { CategoryType } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateCategoryCostDto {
    @IsEnum(CategoryType)
    name: CategoryType;
}
