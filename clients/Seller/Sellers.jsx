'use client';

import { useSellers } from '@/lib/hooks';
import Link from 'next/link';

export default function Sellers() {
  const { sellers } = useSellers();

  return (
    <div className="container mx-auto mt-8 sm:mt-16">
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
