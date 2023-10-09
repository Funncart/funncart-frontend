'use client';
import { Category } from '@/components/Cards';
import { useFeatuedCategories } from '@/lib/hooks/data';

export default function PopularCategories() {
  const { categories, isLoading, error } = useFeatuedCategories(5);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (!categories) return null;

  return (
    <div className="container mb-12">
      <div className="px-4 mt-12 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0 ">
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-heading"
        >
          Popular Categories
        </h2>
        <a
          href="/categories"
          className="hidden text-md font-medium text-[#fe5900] hover:text-[#fe5900] sm:block"
        >
          All Categories <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <div className="grid gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {categories.data.map((category, index) => (
          <div key={index} className={`pt-${index % 2 === 0 ? 0 : 0}`}>
            <Category key={index} {...category} />
          </div>
        ))}
      </div>
    </div>
  );
}
