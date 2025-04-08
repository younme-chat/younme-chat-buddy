
import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import FullscreenCustomization from '../components/FullscreenCustomization';

const LandingPage: React.FC = () => {
  const [customizationStep, setCustomizationStep] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Delay animation to allow page to load
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleStartChat = () => {
    setCustomizationStep('age');
  };

  const handleCustomizationComplete = () => {
    navigate('/chat');
  };

  return (
    <MainLayout>
      {customizationStep ? (
        <FullscreenCustomization 
          initialStep={customizationStep}
          onComplete={handleCustomizationComplete}
          onClose={() => setCustomizationStep(null)}
        />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-16">
              <Logo size="large" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-accent rounded-3xl p-8 flex items-center justify-center">
                <Button 
                  variant="primary" 
                  onClick={handleStartChat}
                  className="w-full text-xl font-bold py-6"
                >
                  START CHATTING
                </Button>
              </div>
              
              <Link to="/about" className="bg-primary border-2 border-accent rounded-3xl p-8 flex items-center justify-center hover:bg-primary/90 transition-colors">
                <span className="text-white text-xl font-bold">About Us</span>
              </Link>
              
              <Link to="/terms" className="bg-primary border-2 border-accent rounded-3xl p-8 flex items-center justify-center hover:bg-primary/90 transition-colors">
                <span className="text-white text-xl font-bold">Terms & Conditions</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/privacy" className="bg-primary border-2 border-accent rounded-3xl p-8 flex items-center justify-center hover:bg-primary/90 transition-colors">
                <span className="text-white text-xl font-bold">Privacy Policy</span>
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                <Link to="/contact" className="bg-primary border-2 border-accent rounded-3xl p-8 flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <span className="text-white text-xl font-bold">Contact us</span>
                </Link>
                
                <div className="bg-accent rounded-3xl p-8 flex flex-col items-center justify-center">
                  <h3 className="text-primary text-xl font-bold mb-4">Follow US</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      <Instagram size={32} />
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                      <Linkedin size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </MainLayout>
  );
};

export default LandingPage;
