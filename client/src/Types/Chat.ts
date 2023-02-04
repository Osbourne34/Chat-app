import { User } from './User';

export interface Chat {
  _id: string;
  chatName?: string;
  isGroupChat: boolean;
  users: User[];
  latestMessage?: string;
  groupAdmin?: User | null;
}
