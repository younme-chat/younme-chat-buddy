
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blue background with yellow gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#083065]"></div>
      
      {/* Yellow radial gradient */}
      <div className="absolute top-20 right-20 h-80 w-80 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 h-60 w-60 bg-accent/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;
