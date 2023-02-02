import { FC, ReactNode } from 'react';
import { useMenuContext } from '../context';

interface MenuButtonProps {
  children: ReactNode;
}

export const MenuButton: FC<MenuButtonProps> = ({ children }) => {
  const { setOpen } = useMenuContext();

  const handleOpen = () => {
    setOpen((s) => !s);
  };

  return <button onClick={handleOpen}>{children}</button>;
};
