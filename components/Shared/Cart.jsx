"use client";
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useCart } from 'react-use-cart';

export default function Cart(props) {
  const { items, removeItem, updateItemQuantity, cartTotal } = useCart();

  const [open, setOpen] = useState(props.cartClick);
  useEffect(() => {
    setOpen(props.cartClick);
  }, [props.cartClick, open]);
  const closeModal = () => {
    props.handleCartClickClose();
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={closeModal}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {items.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                  <img
                                    src={product.media[0].original_url}
                                    alt={product.slug}
                                    className="object-cover object-center w-full h-full"
                                  />
                                </div>

                                <div className="flex flex-col flex-1 ml-4">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link
                                          href={`/products/${product.slug}`}
                                        >
                                          {product.name}
                                        </Link>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex items-end justify-between flex-1 text-sm">
                                    <div className="flex items-center justify-between text-sm gap-x-3">
                                      <p className="text-gray-500">Qty</p>
                                      <input
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        className="w-16 h-8 pl-2 text-sm text-center border border-gray-300 rounded-md"
                                        defaultValue={product.quantity}
                                        onChange={(e) =>
                                          updateItemQuantity(
                                            product.id,
                                            e.target.value,
                                          )
                                        }
                                        min={1}
                                      />
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium  text-[#f96e23]"
                                        onClick={() => removeItem(product.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {
                        items.length === 0 &&
                        <div className='flex flex-col items-center justify-center h-4/5'>
                          <img 
                            src='/assets/images/shopping-cart.png'
                            alt='shopping cart'
                            className='block w-12 h-12'
                          />
                          <p className='mt-4 text-lg font-bold'>
                            No items added to your cart
                          </p>
                          <button
                            onClick={closeModal}
                            type="button"
                            className="px-6 py-3 mt-4 font-medium text-white bg-black rounded-lg"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      }
                    </div>


                   { 
                    items.length > 0 &&
                    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{cartTotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Delivery fee will be added on checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            href="/checkout"
                            className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-500 ease-in-out border border-transparent rounded-md shadow-xl hover:shadow-none"
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
                            onClick={closeModal}
                          >
                            Checkout
                          </Link>
                        </div>

                        <Link href={'/shop-now'}>
                          <div className="flex justify-center mt-6 text-center text-gray-500 gap-x-4 text-md">
                            <p>
                              or
                              <button
                                type="button"
                                className="ml-2 font-medium text-[#FD5900] hover:text-[#ff8f53]"
                                onClick={closeModal}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </Link>
                      </div>
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
