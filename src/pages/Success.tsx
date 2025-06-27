
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Success = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  const names = ['Lalit', 'Megha', 'Aarav', 'Nirali', 'Sohail', 'Mira', 'Ankit'];
  const targetWaitlistNumber = 47;

  // Animate waitlist number count-up
  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const increment = targetWaitlistNumber / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setWaitlistNumber(Math.floor(increment * currentStep));
      
      if (currentStep >= steps) {
        setWaitlistNumber(targetWaitlistNumber);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Animate name scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % names.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <div className="min-h-screen bg-background font-inter relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <Link to="/" className="text-foreground font-inter text-xl font-semibold">
          Asmi
        </Link>
        <Link 
          to="/" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
        >
          ← Back
        </Link>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-6 min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-lg text-center"
        >
          {/* Revolutionary Message */}
          <div className="space-y-8">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
              className="text-6xl mb-6"
            >
              ⚡
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-foreground font-inter text-3xl font-bold leading-tight"
            >
              Welcome to the revolution.
            </motion.h1>
            
            {/* Animated Name Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              <span>You're now part of the same inner circle as </span>
              
              {/* Name picker */}
              <div className="inline-block relative h-8 w-20 overflow-hidden mx-1">
                <motion.div
                  animate={{ y: -currentNameIndex * 32 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-1"
                >
                  {[...names, names[0]].map((name, index) => (
                    <div
                      key={index}
                      className="h-8 flex items-center justify-center font-semibold text-primary"
                    >
                      {name}
                    </div>
                  ))}
                </motion.div>
              </div>
              
              <span className="block mt-4">
                and other pioneers building the future.
              </span>
            </motion.div>
            
            {/* Position Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3"
            >
              <span className="text-muted-foreground">Position</span>
              <span className="font-bold text-2xl text-primary font-mono">
                #{waitlistNumber}
              </span>
            </motion.div>
            
            {/* Final Revolutionary Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-foreground font-medium text-lg pt-4"
            >
              The future moves fast. <br />
              <span className="text-primary font-semibold">You're already ahead.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
