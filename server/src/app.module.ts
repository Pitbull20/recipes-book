import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    RecipesModule,
  ]
})
export class AppModule {}
