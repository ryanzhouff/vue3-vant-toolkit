import type { UserParams, UserResponseData } from './types';
import { post } from '@/http';

export const login = async ({ username, password }: UserParams) => {
  const response = await post<UserResponseData>('login', { username, password });
  return response.data;
};
