import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-shapes ${Math.random() * 8 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-full h-full border-2 border-primary rounded-full" />
            ) : i % 3 === 1 ? (
              <div className="w-full h-full border-2 border-primary" style={{ transform: 'rotate(45deg)' }} />
            ) : (
              <div className="w-full h-full border-2 border-accent" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {stage === 'stage1' && (
            <motion.div
              key="stage1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">
                {["People", "don't", "want", "more", "tools.", "They", "want", "Sh*t", "done."].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.15, duration: 0.3 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          )}

          {stage === 'stage2' && (
            <motion.div
              key="stage2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground mb-6">
                F**k tools.
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground font-light">
                Unveiling the next big revolution...
              </p>
            </motion.div>
          )}

          {stage === 'stage3' && (
            <motion.div
              key="stage3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="shimmer-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium mb-8">
                Asmi
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl text-foreground/80 font-light">
                The AI That Gets Things Done
              </p>
              <p className="text-xl sm:text-2xl text-muted-foreground mt-6 font-light">
                Your AI Chief of Staff
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator - only show in stage 3 */}
      {stage === 'stage3' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      )}
    </section>
  );
};
