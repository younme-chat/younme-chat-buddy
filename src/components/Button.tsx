
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        variant === 'primary' ? 'btn-primary' : 
        variant === 'secondary' ? 'btn-secondary' : 
        'border border-white/20 bg-transparent hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
