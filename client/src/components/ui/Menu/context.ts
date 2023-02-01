import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface MenuContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextType | null>(null);

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('Error context');
  }

  return context;
};
