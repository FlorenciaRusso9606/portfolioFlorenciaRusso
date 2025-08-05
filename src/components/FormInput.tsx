import type  { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react'; 

type Props = {
  label: string;
  error?: string;
  className?: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'text', error, className = '', placeholder, ...rest }, ref) => {
    const id = rest.id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="mb-4">
        <label htmlFor={id} className="block mb-1 text-sm font-medium text-white">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] bg-[var(--bg-color)] text-[var(--text-color)] ${error ? 'border-red-500' : 'border-[var(--border-color)]'} ${className}`}
          {...rest}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
export default FormInput;
