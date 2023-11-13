'use client';
import { useLocalStorage, useOrderShipmentPrice } from '@/lib/hooks';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from 'react-use-cart';

export default function OrderSuccess() {
  const { emptyCart } = useCart();
  const { shipmentPrice } = useOrderShipmentPrice();
  const [cart] = useLocalStorage('cart', []);
  const [cartTotal] = useLocalStorage('cart_total', []);
  const [cartAddress] = useLocalStorage('cart_address', []);

  useEffect(() => {
    setTimeout(() => {
      emptyCart();
    }, 0);
  }, [emptyCart]);

  return (
    <div className='container'>
      <main className="relative mt-16 lg:min-h-full md:mt-24">
        <div className="overflow-hidden h-80 lg:absolute  rounded-xl lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
          <img
            src="/assets/images/success.jpg"
            alt="TODO"
            className="object-cover object-center rounded-2xl w-full h-full border-2 border-red-50"
          />
        </div>

        <div>
          <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
            <div className="lg:col-start-2">
              <h1 className="text-sm font-medium text-[#fe5900]">
                Payment successful
              </h1>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Thanks for ordering
              </p>
              <p className="mt-2 text-base text-gray-500">
                We appreciate your order, we’re currently processing it. So hang
                tight and we’ll send you confirmation very soon!
              </p>

              {/* <dl className="mt-16 text-sm font-medium">
                <dt className="text-gray-900">Tracking number</dt>
                <dd className="mt-2 text-indigo-600">51547878755545848512</dd>
              </dl> */}

              <ul
                role="list"
                className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
              >
                {cart.map((product) => (
                  <li key={product.id} className="flex px-4 py-6 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 rounded-md"
                      />
                    </div>

                    <div className="flex flex-col flex-1 ml-6">
                      <div className="flex">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm">
                            <Link
                              href={`/products/${product.slug}`}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.name}
                            </Link>
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-end justify-between flex-1 pt-2">
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {product.price}
                        </p>

                        <div className="ml-4">
                          <label htmlFor="quantity" className="mr-1">
                            Quantity:
                          </label>
                          <span className="inline-flex rounded-md shadow-sm">
                            {product.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="pt-6 space-y-6 text-sm font-medium text-gray-500 border-t border-gray-200">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-gray-900">Rs. {cartTotal.toFixed(2)}</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Delivery fee</dt>
                  <dd className="text-gray-900">
                    Rs. {cartTotal ? shipmentPrice : 0}
                  </dd>
                </div>

                {/* <div className="flex justify-between">
                  <dt>Taxes</dt>
                  <dd className="text-gray-900">$6.40</dd>
                </div> */}

                <div className="flex items-center justify-between pt-6 text-gray-900 border-t border-gray-200">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">
                    Rs.{' '}
                    {(cartTotal + (cartTotal ? shipmentPrice : 0)).toFixed(2)}
                  </dd>
                </div>
              </dl>

              <dl className="grid grid-cols-2 mt-16 text-sm text-gray-600 gap-x-4">
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping Address
                  </dt>
                  <dd className="mt-2">
                    <address className="not-italic">
                      <span className="block">{cartAddress}</span>
                    </address>
                  </dd>
                </div>
              </dl>

              <div className="py-6 mt-16 text-right border-t border-gray-200">
                <a
                  href="#"
                  className="text-sm font-medium text-[#fe5900] hover:text-[#ff8f53]"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
