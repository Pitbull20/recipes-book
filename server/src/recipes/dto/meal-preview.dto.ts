import { ApiProperty } from '@nestjs/swagger';

export class MealPreview {
  @ApiProperty({
    example: '52772',
    description: 'Unique identifier of the meal',
  })
  id: string;

  @ApiProperty({
    example: 'Teriyaki Chicken Casserole',
    description: 'Name of the meal',
  })
  name: string;

  @ApiProperty({
    example: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    description: 'Thumbnail image of the meal',
  })
  thumbnail: string;
}
