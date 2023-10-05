import { SellerProducts, SellerProfile } from '@/clients/Seller';

export default function SellerPage({ params }) {
  return (
    <>
      <SellerProfile sellerId={params.sellerId} />
      <SellerProducts sellerId={params.sellerId} />
    </>
  );
}
