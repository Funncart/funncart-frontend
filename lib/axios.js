import Axios from 'axios';

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'https://admin.funncart.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});
