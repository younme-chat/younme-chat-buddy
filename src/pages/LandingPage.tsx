
import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';
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
      <div className="h-screen flex flex-col items-center justify-center p-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-md mx-auto relative z-10"
        >
          <div className="mb-10">
            <Logo size="large" />
          </div>
          
          <motion.h2 
            className="text-xl md:text-2xl text-white/80 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Personalized Partner, Instantly
          </motion.h2>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.9 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button onClick={handleStartChat} className="text-lg py-4 px-8">
              Start a Chat
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-white/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 0.8 : 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p>Experience personalized conversations designed just for you</p>
          </motion.div>
        </motion.div>
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
