import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Toaster Showcase</h1>
      <p className="mb-8">Explore different types of toasters using shadcn/ui</p>
      <Link
        href="/toasters"
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
      >
        View Toaster Examples
      </Link>
    </div>
  );
}