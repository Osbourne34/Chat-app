import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
import { useMenuContext } from '../context';

interface MenuItemProps
  extends DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  children: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({
  children,
  onClick,
  ...props
}) => {
  const { setOpen } = useMenuContext();

  const handleClose = (e: React.MouseEvent<HTMLLIElement>) => {
    if (onClick) {
      onClick(e);
    }
    setOpen(false);
  };

  return (
    <li
      className="px-4 py-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition"
      onClick={handleClose}
      {...props}
    >
      {children}
    </li>
  );
};
