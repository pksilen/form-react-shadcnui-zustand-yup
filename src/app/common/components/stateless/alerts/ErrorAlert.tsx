import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ErrorIcon } from '../icons/ErrorIcon';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ErrorAlert = ({ children, className }: Props) => (
  <Alert className={className} variant="destructive">
    <ErrorIcon />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>{children}</AlertDescription>
  </Alert>
);
