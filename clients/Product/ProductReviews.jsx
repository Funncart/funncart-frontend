'use client';
import { useProductComments } from '@/lib/hooks';
import { StarIcon } from '@heroicons/react/20/solid';

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductReviews({ productSlug }) {
  const { productComments } = useProductComments(productSlug);

  return (
    <div className="bg-white font-jakarta">
      <div className="max-w-2xl px-4 py-12 mx-auto sm:px-6 sm:py-12 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-12">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="flex items-center mt-3">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? 'text-yellow-400'
                        : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0',
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex items-center flex-1">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="flex items-center flex-1 ml-1"
                    >
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative flex-1 ml-3">
                        <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                        {count.count > 0 ? (
                          <div
                            className="absolute h-2.5 bg-yellow-400 border border-yellow-400 rounded-full inset-[1px]"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="w-10 ml-3 text-sm text-right text-gray-900 tabular-nums">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* <div className="mt-10">
            <h3 className="text-lg text-gray-900 f ont-medium">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              If you&apos;ve used this product, share your feedback with us on
              Instagram
            </p>

            <p className="inline-flex items-center justify-center w-full px-8 py-2 mt-6 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 sm:w-auto lg:w-full">
              Write a review
            </p>
          </div> */}
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {productComments.data.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <div className="">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.customer.name}
                      </h4>
                      <div className="flex items-center mt-1">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              Math.floor(Math.random() * 5 + 3) > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
