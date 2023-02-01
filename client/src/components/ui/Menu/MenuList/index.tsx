import { DetailedHTMLProps, FC, ReactNode } from 'react';
import { useMenuContext } from '../context';
import cn from 'classnames';

interface MenuListProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: ReactNode;
}

export const MenuList: FC<MenuListProps> = ({ children, className }) => {
  const { open } = useMenuContext();

  return open ? (
    <ul
      className={cn(
        'absolute top-[calc(100%+5px)] right-0 w-max py-2 bg-white shadow-md rounded-md',
        className,
      )}
    >
      {children}
    </ul>
  ) : null;
};
