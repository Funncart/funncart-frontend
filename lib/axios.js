import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://admin.funncart.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});
