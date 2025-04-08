
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white">
      <Logo />
      <h1 className="mt-8 text-4xl font-bold">404</h1>
      <p className="mt-4 text-white/80 text-center max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
