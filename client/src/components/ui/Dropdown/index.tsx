import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useOutsideClick } from '../../../hooks';

interface DropdownProps {
  children: ReactElement | ReactElement[];
  trigger: ({}) => ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ trigger, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  useOutsideClick(ref, handleClose);

  return (
    <div ref={ref} className="relative">
      {trigger({ onClick: () => setOpen((s) => !s) })}

      {open && (
        <div className="absolute top-[calc(100%+5px)] right-0 w-max p-5 bg-white shadow-md space-y-4">
          {Children.map(children, (child) => {
            return cloneElement(child, {
              onClick: handleClose,
            });
          })}
        </div>
      )}
    </div>
  );
};
