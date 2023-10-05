import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useOrderShipmentPrice() {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/orders/shipment-price`,
    fetcher,
    { suspense: true },
  );

  return {
    shipmentPrice: data.data,
    isLoading,
    error,
  };
}
