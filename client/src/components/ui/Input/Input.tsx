import { DetailedHTMLProps, forwardRef } from 'react';
import cn from 'classnames';
interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  helperText?: string;
  error?: boolean;
  widthFull?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = 'text', helperText, error, className, widthFull, ...props },
    ref
  ) => {
    return (
      <div
        className={cn({
          ['w-full']: widthFull,
        })}
      >
        <input
          ref={ref}
          type={type}
          className={cn(
            className,
            'w-full px-4 py-2 border-2 rounded-md focus:border-zinc-900 transition outline-none',
            { ['border-red-500 focus:border-red-500']: error }
          )}
          {...props}
        />
        {helperText && <p className="text-red-500 text-sm">{helperText}</p>}
      </div>
    );
  }
);
