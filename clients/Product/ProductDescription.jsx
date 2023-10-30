'use client';
import { useProduct } from '@/lib/hooks';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCart } from 'react-use-cart';
import { Disclosure, Tab } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDescription({ productSlug }) {
  const { addItem } = useCart();
  const { product } = useProduct(productSlug);
  const [variant, setVariant] = useState(product?.product_variants[0]);
  const [colorVariants] = useState(
    product.product_variants.filter((variant) => variant.title === 'color'),
  );

  return (
    <div className="bg-white mt-14 md:mt-20 font-jakarta">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {variant.media.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.original_url}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-orange-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-h-1 aspect-w-1">
              {variant.media.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.original_url}
                    alt={image.alt}
                    className="object-cover object-center w-full h-full aspect-square sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                {variant.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
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
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            {colorVariants.length > 0 && (
              <div className="flex mt-6 gap-x-3">
                {colorVariants.map((variant) => (
                  <button
                    key={variant.id}
                    className="w-8 h-8 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    style={{
                      backgroundColor: variant.type,
                    }}
                    onClick={() => {
                      setVariant(variant);
                    }}
                  ></button>
                ))}
              </div>
            )}

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            {!!product.is_customizable && (
              <div className="mt-6">
                <h3 className="sr-only">Customization</h3>
                <div className="flex items-center">
                  <a
                    href={product.customization_link}
                    target="_blank"
                    className="text-base font-medium text-gray-900 underline"
                  >
                    Customize this product
                  </a>
                </div>
              </div>
            )}

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                {/* {product.details.map((detail) => ( */}
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                          <span
                            className={classNames(
                              open ? 'text-gray-500' : 'text-gray-900',
                              'text-sm font-medium',
                            )}
                          >
                            {/* {detail.name} */}
                            Features
                          </span>
                          <span className="flex items-center ml-6">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-[#fe5900] group-hover:text-[#fe5900]"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block w-6 h-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="pb-6 prose-sm prose"
                      >
                        <div
                          className="space-y-6 text-base text-gray-700"
                          dangerouslySetInnerHTML={{ __html: product.feature }}
                        />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/* ))} */}
              </div>
            </section>

            <div className="mt-6">
              <div className="flex mt-10">
                <button
                  className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white transition-all duration-500 ease-in-out border border-transparent rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  style={{
                    backgroundImage: product.product_variants_sum_qty
                      ? 'linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%)'
                      : '',
                    backgroundSize: '200% auto',
                    color: 'white',
                    borderRadius: '10px',
                    backgroundColor: product.product_variants_sum_qty
                      ? ''
                      : 'gray',
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundPosition = 'right center')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundPosition = 'left center')
                  }
                  onClick={() => {
                    addItem({
                      ...variant,
                      product_id: product.id,
                      slug: product.slug,
                      name: product.name,
                      total: variant.qty,
                    });
                  }}
                  disabled={!product.product_variants_sum_qty}
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
