import { useQuery } from '@tanstack/react-query';

import { request } from '../config/axios';

const getUser = async () => {
  const response = await request({
    method: 'GET',
    url: '/users',
  });

  return response;
};

export const useGetUser = (enabled: string | null) => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUser,
    enabled: !!enabled,
  });
};

interface IPayload {
  practiceNumber: number;
  sound: boolean;
  isColorWeakness: boolean;
}

export const patchUser = async (payload: IPayload) => {
  const response = await request({
    method: 'PATCH',
    url: '/users',
    data: payload,
  });

  return response;
};
