
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <Logo />
          <h1 className="text-3xl font-bold mt-6 text-white">Privacy Policy</h1>
        </div>
        
        <div className="max-w-3xl mx-auto text-white/80 space-y-6">
          <p>
            At YouNMe, we take your privacy seriously. This Privacy Policy outlines how we collect,
            use, and protect your personal information when you use our service.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">Information We Collect</h2>
          <p>
            We collect information you provide when customizing your AI companion, including preferences
            and chat messages. We also collect technical information such as device type and usage statistics
            to improve our service.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our service, personalize your experience,
            and communicate with you. We do not sell your personal information to third parties.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>
          
          <div className="pt-6">
            <Link to="/" className="text-accent hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;
