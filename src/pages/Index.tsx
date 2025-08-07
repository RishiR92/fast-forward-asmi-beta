import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const [demoKey, setDemoKey] = useState(0);

  // Enhanced chat demo messages with new script
  const whatsappMessages = [
    { type: "user", text: "Asmi, you look intriguing! What can you do for me?", delay: 2000, timestamp: "9:15 AM" },
    { type: "asmi", text: "Hi Alex. Asmi is your smart chief of staff. To get started, first integrate your calendar and mail here and see the magic!", delay: 2500, timestamp: "9:15 AM" },
    { type: "system", text: "Gmail linked ✅\nCalendar linked ✅", delay: 2000, timestamp: "9:16 AM" },
    { type: "asmi", text: "Well well Alex, you are absolutely crushing it\n\n• Serial entrepreneur & CEO at TechFlow\n• Boston Marathon finisher (3:12 best time)\n• 5× founder with 2 successful exits\n• Stanford MBA, former McKinsey consultant\n• Angel investor in 15+ startups\n• Lives in Palo Alto, originally from Boston", delay: 3000, timestamp: "9:16 AM" },
    { type: "asmi", text: "Insights from your emails & calendar\n\n📧 \"Need to finalize Q3 roadmap by Friday - pressure from board\"\n📧 \"Marketing strategy review 2 weeks overdue, Sophia asking for feedback\"\n📧 \"Steve Johnson following up on Acme Corp partnership - big opportunity\"\n📅 Back-to-back meetings every day this week\n📅 3 investor calls scheduled for next week\n📧 \"Pat from Sequoia mentioned potential Series B introduction\"", delay: 3500, timestamp: "9:17 AM" },
    { type: "user", text: "Schedule a call with Steve for 3 PM tomorrow.", delay: 2000, timestamp: "9:18 AM" },
    { type: "asmi", text: "Call with Steve\n\n🕒 03:00 PM, Aug 8, 2025\n👤 Steve Johnson\n📋 Agenda: Catch up + next steps\n🔗 meet.google.com/xyz-1234", delay: 2500, timestamp: "9:18 AM" },
    { type: "user", text: "Confirmed", delay: 1500, timestamp: "9:19 AM" },
    { type: "asmi", text: "Meeting scheduled ✅", delay: 1500, timestamp: "9:19 AM" }
  ];

  const imessageMessages = [
    { type: "user", text: "Coffee with Mark from Acme Friday 3pm", delay: 2000, isVoice: true, timestamp: "2:15 PM" },
    { type: "asmi", text: "🔍 Found Mark Stevens, CTO @ Acme Corp", delay: 2500, timestamp: "2:15 PM" },
    { type: "asmi", text: "Calendar Updated\nCoffee w/ Mark Stevens\nFri, Dec 8 • 3:00 PM\n\nInvite sent to mark@acmecorp.com", delay: 3000, timestamp: "2:16 PM" },
    { type: "asmi", text: "Asmi's got it. 🎯", delay: 3500, timestamp: "2:16 PM" }
  ];

  // Typing animation for personality
  const personalityPhrases = [
    "Always listening (in a good way)",
    "Built for chaotic days", 
    "Asmi's got it",
    "Your smart sidekick"
  ];

  const navigate = useNavigate();

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

  // Fixed demo animation with proper timing and state management
  useEffect(() => {
    const currentMessages = currentDemo === "whatsapp" ? whatsappMessages : imessageMessages;
    
    if (messageIndex < currentMessages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex(prev => prev + 1);
      }, currentMessages[messageIndex].delay);
      
      return () => clearTimeout(timer);
    } else {
      // Reset to next demo after all messages are shown
      const resetTimer = setTimeout(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentDemo(prev => prev === "whatsapp" ? "imessage" : "whatsapp");
          setMessageIndex(0);
          setDemoKey(prev => prev + 1);
          setIsTransitioning(false);
        }, 300);
      }, 3000);
      
      return () => clearTimeout(resetTimer);
    }
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
    
    // Navigate to success page
    navigate('/success');
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
        <div className="text-gray-400 text-sm">
          Your AI Chief of Staff
        </div>
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
        <div className="max-w-sm mx-auto">
          <motion.div
            key={demoKey}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* iPhone 15 Pro Frame - Fixed width */}
            <div className="relative bg-gray-800 rounded-[3rem] p-1 shadow-2xl border border-gray-600/30 mx-auto w-[340px]">
              {/* Dynamic Island - No green blinking */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
              </div>
              
              {/* Screen - Fixed dimensions */}
              <div className="bg-black rounded-[2.8rem] overflow-hidden relative h-[650px] w-[338px]">
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
                      key={`${currentDemo}-${demoKey}`}
                      initial={{ opacity: 0, x: currentDemo === "whatsapp" ? 100 : -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: currentDemo === "whatsapp" ? -100 : 100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-2 pb-4 h-full"
                    >
                      {currentDemo === "whatsapp" ? (
                        <div className="bg-[#0B141A] rounded-t-3xl h-full flex flex-col">
                          {/* WhatsApp Header - No green blinking */}
                          <div className="flex items-center gap-3 p-4 bg-[#202C33] text-white">
                            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                              <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="font-medium">Asmi AI</span>
                              <p className="text-xs text-green-400">● online</p>
                            </div>
                          </div>
                          
                          {/* Messages */}
                          <div className="p-4 space-y-3 bg-[#0B141A] flex-1 overflow-y-auto">
                            {whatsappMessages.slice(0, messageIndex + 1).map((message, index) => (
                              <motion.div
                                key={`whatsapp-${index}-${demoKey}`}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className={message.type === 'asmi' ? 
                                  "bg-[#202C33] rounded-2xl rounded-tl-lg p-3 max-w-[85%] shadow-lg" :
                                  "bg-[#005C4B] rounded-2xl rounded-tr-lg p-3 max-w-[85%] ml-auto shadow-lg"
                                }
                              >
                                <p className="text-white text-sm whitespace-pre-line leading-relaxed">
                                  {message.text.includes('Sarah Meeting Brief') ? (
                                    <span>
                                      <strong>Sarah Meeting Brief</strong>
                                      {message.text.replace('Sarah Meeting Brief', '')}
                                    </span>
                                  ) : message.text}
                                </p>
                                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                  <span>{message.timestamp}</span>
                                  {message.type === 'user' && <CheckCircle className="w-3 h-3 text-blue-400" />}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-black rounded-t-3xl h-full flex flex-col">
                          {/* iMessage Header - No green blinking */}
                          <div className="flex items-center gap-3 p-4 bg-[#1C1C1E] text-white border-b border-gray-800">
                            <div className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center">
                              <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium">Asmi AI</span>
                          </div>
                          
                          {/* Messages */}
                          <div className="p-4 space-y-3 bg-black flex-1 overflow-y-auto">
                            {imessageMessages.slice(0, messageIndex + 1).map((message, index) => (
                              <motion.div
                                key={`imessage-${index}-${demoKey}`}
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
                                    {/* Static sound bars */}
                                    <div className="flex items-center gap-0.5 flex-1">
                                      <div className="w-1 h-2 bg-[#5DFF9F] rounded"></div>
                                      <div className="w-1 h-4 bg-[#5DFF9F] rounded"></div>
                                      <div className="w-1 h-3 bg-[#5DFF9F] rounded"></div>
                                      <div className="w-1 h-5 bg-[#5DFF9F] rounded"></div>
                                      <div className="w-1 h-2 bg-[#5DFF9F] rounded"></div>
                                      <div className="w-1 h-4 bg-[#5DFF9F] rounded"></div>
                                      <div className="w-1 h-3 bg-[#5DFF9F] rounded"></div>
                                    </div>
                                    <span className="text-xs text-gray-400">0:05</span>
                                  </div>
                                )}
                                <p className="text-white text-sm whitespace-pre-line leading-relaxed">
                                  {message.text.includes('Calendar Updated') ? (
                                    <span>
                                      <strong>Calendar Updated</strong>
                                      {message.text.replace('Calendar Updated', '')}
                                    </span>
                                  ) : message.text}
                                </p>
                                <p className="text-xs text-gray-400 mt-1 text-right">
                                  {message.timestamp}
                                </p>
                              </motion.div>
                            ))}
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

      {/* Waitlist CTA - Updated with urgency */}
      <section className="py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-light mb-8 text-white">
            Be among top 1%?
          </h2>
          
          <motion.div
            className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl border border-white/5 p-6 max-w-md mx-auto mb-8 shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-400 flex-1"
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
              Join the tribe of top 1% operators in the world
            </p>
          </motion.div>

          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-sm px-4 py-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-red-400 rounded-full mr-2"
              />
              Only 47 spots left in beta
            </Badge>
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

      {/* Final CTA - Updated for urgency */}
      <section className="py-16 px-4 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div className="mb-4">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20 mb-4 text-sm px-4 py-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-red-400 rounded-full mr-2"
              />
              Only 47 spots left in beta
            </Badge>
          </motion.div>

          <h2 className="text-4xl font-light mb-8 text-white">
            We're onboarding <span className="text-[#5DFF9F]">100 people</span> who move faster than their calendar.
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            Join the exclusive beta before we close applications.
          </p>
          
          <motion.div
            className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl border border-white/5 p-6 max-w-md mx-auto mb-8 shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-400 flex-1"
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
                  "Secure my spot"
                )}
              </Button>
            </form>
            
            <p className="text-gray-400 text-xs mt-3 text-center">
              Applications close when we hit 100 members
            </p>
          </motion.div>
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
