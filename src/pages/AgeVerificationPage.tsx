
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';
import { AlertTriangleIcon } from 'lucide-react';

const AgeVerificationPage: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleVerification = () => {
    setIsVerified(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="min-h-[90vh] flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
              <AlertTriangleIcon size={32} />
            </div>
          </div>
          
          <Logo />
          
          <h1 className="text-2xl font-bold mt-6 text-white">Age Verification</h1>
          
          <div className="mt-6 text-white/80">
            <p className="mb-4">
              This platform may include mature fictional content.
            </p>
            <p className="font-medium">
              You must be 18 years or older to continue.
            </p>
          </div>
          
          {isVerified ? (
            <div className="mt-6 text-green-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Verified! Redirecting...</span>
            </div>
          ) : (
            <div className="mt-8">
              <Button onClick={handleVerification}>
                I Am 18+ And Agree
              </Button>
              <div className="mt-4">
                <button
                  onClick={() => window.location.href = "https://www.google.com"}
                  className="text-white/60 hover:text-white text-sm"
                >
                  I Am Under 18
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default AgeVerificationPage;
