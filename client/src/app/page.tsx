'use client';
export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Book 📖</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
        Discover, explore, and fall in love with recipes from all over the world.
      </p>
      <Button asChild>
        <Link href="/recipes">Browse Recipes</Link>
      </Button>
    </main>
  );
}
