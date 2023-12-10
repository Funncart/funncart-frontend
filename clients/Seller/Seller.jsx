'use client';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import {
  DiamondIcon,
  MoonIcon,
  PeopleGroupIcon,
} from '@/components/Assets/Icons';
import { Feature } from '@/components/Cards';
import { Heading } from '@/components/UI';
import Flag from '@/components/Assets/Flags';
import { addBecomeSeller } from '@/lib/requests/seller';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const people = [
  {
    name: 'FF Scrapbooking',
    role: 'Scrapbooks and Gift items',
    imageUrl: '/assets/images/FF_logo.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    link: 'https://www.funncart.com/sellers/7/products', // Add link for each person
  },
  {
    name: 'Piedra',
    role: 'Customised jewellery',
    imageUrl: '/assets/images/Piedra_logo.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    link: 'https://www.funncart.com/sellers/8/products', // Add link for each person
  },
  {
    name: 'Shahriyar Amin',
    role: 'Traditional wood work',
    imageUrl: '/assets/images/Sharry_logo.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    link: 'https://www.funncart.com/sellers/10/products', // Add link for each person
  },
  // More people...
];
const benefits1 = [
  'Nationwide delivery coverage',
  'Secure and reliable shipping',
  'Hassle-free order fulfillment',
];

const benefits2 = [
  'A free webpage to showcase and sell your products',
  'Reach wider audience from the interent',
  'Mobile friendly website design',
];

const benefits3 = [
  'Access to creative community and networking opportunities',
  'Pricing and sales strategies',
  'Marketing and branding guidance',
];

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Do I need to pay upfront to join our platform? ',
    answer:
      "No, you don't need to pay any upfront fees to join and sell on our platform. You only pay a small commission fee from each order you successfully fulfill. This fee helps us maintain and improve our platform so we can continue to provide you with valuable services.",
  },
  {
    question:
      'Is there a minimum number of items I need to list to join the platform?',
    answer:
      'No, there is no minimum number of items required to join the platform. You can start with just a few pieces and gradually add more as your business grows.',
  },
  {
    question: ' When do I get paid for my sales?',
    answer:
      'Once a customer purchases your artwork and the order is successfully delivered, the funds are deposited directly into your bank account within 5 business days. This ensures you receive payment promptly and easily.',
  },
  // More questions...
];
const FEAT = [
  {
    title: 'Promoting Pakistan',
    description:
      'We passionately promote Pakistani culture and art, sharing its beauty with the world.',
    icon: <MoonIcon />,
  },
  {
    title: 'Exquisite Quality',
    description:
      'We offer handicrafts of exceptional quality, meticulously crafted with the finest materials.',
    icon: <DiamondIcon />,
  },
  {
    title: 'Empowering Artisans',
    description:
      'We empower artisans through fair compensation and promotion of their incredible craftsmanship.',
    icon: <PeopleGroupIcon />,
  },
];

