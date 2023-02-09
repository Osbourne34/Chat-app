import { $api } from '../config';
import { AxiosResponse } from 'axios';
import { Message } from '../Types';

export const getMessages = (
  chatId: string
): Promise<AxiosResponse<Message[]>> => {
  return $api.get<Message[]>(`/message/${chatId}`);
};

export const createMessage = (body: {
  chatId: string;
  content: string;
}): Promise<AxiosResponse<Message>> => {
  return $api.post<Message>('/message', body);
};
