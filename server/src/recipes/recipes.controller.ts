import {Controller, Get, HttpException, Query} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import GetRecipesFilterDto from "./dto/get-recipes.dto";

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAllRecipes(@Query() getRecipesFilterDto: GetRecipesFilterDto){
     const recipes = await this.recipesService.getAllRecipes(getRecipesFilterDto);
     if (!recipes) {
       throw new HttpException('Any recipes not found', 404);
     }

     return recipes;
  }
}
