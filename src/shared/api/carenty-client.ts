import axios from 'axios';

const baseURL = 'https://api.dev.carenty.io';

export const carenty = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

carenty.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  },
);

carenty.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      console.log('logout');
    }

    if (error.response.status === 503 || error.response.status === 502) {
      console.log('Server error');
    }

    return Promise.reject(error);
  },
);
