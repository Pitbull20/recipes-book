import {IsOptional} from "class-validator";
import { ApiPropertyOptional } from '@nestjs/swagger';

export default class GetRecipesFilterDto {
    @ApiPropertyOptional({ description: 'Filter by ingredient' })
    @IsOptional()
    ingredient?: string;

    @ApiPropertyOptional({ description: 'Filter by category' })
    @IsOptional()
    category?: string;

    @ApiPropertyOptional({ description: 'Filter by country' })
    @IsOptional()
    country?: string;
}