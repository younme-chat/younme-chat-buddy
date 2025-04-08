
import React, { useState } from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import AgeVerificationModal from '../components/AgeVerificationModal';
import CustomizationModal from '../components/CustomizationModal';

const LandingPage: React.FC = () => {
  const [ageModalOpen, setAgeModalOpen] = useState(false);
  const [customizationModalOpen, setCustomizationModalOpen] = useState(false);
  const navigate = useNavigate();

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
      <div className="min-h-[90vh] flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-xl mx-auto">
          <Logo size="large" />
          <h2 className="text-xl md:text-2xl mt-4 text-white/80">
            Your Personalized Partner, Instantly
          </h2>
          <div className="mt-12">
            <Button onClick={handleStartChat}>
              Start a Chat
            </Button>
          </div>
        </div>
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
