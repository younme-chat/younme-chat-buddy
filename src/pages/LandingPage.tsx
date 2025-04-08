
import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import AgeVerificationModal from '../components/AgeVerificationModal';
import CustomizationModal from '../components/CustomizationModal';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  const [ageModalOpen, setAgeModalOpen] = useState(false);
  const [customizationModalOpen, setCustomizationModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Delay animation to allow page to load
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleStartChat = () => {
    setAgeModalOpen(true);
  };

  const handleAgeVerified = () => {
    setAgeModalOpen(false);
    setCustomizationModalOpen(true);
  };

  const handleCustomizationComplete = () => {
    setCustomizationModalOpen(false);
    navigate('/chat');
  };

  return (
    <MainLayout>
      <div className="min-h-[90vh] flex flex-col items-center justify-center p-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto relative z-10"
        >
          <div className="mb-8">
            <Logo size="large" />
          </div>
          
          <motion.h2 
            className="text-xl md:text-2xl mt-4 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Personalized Partner, Instantly
          </motion.h2>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.9 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button onClick={handleStartChat}>
              Start a Chat
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-white/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 0.8 : 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p>Experience personalized conversations designed just for you</p>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-accent/20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 0.6 : 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
        
        <motion.div
          className="absolute top-20 left-20 h-60 w-60 rounded-full bg-accent/10 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 0.4 : 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        />
      </div>

      <AgeVerificationModal 
        open={ageModalOpen} 
        onClose={() => setAgeModalOpen(false)} 
        onConfirm={handleAgeVerified} 
      />
      
      <CustomizationModal 
        open={customizationModalOpen}
        onClose={() => setCustomizationModalOpen(false)}
        onComplete={handleCustomizationComplete}
      />
    </MainLayout>
  );
};

export default LandingPage;
