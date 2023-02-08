import { FC } from 'react';
import { useChatContext } from '../../../context';
import { Avatar } from '../../ui';

interface UserProps {
  email: string;
  name: string;
  userId: string;
  onClose: () => void;
}

export const User: FC<UserProps> = ({ name, email, userId, onClose }) => {
  const { createChat } = useChatContext();

  const handleCreateChat = () => {
    createChat(userId);
    onClose();
  };

  return (
    <div
      onClick={handleCreateChat}
      className="py-2 hover:before:bg-gray-100 active:before:bg-gray-200 relative cursor-pointer before:absolute before:-left-4 before:-right-4 before:block before:top-0 before:bottom-0 before:pointer-events-none before:transition"
    >
      <div className="flex items-center relative">
        <Avatar />
        <div className="ml-2">
          <div className="text-sm font-medium">{name}</div>
          <div className="text-sm">{email}</div>
        </div>
      </div>
    </div>
  );
};
