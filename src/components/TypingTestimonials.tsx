
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
    quote: "Asmi handles my work chaos and family schedule in one place. Meeting prep, school pickups, travel research—everything flows through one conversation.",
    name: "Founder",
    role: "Tech Startup CEO & Parent",
    avatar: "🚀"
  },
  {
    quote: "Client briefs before calls, restaurant recommendations after. Asmi switches between work mode and life mode seamlessly. It's like having a chief of staff for everything.",
    name: "Consultant",
    role: "Independent Strategy",
    avatar: "📊"
  },
  {
    quote: "Tracks my project deadlines and my kids' activities. Reminds me about client invoices and piano lessons. Finally, one AI that gets my whole day.",
    name: "Designer",
    role: "Freelance Creative",
    avatar: "✨"
  },
  {
    quote: "Pipeline hygiene and family coordination. Asmi drafts follow-ups, finds restaurants, and keeps me on top of both careers—work and parenting.",
    name: "VP Sales",
    role: "Enterprise SaaS",
    avatar: "⚡"
  },
  {
    quote: "Weekend trips, doctor appointments, business travel—Asmi researches it all. Tracks flight prices, suggests hotels, creates packing lists. I just decide.",
    name: "Entrepreneur",
    role: "Multi-venture Operator",
    avatar: "🧲"
  },
  {
    quote: "From board prep to soccer carpools, Asmi handles the details. My calendar reflects my actual life now—not just my job.",
    name: "Executive",
    role: "Tech Company COO",
    avatar: "🎯"
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
