import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { showToast } from 'vant';
import 'vant/es/toast/style';

const instance = axios.create({
  baseURL: 'xxx',
  timeout: 10000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: true
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      const message = error?.message;
      return Promise.reject(message);
    } else {
      return Promise.reject('未知错误');
    }
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    let message = '';

    const status = error?.response?.status;

    if (status) {
      switch (status) {
        case 401:
          message = '登录过期，请重新登录';
          break;
        case 403:
          message = '权限不足';
          break;
        case 404:
          message = '请求错误';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        default:
          message = '网络错误';
          break;
      }
    }
    showToast(message);
    return Promise.reject(error);
  }
);

export default instance;
