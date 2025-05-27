import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { fetchRecipes } from '@/lib/api';

interface RecipePreview {
  id: string;
  name: string;
  thumbnail: string;
}

interface Props {
  searchParams: {
    ingredient?: string;
    category?: string;
    country?: string;
  };
}

export default async function RecipeListPage({ searchParams }: Props) {
  const filters: Record<string, string> = {};
  if (searchParams.ingredient) filters.ingredient = searchParams.ingredient;
  if (searchParams.category)   filters.category   = searchParams.category;
  if (searchParams.country)    filters.country    = searchParams.country;

  let title = 'All Recipes';
  if (filters.ingredient) title = `Recipes with "${filters.ingredient}"`;
  else if (filters.category) title = `Recipes in category "${filters.category}"`;
  else if (filters.country) title = `Recipes from "${filters.country}"`;

  let recipes: RecipePreview[] = [];
  try {
    recipes = await fetchRecipes(filters);
  } catch (err) {
    console.error('Failed to fetch recipes', err);
  }
  return (
    <div className="container mx-auto">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        {recipes.length === 0 ? (
          <p className="text-muted-foreground">No recipes found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <Card className="hover:shadow-md transition">
                  <img
                    src={recipe.thumbnail}
                    alt={recipe.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-4 text-center font-semibold">
                    {recipe.name}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
