import { $api } from '../config';
import { AxiosResponse } from 'axios';
import { Chat } from '../Types/Chat';

export const getUserChat = (): Promise<AxiosResponse<Chat[]>> => {
  return $api.get<Chat[]>('/chat');
};

export const startChatting = (body: {
  userId: string;
}): Promise<AxiosResponse<Chat>> => {
  return $api.post('/chat', body);
};
