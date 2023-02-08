import { FC } from 'react';
import { ReactComponent as AvatarIcon } from '../../../assets/avatar.svg';

export const Avatar: FC = () => {
  return (
    <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-white">
      <AvatarIcon width="75%" height="75%" />
    </div>
  );
};
