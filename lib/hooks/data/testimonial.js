import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useTestimonials() {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/testimonials`,
    fetcher,
    { suspense: true },
  );

  return {
    testimonials: data,
    isLoading,
    error,
  };
}
