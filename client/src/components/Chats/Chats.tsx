import { FC } from 'react';
import { Button } from '../ui';
import { ChatsList } from './ChatsList/ChatsList';

export const Chats: FC = () => {
  return (
    <div className="w-full max-w-[350px] py-4 bg-white shadow-slate-300 shadow-xl rounded-xl">
      <div className="flex justify-between items-center px-4 pb-4">
        <h1 className="text-xl font-medium">My Chats</h1>
        <Button>Add group Chat</Button>
      </div>

      <ChatsList />
    </div>
  );
};
