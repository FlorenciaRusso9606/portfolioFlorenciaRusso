import type  { TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react'; 

type Props = {
  label: string;
  error?: string;
  className?: string;
  placeholder?: string;
  rows?: number;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormTextarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className = '', placeholder, rows = 5, ...rest }, ref) => {
    const id = rest.id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="mb-4">
        <label htmlFor={id} className="block mb-1 text-sm font-medium text-white">
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          placeholder={placeholder}
          rows={rows}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] bg-[var(--bg-color)] text-[var(--text-color)] ${error ? 'border-red-500' : 'border-[var(--border-color)]'} ${className}`}
          {...rest}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';
export default FormTextarea;
