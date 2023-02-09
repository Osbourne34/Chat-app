import { FC } from 'react';

import { ChatProvider } from '../../context';

import { withProtectedRoute } from '../../hoc';
import { Header, Chats, Messages } from '../../components';

const ChatPage: FC = () => {
  return (
    <ChatProvider>
      <Header />
      <main className="h-[calc(100vh-76px)] flex gap-5 p-5 bg-slate-100">
        <div className="w-full max-w-[350px] py-4 bg-white shadow-slate-300 shadow-xl rounded-xl">
          <Chats />
        </div>
        <div className="flex-grow bg-white shadow-slate-300 shadow-xl rounded-xl">
          <Messages />
        </div>
      </main>
    </ChatProvider>
  );
};

export const Chat = withProtectedRoute(ChatPage);
