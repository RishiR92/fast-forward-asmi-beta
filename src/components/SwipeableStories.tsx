import React, { useState, useRef } from "react";
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
    after: "✅ Meeting scheduled\n📧 Invite sent to sarah@company.com\n📋 Prep notes ready",
    icon: Mic,
    color: "text-blue-400"
  },
  {
    id: "prep-meeting", 
    before: "Meeting with John in 30 mins",
    after: "📊 John's LinkedIn pulled\n💼 Last meeting notes: Q4 goals\n🎯 Suggested talking points ready",
    icon: Calendar,
    color: "text-green-400"
  },
  {
    id: "voice-note",
    before: "🎤 Remind me to follow up with investors about Series A",
    after: "📝 Action item saved\n⏰ Reminder set for next week\n📧 Draft follow-up email ready",
    icon: CheckCircle,
    color: "text-purple-400"
  }
];

export const SwipeableStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [step, setStep] = useState<'before' | 'after'>('before');
  const containerRef = useRef<HTMLDivElement>(null);

  const nextStory = () => {
    if (step === 'before') {
      setStep('after');
      setTimeout(() => {
        setStep('before');
        setCurrentStory((prev) => (prev + 1) % stories.length);
      }, 3000);
    }
  };

  const handleSwipe = () => {
    nextStory();
  };

  return (
    <div className="py-16 px-4">
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
          className="relative h-96"
          onTap={handleSwipe}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentStory}-${step}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Card className="bg-white/[0.02] border-white/10 h-full p-6 flex flex-col justify-center">
                {/* Story Progress Dots */}
                <div className="flex justify-center gap-2 mb-6">
                  {stories.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStory ? 'bg-[#5DFF9F]' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 mx-auto mb-6 ${stories[currentStory].color}`}
                  animate={{ rotate: step === 'after' ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {React.createElement(stories[currentStory].icon, { className: "w-full h-full" })}
                </motion.div>

                {/* Chat Bubble */}
                <motion.div
                  className={`rounded-xl p-4 max-w-xs mx-auto relative ${
                    step === 'before' 
                      ? 'bg-[#007AFF] text-white ml-auto' 
                      : 'bg-[#202C33] text-white mr-auto'
                  }`}
                  layout
                >
                  <motion.p
                    className="text-sm whitespace-pre-line leading-relaxed"
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step === 'before' ? stories[currentStory].before : stories[currentStory].after}
                  </motion.p>
                  
                  {/* Chat bubble tail */}
                  <div className={`absolute top-3 w-3 h-3 rotate-45 ${
                    step === 'before' 
                      ? 'bg-[#007AFF] -right-1' 
                      : 'bg-[#202C33] -left-1'
                  }`} />
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  className="mt-6 mx-auto bg-white/10 rounded-full h-1 w-32 overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-[#5DFF9F] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: step === 'after' ? "100%" : "50%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                {/* Tap hint */}
                <p className="text-center text-gray-400 text-xs mt-4">
                  Tap to see Asmi in action
                </p>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
