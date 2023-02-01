import { FC, ReactNode } from 'react';
import { useMenuContext } from '../context';

interface MenuListProps {
  children: ReactNode;
}

export const MenuList: FC<MenuListProps> = ({ children }) => {
  const { open } = useMenuContext();

  return open ? (
    <ul className="absolute top-full right-0 w-max p-4 bg-white shadow-md rounded-md">
      {children}
    </ul>
  ) : null;
};
