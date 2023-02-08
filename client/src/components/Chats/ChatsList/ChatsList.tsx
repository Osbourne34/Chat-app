import { FC } from 'react';
import { useChatContext } from '../../../context';

import { ChatItem } from '../ChatItem/ChatItem';
import { Loader } from '../../ui';

export const ChatsList: FC = () => {
  const { chats, loadingChats, errorChats } = useChatContext();

  let content;

  if (loadingChats) {
    content = (
      <div className="flex justify-center px-4">
        <Loader />
      </div>
    );
  } else if (errorChats) {
    content = <div className="px-4">{errorChats}</div>;
  } else {
    content = (
      <>
        {chats.map(({ _id, chatName, users, latestMessage }) => (
          <ChatItem
            key={_id}
            name={chatName || users[1].name}
            chatId={_id}
            latestMessage={latestMessage}
          />
        ))}
      </>
    );
  }

  return content;
};
