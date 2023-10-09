'use client';

import { useSeller } from '@/lib/hooks';

export default function SellerProfile({ sellerId }) {
  const { seller } = useSeller(sellerId);

  return (
    <div className="container relative">
      {/* Cover Photo */}
      <div className="w-full h-58">
        <div
          style={{
            backgroundImage: `url(${
              seller.media[1].original_url ?? '/assets/images/cover.png'
            })`,
          }}
          alt="cover"
          className="h-64 bg-center bg-cover rounded-3xl"
        />
      </div>
      {/* Profile Photo, Name, and Description */}
      <div className="flex justify-center">
        <img
          src={seller.media[0].original_url} // Replace with your actual profile photo URL
          alt="Profile"
          height={250}
          width={250}
          className="absolute w-64 h-64 -translate-y-1/2 border-4 border-white rounded-full shadow-2xl shrink-0"
        />
      </div>
      <div className="max-w-4xl p-4 mx-auto mt-36">
        <div className="mt-4 text-center">
          <h1 className="text-4xl font-semibold text-heading">{seller.name}</h1>
          {/* <p className="mt-3 text-2xl text-body">
            One liner description of the seller products
          </p> */}
        </div>
      </div>
    </div>
  );
}
