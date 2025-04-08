
import React from 'react';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedBackground />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer className="relative z-10" />
    </div>
  );
};

export default MainLayout;
