import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const request = async (params) => {
  return axios({
    baseURL: BASE_URL,
    ...params,
  }).then((res) => res.data);
};
