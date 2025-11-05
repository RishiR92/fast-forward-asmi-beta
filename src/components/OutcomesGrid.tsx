import { motion, useInView } from "framer-motion";
import { Calendar, Mail, MessageSquare, Users, Zap, CheckCircle2, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const OutcomesGrid = () => {
  const sectionRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  
  const step1InView = useInView(step1Ref, { once: false, margin: "-20%" });
  const step2InView = useInView(step2Ref, { once: false, margin: "-20%" });
  const step3InView = useInView(step3Ref, { once: false, margin: "-20%" });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16 sm:mb-20 lg:mb-24 text-foreground px-4"
        >
          How Asmi Works
        </motion.h2>

        {/* Vertical Cinematic Animation Flow */}
        <div className="max-w-3xl mx-auto space-y-32 sm:space-y-40 lg:space-y-48">
          
          {/* Step 1: Learns Your Patterns */}
          <motion.div
            ref={step1Ref}
            initial={{ opacity: 0 }}
            animate={step1InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Animation Area */}
            <motion.div 
              className="relative h-64 sm:h-72 lg:h-80 mb-8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={step1InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Icons streaming to brain */}
              {[Calendar, Mail, MessageSquare, Globe].map((Icon, i) => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                const radius = isMobile ? 150 : 250;
                const angle = (i * 360) / 4;
                const startX = Math.cos((angle * Math.PI) / 180) * radius;
                const startY = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{ 
                      x: startX, 
                      y: startY, 
                      opacity: 0, 
                      scale: 0.5 
                    }}
                    animate={step1InView ? { 
                      x: [startX, 0, 0],
                      y: [startY, 0, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.3],
                      rotate: [0, 180, 360]
                    } : {
                      x: startX, 
                      y: startY, 
                      opacity: 0, 
                      scale: 0.5
                    }}
                    transition={{
                      delay: 0.3 + i * 0.15,
                      duration: 1.8,
                      times: [0, 0.6, 1],
                      ease: "easeInOut"
                    }}
                  >
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary" />
                  </motion.div>
                );
              })}
              
              {/* Central Brain */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={step1InView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"
                  animate={step1InView ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={step1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground text-center px-4">
                Learns Your Patterns
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto px-6 sm:px-8 lg:px-4">
                Asmi begins as a part consultant, part problem-solver - you speak, it executes. It gradually learns your patterns, your priorities - and automatically starts clearing what's in your way.
              </p>
            </motion.div>
          </motion.div>

          {/* Step 2: Team of Smart Helpers */}
          <motion.div
            ref={step2Ref}
            initial={{ opacity: 0 }}
            animate={step2InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Animation Area */}
            <motion.div 
              className="relative h-64 sm:h-72 lg:h-80 mb-8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={step2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Brain morphs into agents */}
              <motion.div
                className="absolute"
                initial={{ scale: 1, opacity: 1 }}
                animate={step2InView ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 0.3 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center opacity-30">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </motion.div>

              {/* Agents spread out in circle */}
              {[...Array(6)].map((_, i) => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
                const radius = isMobile ? 80 : isTablet ? 110 : 140;
                const angle = (i * 60 * Math.PI) / 180;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={step2InView ? { 
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                      scale: 1, 
                      opacity: 1 
                    } : {
                      x: 0, y: 0, scale: 0, opacity: 0
                    }}
                    transition={{ 
                      delay: 0.5 + i * 0.08, 
                      duration: 0.7,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl"
                      animate={step2InView ? {
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{
                        delay: 1.2 + i * 0.12,
                        duration: 0.4,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </motion.div>
                    
                    {/* Connection lines to center */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 w-16 sm:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-accent/60 to-transparent origin-left"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={step2InView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                      transition={{ delay: 0.9 + i * 0.06, duration: 0.4 }}
                      style={{ 
                        rotate: `${(i * 60) + 180}deg`,
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Center hub icon */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={step2InView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl">
                  <Users className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={step2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground text-center px-4">
                Team of Smart Helpers
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto px-6 sm:px-8 lg:px-4">
                Asmi breaks down your tasks and deploys specialized AI agents - each expert in their domain - working in parallel to handle everything efficiently.
              </p>
            </motion.div>
          </motion.div>

          {/* Step 3: Gets It Done */}
          <motion.div
            ref={step3Ref}
            initial={{ opacity: 0 }}
            animate={step3InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Animation Area - Vertical Progress Bar */}
            <motion.div 
              className="relative h-64 sm:h-72 lg:h-80 mb-8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={step3InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Vertical progress bar container */}
              <div className="relative flex items-center justify-center w-full max-w-2xl px-4 sm:px-6">
                {/* Central vertical line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={step3InView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="absolute left-12 sm:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 origin-top"
                />
                
                {/* Task items along the vertical line */}
                <div className="relative w-full space-y-8 sm:space-y-10">
                  {[
                    { icon: "✈️", text: "Tracking 3 flight options (alerts set)" },
                    { icon: "🏨", text: "Top 5 hotels researched + links" },
                    { icon: "📝", text: "Packing list for ski trip created" },
                    { icon: "🎿", text: "Lift ticket deals found, comparing" }
                  ].map((task, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-6 sm:gap-8 relative"
                      initial={{ opacity: 0, x: -30 }}
                      animate={step3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ 
                        delay: 0.5 + i * 0.15,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120
                      }}
                    >
                      {/* Progress node with checkmark */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={step3InView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ 
                          delay: 0.6 + i * 0.15, 
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="relative z-10"
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-green-500/40 blur-lg"
                          animate={step3InView ? {
                            scale: [1, 1.4, 1],
                            opacity: [0.4, 0.7, 0.4],
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1.2 + i * 0.2,
                          }}
                        />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                          <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                        </div>
                      </motion.div>
                      
                      {/* Task content */}
                      <motion.div 
                        className="flex items-center gap-3 sm:gap-4 flex-1"
                        initial={{ opacity: 0 }}
                        animate={step3InView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.7 + i * 0.15 }}
                      >
                        <span className="text-2xl sm:text-3xl shrink-0">{task.icon}</span>
                        <p className="text-base sm:text-lg text-foreground font-medium">
                          {task.text}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Confetti burst */}
              {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 8 : 12)].map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: `hsl(${(i * 30) % 360}, 80%, 60%)`,
                    left: '50%',
                    top: '50%'
                  }}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  animate={step3InView ? {
                    scale: [0, 1.5, 0],
                    x: Math.cos((i * 30 * Math.PI) / 180) * (100 + Math.random() * 50),
                    y: Math.sin((i * 30 * Math.PI) / 180) * (100 + Math.random() * 50),
                    opacity: [0, 1, 0],
                    rotate: Math.random() * 360
                  } : {
                    scale: 0, x: 0, y: 0, opacity: 0
                  }}
                  transition={{
                    delay: 1.8,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={step3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground text-center px-4">
                Gets It Done
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto px-6 sm:px-8 lg:px-4">
                From meetings to trips to planning - Asmi finishes what you start.
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto mt-16 sm:mt-20 lg:mt-32 px-6 sm:px-8 lg:px-12"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif italic text-foreground/90 leading-relaxed">{/* ... keep existing code */}
            "An outcome-first, always-on AI for your life."
          </p>
        </motion.div>
      </div>
    </section>
  );
};