import { Controller, Get, HttpException, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import GetRecipesFilterDto from "./dto/get-recipes.dto";
import { NormalizedMeal } from './types/normalized-meal.interface';
import { MealPreview } from './types/meal-preview.interface';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAllRecipes(@Query() getRecipesFilterDto: GetRecipesFilterDto): Promise<(NormalizedMeal | MealPreview)[]> {
     const recipes = await this.recipesService.getAllRecipes(getRecipesFilterDto);
     if (!recipes) {
       throw new HttpException('Any recipes not found', 404);
     }

     return recipes;
  }

  @Get(':id')
  async getRecipeById(@Param('id') id: string) {
      return await this.recipesService.getRecipeById(id);
  }
}
