import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type HeroStage = 'stage1' | 'stage2' | 'stage3';

export const HeroSection = () => {
  const [stage, setStage] = useState<HeroStage>('stage1');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('stage2'), 3000);
    const timer2 = setTimeout(() => setStage('stage3'), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      <AnimatePresence mode="wait">
        {stage === 'stage1' && (
          <motion.div
            key="stage1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 text-center max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Particle effects */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-accent/40"
                  initial={{ 
                    scale: 0,
                    x: 0,
                    y: 0,
                    opacity: 0
                  }}
                  animate={{ 
                    scale: [0, 1, 0],
                    x: Math.cos(i * 18 * Math.PI / 180) * 300,
                    y: Math.sin(i * 18 * Math.PI / 180) * 300,
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: i * 0.05,
                    ease: "easeOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%'
                  }}
                />
              ))}
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight relative"
                style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: 0
                }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                People don't want more tools.
                <br />
                <motion.span 
                  className="text-accent"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1.05, 1] }}
                  transition={{ 
                    duration: 0.6,
                    delay: 1,
                    times: [0, 0.6, 1]
                  }}
                >
                  They want Sh*t done.
                </motion.span>
              </motion.h1>
            </div>
          </motion.div>
        )}

        {stage === 'stage2' && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 text-center max-w-6xl mx-auto"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight"
              style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                F**k tools.
              </motion.span>
              <br />
              <motion.span 
                className="text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {"Unveiling the next big revolution...".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.03, delay: 0.5 + i * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
          </motion.div>
        )}

        {stage === 'stage3' && (
          <motion.div
            key="stage3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-20 text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ rotateX: 90, opacity: 0, y: 100 }}
              animate={{ 
                rotateX: 0, 
                opacity: 1,
                y: 0
              }}
              transition={{ 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-8 leading-tight">
                <span className="relative inline-block">
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                      textShadow: '0 0 60px rgba(168, 85, 247, 0.5)'
                    }}
                  >
                    Asmi
                  </motion.span>
                  <span className="relative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Asmi
                  </span>
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-5xl text-white font-light max-w-5xl mx-auto"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
              >
                The AI That Gets Things Done
              </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white/60"
              >
                <svg
                  className="w-6 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
