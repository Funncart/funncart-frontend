'use client';

import { Product } from '@/components/Cards';
import { useFeaturedProducts } from '@/lib/hooks';

export default function TrendingProducts() {
  const { products, isLoading, error } = useFeaturedProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="container mb-24 overflow-hidden">
      <div className="px-4 mt-12 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0 ">
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Trending Products
        </h2>
        <a
          href="/products"
          className="hidden text-md font-medium text-[#fe5900] hover:text-[#fe5900] sm:block"
        >
          All Products <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <div className="grid grid-cols-2 mt-12 -mx-px border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {products.data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
