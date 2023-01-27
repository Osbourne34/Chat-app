import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

$api.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
