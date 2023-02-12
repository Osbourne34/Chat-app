import { FC } from 'react';
import { useAuthContext, useChatContext } from '../../../context';
import cn from 'classnames';

import { Avatar } from '../../ui';

import { Chat } from '../../../Types';

interface ChatItemProps {
  chat: Chat;
}

export const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  const { currentChat, setCurrentChat } = useChatContext();
  const { user } = useAuthContext();

  const handleClick = () => {
    setCurrentChat(chat);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition cursor-pointer',
        { ['bg-gray-200 hover:bg-gray-200']: chat._id === currentChat?._id },
      )}
    >
      <Avatar />
      <div>
        <div className="text-sm font-medium">
          {chat.chatName ||
            chat.users.find(({ _id }) => _id !== user?._id)?.name}
        </div>
        <div className="text-sm">{chat.latestMessage?.content || ''}</div>
      </div>
    </div>
  );
};
