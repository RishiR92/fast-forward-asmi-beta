import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, CheckCircle, Mic, Loader2, Send, MoreHorizontal } from "lucide-react";
import { SwipeableStories } from "@/components/SwipeableStories";
import { NeuralMemoryEngine } from "@/components/NeuralMemoryEngine";
import { TypingTestimonials } from "@/components/TypingTestimonials";
import { ScrollableTimeline } from "@/components/ScrollableTimeline";

const Index = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [phoneGlow, setPhoneGlow] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Demo 1: Profile Discovery - Integration & Analysis
  const demo1Messages = [
    { type: "user", text: "Morning Asmi — what's my day look like?", delay: 2000, timestamp: "7:45 AM" },
    { type: "asmi", text: "Morning Brief\n\n• 9:30 AM Eng stand-up\n• 11:00 AM Acme renewal prep\n• 1:00 PM Product review\n• 4:30 PM Investor sync\n\nTravel: 18 min to office (rain adds ~5 min)", delay: 2500, timestamp: "7:45 AM" },
    { type: "asmi", text: "Inbox highlights\n\n• CFO: burn report sign-off due today\n• Legal: MSA redlines from Acme\n• Candidate: reschedule request\n• 3 approvals pending", delay: 2200, timestamp: "7:46 AM" },
    { type: "user", text: "Prioritize CFO + Acme. Park the candidate for tomorrow.", delay: 1700, timestamp: "7:46 AM" },
    { type: "asmi", text: "Got it. I’ll draft a CFO reply, prep your renewal talk track, and pause the candidate thread.", delay: 2000, timestamp: "7:47 AM" }
  ];

  // Demo 2: Smart Scheduling - Meeting coordination
  const demo2Messages = [
    { type: "user", text: "Find 25 minutes with Priya this week after 2 PM, Tue–Thu.", delay: 2000, timestamp: "9:18 AM" },
    { type: "asmi", text: "Suggested slots sent to Priya\n\n• Tue 3:30 PM\n• Wed 2:15 PM\n• Thu 4:00 PM\n\nWill confirm and add Zoom.", delay: 2500, timestamp: "9:18 AM" },
    { type: "user", text: "Lock Wed 2:15.", delay: 1500, timestamp: "9:19 AM" },
    { type: "asmi", text: "Meeting scheduled ✅\n\nWed 2:15 PM with Priya\nAgenda: Q3 launch blockers\nLink: zoom.us/j/123-456", delay: 1500, timestamp: "9:19 AM" }
  ];

  // Demo 3: Meeting Intelligence - Deep research & prep
  const demo3Messages = [
    { type: "user", text: "Prep me for the Acme renewal at 11.", delay: 2000, timestamp: "9:20 AM" },
    { type: "asmi", text: "Acme Renewal Brief\n\nGoal: Upsell to annual + add support tier\nStakeholders: Steve (VP Sales), Nina (Procurement)\nContext: Pushed back on implementation timeline and price\nRisk: Competing bid from NovaSoft", delay: 3000, timestamp: "9:20 AM" },
    { type: "asmi", text: "Talk track\n\n• Lead with 22% faster rollout case study (Orion)\n• Offer phased milestones; drop-in success team wk 1\n• Annual discount + support tier bundled\n• Close with pilot success metrics", delay: 3500, timestamp: "9:21 AM" }
  ];

  // Demo 4: Executive Assistant - Advanced task management
  const demo4Messages = [
    { type: "user", text: "Rebook SFO→SEA to arrive by 2 PM tomorrow. Aisle seat, under $400.", delay: 2000, timestamp: "9:22 AM" },
    { type: "asmi", text: "Best option\n\nAlaska 10:30 AM → 12:45 PM ($368)\nAisle 8C held for 10 min\nCalendar + TSA time adjusted", delay: 2500, timestamp: "9:22 AM" },
    { type: "user", text: "Book it.", delay: 1500, timestamp: "9:23 AM" },
    { type: "asmi", text: "Flight booked ✅\n\nReceipt saved to Expenses/Travel\nLyft scheduled 8:50 AM", delay: 1500, timestamp: "9:23 AM" },
    { type: "asmi", text: "Maya pinged about dinner next week. Want me to pick a quiet spot in Palo Alto?", delay: 3000, timestamp: "9:24 AM" },
    { type: "user", text: "Yes, Thursday around 7:30 PM. Quiet, good for strategy chat.", delay: 1500, timestamp: "9:24 AM" },
    { type: "asmi", text: "Reserved at Evvia, Thu 7:30 PM\nTable in back, low noise\nCalendar invite sent; reminder set.", delay: 2500, timestamp: "9:25 AM" }
  ];

  const demos = [demo1Messages, demo2Messages, demo3Messages, demo4Messages];
  const demoTitles = [
    "Morning Brief",
    "Smart Scheduling", 
    "Meeting Prep",
    "Executive Assistant"
  ];
  
  const currentMessages = demos[currentDemo];

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

  // Demo messages container ref for isolated auto-scroll
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll only when near bottom to avoid fighting user scroll
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.clientHeight - el.scrollTop;
    const threshold = 80; // px
    if (distanceToBottom < threshold) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  }, [messageIndex, currentDemo]);

  // Enhanced demo controller with beautiful transitions
  useEffect(() => {
    if (messageIndex < currentMessages.length - 1) {
      const currentMessage = currentMessages[messageIndex];
      const nextMessage = currentMessages[messageIndex + 1];
      
      // Show typing indicator for Asmi's messages
      if (nextMessage?.type === 'asmi') {
        setIsTyping(true);
        setPhoneGlow(true);
        
        // Hide typing after a short delay, then show message
        const typingTimer = setTimeout(() => {
          setIsTyping(false);
        }, Math.min(currentMessage.delay * 0.7, 2000));
        
        const messageTimer = setTimeout(() => {
          setMessageIndex(prev => prev + 1);
          setPhoneGlow(false);
        }, currentMessage.delay);
        
        return () => {
          clearTimeout(typingTimer);
          clearTimeout(messageTimer);
        };
      } else {
        // Regular timing for user messages
        const timer = setTimeout(() => {
          setMessageIndex(prev => prev + 1);
        }, currentMessage.delay);
        
        return () => clearTimeout(timer);
      }
    } else {
      // Transition to next demo or loop back to first
      const transitionTimer = setTimeout(() => {
        setIsTransitioning(true);
        setIsTyping(false);
        setPhoneGlow(false);
        
        // After transition animation, switch demo
        setTimeout(() => {
          setCurrentDemo(prev => (prev + 1) % demos.length);
          setMessageIndex(0);
          setIsTransitioning(false);
        }, 800); // Transition duration
      }, 3000); // Pause before transition
      
      return () => clearTimeout(transitionTimer);
    }
  }, [messageIndex, currentDemo]);

  // Reset message index when demo changes
  useEffect(() => {
    setMessageIndex(0);
  }, [currentDemo]);

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
      {/* Hero Section */}
      <section ref={heroRef} className="pt-16 pb-4 px-4 relative">
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

      {/* Dynamic iPhone Demo - 4 Beautiful Transitions */}
      <section className="py-4 px-2 relative">
        {/* Demo Title Indicator */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDemo}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 text-sm px-4 py-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-[#5DFF9F] rounded-full mr-2"
                />
                {demoTitles[currentDemo]}
              </Badge>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="w-full max-w-[320px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDemo}
              initial={{ 
                opacity: 0, 
                x: isTransitioning ? 100 : 0,
                scale: 0.95 
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: 1 
              }}
              exit={{ 
                opacity: 0, 
                x: -100,
                scale: 0.95 
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="relative"
            >
              {/* iPhone 15 Pro Frame - Mobile optimized with dynamic glow */}
              <motion.div 
                className="relative bg-gray-800 rounded-[2.5rem] p-1 shadow-2xl border border-gray-600/30 mx-auto w-full max-w-[320px]"
                animate={{
                  boxShadow: phoneGlow 
                    ? "0 0 40px rgba(93, 255, 159, 0.3), 0 20px 60px -20px rgba(0, 0, 0, 0.8)"
                    : "0 20px 60px -20px rgba(0, 0, 0, 0.8)",
                  scale: phoneGlow ? 1.02 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10 flex items-center justify-center">
                  <div className="w-1 h-1 bg-gray-500 rounded-full" />
                </div>
                
                    {/* Screen - Mobile optimized with isolated scroll context */}
                <div className="bg-black rounded-[2.3rem] overflow-hidden relative h-[580px] w-full">
                  {/* Fixed Status Bar with animated signal */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 pt-6 pb-2 text-white text-xs font-medium bg-black rounded-t-[2.3rem]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <motion.div 
                        className="w-3 h-1.5 border border-white rounded-sm"
                        animate={{ opacity: phoneGlow ? [1, 0.5, 1] : 1 }}
                        transition={{ duration: 1, repeat: phoneGlow ? Infinity : 0 }}
                      >
                        <motion.div 
                          className="w-2 h-0.5 bg-green-500 rounded-sm m-0.5"
                          animate={{ 
                            backgroundColor: phoneGlow ? ["#10b981", "#5dff9f", "#10b981"] : "#10b981"
                          }}
                          transition={{ duration: 0.8, repeat: phoneGlow ? Infinity : 0 }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Container with overflow hidden to create scroll context */}
                  <div className="pt-14 pb-3 px-1 h-full overflow-hidden">
                    <motion.div
                      key={`demo-${currentDemo}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="bg-[#0B141A] h-full flex flex-col"
                    >
                      {/* WhatsApp Header with typing indicator */}
                      <div className="bg-[#202C33] px-4 py-3 flex items-center gap-3 border-b border-gray-700/30 flex-shrink-0">
                        <motion.div 
                          className="w-8 h-8 bg-[#5DFF9F] rounded-full flex items-center justify-center"
                          animate={{ 
                            scale: isTyping ? [1, 1.1, 1] : 1,
                            boxShadow: isTyping ? "0 0 15px rgba(93, 255, 159, 0.6)" : "none"
                          }}
                          transition={{ duration: 0.8, repeat: isTyping ? Infinity : 0 }}
                        >
                          <span className="text-black text-xs font-bold">A</span>
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-white text-sm font-medium">Asmi - Chief of staff</h3>
                          <AnimatePresence mode="wait">
                            {isTyping ? (
                              <motion.div
                                key="typing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-1"
                              >
                                <span className="text-[#5DFF9F] text-xs">typing</span>
                                <div className="flex gap-0.5">
                                  {[0, 1, 2].map((i) => (
                                    <motion.div
                                      key={i}
                                      className="w-1 h-1 bg-[#5DFF9F] rounded-full"
                                      animate={{ 
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5]
                                      }}
                                      transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                      }}
                                    />
                                  ))}
                                </div>
                              </motion.div>
                            ) : (
                              <motion.span 
                                key="online"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-gray-400"
                              >
                                online
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                        <MoreHorizontal className="text-gray-400 w-5 h-5" />
                      </div>

                      {/* Messages with isolated scroll - auto scroll only affects this container */}
                      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain p-3 space-y-2 bg-[#0B141A]">
                        {currentMessages.slice(0, messageIndex + 1).map((message, index) => (
                          <motion.div
                            key={`demo-${currentDemo}-msg-${index}`}
                            initial={{ 
                              opacity: 0, 
                              scale: 0.7, 
                              y: 30,
                              rotateX: -15
                            }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1, 
                              y: 0,
                              rotateX: 0
                            }}
                            transition={{ 
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                              duration: 0.6,
                              delay: index * 0.1 
                            }}
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }}
                            className={message.type === 'asmi' ? 
                              "bg-[#202C33] rounded-xl rounded-tl-md p-2.5 max-w-[90%] shadow-lg border border-gray-700/20" :
                              "bg-[#005C4B] rounded-xl rounded-tr-md p-2.5 max-w-[90%] ml-auto shadow-lg border border-green-600/20"
                            }
                            style={{
                              boxShadow: message.type === 'asmi' 
                                ? "0 4px 20px rgba(93, 255, 159, 0.1)" 
                                : "0 4px 20px rgba(0, 92, 75, 0.3)"
                            }}
                          >
                            <motion.p 
                              className="text-white text-xs whitespace-pre-line leading-relaxed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {message.text}
                            </motion.p>
                            <motion.p 
                              className="text-xs text-gray-400 mt-1.5 flex items-center gap-1"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <span className="text-[10px]">{message.timestamp}</span>
                              {message.type === 'user' && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                                >
                                  <CheckCircle className="w-2.5 h-2.5 text-blue-400" />
                                </motion.div>
                              )}
                            </motion.p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Demo Progress Indicators */}
        <motion.div 
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {demos.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentDemo ? 'bg-[#5DFF9F] w-6' : 'bg-gray-600'
              }`}
              animate={{
                scale: index === currentDemo ? 1.2 : 1,
                backgroundColor: index === currentDemo ? '#5DFF9F' : '#4b5563'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
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
