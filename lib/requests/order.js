import { axios } from '../axios';

export async function addOrder(order) {
  return axios.post(`/api/v1/customers/orders`, order);
}
