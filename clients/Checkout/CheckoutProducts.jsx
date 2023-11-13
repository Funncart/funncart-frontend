'use client';

import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/20/solid';
import { useCart } from 'react-use-cart';
import { useOrderShipmentPrice } from '@/lib/hooks/data';

export default function CheckoutProducts(props) {
  const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
  const { shipmentPrice } = useOrderShipmentPrice();

  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="sr-only">Items in your cart</h3>
        <ul role="list" className="divide-y divide-gray-200">
          {items.map((product) => (
            <li key={product.id} className="flex px-4 py-6 sm:px-6">
              <div className="flex-shrink-0">
                <img
                  src={product.media[0].original_url}
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

                  <div className="flex-shrink-0 flow-root ml-4">
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Remove</span>
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="flex items-end justify-between flex-1 pt-2">
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.price}
                  </p>

                  <div className="ml-4">
                    <label htmlFor="quantity" className="sr-only">
                      Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      value={product.quantity}
                      onChange={(e) => {
                        if (+e.target.value > product.total) {
                          alert('value exceeded');
                        } else updateItemQuantity(product.id, +e.target.value);
                      }}
                      className="w-20 text-base font-medium text-left text-gray-700 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <dl className="px-4 py-6 space-y-6 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">
              Rs. {cartTotal.toFixed(2)}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Shipping</dt>
            <dd className="text-sm font-medium text-gray-900">
              Rs. {cartTotal ? shipmentPrice : 0}
            </dd>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <dt className="text-base font-medium">Total</dt>
            <dd className="text-base font-medium text-gray-900">
              Rs. {(cartTotal + (cartTotal ? shipmentPrice : 0)).toFixed(2)}
            </dd>
          </div>
        </dl>
        <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
          <button
            type="submit"
            className="w-full px-4 py-3 text-base font-medium text-white transition-all duration-500 ease-in-out border border-transparent rounded-md shadow-sm hover:shadow-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            style={{
              backgroundImage: items.length
                ? 'linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%)'
                : '',
              backgroundSize: '200% auto',
              color: 'white',
              borderRadius: '10px',
              backgroundColor: items.length ? '' : 'gray',
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = 'right center')
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = 'left center')
            }
            disabled={items.length === 0}
          >
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
}
