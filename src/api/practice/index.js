import { useQuery } from '@tanstack/react-query';

import { request } from '../config/axios';

const getPractice = async (language, type, quantity) => {
  const response = await request({
    method: 'GET',
    url: `practice/${language}`,
    params: {
      type,
      quantity,
    },
  });

  return response;
};

export const useGetPractice = (language, type, quantity) => {
  return useQuery({
    queryKey: ['practice', language, type, quantity],
    queryFn: () => getPractice(language, type, quantity),
    enabled: !!language && !!type && !!quantity,
  });
};