export default function Seller() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    await addBecomeSeller(data);
  }

  return (
    <div className="mt-8 md:mt-8 font-jakarta">
      {/* hero  section*/}
      <div className="container  pt-8 pb-10 rounded-3xl">
        <div className="flex flex-col items-center pb-8 text-center gap-y-4">
          <Image
            src="/assets/images/aboutus.png"
            height={320}
            width={500}
            alt="about"
          />
        </div>
        <div className="text-center">
          <h1 className="flex flex-wrap items-center justify-center text-5xl font-semibold leading-normal">
            Build your online Art Business 🎨
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-2xl leading-10 tracking-wide text-gray-500">
            We enable Pakistani artists & small business to sell their art and
            handicrafts online, effortlessly.
          </p>
        </div>

        {/* features  section*/}
      </div>

      {/* new features  section*/}

      <div className=" container  rounded-3xl">
        <div className="flex mb-8 bg-amber-50  flex-col gap-6 px-6  mx-auto rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center   py-8 sm:py-8 md:gap-x-20 xl:px-20 ">
          <Image
            className="flex-none object-cover w-full h-84 sm:h-84 mr-16 sm:ml-0 rounded-2xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="/assets/images/features2.png"
            alt=""
            width={450}
            height={450}
          />
          <div className="flex-auto w-full ">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Sell Nationwide, Ship with Ease{' '}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Let us handle the boring stuff while you focus on creating.
            </p>
            <ul
              role="list"
              className="grid grid-cols-1 mt-10 text-base leading-7 tracking-wide text-gray-600 gap-x-8 gap-y-2 sm:grid-cols-1"
            >
              {benefits1.map((benefit) => (
                <li key={benefit} className="flex gap-x-3 text-body">
                  <CheckCircleIcon
                    className="flex-none w-5 h-7"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* feature 2  section*/}
      <div className=" container rounded-3xl">
        <div className="flex mb-8 bg-rose-50  flex-col gap-6 px-6  mx-auto rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center py-8 sm:py-8 md:gap-x-20 xl:px-20  ">
          <div className="flex-auto w-full ">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Your Dedicated Online store{' '}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Present your work in a beautiful and professional webpage.
            </p>
            <ul
              role="list"
              className="grid grid-cols-1 mt-10 text-base leading-7 tracking-wide text-gray-600 gap-x-8 gap-y-2 sm:grid-cols-1"
            >
              {benefits2.map((benefit) => (
                <li key={benefit} className="flex gap-x-3 text-body">
                  <CheckCircleIcon
                    className="flex-none w-5 h-7"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Image
            className="flex-none object-cover w-full h-84 sm:h-84 mr-16 sm:ml-0 rounded-2xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="/assets/images/features1.png"
            alt=""
            width={450}
            height={450}
          />
        </div>
      </div>

      {/* feature 3  section*/}
      <div className=" container rounded-3xl">
        <div className="flex bg-sky-50  flex-col gap-6 px-6  mx-auto rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center py-8 sm:py-8 md:gap-x-20 xl:px-20  ">
          <Image
            className="flex-none object-cover w-full h-84 sm:h-84 mr-16 sm:ml-0 rounded-2xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="/assets/images/features3.png"
            alt=""
            width={450}
            height={450}
          />
          <div className="flex-auto w-full ">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Grow Your Business with Confidence{' '}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Gain valuable insights and resources to take your creative journey
              to the next level.
            </p>
            <ul
              role="list"
              className="grid grid-cols-1 mt-10 text-base leading-7 tracking-wide text-gray-600 gap-x-8 gap-y-2 sm:grid-cols-1"
            >
              {benefits3.map((benefit) => (
                <li key={benefit} className="flex gap-x-3 text-body">
                  <CheckCircleIcon
                    className="flex-none w-5 h-7"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* sellers section */}
      <div className=" pt-12 sm:py-12">
        <div className="container mx-auto  rounded-3xl   text-center  bg-gradient-to-b from-rose-300 via-rose-100 to-white p-1">
          <div className=" container mx-auto pt-12 bg-white rounded-3xl  px-6 text-center lg:px-8">
            <p className="text-3xl font-semibold mb-6">
              Discover our newest Members
            </p>
            <ul
              role="list"
              className="mx-auto  grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
              {people.map((person) => (
                <li
                  key={person.name}
                  className="rounded-2xl bg-gray-50 px-8 py-10"
                >
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                      src={person.imageUrl}
                      alt=""
                    />
                  </a>
                  <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-700">
                    {person.name}
                  </h3>
                  <p className="text-md leading-6 text-gray-500">
                    {person.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ secttion */}
      <div className="container bg-gray-50 mt-12 pt-8 pb-12 rounded-3xl">
        <div className="mx-auto max-w-6xl ">
          <div className="pt-4 pb-4">
            <Heading title="FAQs" description="Your Questiosn answered" />{' '}
          </div>

          <dl className=" space-y-8">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="py-8 rounded-2xl bg-white px-8 shadow-xl border-2 border-red-100 shadow-slate-200"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7 ">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>

      {/* why choose us section */}
      {/* <div className="container">
        <div className="pt-12 pb-20">
          <Heading title="Features" description="Why choose us" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 lg:gap-18">
            {FEAT.map((item, i) => (
              <Feature key={i} {...item} />
            ))}
          </div>
        </div>
      </div> */}

      {/* seller  section*/}
      <div className="container bg-gradient-to-b from-rose-300 via-rose-100 to-white p-1 mt-16  mx-auto  bg-slate-50 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl px-12">
          <div className="relative px-6 pt-12  sm:pt-12 lg:static lg:px-8 lg:pt-24 ">
            <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Join our platform for free
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Start Selling Your work today, Sign up and unlock your artistic
                potential!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <CheckCircleIcon
                      className="w-6 text-gray-400 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>Reach art lovers nationwide.</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <CheckCircleIcon
                      className="w-6 text-gray-400 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <p className="hover:text-gray-900">
                      Sell with ease, we handle the rest.
                    </p>
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
                    <p className="hover:text-gray-900">
                      Build your brand and grow your business.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" pt-20 sm:pb-8  lg:pt-24 "
          >
            <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Full Name
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
                {/* <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
                {/* <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="city"
                    id="city"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    What you do
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
              <div className="flex justify-start mt-8 ">
                <button
                  type="submit"
                  className="px-8 py-3 text-lg font-medium text-white transition-all duration-500 ease-in-out rounded-md shadow-xl"
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
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* cta section */}
      {/* <div class="bg-white">
        <div class="container py-12 sm:px-6 sm:py-12 lg:px-8">
          <div
            style={{
              backgroundImage:
                'linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%)',
              backgroundSize: '200% auto',
              color: 'white',
              opacity: '80%',
            }}
            className="relative isolate overflow-hidden bg-red-50, px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
          >
            <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity today.
            </h2>
            <p class="mx-auto mt-6 mb-8 max-w-xl text-lg leading-8 text-gray-200">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <button
              type="submit"
              className="px-8 py-3 text-lg font-medium text-white transition-all duration-500 ease-in-out rounded-md shadow-xl"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #ffffff 0%, #FFEEEE 51%, #ffffff 100%)',
                backgroundSize: '200% auto',
                color: 'gray',
                borderRadius: '10px',
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundPosition = 'right center')
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundPosition = 'left center')
              }
            >
              Submit
            </button>
            <svg
              viewBox="0 0 1024 1024"
              class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fill-opacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stop-color="#fe8c00" />
                  <stop offset="1" stop-color="#fe8c00" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
}
