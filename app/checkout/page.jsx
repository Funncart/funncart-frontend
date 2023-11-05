import { CheckoutSection } from '@/clients/Checkout';

export default function CheckoutPage() {
  return (
    <div className="mt-16 bg-gray-50 container rounded-2xl md:mt-20">
      <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>
        <CheckoutSection />
      </div>
    </div>
  );
}
