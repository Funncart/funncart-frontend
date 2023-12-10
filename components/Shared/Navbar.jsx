'use client';
import Link from 'next/link';
import { BagIcon, Logo } from '../Assets/Icons';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Cart from './Cart';
import { useCart } from 'react-use-cart';
import { usePathname } from 'next/navigation';

const NAVBAR_ITEMS = [
  {
    title: 'Shop Now',
    link: '/shop-now',
  },
  {
    title: 'About Us',
    link: '/about-us',
  },
  {
    title: 'Contact Us',
    link: '/contact-us',
  },
  {
    title: 'Become a Seller',
    link: '/sellers/join',
  },
];

export default function Navbar() {
  const [showItems, setShowItems] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const { totalUniqueItems } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = 'auto';
    setShowItems(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className="md:container md:my-5">
        <div className="bg-gray-50 md:rounded-2xl">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex md:hidden">
              <button
                className="p-0.5 border rounded-lg"
                onClick={() => {
                  setShowItems(!showItems);
                  document.body.style.overflow = showItems ? 'auto' : 'hidden';
                }}
              >
                {showItems ? (
                  <XMarkIcon className="w-8 h-8 text-body" />
                ) : (
                  <Bars3Icon className="w-8 h-8 text-body" />
                )}
              </button>
            </div>
            <Link href="/">
              <Logo />
            </Link>
            <ul className="hidden text-lg font-medium text-body md:block">
              {NAVBAR_ITEMS.map((item, index) => (
                <li key={index} className="inline-block px-4 py-2">
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="">
              <button
                className="flex text-xl font-medium gap-x-2"
                onClick={() => setCartClick(true)}
              >
                <BagIcon />
                <span className="">{totalUniqueItems}</span>
              </button>
            </div>
          </div>
          {showItems && (
            <div className="relative h-screen md:h-auto">
              <div className="absolute inset-0 bg-gray z-99 md:hidden">
                <ul className="px-8 text-lg font-medium text-body bg-gray">
                  {NAVBAR_ITEMS.map((item, index) => (
                    <li key={index} className="py-4 border-b">
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Cart
        cartClick={cartClick}
        handleCartClickClose={() => setCartClick(false)}
      />
    </>
  );
}
