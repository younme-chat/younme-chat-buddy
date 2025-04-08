
import React from 'react';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
