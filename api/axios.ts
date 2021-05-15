import axios, { AxiosRequestConfig } from 'axios';
import { RootState, store } from '../store';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

axiosInstance.interceptors.request.use(
  (req): AxiosRequestConfig => {
    const { auth } = store.getState() as RootState;
    req.headers.authorization = auth.authToken;
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);
