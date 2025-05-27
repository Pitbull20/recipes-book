import { ApiProperty } from '@nestjs/swagger';
import { NormalizedIngredient } from './normalized-ingredient.dto';

export class NormalizedMeal {
    @ApiProperty({ example: '52771' })
    id: string;

    @ApiProperty({ example: 'Spicy Arrabiata Penne' })
    name: string;

    @ApiProperty({ example: 'Vegetarian' })
    category: string;

    @ApiProperty({ example: 'Italian' })
    area: string;

    @ApiProperty({ example: 'Boil water, cook pasta, make sauce...' })
    instructions: string;

    @ApiProperty({ example: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' })
    thumbnail: string;

    @ApiProperty({ example: 'https://www.youtube.com/watch?v=1IszT_guI08', required: false })
    youtube?: string;

    @ApiProperty({ type: [String], example: ['Pasta', 'Curry'] })
    tags: string[];

    @ApiProperty({ type: [NormalizedIngredient] })
    ingredients: NormalizedIngredient[];
}
