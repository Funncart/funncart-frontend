import Image from 'next/image';
import { EnterIcon } from '../Assets/Icons';
import Link from 'next/link';

export default function Category({ media, name, slug, products_count }) {
  return (
    <Link className="group" href={`/categories/${slug}/products`}>
      <div className="border border-[#C0C0C0] group-hover:border-red-300 group-hover:bg-[#CA0000]/[.1] rounded-2xl h-[350px] mx-auto flex items-end justify-center relative bg-gradient-to-t from-[#C0C0C0]/[.2] to-white to-20%">
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-lg">
          <img
            src={media[0].original_url}
            alt={name}
            className="object-cover object-center w-auto h-full"
          />
        </div>
        <button className="absolute flex items-center px-4 py-3 bg-white rounded-lg shadow group-hover:bg-black group-hover:text-white jutify-between bottom-5 right-6 left-6">
          <div>{name.split(' ')[0]}</div>
          <div className="flex-1"></div>
          <div className="text-sm group-hover:hidden">
            {products_count} items
          </div>
          <div className="hidden group-hover:block">
            <EnterIcon />
          </div>
        </button>
      </div>
    </Link>
  );
}
