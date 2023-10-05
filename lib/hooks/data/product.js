import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useProducts(limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/products?limit=${limit}&page=${page}`,
    fetcher,
    { suspense: true },
  );

  return {
    products: data,
    isLoading,
    error,
  };
}

export function useFeaturedProducts(limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/products?limit=${limit}&page=${page}&featured=true`,
    fetcher,
    { suspense: true },
  );

  return {
    products: data,
    isLoading,
    error,
  };
}

export function useProduct(productSlug) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/products/${productSlug}`,
    fetcher,
    { suspense: true },
  );

  return {
    product: data?.data,
    isLoading,
    error,
  };
}

export function useProductComments(productSlug) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/products/${productSlug}/comments`,
    fetcher,
    { suspense: true },
  );

  return {
    productComments: data,
    isLoading,
    error,
  };
}
