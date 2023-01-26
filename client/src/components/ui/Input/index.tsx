import { DetailedHTMLProps, forwardRef } from 'react';
interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', helperText, ...props }, ref) => {
    return (
      <div>
        <input ref={ref} type={type} className="w-full border" {...props} />
        {helperText && <div>{helperText}</div>}
      </div>
    );
  },
);
