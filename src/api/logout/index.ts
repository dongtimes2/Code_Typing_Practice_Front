import { request } from '../config/axios';

export const postLogout = async () => {
  const response = await request({
    method: 'POST',
    url: '/auth/logout',
  });

  return response;
};
