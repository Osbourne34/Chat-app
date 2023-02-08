import { FC } from 'react';
import { useChatContext } from '../../../context';
import { Avatar } from '../../ui';
import cn from 'classnames';

export const ChatItem: FC<any> = ({ name, chatId }) => {
  const { currentChat, setCurrentChat } = useChatContext();
  return (
    <div
      onClick={() => setCurrentChat(chatId)}
      className={cn(
        'flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition cursor-pointer',
        { ['bg-gray-400 hover:bg-gray-400']: chatId === currentChat }
      )}
    >
      <Avatar />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-sm">LastMessage</div>
      </div>
    </div>
  );
};
