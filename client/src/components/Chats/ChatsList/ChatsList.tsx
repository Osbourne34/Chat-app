import { FC } from 'react';
import { useChatContext } from '../../../context';
import { Loader } from '../../Loader/Loader';
import { ChatItem } from '../ChatItem/ChatItem';

export const ChatsList: FC = () => {
  const { chats, loadingChats, errorChats, currentChat } = useChatContext();

  let content;

  if (loadingChats) {
    content = <Loader />;
  }
  if (errorChats) {
    content = <div>{errorChats}</div>;
  }
  if (chats.length > 0) {
    content = chats.map((c: any) => (
      <ChatItem
        name={c?.chatName || c.users[1].name}
        chatId={c._id}
        key={c._id}
      />
    ));
  }

  return content;
};
