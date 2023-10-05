'use client';

import { useState } from 'react';

const paymentMethods = [
  { id: 'cash-on-delivery', title: 'Cash On Delivery' },
  { id: 'online', title: 'Online' },
];

export default function CheckoutForm({ register, errors }) {
  const [SelectedDeliveryMethod, setSelectedDeliveryMethod] = useState();

  return (
    <div>
      <div>
        <h2 className="text-lg font-medium text-gray-900">
          Contact information
        </h2>

        <div className="mt-4">
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email-address"
              name="email-address"
              autoComplete="email"
              {...register('email', { required: 'Email address is required' })}
              className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p className="pt-1 text-sm text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-10 mt-10 border-t border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">
          Shipping information
        </h2>

        <div className="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="full-name"
                name="full-name"
                autoComplete="name"
                {...register('name', { required: 'Name is required' })}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.name && (
                <p className="pt-1 text-sm text-red-500">
                  {errors.name?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                {...register('phone', { required: 'Phone is required' })}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.phone && (
                <p className="pt-1 text-sm text-red-500">
                  {errors.phone?.message}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700"
            >
              Street
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="street"
                id="street"
                autoComplete="street-address"
                {...register('street', { required: 'Street is required' })}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.street && (
                <p className="pt-1 text-sm text-red-500">
                  {errors.street?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                {...register('city', { required: 'City is required' })}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.city && (
                <p className="pt-1 text-sm text-red-500">
                  {errors.city?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="state"
                id="state"
                autoComplete="address-level1"
                {...register('state', { required: 'State is required' })}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.state && (
                <p className="pt-1 text-sm text-red-500">
                  {errors.state?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="country"
                id="country"
                autoComplete="country"
                {...register('country', { required: 'Country is required' })}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.country && (
                <p className="pt-1 text-sm text-red-500">
                  {errors.country?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              Zip
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="zip"
                id="zip"
                autoComplete="postal-code"
                {...register('zip', { required: 'Zip is required' })}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.zip && (
                <p className="pt-1 text-sm text-red-500">
                  {errors.zip?.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="pt-10 mt-10 border-t border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Payment</h2>

        <fieldset className="mt-4">
          <legend className="sr-only">Payment type</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
            {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
              <div
                key={paymentMethod.id}
                className="flex items-center"
                onClick={() => setSelectedDeliveryMethod(paymentMethod.id)}
              >
                {paymentMethodIdx === 0 ? (
                  <input
                    id={paymentMethod.id}
                    name="payment-type"
                    type="radio"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                ) : (
                  <input
                    id={paymentMethod.id}
                    name="payment-type"
                    type="radio"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                )}

                <label
                  htmlFor={paymentMethod.id}
                  className="block ml-3 text-sm font-medium text-gray-700"
                >
                  {paymentMethod.title}
                </label>
              </div>
            ))}
          </div>
          {SelectedDeliveryMethod == 'online' && (
            <p className="py-6">OUR PAYMENT DETAILS TO BE SHOWN</p>
          )}
        </fieldset>
      </div>
    </div>
  );
}
