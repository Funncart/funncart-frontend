import { CategoryProducts } from '@/clients/Categories';

export default function CategoryPage({ params }) {
  return (
    <>
      <div className="bg-gray-50 font-jakarta">
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pt-12 text-center pb-14">
            <h1 className="text-4xl font-bold tracking-tight text-heading">
              {params.categorySlug.replace(/-/g, ' ').charAt(0).toUpperCase() +
                params.categorySlug.replace(/-/g, ' ').slice(1)}
            </h1>
          </div>
        </div>
      </div>
      <CategoryProducts categorySlug={params.categorySlug} />
    </>
  );
}
