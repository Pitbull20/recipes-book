import { ApiProperty } from '@nestjs/swagger';

export class NormalizedIngredient {
  @ApiProperty({ example: 'Salt' })
  ingredient: string;

  @ApiProperty({ example: '1 tsp' })
  measure: string;
}
