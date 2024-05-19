import { clsx } from 'clsx';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type TextInputProps = Readonly<{
  className?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number | undefined;
  required?: boolean;
}>;

export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{required ? `${label} *` : label}</Label>
      <Input
        className={clsx(
          error && 'border-red-600 focus-visible:border-border focus-visible:ring-red-600',
          className
        )}
        maxLength={maxLength}
        required={required}
        {...restOfProps}
      />
      {error && <div className="text-red-600">{error}</div>}
    </div>
  )
);
