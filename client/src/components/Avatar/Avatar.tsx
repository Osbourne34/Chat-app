import { FC } from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg';

export const Avatar: FC = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
      <AvatarIcon width="32" height="32" />
    </div>
  );
};
