import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export const setAxios = async (token) => {
  instance.defaults.headers.common['authorization'] = token;
};

export const axiosGetRequest = (url, config) => {
  return instance.get(url, config);
};

export const axiosPostRequest = (url, data) => {
  return instance.post(url, data);
};

export const axiosPatchRequest = (url, data) => {
  return instance.patch(url, data);
};
