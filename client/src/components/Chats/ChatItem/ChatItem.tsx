import { FC } from 'react';
import { useChatContext } from '../../../context';
import { Avatar } from '../../ui';
import cn from 'classnames';

import { Message } from '../../../Types';

interface ChatItemProps {
  name: string;
  chatId: string;
  latestMessage?: Message;
}

export const ChatItem: FC<ChatItemProps> = ({
  name,
  chatId,
  latestMessage,
}) => {
  const { currentChat, setCurrentChat } = useChatContext();

  const handleClick = () => {
    setCurrentChat(chatId);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition cursor-pointer',
        { ['bg-gray-200 hover:bg-gray-200']: chatId === currentChat },
      )}
    >
      <Avatar />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-sm">{latestMessage?.content || ''}</div>
      </div>
    </div>
  );
};
