import { useQuery } from '@tanstack/react-query';

import { ILanguage } from '../../types/language';
import { request } from '../config/axios';

const getLanguages = async () => {
  const response = await request<ILanguage[]>({
    method: 'GET',
    url: '/languages',
  });

  return response;
};

export const useGetLanguages = () => {
  return useQuery({
    queryKey: ['languages'],
    queryFn: getLanguages,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
};
