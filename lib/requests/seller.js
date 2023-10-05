import { axios } from '@/lib/axios';

export async function addBecomeSeller(data) {
  return axios.post(`/api/v1/customers/become-sellers`, data);
}
