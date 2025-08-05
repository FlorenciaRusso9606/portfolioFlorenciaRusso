import { type ReactNode, type CSSProperties } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  style?:CSSProperties;
   type?: 'submit' | 'button' | 'reset';
};

const Button = ({ onClick, children, className='' , style, type = 'button'}: ButtonProps) => (
  <button
    onClick={onClick}
   className= {` text-[var(--button-text-color)] rounded cursor-pointer ${className}`}
   type={type}
   style={style}
  >
    {children}
  </button>
);

export default Button;
