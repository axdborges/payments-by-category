import { CategoryType } from '@prisma/client';
import { IsEnum, IsString, IsOptional, IsNumber, IsDefined, IsDate } from 'class-validator';

export class CreateCostDto {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsNumber()
    amount: number;

    @IsOptional()
    @IsString()
    origin: string;

    @IsDefined()
    @IsEnum(CategoryType)
    category: CategoryType;

    @IsDefined()
    @IsString()
    categoryId: string;

    @IsDefined()
    @IsDate()
    date: Date;

    @IsDefined()
    @IsString()
    user: string;
}
