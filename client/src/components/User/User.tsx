import { FC } from 'react';
import { useChatContext } from '../../context';

export const User: FC<{
  name: string;
  email: string;
  onClose: () => void;
  userId: string;
}> = ({ name, email, onClose, userId }) => {
  const { createChat } = useChatContext();

  const handleCreateChate = () => {
    createChat(userId);
    onClose();
  };

  return (
    <div onClick={handleCreateChate} className="border px-4 py-2">
      <div className="font-medium">{name}</div>
      <div>{email}</div>
    </div>
  );
};
