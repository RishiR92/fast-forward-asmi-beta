import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import asmiVoiceIcon from "@/assets/asmi-voice.png";

interface DemoMessage {
  voiceInput: string;
  results: string[];
}

const demos: DemoMessage[] = [
  {
    voiceInput: "Emma's science project is due Friday, and soccer conflicts with piano",
    results: [
      "✅ Created 3-day timeline for project",
      "✅ Rescheduled piano to Thursday 5pm",
      "✅ Supply list emailed: poster board, markers, clay",
      "✅ Carpool arranged with Sarah's mom"
    ]
  },
  {
    voiceInput: "Brief me on the 2pm Acme call",
    results: [
      "📊 Steve Johnson, VP Sales - Decision maker",
      "📋 Key concerns: ROI timeline, integration",
      "📁 Deck ready: Custom ROI projections loaded",
      "💡 Talking points prepped in your notes"
    ]
  },
  {
    voiceInput: "Plan my Tahoe trip next month",
    results: [
      "✈️ Tracking 3 flight options (alerts set)",
      "🏨 Top 5 hotels researched + links",
      "📝 Packing list for ski trip created",
      "🎿 Lift ticket deals found, calendar blocked"
    ]
  },
  {
    voiceInput: "Handle my evening tasks",
    results: [
      "✅ Replied to Pat re: Q4 strategy",
      "🍽️ Dinner confirmed at Osteria, 7:30pm",
      "📊 Q3 reports compiled in your inbox",
      "📅 Tomorrow prepped: 3 meetings briefed"
    ]
  }
];

type DemoState = 'listening' | 'input' | 'processing' | 'result' | 'fadeOut';

