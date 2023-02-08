import { FC } from 'react';

import { ChatProvider } from '../../context';

import { withProtectedRoute } from '../../hoc';
import { Header, Chats } from '../../components';

const ChatPage: FC = () => {
  return (
    <ChatProvider>
      <Header />
      <main className="h-[calc(100vh-76px)] flex gap-5 p-5 bg-slate-100">
        <Chats />
        <div className="flex-grow bg-white shadow-slate-300 shadow-xl rounded-xl">
          Messages
        </div>
      </main>
    </ChatProvider>
  );
};

export const Chat = withProtectedRoute(ChatPage);
