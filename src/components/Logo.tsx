
import React from 'react';

const Logo: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-10',
    medium: 'h-16',
    large: 'h-24',
  };

  return (
    <div className={`${sizeClasses[size]}`}>
      <h1 className="text-white text-4xl md:text-6xl font-bold">
        <span>y</span>
        <span className="text-accent">ou</span>
        <span>n</span>
        <span className="text-accent">m</span>
        <span>e</span>
      </h1>
    </div>
  );
};

export default Logo;
