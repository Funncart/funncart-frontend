'use client';
import { Category } from '@/components/Cards';
import { useCategories } from '@/lib/hooks/data';

export default function Categories() {
  const { categories } = useCategories();

  return (
    <div className="container mb-12">
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