export const VoiceInteractionDemo = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [state, setState] = useState<DemoState>('listening');
  const [displayText, setDisplayText] = useState('');
  const [displayResults, setDisplayResults] = useState<string[]>([]);

  useEffect(() => {
    if (state === 'listening') {
      const timer = setTimeout(() => setState('input'), 2000);
      return () => clearTimeout(timer);
    }
    
    if (state === 'input') {
      const demo = demos[currentDemo];
      let currentText = '';
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex < demo.voiceInput.length) {
          currentText += demo.voiceInput[charIndex];
          setDisplayText(currentText);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setState('processing'), 800);
        }
      }, 55);
      
      return () => clearInterval(typingInterval);
    }
    
    if (state === 'processing') {
      const timer = setTimeout(() => setState('result'), 1800);
      return () => clearTimeout(timer);
    }
    
    if (state === 'result') {
      const demo = demos[currentDemo];
      let resultIndex = 0;
      
      const resultInterval = setInterval(() => {
        if (resultIndex < demo.results.length) {
          setDisplayResults(demo.results.slice(0, resultIndex + 1));
          resultIndex++;
        } else {
          clearInterval(resultInterval);
          setTimeout(() => {
            setState('fadeOut');
            setTimeout(() => {
              setCurrentDemo((prev) => (prev + 1) % demos.length);
              setDisplayText('');
              setDisplayResults([]);
              setState('listening');
            }, 600);
          }, 5500);
        }
      }, 400);
      
      return () => clearInterval(resultInterval);
    }
  }, [state, currentDemo]);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-primary/5 to-background/50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-foreground px-4">
            Just Tell. Asmi Handles the Rest.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light px-4">
            One interface for your entire life.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm"
          >
            {/* iPhone 15 Pro Mockup with Real Frame */}
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative bg-[#1d1d1f] rounded-[3.5rem] p-2 shadow-2xl border-[3px] border-[#1d1d1f]">
                {/* Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />
                
                {/* Screen */}
                <div className="bg-background rounded-[3rem] overflow-hidden h-[600px] sm:h-[640px] flex flex-col relative">
                  {/* Status Bar - iOS Style */}
                  <div className="bg-background px-6 pt-12 pb-3 flex justify-between items-center">
                    <span className="text-xs font-semibold text-foreground">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
                        <path d="M13.5 4.5C13.5 5.88071 12.3807 7 11 7C9.61929 7 8.5 5.88071 8.5 4.5C8.5 3.11929 9.61929 2 11 2C12.3807 2 13.5 3.11929 13.5 4.5Z" className="text-foreground" />
                        <path d="M14.5 1H15C15.5523 1 16 1.44772 16 2V10C16 10.5523 15.5523 11 15 11H14.5V1Z" className="text-foreground/60" />
                      </svg>
                      <span className="text-xs font-semibold text-foreground">100%</span>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-card px-6 py-3 flex justify-between items-center border-b border-border">
                    <span className="text-sm font-semibold text-foreground">Asmi</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <div className="w-1 h-1 rounded-full bg-muted" />
                      <div className="w-1 h-1 rounded-full bg-muted" />
                    </div>
                  </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col justify-center items-center">
                  <AnimatePresence mode="wait">
                    {state === 'listening' && (
                      <motion.div
                        key="listening"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center space-y-8 py-12"
                      >
                        <motion.div
                          className="relative"
                        >
                          {/* Rotating Asmi Voice Icon */}
                          <motion.div
                            animate={{ 
                              rotate: [0, 360]
                            }}
                            transition={{ 
                              duration: 8, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                            className="relative w-32 h-32"
                          >
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl" />
                            
                            {/* Icon image */}
                            <img 
                              src={asmiVoiceIcon} 
                              alt="Asmi Voice" 
                              className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                            />
                            
                            {/* Orbiting particles */}
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-primary"
                                style={{
                                  boxShadow: `0 0 10px hsl(var(--primary))`,
                                  left: '50%',
                                  top: '50%'
                                }}
                                animate={{
                                  x: [
                                    Math.cos((i * 45 * Math.PI) / 180) * 60,
                                    Math.cos(((i * 45 + 180) * Math.PI) / 180) * 60,
                                  ],
                                  y: [
                                    Math.sin((i * 45 * Math.PI) / 180) * 60,
                                    Math.sin(((i * 45 + 180) * Math.PI) / 180) * 60,
                                  ],
                                  scale: [0, 1.2, 0],
                                  opacity: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                            
                            {/* Expanding rings */}
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={`ring-${i}`}
                                className="absolute inset-0 rounded-full border-2 border-primary/30"
                                animate={{ 
                                  scale: [1, 2.5, 1], 
                                  opacity: [0.6, 0, 0.6] 
                                }}
                                transition={{ 
                                  duration: 3, 
                                  repeat: Infinity,
                                  delay: i * 1,
                                  ease: "easeOut"
                                }}
                              />
                            ))}
                          </motion.div>
                        </motion.div>
                        
                        {/* Modern fluid waveform with theme colors */}
                        <div className="flex items-center justify-center gap-1.5 h-20">
                          {[...Array(15)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 rounded-full shadow-lg"
                              style={{
                                backgroundColor: `hsl(var(--primary))`,
                                boxShadow: `0 0 10px hsl(var(--primary))`
                              }}
                              animate={{
                                height: [
                                  `${20 + Math.sin(i * 0.5) * 10}px`,
                                  `${40 + Math.sin(i * 0.5) * 20}px`,
                                  `${20 + Math.sin(i * 0.5) * 10}px`
                                ],
                                opacity: [0.6, 1, 0.6]
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.05,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                        
                        <p className="text-foreground/60 text-base font-medium">Listening...</p>
                      </motion.div>
                    )}

                    {state === 'input' && (
                      <motion.div
                        key="input"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col items-center justify-center space-y-4 py-8 px-6"
                      >
                        <p className="text-lg text-foreground/90 leading-relaxed px-6 font-medium text-center">
                          <span className="text-foreground/60">"</span>
                          {displayText}
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-0.5 h-6 bg-accent ml-1"
                          />
                          <span className="text-foreground/60">"</span>
                        </p>
                      </motion.div>
                    )}

                    {state === 'processing' && (
                      <motion.div
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-2"
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-primary"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </motion.div>
                    )}

                    {(state === 'result' || state === 'fadeOut') && (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-8 px-6 space-y-4"
                      >
                        {displayResults.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ 
                              delay: index * 0.15,
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                            }}
                            className="flex items-start space-x-3 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-colors"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                              className="flex-shrink-0"
                            >
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </motion.div>
                            <p className="text-base text-foreground/90 leading-relaxed">{result}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Side Buttons - Volume & Power */}
              <div className="absolute left-0 top-32 w-1 h-12 bg-[#1d1d1f] rounded-l-sm -translate-x-1" />
              <div className="absolute left-0 top-48 w-1 h-16 bg-[#1d1d1f] rounded-l-sm -translate-x-1" />
              <div className="absolute right-0 top-40 w-1 h-20 bg-[#1d1d1f] rounded-r-sm translate-x-1" />
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {demos.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentDemo ? 'bg-primary w-6' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
