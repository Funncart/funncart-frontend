'use client';

import { useFeaturedSellers } from '@/lib/hooks';
import Link from 'next/link';

export default function PopularSellers() {
  const { sellers, isLoading, error } = useFeaturedSellers();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="container mx-auto mt-8 sm:mt-16">
      <div className="px-4 mt-12 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0 ">
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-heading"
        >
          Popular Sellers
        </h2>
        <a
          href="/sellers"
          className="hidden text-md font-medium text-[#fe5900] hover:text-[#fe5900] sm:block"
        >
          All Sellers <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <ul
        role="list"
        className="grid max-w-2xl grid-cols-2 mx-auto mt-20 text-center gap-x-8 gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
      >
        {sellers.data.map((seller) => (
          <li key={seller.name}>
            <Link href={`sellers/${seller.id}/products`}>
              {seller.media.length != 0 && (
                <img
                  className="w-24 h-24 mx-auto rounded-full"
                  src={seller.media[0].original_url}
                  alt=""
                />
              )}
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-heading">
                {seller.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{seller.role}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
