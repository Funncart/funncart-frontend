'use client';
import Link from 'next/link';

export default function Error() {
  return (
    <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link href="/">
            <button
              className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white transition-all duration-500 ease-in-out border border-transparent rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
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
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
