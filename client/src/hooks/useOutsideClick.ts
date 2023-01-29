import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  handler: () => void,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);
};
