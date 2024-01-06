import { useQuery } from '@tanstack/react-query';

import { request } from '../config/axios';

import type { IPractice, practiceType } from '../../types/practice';

const getPractice = async (
  language: string,
  type: practiceType,
  quantity: number,
) => {
  const response = await request<IPractice[]>({
    method: 'GET',
    url: `practice/${language}`,
    params: {
      type,
      quantity,
    },
  });

  return response;
};

export const useGetPractice = (
  language: string,
  type: practiceType,
  quantity: number,
) => {
  return useQuery({
    queryKey: ['practice', language, type, quantity],
    queryFn: () => getPractice(language, type, quantity),
    enabled: !!language && !!type && !!quantity,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
};
