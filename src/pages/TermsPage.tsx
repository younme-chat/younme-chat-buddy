
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <Logo />
          <h1 className="text-3xl font-bold mt-6 text-white">Terms of Service</h1>
        </div>
        
        <div className="max-w-3xl mx-auto text-white/80 space-y-6">
          <p>
            By accessing or using the YouNMe service, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our service.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">Age Requirement</h2>
          <p>
            YouNMe is intended for users who are 18 years of age or older. By using the service,
            you confirm that you are at least 18 years old.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">User Conduct</h2>
          <p>
            You agree to use YouNMe only for lawful purposes and in a manner that does not infringe
            upon the rights of others. You are solely responsible for your interactions with the AI.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">Limitation of Liability</h2>
          <p>
            YouNMe provides fictional AI companions for entertainment purposes only. We are not
            responsible for any emotional attachment or decisions made based on interactions with the AI.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">Payments and Subscriptions</h2>
          <p>
            If you choose to purchase additional messages or features, you agree to pay all fees
            associated with your account. All purchases are final and non-refundable unless required by law.
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

export default TermsPage;
