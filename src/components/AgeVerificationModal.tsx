
import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Button from './Button';

interface AgeVerificationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-primary border border-white/20 sm:max-w-md">
        <DialogTitle className="text-xl text-center text-white">Age Verification Required</DialogTitle>
        <DialogDescription className="text-white/80 text-center">
          <div className="mb-4 mt-2">
            This platform may include mature fictional content.
          </div>
          <div className="font-medium">
            You must be 18 years or older to continue.
          </div>
        </DialogDescription>
        <div className="flex justify-center mt-6">
          <Button onClick={onConfirm}>
            I Am 18+ And Agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationModal;
