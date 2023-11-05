import {
  PopularCategories,
  PopularSellers,
  TrendingProducts,
} from '@/clients/Shop';

export default function ShopNowPage() {
  return (
    <>
      <div className="bg-gray-50 container rounded-2xl font-jakarta">
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-12 text-center pb-14">
            <h1 className="text-4xl font-bold tracking-tight text-heading">
              Shop Now
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-base text-body">
              Shop from our extensive variety of authentic local products
            </p>
          </div>
        </div>
      </div>
      <PopularCategories />
      <TrendingProducts />
      <PopularSellers />
    </>
  );
}
