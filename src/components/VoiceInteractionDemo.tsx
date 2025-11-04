import { useState, useEffect } from "react";
import { Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-primary/5 to-background/50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-foreground">
            Just Tell. Asmi Handles the Rest.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">
            Speak naturally. Watch Asmi work.
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
            {/* iPhone Mockup */}
            <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-background rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col">
                {/* Status Bar */}
                <div className="bg-card px-6 py-3 flex justify-between items-center border-b border-border">
                  <span className="text-xs font-medium text-muted-foreground">Asmi</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-muted" />
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
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="relative"
                        >
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                            <Mic className="w-12 h-12 text-white" />
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-full border-4 border-primary/30"
                            animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          />
                        </motion.div>
                        
                        {/* Colorful Siri-style Waveform */}
                        <div className="flex items-center space-x-2 h-16">
                          {[...Array(9)].map((_, i) => {
                            const colors = [
                              "from-red-500 to-orange-500",
                              "from-orange-500 to-yellow-500",
                              "from-yellow-500 to-green-500",
                              "from-green-500 to-teal-500",
                              "from-teal-500 to-blue-500",
                              "from-blue-500 to-indigo-500",
                              "from-indigo-500 to-purple-500",
                              "from-purple-500 to-pink-500",
                              "from-pink-500 to-red-500",
                            ];
                            return (
                              <motion.div
                                key={i}
                                className={`w-1.5 bg-gradient-to-t ${colors[i]} rounded-full shadow-lg`}
                                animate={{
                                  height: ["24px", "56px", "24px"],
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.08,
                                  ease: "easeInOut"
                                }}
                              />
                            );
                          })}
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
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
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
