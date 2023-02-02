import { FC } from 'react';

import { withProtectedRoute } from '../../hoc';
import { Header } from '../../components';

const ChatPage: FC = () => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-76px)] flex gap-5 p-5 bg-slate-100">
        <div className="basis-1/4 bg-white shadow-slate-300 shadow-xl rounded-xl">
          Chats
        </div>
        <div className="basis-3/4 bg-white shadow-slate-300 shadow-xl rounded-xl">
          Messages
        </div>
      </main>
    </>
  );
};

export const Chat = withProtectedRoute(ChatPage);
