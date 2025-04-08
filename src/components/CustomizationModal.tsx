
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { UserRound, Users, Brain, Brush, Heart, Star } from 'lucide-react';

interface CustomizationModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: () => void;
}

type StepType = {
  id: string;
  icon: React.ReactNode;
  title: string;
  component: React.ReactNode;
};

const CustomizationModal: React.FC<CustomizationModalProps> = ({ open, onClose, onComplete }) => {
  const [formData, setFormData] = useState({
    partnerName: '',
    gender: '',
    ethnicity: '',
    hairColor: '',
    bodyType: '',
    style: '',
    personality: {
      romantic: false,
      shy: false,
      playful: false,
      dominant: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleCheckboxChange = (trait: keyof typeof formData.personality) => {
    setFormData({
      ...formData,
      personality: {
        ...formData.personality,
        [trait]: !formData.personality[trait],
      },
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps: StepType[] = [
    {
      id: 'name',
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: "What would you like to name your partner?",
      component: (
        <div className="py-8 flex flex-col items-center">
          <Input
            placeholder="Enter a name"
            value={formData.partnerName}
            onChange={(e) => setFormData({...formData, partnerName: e.target.value})}
            className="input-field max-w-xs text-center text-xl"
          />
          <div className="mt-12">
            <Button onClick={nextStep}>Continue</Button>
          </div>
        </div>
      )
    },
    {
      id: 'gender',
      icon: <UserRound className="h-6 w-6 text-accent" />,
      title: "Who would you like to talk to?",
      component: (
        <div className="grid grid-cols-3 gap-4 py-4">
          <button 
            className={`p-4 rounded-xl flex flex-col items-center justify-center h-28 transition-all ${
              formData.gender === 'female' ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => {
              setFormData({...formData, gender: 'female'});
              setTimeout(nextStep, 500);
            }}
          >
            <UserRound size={32} />
            <span className="mt-2">Female</span>
          </button>
          <button 
            className={`p-4 rounded-xl flex flex-col items-center justify-center h-28 transition-all ${
              formData.gender === 'male' ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => {
              setFormData({...formData, gender: 'male'});
              setTimeout(nextStep, 500);
            }}
          >
            <UserRound size={32} />
            <span className="mt-2">Male</span>
          </button>
          <button 
            className={`p-4 rounded-xl flex flex-col items-center justify-center h-28 transition-all ${
              formData.gender === 'non-binary' ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => {
              setFormData({...formData, gender: 'non-binary'});
              setTimeout(nextStep, 500);
            }}
          >
            <UserRound size={32} />
            <span className="mt-2">Non-binary</span>
          </button>
        </div>
      )
    },
    {
      id: 'ethnicity',
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Select ethnicity",
      component: (
        <div className="grid grid-cols-2 gap-4 py-4">
          {['Asian', 'Black', 'Hispanic', 'White', 'Middle Eastern', 'Mixed'].map((ethnicity) => (
            <button 
              key={ethnicity}
              className={`p-4 rounded-xl flex items-center justify-center h-16 transition-all ${
                formData.ethnicity === ethnicity.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
              }`}
              onClick={() => {
                setFormData({...formData, ethnicity: ethnicity.toLowerCase()});
                setTimeout(nextStep, 500);
              }}
            >
              <span>{ethnicity}</span>
            </button>
          ))}
        </div>
      )
    },
    {
      id: 'personality',
      icon: <Brain className="h-6 w-6 text-accent" />,
      title: "What personality traits do you prefer?",
      component: (
        <div className="py-4">
          <p className="text-sm text-white/70 mb-4">Select all that apply</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: 'romantic', label: 'Romantic', icon: <Heart className="h-6 w-6" /> },
              { id: 'shy', label: 'Shy', icon: <Star className="h-6 w-6" /> },
              { id: 'playful', label: 'Playful', icon: <Star className="h-6 w-6 rotate-45" /> },
              { id: 'dominant', label: 'Confident', icon: <Star className="h-6 w-6 -rotate-45" /> }
            ].map((trait) => (
              <button 
                key={trait.id}
                className={`p-4 rounded-xl flex flex-col items-center justify-center h-28 transition-all ${
                  formData.personality[trait.id as keyof typeof formData.personality] ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                }`}
                onClick={() => handleCheckboxChange(trait.id as keyof typeof formData.personality)}
              >
                {trait.icon}
                <span className="mt-2">{trait.label}</span>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button onClick={nextStep}>Continue</Button>
          </div>
        </div>
      )
    },
    {
      id: 'appearance',
      icon: <Brush className="h-6 w-6 text-accent" />,
      title: "Customize appearance",
      component: (
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <Label htmlFor="hairColor" className="text-center block text-lg">Hair Color</Label>
            <div className="grid grid-cols-3 gap-3">
              {['Blonde', 'Brown', 'Black', 'Red', 'Colorful'].map((color) => (
                <button 
                  key={color}
                  className={`p-3 rounded-lg flex items-center justify-center h-14 transition-all ${
                    formData.hairColor === color.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setFormData({...formData, hairColor: color.toLowerCase()})}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="bodyType" className="text-center block text-lg">Body Type</Label>
            <div className="grid grid-cols-2 gap-3">
              {['Slim', 'Athletic', 'Curvy', 'Plus Size'].map((type) => (
                <button 
                  key={type}
                  className={`p-3 rounded-lg flex items-center justify-center h-14 transition-all ${
                    formData.bodyType === type.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setFormData({...formData, bodyType: type.toLowerCase()})}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="style" className="text-center block text-lg">Style</Label>
            <div className="grid grid-cols-2 gap-3">
              {['Casual', 'Professional', 'Elegant', 'Alternative', 'Sporty'].map((style) => (
                <button 
                  key={style}
                  className={`p-3 rounded-lg flex items-center justify-center h-14 transition-all ${
                    formData.style === style.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setFormData({...formData, style: style.toLowerCase()})}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button onClick={onComplete}>Begin Chat</Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-primary border border-white/20 sm:max-w-md max-h-[90vh] overflow-y-auto">
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mb-4 mt-2">
          {steps.map((step, index) => (
            <button 
              key={step.id} 
              className={`rounded-full p-2 transition-all ${
                index === currentStep 
                  ? 'bg-accent text-primary' 
                  : index < currentStep 
                    ? 'bg-white/20' 
                    : 'bg-white/10'
              }`}
              onClick={() => index < currentStep && setCurrentStep(index)}
            >
              {step.icon}
            </button>
          ))}
        </div>
        
        <DialogHeader>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-xl text-center text-white"
            >
              {steps[currentStep].title}
            </motion.div>
          </AnimatePresence>
        </DialogHeader>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            {steps[currentStep].component}
          </motion.div>
        </AnimatePresence>
        
        <DialogFooter className="flex justify-between mt-4">
          {currentStep > 0 && (
            <Button 
              variant="outline" 
              onClick={prevStep}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Back
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomizationModal;
