import { motion } from "framer-motion";
import { Calendar, Mail, MessageSquare, Users, Zap, CheckCircle2, Globe } from "lucide-react";

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
          How Asmi Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {/* Panel 1: Learns Your Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Animated Background - Icons streaming to center */}
              <div className="absolute inset-0 overflow-hidden opacity-15">
                {[Calendar, Mail, MessageSquare, Globe].map((Icon, i) => {
                  const angle = (i * 360) / 4;
                  const startX = Math.cos((angle * Math.PI) / 180) * 200;
                  const startY = Math.sin((angle * Math.PI) / 180) * 200;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      initial={{ x: startX, y: startY, opacity: 0, scale: 0.5 }}
                      whileInView={{ 
                        x: [startX, 0, Math.cos((angle * Math.PI) / 180) * 60],
                        y: [startY, 0, Math.sin((angle * Math.PI) / 180) * 60],
                        opacity: [0, 1, 0.8],
                        scale: [0.5, 1.2, 0.8],
                        rotate: [0, 180, 360]
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15,
                        duration: 2,
                        times: [0, 0.5, 1],
                        ease: "anticipate"
                      }}
                    >
                      <Icon className="w-12 h-12" />
                    </motion.div>
                  );
                })}
                
                {/* Connecting lines */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute left-1/2 top-1/2 w-0.5 h-24 bg-gradient-to-b from-primary/30 to-transparent origin-top"
                    initial={{ scaleY: 0, rotate: (i * 90) }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    style={{ transform: `rotate(${i * 90}deg)` }}
                  />
                ))}
              </div>

              {/* Central Brain */}
              <motion.div
                className="relative z-10 mb-8"
                whileInView={{ scale: [0, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
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
                  <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Learns Your Patterns
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                Asmi learns from your calendar, emails, chats, and internet activity—understanding what's important to you.
              </p>
            </div>
          </motion.div>

          {/* Panel 2: Team of Smart Helpers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Network Animation - Agents multiplying and connecting */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {[...Array(6)].map((_, i) => {
                  const radius = 80;
                  const angle = (i * 60 * Math.PI) / 180;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ 
                          scale: [0, 0.5, 1.2, 1], 
                          opacity: [0, 0.5, 1, 1],
                          x: Math.cos(angle) * radius,
                          y: Math.sin(angle) * radius,
                        }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.3 + i * 0.12, 
                          duration: 1,
                          times: [0, 0.3, 0.7, 1],
                          ease: "backOut"
                        }}
                      >
                        <Zap className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      {/* Connection lines */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 w-20 h-0.5 bg-gradient-to-r from-accent/50 to-transparent origin-left"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        style={{ 
                          rotate: `${(i * 60) + 180}deg`,
                          x: Math.cos(angle) * radius,
                          y: Math.sin(angle) * radius,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Central Hub */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
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
                  <Users className="w-14 h-14 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Team of Smart Helpers
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                AI helpers coordinate together to get it done fast and right.
              </p>
            </div>
          </motion.div>

          {/* Panel 3: Gets It Done */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Task List Animation - Tasks completing with progress */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 opacity-15 px-8">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-full flex items-center space-x-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: [0, 1, 1, 0.7], x: [0, 0, 0, 10] }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.3 + i * 0.25,
                      duration: 2,
                      times: [0, 0.2, 0.8, 1]
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: [0, 1.3, 1], rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.5 + i * 0.25, 
                        duration: 0.6,
                        times: [0, 0.6, 1],
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </motion.div>
                    
                    {/* Progress bar filling */}
                    <div className="h-2 bg-muted rounded-full flex-1 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.6 + i * 0.25,
                          duration: 0.8,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
                
                {/* Confetti particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`confetti-${i}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: `hsl(${(i * 45) % 360}, 70%, 60%)`,
                      left: '50%',
                      top: '50%'
                    }}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                    whileInView={{
                      scale: [0, 1, 0],
                      x: Math.cos((i * 45 * Math.PI) / 180) * 60,
                      y: Math.sin((i * 45 * Math.PI) / 180) * 60,
                      opacity: [0, 1, 0]
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.5,
                      duration: 1.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>

              {/* Central Checkmark */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 200 }}
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
                  <CheckCircle2 className="w-14 h-14 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Gets It Done
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                From meetings to trips to hiring—Asmi finishes what you start.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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