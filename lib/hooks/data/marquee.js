import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useMarquees() {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/marquees`,
    fetcher,
    { suspense: true, caches: false },
  );

  return {
    marquees: data,
    isLoading,
    error,
  };
}
