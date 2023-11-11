import { useQuery } from '@tanstack/react-query';

import { request } from '../config/axios';

const getLanguages = async () => {
  const response = await request({
    method: 'GET',
    url: '/languages',
  });

  return response;
};

export const useGetLanguages = () => {
  return useQuery({ queryKey: ['languages'], queryFn: getLanguages });
};
