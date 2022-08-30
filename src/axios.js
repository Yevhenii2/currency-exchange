import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.exchangerate.host/',
  timeout: 1000,
  signal: abortController.signal,
});

export const abortController = new AbortController();

export default axiosInstance;
