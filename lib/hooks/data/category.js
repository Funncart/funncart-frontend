import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useCategories(limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/categories?limit=${limit}&page=${page}`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    categories: data,
    isLoading,
    error,
  };
}

export function useFeatuedCategories(limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/categories?limit=${limit}&page=${page}&featured=true`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    categories: data,
    isLoading,
    error,
  };
}

export function useCategoryProducts(categorySlug, limit = 0, page = 0) {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/categories/${categorySlug}/products?limit=${limit}&page=${page}`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    products: data,
    isLoading,
    error,
  };
}
