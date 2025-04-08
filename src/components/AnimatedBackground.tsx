
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      
      {/* Animated floating bubbles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-accent/20 animate-float"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
      
      {/* Light streaks */}
      <div className="absolute -top-40 -left-40 h-80 w-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 -right-20 h-60 w-60 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 h-40 w-40 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;
