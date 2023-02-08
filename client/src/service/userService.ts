import { $api } from '../config';
import { AxiosResponse } from 'axios';
import { User } from '../Types';

export const getUsers = (value: string): Promise<AxiosResponse<User[]>> => {
  return $api.get(`/user?search=${value}`);
};
