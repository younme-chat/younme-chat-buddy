
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <Logo />
          <h1 className="text-3xl font-bold mt-6 text-white">About YouNMe</h1>
        </div>
        
        <div className="max-w-3xl mx-auto text-white/80 space-y-6">
          <p>
            YouNMe is a platform designed to provide companionship through AI-powered chat partners
            that can be customized to your preferences. Our mission is to create meaningful connections
            in a safe, judgment-free environment.
          </p>
          
          <p>
            We understand that everyone has different preferences and needs when it comes to
            companionship. That's why we've created a platform that allows you to customize your
            experience, choosing the personality traits and appearance that resonate with you.
          </p>
          
          <p>
            While we strive to create realistic and engaging conversations, please remember that
            YouNMe provides fictional companions. Our AI partners are designed for entertainment
            and companionship purposes only.
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

export default AboutPage;
