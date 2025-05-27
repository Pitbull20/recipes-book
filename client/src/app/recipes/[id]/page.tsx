import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { fetchRecipeById, fetchRecipes } from '@/lib/api';
import { NormalizedMeal } from '@/types/normalized-meal';

interface Props {
  params: { id: string };
}

export default async function RecipePage({ params }: Props) {
  const recipe: NormalizedMeal | null = await fetchRecipeById(params.id);
  if (!recipe) {
    return <p className="p-4">Recipe not found</p>;
  }
  const sameCategory: NormalizedMeal[] = await fetchRecipes({ category: recipe.category });

  return (
    <div className="container mx-auto">
      <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <img
            src={recipe.thumbnail}
            alt={recipe.name}
            className="w-full h-90 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-center mb-2">{recipe.name}</h1>
          <p className="text-center text-blue-600 underline cursor-pointer mb-4">
            <Link href={`/recipes?country=${recipe.area}`}>{recipe.area}</Link>
          </p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="whitespace-pre-line">{recipe.instructions}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>
                  <Link
                    href={`/recipes?ingredient=${ing.ingredient}`}
                    className="text-blue-600 hover:underline"
                  >
                    {ing.ingredient} - {ing.measure}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="lg:col-span-1 text-right pr-10">
          <h3 className="text-lg font-semibold mb-2">More in {recipe.category}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/recipes" className="block hover:underline text-blue-bold">
                Back to All Recipes
              </Link>
            </li>
            {sameCategory
              .filter((r) => r.id !== recipe.id)
              .map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/recipes/${item.id}`}
                    className="block hover:underline text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
