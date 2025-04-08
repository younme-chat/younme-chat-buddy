
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, UserRound, Users, Brain, Brush, Heart, Star, Check } from 'lucide-react';

interface FullscreenCustomizationProps {
  initialStep: string;
  onClose: () => void;
  onComplete: () => void;
}

const FullscreenCustomization: React.FC<FullscreenCustomizationProps> = ({
  initialStep,
  onClose,
  onComplete,
}) => {
  const [formData, setFormData] = useState({
    ageVerified: false,
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

  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleCheckboxChange = (trait: keyof typeof formData.personality) => {
    setFormData({
      ...formData,
      personality: {
        ...formData.personality,
        [trait]: !formData.personality[trait],
      },
    });
  };

  const nextStep = (nextStepId: string) => {
    setCurrentStep(nextStepId);
  };

  const steps = {
    age: {
      id: 'age',
      title: "Please verify you're at least 18 years old",
      component: (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl text-center max-w-md mb-12">
            This app contains content that is only suitable for adults.
            By continuing, you confirm that you are at least 18 years old.
          </p>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="px-8 py-6 text-lg"
            >
              Go Back
            </Button>
            <Button
              onClick={() => {
                setFormData({ ...formData, ageVerified: true });
                nextStep('name');
              }}
              className="px-8 py-6 text-lg"
            >
              I am 18+ years old
            </Button>
          </div>
        </div>
      )
    },
    name: {
      id: 'name',
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "What would you like to name your partner?",
      component: (
        <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto">
          <Input
            placeholder="Enter a name"
            value={formData.partnerName}
            onChange={(e) => setFormData({...formData, partnerName: e.target.value})}
            className="input-field text-center text-xl mb-12 py-6"
          />
          <Button 
            onClick={() => nextStep('gender')}
            className="px-8 py-6 text-lg"
            disabled={!formData.partnerName.trim()}
          >
            Continue
          </Button>
        </div>
      )
    },
    gender: {
      id: 'gender',
      icon: <UserRound className="h-8 w-8 text-accent" />,
      title: "Who would you like to talk to?",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mx-auto">
          <button 
            className={`p-12 rounded-xl flex flex-col items-center justify-center transition-all ${
              formData.gender === 'female' ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => {
              setFormData({...formData, gender: 'female'});
              setTimeout(() => nextStep('ethnicity'), 500);
            }}
          >
            <UserRound size={64} />
            <span className="mt-4 text-xl">Female</span>
          </button>
          <button 
            className={`p-12 rounded-xl flex flex-col items-center justify-center transition-all ${
              formData.gender === 'male' ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => {
              setFormData({...formData, gender: 'male'});
              setTimeout(() => nextStep('ethnicity'), 500);
            }}
          >
            <UserRound size={64} />
            <span className="mt-4 text-xl">Male</span>
          </button>
          <button 
            className={`p-12 rounded-xl flex flex-col items-center justify-center transition-all ${
              formData.gender === 'non-binary' ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => {
              setFormData({...formData, gender: 'non-binary'});
              setTimeout(() => nextStep('ethnicity'), 500);
            }}
          >
            <UserRound size={64} />
            <span className="mt-4 text-xl">Non-binary</span>
          </button>
        </div>
      )
    },
    ethnicity: {
      id: 'ethnicity',
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Select ethnicity",
      component: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
          {['Asian', 'Black', 'Hispanic', 'White', 'Middle Eastern', 'Mixed'].map((ethnicity) => (
            <button 
              key={ethnicity}
              className={`p-8 rounded-xl flex items-center justify-center transition-all ${
                formData.ethnicity === ethnicity.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
              }`}
              onClick={() => {
                setFormData({...formData, ethnicity: ethnicity.toLowerCase()});
                setTimeout(() => nextStep('personality'), 500);
              }}
            >
              <span className="text-xl">{ethnicity}</span>
            </button>
          ))}
        </div>
      )
    },
    personality: {
      id: 'personality',
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "What personality traits do you prefer?",
      component: (
        <div className="w-full max-w-3xl mx-auto">
          <p className="text-lg text-white/70 mb-8 text-center">Select all that apply</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 'romantic', label: 'Romantic', icon: <Heart className="h-12 w-12" /> },
              { id: 'shy', label: 'Shy', icon: <Star className="h-12 w-12" /> },
              { id: 'playful', label: 'Playful', icon: <Star className="h-12 w-12 rotate-45" /> },
              { id: 'dominant', label: 'Confident', icon: <Star className="h-12 w-12 -rotate-45" /> }
            ].map((trait) => (
              <button 
                key={trait.id}
                className={`p-8 rounded-xl flex flex-col items-center justify-center transition-all ${
                  formData.personality[trait.id as keyof typeof formData.personality] ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                }`}
                onClick={() => handleCheckboxChange(trait.id as keyof typeof formData.personality)}
              >
                {trait.icon}
                <span className="mt-4 text-xl">{trait.label}</span>
                {formData.personality[trait.id as keyof typeof formData.personality] && (
                  <div className="absolute top-2 right-2">
                    <Check className="h-6 w-6" />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button 
              onClick={() => nextStep('appearance')}
              className="px-8 py-6 text-lg"
            >
              Continue
            </Button>
          </div>
        </div>
      )
    },
    appearance: {
      id: 'appearance',
      icon: <Brush className="h-8 w-8 text-accent" />,
      title: "Customize appearance",
      component: (
        <div className="space-y-12 w-full max-w-3xl mx-auto">
          <div className="space-y-4">
            <Label className="text-center block text-xl mb-6">Hair Color</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Blonde', 'Brown', 'Black', 'Red', 'Colorful'].map((color) => (
                <button 
                  key={color}
                  className={`p-4 rounded-lg flex items-center justify-center h-16 transition-all ${
                    formData.hairColor === color.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setFormData({...formData, hairColor: color.toLowerCase()})}
                >
                  <span className="text-lg">{color}</span>
                  {formData.hairColor === color.toLowerCase() && (
                    <Check className="ml-2 h-5 w-5" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <Label className="text-center block text-xl mb-6">Body Type</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Slim', 'Athletic', 'Curvy', 'Plus Size'].map((type) => (
                <button 
                  key={type}
                  className={`p-4 rounded-lg flex items-center justify-center h-16 transition-all ${
                    formData.bodyType === type.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setFormData({...formData, bodyType: type.toLowerCase()})}
                >
                  <span className="text-lg">{type}</span>
                  {formData.bodyType === type.toLowerCase() && (
                    <Check className="ml-2 h-5 w-5" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <Label className="text-center block text-xl mb-6">Style</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Casual', 'Professional', 'Elegant', 'Alternative', 'Sporty'].map((style) => (
                <button 
                  key={style}
                  className={`p-4 rounded-lg flex items-center justify-center h-16 transition-all ${
                    formData.style === style.toLowerCase() ? 'bg-accent text-primary' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setFormData({...formData, style: style.toLowerCase()})}
                >
                  <span className="text-lg">{style}</span>
                  {formData.style === style.toLowerCase() && (
                    <Check className="ml-2 h-5 w-5" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button 
              onClick={onComplete}
              className="px-8 py-6 text-lg"
            >
              Begin Chat
            </Button>
          </div>
        </div>
      )
    }
  };

  const currentStepData = steps[currentStep as keyof typeof steps];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center p-8"
      >
        {currentStep !== 'age' && (
          <button 
            onClick={() => onClose()}
            className="absolute top-6 left-6 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={32} />
          </button>
        )}
        
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {currentStepData.title}
          </h1>
        </div>
        
        {currentStepData.component}
        
        {/* Progress indicator for all steps except age verification */}
        {currentStep !== 'age' && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {Object.values(steps).filter(step => step.id !== 'age').map((step) => (
              <div
                key={step.id}
                className={`w-3 h-3 rounded-full ${
                  currentStep === step.id ? 'bg-accent' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FullscreenCustomization;
