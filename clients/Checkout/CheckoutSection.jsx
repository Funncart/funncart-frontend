'use client';
import { CheckoutForm, CheckoutProducts } from '@/clients/Checkout';
import { useLocalStorage } from '@/lib/hooks';
import { addOrder } from '@/lib/requests/order';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/navigation';

export default function CheckoutSection() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const { items, cartTotal } = useCart();
  const router = useRouter();

  const [_, saveCart] = useLocalStorage('cart', null);
  const [__, saveCartTotal] = useLocalStorage('cart_total', null);
  const [___, saveCartAddress] = useLocalStorage('cart_address', null);

  async function onSubmit(data) {
    await addOrder({
      ...data,
      items: items.map((item) => ({
        variant_id: item.id,
        qty: +item.quantity,
        product_id: item.product_id,
      })),
    });
    saveCartAddress(`${data.street}, ${data.city}, ${data.state}, ${data.zip}`);
    router.push('/success');
  }

  useEffect(() => {
    saveCart(
      items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.name,
        slug: item.slug,
        price: item.price,
        image: item.media[0].original_url,
      })),
    );
    saveCartTotal(+cartTotal?.toFixed(2));
  }, [items, saveCart, saveCartTotal, cartTotal]);

  return (
    <form
      className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CheckoutForm register={register} errors={errors} />
      <CheckoutProducts />
    </form>
  );
}
