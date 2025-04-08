
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
        'font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105',
        variant === 'primary' ? 'bg-accent text-primary hover:opacity-90' : 
        variant === 'secondary' ? 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20' : 
        'border border-white/20 bg-transparent text-white hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
