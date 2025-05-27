import {IsOptional} from "class-validator";

export default class GetRecipesFilterDto {
    @IsOptional()
    ingredient?: string;

    @IsOptional()
    category?: string;

    @IsOptional()
    country?: string;
}