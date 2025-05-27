import {
  Controller,
  Get,
  HttpException,
  Param,
  Query,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import GetRecipesFilterDto from './dto/get-recipes.dto';
import { NormalizedMeal } from './dto/normalized-meal.dto';
import { MealPreview } from './dto/meal-preview.dto';
import {
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiExtraModels,
  getSchemaPath,
} from '@nestjs/swagger';

@ApiTags('Recipes')
@ApiExtraModels(NormalizedMeal, MealPreview)
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of recipes with optional filters' })
  @ApiQuery({
    name: 'ingredient',
    required: false,
    description: 'Filter by ingredient (e.g. "chicken"). ⚠️ You can use only one filter at a time: ingredient, category or country.',
  })
  @ApiQuery({
    name: 'category',
    required: false,
    description: 'Filter by category (e.g. "Beef", "Vegetarian"). ⚠️ Only one filter is allowed per request.',
  })
  @ApiQuery({
    name: 'country',
    required: false,
    description: 'Filter by area/country (e.g. "Italian", "American"). ⚠️ Only one filter is allowed per request.',
  })
  @ApiOkResponse({
    description: 'List of recipes successfully retrieved',
    schema: {
      type: 'array',
      items: {
        oneOf: [
          { $ref: getSchemaPath(NormalizedMeal) },
          { $ref: getSchemaPath(MealPreview) },
        ],
      },
    },
  })
  @ApiNotFoundResponse({ description: 'No recipes found' })
  async getAllRecipes(
    @Query() getRecipesFilterDto: GetRecipesFilterDto,
  ): Promise<(NormalizedMeal | MealPreview)[]> {
    const recipes = await this.recipesService.getAllRecipes(getRecipesFilterDto);
    if (!recipes) {
      throw new HttpException('No recipes found', 404);
    }

    return recipes;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve detailed recipe by ID' })
  @ApiResponse({
    status: 200,
    description: 'Detailed recipe found',
    schema: {
      $ref: getSchemaPath(NormalizedMeal),
    },
  })
  @ApiNotFoundResponse({ description: 'Recipe not found' })
  async getRecipeById(@Param('id') id: string): Promise<NormalizedMeal> {
    return await this.recipesService.getRecipeById(id);
  }
}
