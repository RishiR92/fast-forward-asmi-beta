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
    const demo = demos[currentDemo];
    let timeout: NodeJS.Timeout;

    switch (state) {
      case 'listening':
        timeout = setTimeout(() => setState('input'), 1000);
        break;
      case 'input':
        const text = demo.voiceInput;
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex <= text.length) {
            setDisplayText(text.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => setState('processing'), 500);
          }
        }, 30);
        return () => clearInterval(typeInterval);
      case 'processing':
        timeout = setTimeout(() => {
          setDisplayResults(demo.results);
          setState('result');
        }, 1500);
        break;
      case 'result':
        timeout = setTimeout(() => setState('fadeOut'), 3000);
        break;
      case 'fadeOut':
        timeout = setTimeout(() => {
          setDisplayText('');
          setDisplayResults([]);
          setCurrentDemo((prev) => (prev + 1) % demos.length);
          setState('listening');
        }, 500);
        break;
    }

    return () => clearTimeout(timeout);
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
                        className="flex flex-col items-center gap-6"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-20 h-20 rounded-full bg-gradient-to-r from-primary via-accent to-primary flex items-center justify-center"
                        >
                          <Mic className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        {/* Siri-style Waveform */}
                        <div className="flex gap-1 items-center h-8">
                          {[...Array(7)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 bg-gradient-to-t from-primary via-accent to-primary rounded-full"
                              animate={{
                                height: ["8px", "24px", "8px"],
                              }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Listening...</p>
                      </motion.div>
                    )}

                    {state === 'input' && (
                      <motion.div
                        key="input"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full"
                      >
                        <div className="bg-muted/20 rounded-2xl p-4 mb-4">
                          <p className="text-sm text-foreground">{displayText}</p>
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-0.5 h-4 bg-primary ml-1"
                          />
                        </div>
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full space-y-3"
                      >
                        {displayResults.map((result, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-primary/10 rounded-xl p-3 border border-primary/20"
                          >
                            <p className="text-sm text-foreground">{result}</p>
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
