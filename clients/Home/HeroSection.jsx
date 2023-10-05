'use client';

import Flag from '@/components/Assets/Flags';
import { Category } from '@/components/Cards';
import { useFeatuedCategories } from '@/lib/hooks';

export default function HeroSection() {
  const { categories } = useFeatuedCategories(5);

  return (
    <div className="container pb-24 pt-28">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-heading sm:text-6xl">
          Crafted in <Flag country={'Pakistan'} /> for the <Flag country={'World'} />
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-2xl leading-10 tracking-wide text-gray-600">
          We showcase and sell authentic art and handicrafts crafted by
          Pakistani artists.
        </p>
      </div>
      <div className="grid gap-8 pt-12 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5">
        {categories?.data.map((category, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? 'xl:pt-0' : 'xl:pt-24'}`}
          >
            <Category key={index} {...category} />
          </div>
        ))}
      </div>
    </div>
  );
}
