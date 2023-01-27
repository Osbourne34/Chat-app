import { $api } from '../config';
import { AxiosResponse } from 'axios';
import { AuthResponse, User } from '../Types';

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

export const getMe = (): Promise<AxiosResponse<User>> => {
  return $api.get<User>('/user/getMe');
};
