import { axios } from '@/lib/axios';

export async function addContactMessage(data) {
  return axios.post(`/api/v1/customers/contact-messages`, data);
}
