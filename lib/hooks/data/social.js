import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useSocials() {
  const { data, error, isLoading } = useSWR(
    `/api/v1/customers/social-posts`,
    fetcher,
    { suspense: true },
  );

  return {
    socials: data,
    isLoading,
    error,
  };
}
