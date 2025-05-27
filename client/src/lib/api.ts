// src/lib/api.ts
export const fetchRecipes = async (filters?: Record<string, string>) => {
  const query = filters ? '?' + new URLSearchParams(filters).toString() : '';
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://server:3000'}/recipes${query}`);
  if (!res.ok) throw new Error('Failed to fetch recipes');
  return res.json();
};

export const fetchRecipeById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://server:3000'}/recipes/${id}`);
  if (!res.ok) throw new Error('Failed to fetch recipe');
  return res.json();
};
