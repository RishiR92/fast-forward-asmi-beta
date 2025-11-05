import { motion, useInView } from "framer-motion";
import { Calendar, Mail, MessageSquare, Users, Zap, CheckCircle2, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const OutcomesGrid = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation when scrolling back into view
  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16 sm:mb-20 lg:mb-24 text-foreground px-4"
        >
          How Asmi Works
        </motion.h2>

        {/* Vertical Cinematic Animation Flow */}
        <div className="max-w-3xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
          
          {/* Step 1: Learns Your Patterns */}
          <motion.div
            key={`step1-${animationKey}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center"
          >
            {/* Animation Area */}
            <div className="relative h-64 sm:h-72 lg:h-80 mb-12 flex items-center justify-center">
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
                    whileInView={{ 
                      x: [startX, 0, 0],
                      y: [startY, 0, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    viewport={{ once: false }}
                    transition={{
                      delay: i * 0.2,
                      duration: 2,
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
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
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
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground text-center px-4">
                Learns Your Patterns
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto px-6 sm:px-8 lg:px-4">{/* ... keep existing code */}
                Asmi begins as a part consultant, part problem-solver - you speak, it executes. It gradually learns your patterns, your priorities - and automatically starts clearing what's in your way.
              </p>
            </motion.div>
          </motion.div>

          {/* Step 2: Team of Smart Helpers */}
          <motion.div
            key={`step2-${animationKey}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center"
          >
            {/* Animation Area */}
            <div className="relative h-64 sm:h-72 lg:h-80 mb-12 flex items-center justify-center">
              {/* Brain morphs into agents */}
              <motion.div
                className="absolute"
                initial={{ scale: 1, opacity: 1 }}
                whileInView={{ scale: 0, opacity: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.6 }}
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
                    whileInView={{ 
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                      scale: 1, 
                      opacity: 1 
                    }}
                    viewport={{ once: false }}
                    transition={{ 
                      delay: 0.6 + i * 0.1, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        delay: 1.5 + i * 0.15,
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
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 1.2 + i * 0.08, duration: 0.5 }}
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
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1.8, duration: 0.6, type: "spring" }}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl">
                  <Users className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground text-center px-4">
                Team of Smart Helpers
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto px-6 sm:px-8 lg:px-4">{/* ... keep existing code */}
                Asmi breaks down your tasks and deploys specialized AI agents - each expert in their domain - working in parallel to handle everything efficiently.
              </p>
            </motion.div>
          </motion.div>

          {/* Step 3: Gets It Done */}
          <motion.div
            key={`step3-${animationKey}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center"
          >
            {/* Animation Area */}
            <div className="relative h-64 sm:h-72 lg:h-80 mb-12 flex items-center justify-center">
              {/* Task completion cards */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm space-y-2 px-4 sm:px-6">
                {[
                  { icon: "✈️", text: "Tracking 3 flight options (alerts set)" },
                  { icon: "🏨", text: "Top 5 hotels researched + links" },
                  { icon: "📝", text: "Packing list for ski trip created" },
                  { icon: "🎿", text: "Lift ticket deals found, comparing" }
                ].map((task, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 bg-card/80 backdrop-blur rounded-lg p-3 border border-border/30 shadow-sm"
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ 
                      delay: i * 0.15,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: false }}
                      transition={{ 
                        delay: 0.2 + i * 0.15, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 shrink-0" />
                    </motion.div>
                    
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-lg sm:text-xl shrink-0">{task.icon}</span>
                      <p className="text-sm sm:text-base text-foreground/90 font-medium">
                        {task.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
                  whileInView={{
                    scale: [0, 1.5, 0],
                    x: Math.cos((i * 30 * Math.PI) / 180) * (100 + Math.random() * 50),
                    y: Math.sin((i * 30 * Math.PI) / 180) * (100 + Math.random() * 50),
                    opacity: [0, 1, 0],
                    rotate: Math.random() * 360
                  }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 1.2,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground text-center px-4">
                Gets It Done
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto px-6 sm:px-8 lg:px-4">{/* ... keep existing code */}
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