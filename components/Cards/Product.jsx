import Link from 'next/link';

export default function Product({
  id,
  slug,
  media,
  name,
  product_variants,
  product_variants_sum_qty,
}) {
  return (
    <Link href={`/products/${slug}`} key={id}>
      <div
        key={id}
        className="relative p-4 border-t border-b border-r border-gray-200 group sm:p-6"
      >
        <div className="relative overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1">
          {+product_variants_sum_qty ? (
            <div className="absolute bottom-0 w-full py-2 text-center text-white bg-green-500 -z-50 group-hover:z-50">
              {product_variants_sum_qty} items in stock
            </div>
          ) : (
            <div className="absolute bottom-0 w-full py-2 text-center text-white bg-red-500 -z-50 group-hover:z-50">
              Out of stock
            </div>
          )}
          <img
            src={media[0]?.original_url}
            alt={name}
            className="object-cover object-center w-full h-full aspect-square group-hover:opacity-75"
          />
        </div>
        <div className="pt-4 pb-2 text-center">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <p className="mt-2 text-base font-medium text-gray-900 price">
            {product_variants?.[0]?.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
