
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendIcon, ImageIcon, AlertTriangleIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import AnimatedBackground from '../components/AnimatedBackground';

// Define message type
interface Message {
  id: number;
  isUser: boolean;
  text: string;
  timestamp: Date;
}

const MAX_FREE_MESSAGES = 50;
const MAX_IMAGES = 2;

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [imagesRequested, setImagesRequested] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showLeaveWarning, setShowLeaveWarning] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Initial greeting message
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          isUser: false,
          text: "Hi there! I'm so excited to chat with you. What would you like to talk about today?",
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Session end warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    if (messages.length >= MAX_FREE_MESSAGES) {
      setShowPaymentModal(true);
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      isUser: true,
      text: input,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        isUser: false,
        text: generateAIResponse(input),
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleRequestImage = () => {
    if (imagesRequested >= MAX_IMAGES) {
      setShowPaymentModal(true);
      return;
    }
    
    toast.success("Image request sent! Images will be available in the premium version.");
    setImagesRequested(prev => prev + 1);
  };

  const handlePayment = () => {
    // In a real app, this would handle payment processing
    toast.info("Payment feature will be implemented in the next version.");
    setShowPaymentModal(false);
  };

  // Simple AI response generator
  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "That's interesting! Tell me more about it.",
      "I'd love to hear your thoughts on that.",
      "How does that make you feel?",
      "I'm here for you. What else is on your mind?",
      "I understand. Please share more if you'd like.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleLeaveChat = () => {
    navigate('/');
  };
  
  const remainingMessages = MAX_FREE_MESSAGES - messages.filter(m => m.isUser).length;

  return (
    <div className="flex flex-col h-screen">
      {/* Background */}
      <AnimatedBackground />
      
      {/* Header */}
      <header className="bg-primary/80 backdrop-blur-md border-b border-white/20 p-3 flex justify-between items-center relative z-10">
        <Logo size="small" />
        <div className="text-white/80 text-sm">
          {remainingMessages}/{MAX_FREE_MESSAGES} messages left
        </div>
      </header>
      
      {/* Chat Container */}
      <div className="flex flex-grow overflow-hidden relative z-10">
        {/* Chat Panel */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4 max-w-3xl mx-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!message.isUser && (
                    <Avatar className="h-8 w-8 mr-2">
                      <div className="w-full h-full flex items-center justify-center bg-accent text-primary text-sm font-bold">
                        P
                      </div>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.isUser
                        ? "bg-accent text-primary"
                        : "bg-white/10 backdrop-blur-md text-white"
                    }`}
                  >
                    <p>{message.text}</p>
                    <div
                      className={`text-xs mt-1 ${
                        message.isUser ? "text-primary/60" : "text-white/60"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                  {message.isUser && (
                    <Avatar className="h-8 w-8 ml-2">
                      <div className="w-full h-full flex items-center justify-center bg-primary-foreground/10 text-white text-sm font-bold">
                        U
                      </div>
                    </Avatar>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <Avatar className="h-8 w-8 mr-2">
                    <div className="w-full h-full flex items-center justify-center bg-accent text-primary text-sm font-bold">
                      P
                    </div>
                  </Avatar>
                  <div className="bg-white/10 backdrop-blur-md text-white/70 rounded-2xl p-3 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-white/70 rounded-full animate-pulse"></div>
                      <div className="h-2 w-2 bg-white/70 rounded-full animate-pulse delay-100"></div>
                      <div className="h-2 w-2 bg-white/70 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Image request button */}
          <div className="flex justify-center p-2 border-t border-white/20">
            <button 
              onClick={handleRequestImage}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white py-1.5 px-3 rounded-lg text-sm"
              disabled={imagesRequested >= MAX_IMAGES}
            >
              <ImageIcon size={16} />
              <span>Request Image ({imagesRequested}/{MAX_IMAGES})</span>
            </button>
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-white/20">
            <form onSubmit={handleSendMessage} className="flex space-x-2 max-w-3xl mx-auto">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="backdrop-blur-md bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
              />
              <Button 
                type="submit" 
                className="bg-accent text-primary hover:bg-accent/90"
              >
                <SendIcon size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Session warning button */}
      <div className="fixed bottom-4 right-4 z-20">
        <button
          onClick={() => setShowLeaveWarning(true)}
          className="bg-destructive/80 text-white p-2 rounded-full hover:bg-destructive transition-colors"
        >
          <AlertTriangleIcon size={20} />
        </button>
      </div>
      
      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="bg-primary border border-white/20 sm:max-w-md">
          <DialogTitle className="text-xl text-center text-white">
            You've reached your free limit
          </DialogTitle>
          <DialogDescription className="text-white/80 text-center">
            <div className="my-4">
              Upgrade now to continue your conversation and unlock additional features.
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-medium text-white">Rs.49 for 100 more messages</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-medium text-white">Rs.99 for 5 more images</p>
              </div>
            </div>
          </DialogDescription>
          <DialogFooter className="sm:justify-center">
            <Button
              onClick={handlePayment}
              className="bg-accent text-primary hover:bg-accent/90"
            >
              Make Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Leave Warning Modal */}
      <Dialog open={showLeaveWarning} onOpenChange={setShowLeaveWarning}>
        <DialogContent className="bg-primary border border-white/20 sm:max-w-md">
          <DialogTitle className="text-xl text-center text-white">
            Warning!
          </DialogTitle>
          <DialogDescription className="text-white/80 text-center">
            <div className="my-4">
              Closing or refreshing this tab will permanently delete your chat session.
            </div>
            <div className="my-4 font-medium">
              Are you sure you want to leave?
            </div>
          </DialogDescription>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button 
              variant="outline"
              onClick={() => setShowLeaveWarning(false)}
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              Stay
            </Button>
            <Button 
              onClick={handleLeaveChat}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              Leave Chat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatPage;
