import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && (
        <span className="block text-sm font-semibold text-text-primary ml-1">
          {label}
        </span>
      )}
      <input
        {...props}
        className="w-full px-4 py-3.5 rounded-xl border border-divider bg-white focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none transition-all text-sm text-text-primary placeholder:text-text-disabled"
      />
    </label>
  );
}
