
import React from 'react';

const Logo: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl',
  };

  return (
    <h1 className={`font-bold ${sizeClasses[size]} gradient-text`}>
      YouNMe
    </h1>
  );
};

export default Logo;
