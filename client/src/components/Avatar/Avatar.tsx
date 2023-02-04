import { FC } from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/avatar.svg';

export const Avatar: FC = () => {
  return (
    <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-gray-200">
      <AvatarIcon width="32" height="32" fill="#6b7280" />
    </div>
  );
};
