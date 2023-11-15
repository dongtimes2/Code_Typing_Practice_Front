import { request } from '../config/axios';

export const patchUser = async (payload) => {
  const response = await request({
    method: 'PATCH',
    url: '/users',
    data: payload,
  });

  return response;
};
