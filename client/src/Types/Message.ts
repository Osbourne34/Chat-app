export interface Message {
  _id: string;
  sender: string;
  content: string;
  chat: string;
  createdAt: Date;
  updatedAt: Date;
}
