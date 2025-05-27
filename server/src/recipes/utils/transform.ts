import { MealPreview } from '../dto/meal-preview.dto';
import { MealFromApi } from '../types/meal-from-api.interface';
import { NormalizedMeal } from '../dto/normalized-meal.dto';
export function mapMealToPreview(meal: any): MealPreview {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    thumbnail: meal.strMealThumb,
  };
}



export function mapMealToNormalized(meal: MealFromApi): NormalizedMeal {
  const ingredients: NormalizedMeal['ingredients'] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof MealFromApi];
    const measure = meal[`strMeasure${i}` as keyof MealFromApi];

    if (typeof ingredient === 'string' && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: typeof measure === 'string' ? measure.trim() : '',
      });
    }
  }

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    instructions: meal.strInstructions,
    thumbnail: meal.strMealThumb,
    youtube: meal.strYoutube || undefined,
    tags: typeof meal.strTags === 'string'
      ? meal.strTags.split(',').map(tag => tag.trim())
      : [],
    ingredients,
  };
}
