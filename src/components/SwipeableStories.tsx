
import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mic, CheckCircle, Calendar } from "lucide-react";

interface Story {
  id: string;
  before: string;
  after: string;
  icon: React.ComponentType<any>;
  color: string;
}

const stories: Story[] = [
  {
    id: "voice-meeting",
    before: "🎤 Schedule coffee with Sarah tomorrow 3pm",
    after: "✅ Meeting scheduled with Sarah Johnson\n\n📧 Invite sent to sarah@wisprflow.ai\n\n📋 Prep notes ready:\n\n• Q4 marketing strategy discussion\n\n• Brand partnership opportunities\n\n• Review pending case studies",
    icon: Mic,
    color: "text-blue-400"
  },
  {
    id: "prep-meeting", 
    before: "Meeting with John in 30 mins",
    after: "👤 John Martinez, Senior Developer @ InnovateTech\n\n💼 Background: 8+ years in fintech, recently promoted\n\n🎯 Suggested talking points:\n\n• New API integration timeline\n\n• Team scaling plans\n\n• Code review process improvements",
    icon: Calendar,
    color: "text-green-400"
  },
  {
    id: "voice-note",
    before: "🎤 Remind me to follow up with investors about Series A",
    after: "📝 Action item saved to priority list\n\n⏰ Reminder set for Monday 9 AM\n\n📧 Draft follow-up email prepared:\n\n• Updated pitch deck attached\n\n• Financial projections included\n\n• Meeting availability options",
    icon: CheckCircle,
    color: "text-purple-400"
  }
];

export const SwipeableStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [step, setStep] = useState<'before' | 'after'>('before');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextStory = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (step === 'before') {
      setTimeout(() => {
        setStep('after');
        setIsTransitioning(false);
      }, 200);
    } else {
      setTimeout(() => {
        setStep('before');
        setCurrentStory((prev) => (prev + 1) % stories.length);
        setIsTransitioning(false);
      }, 200);
    }
  }, [step, isTransitioning]);

  const IconComponent = stories[currentStory].icon;

  return (
    <div className="py-16 px-4" id="real-life-flows">
      <motion.h2 
        className="text-3xl font-light text-center mb-12 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Real-life flows
      </motion.h2>

      <div className="max-w-sm mx-auto" ref={containerRef}>
        <motion.div
          className="relative h-96 cursor-pointer select-none"
          onTap={nextStory}
          onClick={nextStory}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="bg-gradient-to-br from-black/40 to-black/20 border border-white/5 backdrop-blur-xl h-full p-6 flex flex-col justify-center shadow-2xl hover:border-white/10 transition-all duration-300">
            {/* Story Progress Dots */}
            <div className="flex justify-center gap-2 mb-6">
              {stories.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStory ? 'bg-[#5DFF9F] scale-110' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            {/* Icon */}
            <motion.div
              className={`w-12 h-12 mx-auto mb-6 ${stories[currentStory].color}`}
              animate={{ 
                rotate: step === 'after' ? 360 : 0,
                scale: step === 'after' ? 1.1 : 1
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <IconComponent className="w-full h-full" />
            </motion.div>

            {/* Chat Bubble - Improved transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentStory}-${step}`}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`rounded-2xl p-4 max-w-xs mx-auto relative shadow-lg transition-all duration-300 ${
                  step === 'before' 
                    ? 'bg-[#007AFF] text-white ml-auto rounded-tr-md' 
                    : 'bg-[#1F2937] text-white mr-auto rounded-tl-md border border-white/5'
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">
                  {step === 'before' ? stories[currentStory].before : stories[currentStory].after}
                </p>
                
                {/* Chat bubble tail */}
                <div className={`absolute top-3 w-3 h-3 rotate-45 transition-all duration-300 ${
                  step === 'before' 
                    ? 'bg-[#007AFF] -right-1' 
                    : 'bg-[#1F2937] -left-1'
                }`} />
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <motion.div
              className="mt-6 mx-auto bg-white/5 rounded-full h-1 w-32 overflow-hidden"
            >
              <motion.div
                className="h-full bg-[#5DFF9F] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: step === 'after' ? "100%" : "50%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Dynamic hint text */}
            <motion.p 
              className="text-center text-gray-400 text-xs mt-4"
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Tap for next task
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
