
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Asmi runs my day in chat — condenses chaos into a one‑pager each morning, drafts follow‑ups, and remembers every promise across Slack, email, and meetings.",
    name: "Founder",
    role: "Seed-stage SaaS",
    avatar: "🚀"
  },
  {
    quote: "Before every call, Asmi drops a 30‑sec brief: last touch, likely objections, and a tailored opener. My prep time went from 20 min to 2.",
    name: "Senior AE",
    role: "Enterprise Sales Team",
    avatar: "🎯"
  },
  {
    quote: "Asmi tracks deliverables across threads, nudges me on invoices, and drafts scope replies. I review, tweak one line, and send.",
    name: "Freelancer",
    role: "Product Designer",
    avatar: "✨"
  },
  {
    quote: "Weekly exec readouts write themselves — Asmi threads outcomes, risks, and next steps from notes and email. Clients think I never forget.",
    name: "Consultant",
    role: "Independent Strategy",
    avatar: "📊"
  },
  {
    quote: "Sourcing is faster. Asmi recalls past convos, suggests warm intros from our CRM, and drafts tailored outreach. Reply rates are up 28%.",
    name: "Recruiter",
    role: "Tech Talent",
    avatar: "🧲"
  },
  {
    quote: "Pipeline hygiene without dashboards — Asmi drafts updates, flags silent deals, and nudges reps on next steps. Our standups are 7 minutes.",
    name: "VP Sales",
    role: "Mid‑market",
    avatar: "⚡"
  }
];

export const TypingTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentQuote = testimonials[currentTestimonial].quote;
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typeWriter = () => {
      if (charIndex < currentQuote.length) {
        setDisplayedText(currentQuote.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 30 + Math.random() * 20); // Varying speed for natural feel
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 3000);
      }
    };

    typeWriter();
  }, [currentTestimonial]);

  return (
    <div className="py-16 px-4">
      <motion.h2 
        className="text-3xl font-light text-center mb-12 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Loved by fast movers
      </motion.h2>

      <div className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#5DFF9F]/30 rounded-xl shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Typing Indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="flex gap-1">
                    {isTyping && (
                      <>
                        <motion.div
                          className="w-1 h-1 bg-[#5DFF9F] rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-1 h-1 bg-[#5DFF9F] rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-1 h-1 bg-[#5DFF9F] rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* Chat Bubble */}
                <motion.div
                  className="bg-[#202C33] rounded-2xl rounded-tl-md p-4 relative"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-base leading-relaxed min-h-[3rem]">
                    "{displayedText}"
                    {isTyping && (
                      <motion.span
                        className="text-[#5DFF9F] ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                    )}
                  </p>
                  <div className="absolute -bottom-2 left-6 w-4 h-4 bg-[#202C33] rotate-45" />
                </motion.div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-2">
                  <motion.div
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonials[currentTestimonial].avatar}
                  </motion.div>
                  <div>
                    <p className="text-white font-medium">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 pt-4">
                  {testimonials.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-[#5DFF9F]' : 'bg-white/20'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
