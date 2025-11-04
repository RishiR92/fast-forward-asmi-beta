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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10" />
        <img 
          src="/images/hero-calm.jpg" 
          alt="Calm background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {stage === 'stage1' && (
            <motion.div
              key="stage1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {["People", "don't", "want", "more", "tools."].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mx-2"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h1
                className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {["They", "want", "Sh*t", "done."].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mx-2"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1 + i * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          )}

          {stage === 'stage2' && (
            <motion.div
              key="stage2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl sm:text-7xl lg:text-8xl font-semibold text-foreground"
                initial={{ opacity: 0, rotateX: -15 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8 }}
              >
                F**k tools.
              </motion.h1>
              <motion.p
                className="text-2xl sm:text-4xl lg:text-5xl font-light text-foreground/90 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Unveiling the next big revolution...
              </motion.p>
            </motion.div>
          )}

          {stage === 'stage3' && (
            <motion.div
              key="stage3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] bg-clip-text text-transparent">
                    Asmi
                  </span>
                </h1>
                <motion.p
                  className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  The AI That Gets Things Done
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-8"
              >
                <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                  Your AI Chief of Staff
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      {stage === 'stage3' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-foreground/60" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
