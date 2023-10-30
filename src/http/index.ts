import { type AxiosRequestConfig } from 'axios';
import instance from './request';

export type ResponseResult<T = any> = {
  code: number;
  message: string;
  data: T;
};

export const get = async <T>(url: string, params?: any): Promise<ResponseResult<T>> => {
  return await instance.get<T, ResponseResult<T>>(url, { params });
};

export const post = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig
): Promise<ResponseResult<T>> => {
  return await instance.post<T, ResponseResult<T>>(url, data, config);
};

export async function put<T>(url: string, data?: any): Promise<ResponseResult<T>> {
  return await instance.put<T, ResponseResult<T>>(url, data);
}
