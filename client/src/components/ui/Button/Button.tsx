import { DetailedHTMLProps, FC, ReactNode } from 'react';
import cn from 'classnames';

interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  fullWidth,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        className,
        'px-4 py-2 border-2 border-slate-500 focus:border-slate-600 hover:border-slate-600 active:border-slate-700 bg-slate-500 focus:bg-slate-600 hover:bg-slate-600 active:bg-slate-700 rounded-md transition text-white font-medium outline-none disabled:bg-slate-300 disabled:border-slate-300',
        {
          ['w-full']: fullWidth,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
