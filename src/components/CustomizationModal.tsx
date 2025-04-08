
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Button from './Button';

interface CustomizationModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const CustomizationModal: React.FC<CustomizationModalProps> = ({ open, onClose, onComplete }) => {
  const [formData, setFormData] = useState({
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

  const handleCheckboxChange = (trait: keyof typeof formData.personality) => {
    setFormData({
      ...formData,
      personality: {
        ...formData.personality,
        [trait]: !formData.personality[trait],
      },
    });
  };

  const handleSubmit = () => {
    // In a real app, you would save this data to context or state manager
    console.log('Customization data:', formData);
    onComplete();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-primary border border-white/20 sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl text-center text-white">Customize Your Partner</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4 text-white">
          <div className="grid gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select 
              onValueChange={(value) => setFormData({...formData, gender: value})}
            >
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="bg-primary border border-white/20">
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="non-binary">Non-binary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ethnicity">Ethnicity</Label>
            <Select
              onValueChange={(value) => setFormData({...formData, ethnicity: value})}
            >
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select ethnicity" />
              </SelectTrigger>
              <SelectContent className="bg-primary border border-white/20">
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="hispanic">Hispanic</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="middle-eastern">Middle Eastern</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label className="text-lg font-medium">Personality Traits</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="romantic" 
                  checked={formData.personality.romantic}
                  onCheckedChange={() => handleCheckboxChange('romantic')}
                  className="border-white"
                />
                <label htmlFor="romantic" className="text-sm font-medium leading-none cursor-pointer">Romantic</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="shy" 
                  checked={formData.personality.shy}
                  onCheckedChange={() => handleCheckboxChange('shy')}
                  className="border-white"
                />
                <label htmlFor="shy" className="text-sm font-medium leading-none cursor-pointer">Shy</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="playful" 
                  checked={formData.personality.playful}
                  onCheckedChange={() => handleCheckboxChange('playful')}
                  className="border-white"
                />
                <label htmlFor="playful" className="text-sm font-medium leading-none cursor-pointer">Playful</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="dominant" 
                  checked={formData.personality.dominant}
                  onCheckedChange={() => handleCheckboxChange('dominant')}
                  className="border-white"
                />
                <label htmlFor="dominant" className="text-sm font-medium leading-none cursor-pointer">Dominant</label>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="hairColor">Hair Color</Label>
            <Select
              onValueChange={(value) => setFormData({...formData, hairColor: value})}
            >
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select hair color" />
              </SelectTrigger>
              <SelectContent className="bg-primary border border-white/20">
                <SelectItem value="blonde">Blonde</SelectItem>
                <SelectItem value="brown">Brown</SelectItem>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="colorful">Colorful</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="bodyType">Body Type</Label>
            <Select
              onValueChange={(value) => setFormData({...formData, bodyType: value})}
            >
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select body type" />
              </SelectTrigger>
              <SelectContent className="bg-primary border border-white/20">
                <SelectItem value="slim">Slim</SelectItem>
                <SelectItem value="athletic">Athletic</SelectItem>
                <SelectItem value="curvy">Curvy</SelectItem>
                <SelectItem value="plus-size">Plus Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="style">Style</Label>
            <Select
              onValueChange={(value) => setFormData({...formData, style: value})}
            >
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent className="bg-primary border border-white/20">
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="elegant">Elegant</SelectItem>
                <SelectItem value="alternative">Alternative</SelectItem>
                <SelectItem value="sporty">Sporty</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit}>Begin Chat</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomizationModal;
