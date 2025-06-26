import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, CheckCircle, Mic, Loader2, Send } from "lucide-react";
import { SwipeableStories } from "@/components/SwipeableStories";
import { NeuralMemoryEngine } from "@/components/NeuralMemoryEngine";
import { TypingTestimonials } from "@/components/TypingTestimonials";
import { ScrollableTimeline } from "@/components/ScrollableTimeline";

const Index = () => {
  const [currentDemo, setCurrentDemo] = useState("whatsapp");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced chat demo messages with slower, more realistic timing
  const whatsappMessages = [
    { type: "user", text: "Hey, can you help me prep for my meeting with Sarah tomorrow?", delay: 800 },
    { type: "asmi", text: "Of course! Let me pull up what I know about Sarah...", delay: 1200 },
    { type: "asmi", text: "📋 **Sarah Meeting Brief**\n\n• Sarah Johnson, VP Marketing @ TechCorp\n• Last meeting: 2 weeks ago about Q4 campaign\n• Her priorities: Brand partnerships, growth metrics\n• You promised to send case studies (still pending)\n• Suggested talking points: ROI data, timeline updates", delay: 1800 },
    { type: "asmi", text: "Should I remind you to prepare those case studies? 📊", delay: 2200 }
  ];

  const imessageMessages = [
    { type: "user", text: "🎤 Coffee with Mark from Acme Friday 3pm", delay: 800, isVoice: true },
    { type: "asmi", text: "🔍 Found Mark Stevens, CTO @ Acme Corp", delay: 1200 },
    { type: "asmi", text: "✅ **Calendar Updated**\nCoffee w/ Mark Stevens\nFri, Dec 8 • 3:00 PM\n\nInvite sent to mark@acmecorp.com", delay: 1600 },
    { type: "asmi", text: "Asmi's got it. 🎯", delay: 2000 }
  ];

  // Typing animation for personality
  const personalityPhrases = [
    "Always listening (in a good way)",
    "Built for chaotic days", 
    "Asmi's got it",
    "Your smart sidekick"
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentPhrase = personalityPhrases[phraseIndex];
      
      if (isDeleting) {
        setTypingText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % personalityPhrases.length;
        }
      } else {
        setTypingText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(() => {}, 2000);
        }
      }
    };

    const interval = setInterval(typeWriter, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, []);

  // Demo animation with slower, more realistic timing
  useEffect(() => {
    const demoInterval = setInterval(() => {
      if (currentDemo === "whatsapp") {
        if (messageIndex < whatsappMessages.length - 1) {
          setMessageIndex(prev => prev + 1);
        } else {
          setTimeout(() => {
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentDemo("imessage");
              setMessageIndex(0);
              setIsTransitioning(false);
            }, 300);
          }, 1500);
        }
      } else {
        if (messageIndex < imessageMessages.length - 1) {
          setMessageIndex(prev => prev + 1);
        } else {
          setTimeout(() => {
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentDemo("whatsapp");
              setMessageIndex(0);
              setIsTransitioning(false);
            }, 300);
          }, 1500);
        }
      }
    }, 1200); // Slower timing

    return () => clearInterval(demoInterval);
  }, [currentDemo, messageIndex]);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Waitlist signup:", { email });
    setIsLoading(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] font-inter overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center bg-black/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
        <motion.div 
          className="text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          Asmi
        </motion.div>
        <Button 
          size="sm"
          className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-medium px-6"
        >
          Join Waitlist
        </Button>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-8 px-4 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 mb-8 text-sm px-4 py-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-[#5DFF9F] rounded-full mr-2"
                />
                Your AI Chief of Staff
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-[#5DFF9F]">Get Things Done.</span>
            </motion.h1>

            {/* Personality Typing Animation */}
            <motion.div 
              className="text-lg text-gray-400 mb-8 h-8 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="font-mono">{typingText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-[#5DFF9F]"
              >
                |
              </motion.span>
            </motion.div>

            {/* Platform Badge */}
            <motion.p
              className="text-gray-300 text-lg mb-12"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              On WhatsApp/iMessage
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic iPhone Demo */}
      <section className="py-8 px-4 relative">
        <div className="max-w-xs mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* iPhone 15 Pro Frame */}
            <div className="relative bg-gray-800 rounded-[3rem] p-1 shadow-2xl border border-gray-600/30">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-[#5DFF9F] rounded-full"
                />
              </div>
              
              {/* Screen - Static dimensions */}
              <div className="bg-black rounded-[2.8rem] overflow-hidden relative h-[650px] w-[320px]">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-8 pt-8 pb-2 text-white text-sm font-medium">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-3 h-1 bg-green-500 rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!isTransitioning && (
                    <motion.div
                      key={currentDemo}
                      initial={{ opacity: 0, x: currentDemo === "whatsapp" ? 100 : -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: currentDemo === "whatsapp" ? -100 : 100 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="px-2 pb-4 h-full"
                    >
                      {currentDemo === "whatsapp" ? (
                        <div className="bg-[#0B141A] rounded-t-3xl h-full">
                          {/* WhatsApp Header */}
                          <div className="flex items-center gap-3 p-4 bg-[#202C33] text-white">
                            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center relative">
                              <MessageSquare className="w-5 h-5 text-white" />
                              <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1 w-3 h-3 bg-[#5DFF9F] rounded-full"
                              />
                            </div>
                            <div>
                              <span className="font-medium">Asmi AI</span>
                              <p className="text-xs text-green-400">● online</p>
                            </div>
                          </div>
                          
                          {/* Messages */}
                          <div className="p-4 space-y-3 bg-[#0B141A] flex-1 overflow-y-auto">
                            <AnimatePresence>
                              {whatsappMessages.slice(0, messageIndex + 1).map((message, index) => (
                                <motion.div
                                  key={`whatsapp-${index}`}
                                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{ duration: 0.4, ease: "easeOut" }}
                                  className={message.type === 'asmi' ? 
                                    "bg-[#202C33] rounded-2xl rounded-tl-lg p-3 max-w-[85%] shadow-lg" :
                                    "bg-[#005C4B] rounded-2xl rounded-tr-lg p-3 max-w-[85%] ml-auto shadow-lg"
                                  }
                                >
                                  <p className="text-white text-sm whitespace-pre-line leading-relaxed">
                                    {message.text}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                    <span>{message.type === 'asmi' ? '8:47 AM' : '8:48 AM'}</span>
                                    {message.type === 'user' && <CheckCircle className="w-3 h-3 text-blue-400" />}
                                  </p>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-black rounded-t-3xl h-full">
                          {/* iMessage Header */}
                          <div className="flex items-center gap-3 p-4 bg-[#1C1C1E] text-white border-b border-gray-800">
                            <div className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center relative">
                              <MessageSquare className="w-5 h-5 text-white" />
                              <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1 w-3 h-3 bg-[#5DFF9F] rounded-full"
                              />
                            </div>
                            <span className="font-medium">Asmi AI</span>
                          </div>
                          
                          {/* Messages */}
                          <div className="p-4 space-y-3 bg-black flex-1 overflow-y-auto">
                            <AnimatePresence>
                              {imessageMessages.slice(0, messageIndex + 1).map((message, index) => (
                                <motion.div
                                  key={`imessage-${index}`}
                                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{ duration: 0.4, ease: "easeOut" }}
                                  className={message.type === 'asmi' ? 
                                    "bg-[#3C3C43] rounded-2xl rounded-tl-lg p-3 max-w-[85%] shadow-lg" :
                                    "bg-[#007AFF] rounded-2xl rounded-tr-lg p-3 max-w-[85%] ml-auto shadow-lg"
                                  }
                                >
                                  {message.isVoice && (
                                    <div className="flex items-center gap-2 mb-2">
                                      <Mic className="w-4 h-4 text-white" />
                                      <motion.div
                                        animate={{ scaleX: [1, 1.5, 1] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="flex-1 h-1 bg-[#5DFF9F] rounded"
                                      />
                                      <span className="text-xs text-gray-400">0:03</span>
                                    </div>
                                  )}
                                  <p className="text-white text-sm whitespace-pre-line leading-relaxed">
                                    {message.text}
                                  </p>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA - Moved before Real-life Flows */}
      <section className="py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-light mb-8 text-white">
            Ready to move 100X faster?
          </h2>
          
          <motion.div
            className="bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 p-6 max-w-md mx-auto mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 flex-1"
                required
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-medium px-6"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </form>
            
            <p className="text-gray-400 text-xs mt-3 text-center">
              Join 10,000+ fast movers • No spam, just Asmi
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Stories */}
      <SwipeableStories />

      {/* Neural Memory Engine */}
      <NeuralMemoryEngine />

      {/* Typing Testimonials */}
      <TypingTestimonials />

      {/* Scrollable Timeline */}
      <ScrollableTimeline />

      {/* Final CTA */}
      <section className="py-16 px-4 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-light mb-8 text-white">
            Ready to move 100X faster?
          </h2>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-medium h-14 px-10 text-lg rounded-2xl"
            >
              Join Waitlist
            </Button>
          </motion.div>
          
          <p className="text-gray-400 mt-6">
            Join 10,000+ fast movers already on the list
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xl font-bold text-white mb-4 sm:mb-0">
            Asmi
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-[#5DFF9F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#5DFF9F] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#5DFF9F] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
