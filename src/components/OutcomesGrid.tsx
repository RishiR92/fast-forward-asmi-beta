import { motion } from "framer-motion";
import { HelpCircle, Lightbulb, CheckCircle2, Wrench, Network } from "lucide-react";

export const OutcomesGrid = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mb-24 text-foreground"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {/* Step 1: Helps You Understand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Question marks floating around */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-muted-foreground"
                    initial={{ 
                      x: `${20 + i * 15}%`,
                      y: `${30 + i * 10}%`,
                      opacity: 0,
                      scale: 0.5
                    }}
                    whileInView={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 1.2],
                      rotate: [0, 360]
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15,
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                  >
                    <HelpCircle className="w-12 h-12" />
                  </motion.div>
                ))}
              </div>

              {/* Central Lightbulb - appears after questions */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl">
                  <Lightbulb className="w-14 h-14 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Helps You Understand
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                Asmi first helps users understand what's bogging them down.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Takes It Off Your Plate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Tasks floating away */}
              <div className="absolute inset-0 overflow-hidden opacity-15">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-3 bg-muted rounded-full"
                    initial={{ 
                      x: `${40}%`,
                      y: `${50}%`,
                      opacity: 1
                    }}
                    whileInView={{ 
                      y: `${-20 - i * 10}%`,
                      opacity: [1, 0.8, 0],
                      scale: [1, 0.8, 0.6]
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2,
                      duration: 1.8,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>

              {/* Central Icon - checkmark emerging */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 150 }}
              >
                <motion.div
                  className="absolute inset-0 bg-accent/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl">
                  <motion.div
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <CheckCircle2 className="w-14 h-14 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Takes It Off Your Plate
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                It takes those tasks off their plate.
              </p>
            </div>
          </motion.div>

          {/* Step 3: Shifts to High-Agency Mode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Tool icons connecting to center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 360) / 8;
                  const radius = 90;
                  return (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ 
                        scale: 0,
                        opacity: 0,
                        x: 0,
                        y: 0
                      }}
                      whileInView={{ 
                        scale: 1,
                        opacity: 1,
                        x: Math.cos(angle * Math.PI / 180) * radius,
                        y: Math.sin(angle * Math.PI / 180) * radius
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.1,
                        duration: 0.6,
                        type: "spring"
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Wrench className="w-4 h-4 text-white" />
                      </div>
                      {/* Connection line to center */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                        style={{
                          width: `${radius}px`,
                          transform: `rotate(${angle + 180}deg)`,
                          transformOrigin: 'left center'
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Central Hub - Network orchestrating */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Network className="w-14 h-14 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Shifts to High-Agency Mode
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                It asks for access to the right tools as required → then gradually shifts into high-agency mode, managing work, personal, and family tasks end-to-end.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-foreground/90 leading-relaxed">
            "An outcome-first, always-on Chief of Staff for your life."
          </p>
        </motion.div>
      </div>
    </section>
  );
};