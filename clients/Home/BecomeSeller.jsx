'use client';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const benefits = [
  'Reach a wider audience and sell your art and handicrafts like never before',
  'Earn competitive compensation that truly reflects the value of your creative work',
  'Experience true artistic freedom as we handle inventory, marketing, delivery, and more for you',
];

export default function BecomeSeller() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6 px-6 py-16 mx-auto rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 md:gap-x-20 xl:px-20 bg-gray">
        <Image
          className="flex-none object-cover w-full h-96 rounded-2xl lg:aspect-square lg:h-auto lg:max-w-sm"
          src="/assets/images/seller.png"
          alt=""
          width={500}
          height={500}
        />
        <div className="flex-auto w-full ">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Sell your Art & Handicrafts{' '}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Unlock new opportunities to showcase and sell your unique creations
            through our platform.
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 mt-10 text-base leading-7 tracking-wide text-gray-600 gap-x-8 gap-y-2 sm:grid-cols-1"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-x-3 text-body">
                <CheckCircleIcon
                  className="flex-none w-5 h-7"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="px-8 py-3 mt-6 text-lg font-medium text-white transition-all duration-500 ease-in-out rounded-md shadow-xl"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%)',
              backgroundSize: '200% auto',
              color: 'white',
              borderRadius: '10px',
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = 'right center')
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = 'left center')
            }
          >
            Join us a Seller
          </button>
        </div>
      </div>
    </div>
  );
}
