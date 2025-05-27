import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { RecipesApi } from './recipes.api';
import GetRecipesFilterDto from './dto/get-recipes.dto';
import { NormalizedMeal } from './types/normalized-meal.interface';
import {mapMealToNormalized, mapMealToPreview} from "./utils/transform";
import { MealPreview } from './types/meal-preview.interface';

@Injectable()
export class RecipesService {
    constructor(private readonly recipesApi: RecipesApi) {}

    private readonly filterMap = {
        ingredient: (val: string) => `/filter.php?i=${val}`,
        category: (val: string) => `/filter.php?c=${val}`,
        country: (val: string) => `/filter.php?a=${val}`,
    };

    async getAllRecipes(filters: GetRecipesFilterDto): Promise<(NormalizedMeal | MealPreview)[]> {
        const activeFilters = Object.entries(filters).filter(([_, val]) => val);

        if (activeFilters.length > 1) {
            throw new BadRequestException('Only one filter can be used at a time');
        }

        let endpoint = '/search.php?s=';
        let isPreview = false;

        if (activeFilters.length === 1) {
            const [key, value] = activeFilters[0];
            const buildUrl = this.filterMap[key as keyof typeof this.filterMap];

            if (!buildUrl) {
                throw new BadRequestException(`Unsupported filter: ${key}`);
            }

            endpoint = buildUrl(value);
            isPreview = true;
        }

        const raw = await this.recipesApi.get(endpoint);

        if (!raw.meals || raw.meals.length === 0) {
            throw new NotFoundException('No recipes found');
        }

        return raw.meals.map(isPreview ? mapMealToPreview : mapMealToNormalized);
    }
}
