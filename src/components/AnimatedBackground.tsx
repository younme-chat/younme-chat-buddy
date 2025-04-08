
import React from 'react';
import { Heart } from 'lucide-react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      
      {/* Animated floating hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i}
          className="absolute text-accent/30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
          }}
        >
          <Heart size={Math.random() * 30 + 20} fill="currentColor" />
        </div>
      ))}
      
      {/* Light streaks */}
      <div className="absolute -top-40 -left-40 h-80 w-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 -right-20 h-60 w-60 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 h-40 w-40 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;
