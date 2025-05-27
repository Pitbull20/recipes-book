export interface MealFromApi {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube?: string;
    strTags?: string;
    [key: `strIngredient${number}`]: string | null;
    [key: `strMeasure${number}`]: string | null;
}
