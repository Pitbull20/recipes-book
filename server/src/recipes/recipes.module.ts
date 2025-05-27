import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import {RecipesApi} from "./recipes.api";
import {ConfigModule} from "@nestjs/config";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [RecipesController],
  providers: [RecipesService, RecipesApi],
})
export class RecipesModule {}
