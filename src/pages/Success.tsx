
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Success = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  const names = ['Lalit', 'Megha', 'Aarav', 'Nirali', 'Sohail', 'Mira', 'Ankit'];
  const targetWaitlistNumber = 5037;

  // Animate waitlist number count-up
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
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
    <div className="min-h-screen bg-[#0D0D0D] font-inter relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <Link to="/" className="text-white font-general-sans text-xl font-semibold">
          Asmi
        </Link>
        <Link 
          to="/" 
          className="text-muted-foreground hover:text-white transition-colors duration-300 text-sm hover:underline"
        >
          ← Back to home
        </Link>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-6" style={{ marginTop: '15vh' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-sm"
        >
          {/* Success Card */}
          <div className="glass-card-dark rounded-2xl p-6 relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/20 to-primary/20 p-[1px]">
              <div className="w-full h-full bg-[#1A1A1A] rounded-2xl"></div>
            </div>
            
            <div className="relative z-10 text-center space-y-4">
              {/* Success Emoji */}
              <div className="text-4xl mb-4">🎉</div>
              
              {/* Main Message */}
              <h1 className="text-white font-general-sans text-xl font-semibold leading-tight">
                You're officially in.
              </h1>
              
              {/* Animated Name Section */}
              <div className="text-muted-foreground text-base leading-relaxed">
                <span>You'll soon join the same inner circle as </span>
                
                {/* iOS-style animated name picker */}
                <div className="inline-block relative h-7 w-20 overflow-hidden">
                  {/* Fade masks */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-[#1A1A1A] to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10"></div>
                  
                  {/* Scrolling names */}
                  <motion.div
                    animate={{ y: -currentNameIndex * 28 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="space-y-1"
                  >
                    {[...names, names[0]].map((name, index) => (
                      <div
                        key={index}
                        className="h-7 flex items-center justify-center font-general-sans font-semibold text-lg gradient-text-primary"
                      >
                        {name}
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                <span className="block mt-2">
                  makers, founders, thinkers, and doers who move fast and think deeper.
                </span>
              </div>
              
              {/* Waitlist Position */}
              <div className="text-muted-foreground text-base">
                <span>You're </span>
                <span className="font-semibold text-primary data-display">
                  #{waitlistNumber.toLocaleString()}
                </span>
                <span> in line — and it's always moving.</span>
              </div>
              
              {/* Final Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="text-white font-medium text-base pt-2"
              >
                <span className="gradient-text-primary">🪄 We'll be in touch soon.</span>
              </motion.div>
            </div>
          </div>
          
          {/* Optional CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="text-center mt-6"
          >
            <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:underline">
              Want to move faster? Invite a friend →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
