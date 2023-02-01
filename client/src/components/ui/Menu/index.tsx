import { FC, ReactNode, useRef, useState } from 'react';
import { useOutsideClick } from '../../../hooks';
import { MenuContext } from './context';
import { MenuButton } from './MenuButton';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className="relative">
        {children}
      </div>
    </MenuContext.Provider>
  );
};

Menu.MenuButton = MenuButton;
Menu.MenuList = MenuList;
Menu.MenuItem = MenuItem;
