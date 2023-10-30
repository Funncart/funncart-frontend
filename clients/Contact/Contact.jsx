'use client';
import { useForm } from 'react-hook-form';
import { addContactMessage } from '@/lib/requests/contact';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { ADDRESS, EMAIL_ID, PHONE_NO } from '@/constants/contact';

export default function Contact() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    await addContactMessage(data);
  }

  return (
    <div className="mt-16 md:mt-24 font-jakarta">
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        <div className="relative px-6 pt-12 pb-20 sm:pt-12 lg:static lg:px-8 lg:py-24 ">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Do you have a question or complain? contact us now
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <CheckCircleIcon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>
                <dd>{ADDRESS}</dd>
              </div> */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <CheckCircleIcon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href={`tel:${PHONE_NO}`}>
                    {PHONE_NO}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <CheckCircleIcon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href={`mailto:${EMAIL_ID}`}
                  >
                    {EMAIL_ID}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-24 "
        >
          <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Full name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    {...register('name', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    {...register('email', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    {...register('message', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="px-8 py-3 mt-12 text-lg font-medium text-white transition-all duration-500 ease-in-out rounded-md shadow-xl"
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
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
