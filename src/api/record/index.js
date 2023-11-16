import { request } from '../config/axios';

export const postRecord = async (payload) => {
  const response = await request({
    method: 'POST',
    url: '/records',
    data: payload,
  });

  return response;
};
