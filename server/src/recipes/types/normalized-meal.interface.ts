export interface NormalizedIngredient {
    ingredient: string;
    measure: string;
}

export interface NormalizedMeal {
    id: string;
    name: string;
    category: string;
    area: string;
    instructions: string;
    thumbnail: string;
    youtube?: string;
    tags: string[];
    ingredients: NormalizedIngredient[];
}
