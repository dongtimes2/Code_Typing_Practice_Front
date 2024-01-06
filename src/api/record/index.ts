import { useQuery } from '@tanstack/react-query';

import { practiceType } from '../../types/practice';
import { request } from '../config/axios';

const getRecord = async () => {
  const response = await request({
    method: 'GET',
    url: '/records',
    params: {
      type: 'recent',
    },
  });

  return response;
};

export const useGetRecord = () => {
  return useQuery({
    queryKey: ['record', 'recent'],
    queryFn: getRecord,
  });
};

interface IPayload {
  type: practiceType;
  language: string;
  accuracy: number;
  typingSpeed: number;
}

export const postRecord = async (payload: IPayload) => {
  const response = await request({
    method: 'POST',
    url: '/records',
    data: payload,
  });

  return response;
};

const getRecordStatistics = async () => {
  const response = await request({
    method: 'GET',
    url: '/records',
    params: {
      type: 'stat',
    },
  });

  return response;
};

export const useGetRecordStatistics = () => {
  return useQuery({
    queryKey: ['record', 'stat'],
    queryFn: getRecordStatistics,
  });
};
