import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useSellers(limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/sellers?limit=${limit}&page=${page}`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    sellers: data,
    isLoading,
    error,
  };
}

export function useSeller(sellerId) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/sellers/${sellerId}`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    seller: data.data[0],
    isLoading,
    error,
  };
}

export function useFeaturedSellers(limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/sellers?limit=${limit}&page=${page}&featured=true`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    sellers: data,
    isLoading,
    error,
  };
}

export function useSellerProducts(sellerId, limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/sellers/${sellerId}/products?limit=${limit}&page=${page}`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    products: data,
    isLoading,
    error,
  };
}
