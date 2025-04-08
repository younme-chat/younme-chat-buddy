
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center text-white/80 text-sm">
      <div className="flex justify-center space-x-4">
        <Link to="/about" className="hover:text-accent transition-colors">About</Link>
        <span>|</span>
        <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
        <span>|</span>
        <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
        <span>|</span>
        <Link to="/age-verification" className="hover:text-accent transition-colors">18+</Link>
      </div>
      <p className="mt-2">© {new Date().getFullYear()} YouNMe</p>
    </footer>
  );
};

export default Footer;
