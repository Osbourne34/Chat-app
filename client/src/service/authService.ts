import { $api } from '../config';
import { AuthResponse } from '../Types';
import { AxiosResponse } from 'axios';

export const register = (body: {
  email: string;
  name: string;
  password: string;
}): Promise<AxiosResponse<AuthResponse>> => {
  return $api.post<AuthResponse>('/user/register', body);
};

export const login = (body: {
  email: string;
  password: string;
}): Promise<AxiosResponse<AuthResponse>> => {
  return $api.post<AuthResponse>('/user/login', body);
};
