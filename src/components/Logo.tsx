
import React from 'react';

const Logo: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-10',
    medium: 'h-16',
    large: 'h-24',
  };

  return (
    <div className={`${sizeClasses[size]}`}>
      <img 
        src="/lovable-uploads/90d4a3d1-6455-4ff1-af24-ce4459b38a04.png" 
        alt="Logo" 
        className="h-full" 
      />
    </div>
  );
};

export default Logo;
