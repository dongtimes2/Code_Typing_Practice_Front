import { ILogin } from '../../types/login';
import { request } from '../config/axios';

export const postNaverLogin = async (code: string) => {
  const response = await request<ILogin>({
    method: 'POST',
    url: '/auth/login',
    data: {
      code,
      state: `${import.meta.env.VITE_NAVER_STATE}`,
    },
  });

  return response;
};
