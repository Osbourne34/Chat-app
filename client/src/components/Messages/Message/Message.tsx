import { FC } from 'react';
import cn from 'classnames';

interface MessageProps {
  content: string;
  senderIm?: boolean;
}

export const Message: FC<MessageProps> = ({ senderIm, content }) => {
  return (
    <div
      className={cn('w-max max-w-screen-sm px-4 py-2 bg-gray-200 rounded-md', {
        ['bg-blue-600 text-white self-end']: senderIm,
      })}
    >
      {content}
    </div>
  );
};
