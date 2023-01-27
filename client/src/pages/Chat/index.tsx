import { FC } from 'react';
import { withProtectedRoute } from '../../hoc';

const ChatPage: FC = () => {
  return <h1>Chat Page</h1>;
};

export const Chat = withProtectedRoute(ChatPage);
