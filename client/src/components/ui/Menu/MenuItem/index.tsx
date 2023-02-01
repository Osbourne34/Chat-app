import { DetailedHTMLProps, FC, ReactNode } from 'react';
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

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setOpen(false);
  };

  return (
    <li onClick={handleClick} {...props}>
      {children}
    </li>
  );
};
