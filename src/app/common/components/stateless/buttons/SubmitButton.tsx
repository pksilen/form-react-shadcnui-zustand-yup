import React from 'react';
import { Button } from '@/components/ui/button';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const SubmitButton = ({ children, className }: Props) => (
  <Button className={className} type="submit">
    {children}
  </Button>
);
