import { ProductDescription, ProductReviews } from '@/clients/Product';

export default function ProductPage({ params }) {
  return (
    <>
      <ProductDescription productSlug={params.productSlug} />
      {/* <ProductReviews productSlug={params.productSlug} /> */}
    </>
  );
}
