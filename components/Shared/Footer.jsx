import Link from 'next/link';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  MailIcon,
  PhoneIcon,
} from '../Assets/Icons';
import {
  FACEBOOK_HANDLE,
  INSTAGRAM_HANDLE,
  LINKEDIN_HANDLE,
} from '@/constants/social';
import { EMAIL_ID, PHONE_NO } from '@/constants/contact';

const FOOTER_ITEMS = [
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
    title: 'Become Seller',
    link: '/become-seller',
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 md:container md:mb-10">
      <div className="bg-gray-50 md:rounded-2xl">
        <div className="flex flex-col justify-between gap-12 p-8 md:flex-row">
          <div className="max-w-sm">
            <Link href="/">
              <Logo />
            </Link>
            <p className="py-8 text-lg text-body">
              We showcase and sell authentic art and handicrafts crafted by
              Pakistani artists.
            </p>
            <div className="flex gap-x-2">
              <a
                href={FACEBOOK_HANDLE}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-white rounded-lg"
              >
                <FacebookIcon />
              </a>
              <a
                href={INSTAGRAM_HANDLE}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-white rounded-lg"
              >
                <InstagramIcon />
              </a>
              <a
                href={LINKEDIN_HANDLE}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-white rounded-lg"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-12 gap-x-24 sm:flex-row">
            <ul className="space-y-4 font-medium text-body">
              <li className="pb-2 text-xl font-semibold text-heading">
                Company
              </li>
              {FOOTER_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 font-medium text-body">
              <li className="pb-2 text-xl font-semibold text-heading">
                Support
              </li>
              <li className="">
                <a href={`tel:${PHONE_NO}`}>
                  <div className="flex gap-x-3">
                    <PhoneIcon />
                    <span>{PHONE_NO}</span>
                  </div>
                </a>
              </li>
              <li className="">
                <a href={`mailto:${EMAIL_ID}`}>
                  <div className="flex gap-x-3">
                    <MailIcon />
                    <span>{EMAIL_ID}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
