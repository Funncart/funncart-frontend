'use client';

import { Product } from '@/components/Cards';
import { useProducts } from '@/lib/hooks';

export default function Products() {
  const { products } = useProducts();

  return (
    <div className="container mb-24 overflow-hidden">
      <div className="grid grid-cols-2 mt-12 -mx-px border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {products.data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
