import axios from 'axios';

import { useUserInfoStore } from '../../store';
import { TokenController } from '../../utils/tokenController';

const tokenController = new TokenController();

export const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const request = async (params) => {
  return axios({
    baseURL: BASE_URL,
    withCredentials: true,
    ...params,
  }).then((res) => res.data);
};

const handleAxiosError = async (error) => {
  const { config, response } = error;

  if (response.status === 401 && response.data.message === 'Token Expired') {
    try {
      const { accessToken } = await request({
        method: 'POST',
        url: '/auth/refresh',
      });

      tokenController.setAccessToken(accessToken);
      if (config) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return axios(config);
      }
    } catch (error) {
      // refresh token 자체도 만료되었을 경우, 로그아웃 처리해야 한다.
      useUserInfoStore.getState().reset();
      tokenController.clear();
      window.location.href = '/';
    }
  } else {
    return Promise.reject(error);
  }
};

axios.interceptors.request.use((config) => {
  const token = tokenController.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use((response) => response, handleAxiosError);
