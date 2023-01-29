import { FC } from 'react';

import { withProtectedRoute } from '../../hoc';

import { Header } from '../../components';

const ChatPage: FC = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export const Chat = withProtectedRoute(ChatPage);
