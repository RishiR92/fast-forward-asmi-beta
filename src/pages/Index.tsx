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
  const [currentDemo, setCurrentDemo] = useState(0); // Start at intro (index 0)
  const [isTyping, setIsTyping] = useState(false);
  const [phoneGlow, setPhoneGlow] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showIntro, setShowIntro] = useState(true); // Start with intro
  
  // Intro screen animation states
  const [introPhase, setIntroPhase] = useState<'logo' | 'typing' | 'dispersing'>('logo');
  const [introTypewriterText, setIntroTypewriterText] = useState("");
  const [showIntroParticles, setShowIntroParticles] = useState(false);
  
  // End screen animation states
  const [endScreenVisible, setEndScreenVisible] = useState(false);

  // Intro timing constants
  const INTRO_TIMINGS = {
    LOGO_MS: 1000,
    TYPE_INTERVAL_MS: 60,
    FADE_DELAY_MS: 800,
    DISPERSE_DELAY_MS: 800,
    END_TO_INTRO_DELAY_MS: 120
  };

  // Force fresh mount of intro on each loop
  const [introCycleId, setIntroCycleId] = useState(0);

  // Centralized timer management for intro
  const introTimers = useRef<{ timeouts: number[]; intervals: number[] }>({ timeouts: [], intervals: [] });
  const clearAllIntroTimers = () => {
    introTimers.current.timeouts.forEach(clearTimeout);
    introTimers.current.intervals.forEach(clearInterval);
    introTimers.current = { timeouts: [], intervals: [] };
  };
  const setIntroTimeout = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    introTimers.current.timeouts.push(id);
    return id;
  };
  const setIntroInterval = (fn: () => void, ms: number) => {
    const id = window.setInterval(fn, ms);
    introTimers.current.intervals.push(id);
    return id;
  };

  // Demo 1: Profile Discovery - Integration & Analysis
  const demo1Messages = [
    { type: "user", text: "Asmi, you look intriguing! What can you do for me?", delay: 2000, timestamp: "9:15 AM" },
    { type: "asmi", text: "Hi Alex. Asmi is your smart chief of staff. To get started, first integrate your calendar and mail here and see the magic!", delay: 2500, timestamp: "9:15 AM" },
    { type: "asmi", text: "Gmail linked ✅\nCalendar linked ✅", delay: 2000, timestamp: "9:16 AM" },
    { type: "asmi", text: "Well well Alex, you are absolutely crushing it\n\n• Serial entrepreneur & CEO at TechFlow\n• Boston Marathon finisher (3:12 best time)\n• 5× founder with 2 successful exits\n• Stanford MBA, former McKinsey consultant\n• Angel investor in 15+ startups\n• Lives in Palo Alto, originally from Boston", delay: 3000, timestamp: "9:16 AM" },
    { type: "asmi", text: "Key insights from your emails & calendar\n\n📧 Q3 roadmap due Friday (board pressure)\n📧 Steve Johnson - Acme Corp partnership opportunity\n📅 3 investor calls next week\n📧 Pat (Sequoia) - Series B intro", delay: 2500, timestamp: "9:17 AM" }
  ];

  // Demo 2: Smart Scheduling - Meeting coordination
  const demo2Messages = [
    { type: "user", text: "Schedule a call with Steve for 3 PM tomorrow.", delay: 2000, timestamp: "9:18 AM" },
    { type: "asmi", text: "Call with Steve\n\n🕒 03:00 PM, Aug 8, 2025\n👤 Steve Johnson\n📋 Agenda: Catch up + next steps\n🔗 meet.google.com/xyz-1234", delay: 2500, timestamp: "9:18 AM" },
    { type: "user", text: "Confirmed", delay: 1500, timestamp: "9:19 AM" },
    { type: "asmi", text: "Meeting scheduled ✅", delay: 1500, timestamp: "9:19 AM" }
  ];

  // Demo 3: Meeting Intelligence - Deep research & prep
  const demo3Messages = [
    { type: "user", text: "Help me prep for this meeting.", delay: 2000, timestamp: "9:20 AM" },
    { type: "asmi", text: "Meeting Prep: Steve Johnson\n\nObjective: Align on Q3 roadmap & secure Acme Corp partnership\n\nProfile:\n• VP Sales at Acme Corp (3 years)\n• Former director at Oracle, strong enterprise sales background\n• MIT Sloan MBA, lives in Austin\n• Key decision maker for vendor partnerships ($500K+ deals)", delay: 3000, timestamp: "9:20 AM" },
    { type: "asmi", text: "Context:\n• Last spoke July 15 about contract terms and pricing structure\n• Steve expressed concerns about implementation timeline\n• His team is evaluating 3 vendors, decision due end of August\n• Acme Corp expanding West Coast operations - good timing", delay: 3500, timestamp: "9:21 AM" }
  ];

  // Demo 4: Executive Assistant - Advanced task management
  const demo4Messages = [
    { type: "user", text: "Book 1 hr dinner with Sophia to run me through marketing plan. Pick a quiet downtown SF spot.", delay: 2000, timestamp: "9:22 AM" },
    { type: "asmi", text: "Dinner with Sophia\n\n🕗 07:00 PM, Aug 8, 2025\n👤 Sophia Lee, BrightWave\n📍 The Rotunda at Neiman Marcus\n📋 Agenda: Marketing plan walkthrough", delay: 2500, timestamp: "9:22 AM" },
    { type: "user", text: "Confirmed", delay: 1500, timestamp: "9:23 AM" },
    { type: "asmi", text: "Dinner scheduled ✅", delay: 1500, timestamp: "9:23 AM" },
    { type: "asmi", text: "Pat (Sequoia) reached out 2 days ago about an investment chat. Want me to draft a reply?", delay: 3000, timestamp: "9:24 AM" },
    { type: "user", text: "Yes", delay: 1500, timestamp: "9:24 AM" },
    { type: "asmi", text: "Draft Reply to Pat\n\n\"Hi Pat, thanks for reaching out. I'd love to explore this further. How about we schedule a call for next week? I'm available Tuesday-Thursday afternoons. Looking forward to connecting.\"", delay: 2500, timestamp: "9:25 AM" }
  ];

  const demos = [demo1Messages, demo2Messages, demo3Messages, demo4Messages];
  const demoTitles = ["Profile Discovery", "Smart Scheduling", "Meeting Intelligence", "Executive Assistant"];
  
  // Reorganized demo cycle: intro(0) → demo1(1) → demo2(2) → demo3(3) → demo4(4) → end(5)
  const totalDemoCycles = 6;
  const isIntroDemo = currentDemo === 0;
  const isEndDemo = currentDemo === 5;
  const isDemoScreen = currentDemo >= 1 && currentDemo <= 4;
  const currentMessages = isDemoScreen ? demos[currentDemo - 1] : [];

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

  // Enhanced auto-scroll that always follows new messages smoothly
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    
    // Always scroll to bottom when new messages appear
    const scrollToBottom = () => {
      requestAnimationFrame(() => {
        el.scrollTo({ 
          top: el.scrollHeight, 
          behavior: 'smooth' 
        });
      });
    };
    
    // Immediate scroll for message appearance
    scrollToBottom();
    
    // Additional scroll with reading pace delay for longer messages
    const currentMessage = currentMessages[messageIndex];
    if (currentMessage) {
      const readingDelay = Math.max(500, Math.min(currentMessage.text.length * 20, 1500));
      const delayedScroll = setTimeout(scrollToBottom, readingDelay);
      return () => clearTimeout(delayedScroll);
    }
  }, [messageIndex, currentDemo, currentMessages]);

  // Typing animation for personality - cycles every 3 seconds
  useEffect(() => {
    const personalities = [
      "Remembers everything...",
      "Schedules smartly...",
      "Preps you perfectly...",
      "Works behind the scenes...",
      "Always one step ahead..."
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypingText(personalities[currentIndex]);
      currentIndex = (currentIndex + 1) % personalities.length;
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Function to reset all intro states for clean transitions
  const resetIntroStates = () => {
    clearAllIntroTimers();
    setIntroPhase('logo');
    setIntroTypewriterText("");
    setShowIntroParticles(false);
    setShowIntro(true);
  };

  // Intro screen logic - separated for clean state management
  useEffect(() => {
    if (!isIntroDemo) return;
    
    // Reset all intro states first
    resetIntroStates();

    // Phase 1: Show logo
    setIntroTimeout(() => {
      setIntroPhase('typing');

      // Phase 2: Typewriter effect for "AI Chief of Staff"
      const text = "AI Chief of Staff";
      let charIndex = 0;

      setIntroInterval(() => {
        if (charIndex < text.length) {
          setIntroTypewriterText(text.substring(0, charIndex + 1));
          charIndex++;
        } else {
          // Stop any previous timers before dispersing
          clearAllIntroTimers();

          // Phase 3: Elegant fade-out effect after typing completes
          setIntroTimeout(() => {
            setIntroPhase('dispersing');

            // Move to next demo after fade-out
            setIntroTimeout(() => {
              setCurrentDemo(1);
              setMessageIndex(0);
              setShowIntro(false);
            }, INTRO_TIMINGS.DISPERSE_DELAY_MS);
          }, INTRO_TIMINGS.FADE_DELAY_MS);
        }
      }, INTRO_TIMINGS.TYPE_INTERVAL_MS);
    }, INTRO_TIMINGS.LOGO_MS);

    return () => {
      clearAllIntroTimers();
    };
  }, [currentDemo, introCycleId]); // Depend on introCycleId to force fresh mount

  // End screen logic - separated for clean state management
  useEffect(() => {
    if (!isEndDemo) return;
    
    // Clear any remaining intro timers
    clearAllIntroTimers();
    setEndScreenVisible(true);

    // Show end screen then transition back to intro
    const endTimer = setTimeout(() => {
      // First hide the end screen
      setEndScreenVisible(false);
      
      // Then prepare for intro transition
      setTimeout(() => {
        // Reset all states for clean intro
        setShowIntro(true);
        setIntroPhase('logo');
        setIntroTypewriterText("");
        setShowIntroParticles(false);
        
        // Force fresh intro mount and navigate to intro
        setIntroCycleId(prev => prev + 1);
        setCurrentDemo(0);
        setMessageIndex(0);
      }, INTRO_TIMINGS.END_TO_INTRO_DELAY_MS);
    }, 4000);

    return () => {
      clearTimeout(endTimer);
      clearAllIntroTimers();
    };
  }, [currentDemo]);

  // Clean up non-intro/end states
  useEffect(() => {
    if (!isIntroDemo && !isEndDemo) {
      setShowIntro(false);
      setEndScreenVisible(false);
    }
  }, [currentDemo, isIntroDemo, isEndDemo]);

  // Demo message timing - only runs for actual demos (not intro/end)
  useEffect(() => {
    if (isIntroDemo || isEndDemo || showIntro || endScreenVisible) return; // Skip timing for intro/end demo
    
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
          setCurrentDemo(prev => (prev + 1) % totalDemoCycles); // Cycle through 0,1,2,3,4 (4 = intro)
          setMessageIndex(0);
          setIsTransitioning(false);
        }, 800); // Transition duration
      }, 3000); // Pause before transition
      
      return () => clearTimeout(transitionTimer);
    }
  }, [messageIndex, currentDemo, showIntro, isIntroDemo]);

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
        {/* Demo Title Indicator - Only show for actual demos, not intro/end */}
        {!showIntro && !isIntroDemo && !isEndDemo && !endScreenVisible && (
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
                  {demoTitles[currentDemo - 1]}
                </Badge>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

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
                     <AnimatePresence mode="wait">
                          {showIntro || isIntroDemo ? (
                           // Enhanced Intro Screen with Elegant Fade-Out
                             <motion.div
                               key={`intro-${introCycleId}`}
                               initial={{ opacity: 0, scale: 0.8 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.9 }}
                             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                             className="bg-[#0B141A] h-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
                           >
                              {/* Asmi Logo - Always shown first */}
                              <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ 
                                  delay: 0.3,
                                  duration: 0.8,
                                  ease: [0.4, 0, 0.2, 1] 
                                }}
                                className="mb-6"
                              >
                                <motion.div
                                  animate={
                                    introPhase === 'dispersing'
                                      ? {
                                          scale: 0.3,
                                          opacity: 0,
                                          y: -60,
                                          rotateX: 180,
                                          filter: "blur(4px)"
                                        }
                                      : {
                                          scale: 1,
                                          opacity: 1,
                                          y: 0,
                                          rotateX: 0,
                                          filter: [
                                            "drop-shadow(0 0 20px rgba(160, 124, 254, 0.3))",
                                            "drop-shadow(0 0 30px rgba(160, 124, 254, 0.6))",
                                            "drop-shadow(0 0 20px rgba(160, 124, 254, 0.3))"
                                          ]
                                        }
                                  }
                                  transition={
                                    introPhase === 'dispersing'
                                      ? {
                                          duration: 0.8,
                                          ease: "easeOut"
                                        }
                                      : {
                                          duration: 2,
                                          repeat: Infinity,
                                          ease: "easeInOut"
                                        }
                                  }
                                >
                                  <img 
                                    src="/lovable-uploads/415ce8dc-7e61-4e4d-be9e-1a76104eafab.png" 
                                    alt="Asmi Logo"
                                    className="w-32 h-auto mx-auto"
                                  />
                                </motion.div>
                              </motion.div>

                              {/* Word-by-Word Sand Dispersion Text */}
                              <AnimatePresence>
                                {((introPhase === 'typing' && introTypewriterText.length > 0) || introPhase === 'dispersing') && (
                                  <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="font-inter text-lg text-white flex items-center justify-center flex-wrap gap-1"
                                  >
                                    {["AI", "Chief", "of", "Staff"].map((word, index) => (
                                      <motion.span
                                        key={word}
                                        animate={
                                          introPhase === 'dispersing'
                                            ? {
                                                scale: [1, 0.3, 0],
                                                opacity: [1, 0.7, 0],
                                                y: [0, -30, -60],
                                                rotateX: [0, 180, 360],
                                                filter: ["blur(0px)", "blur(2px)", "blur(4px)"]
                                              }
                                            : {}
                                        }
                                        transition={{
                                          delay: introPhase === 'dispersing' ? index * 0.15 : 0,
                                          duration: 0.8,
                                          ease: "easeOut"
                                        }}
                                      >
                                        {introTypewriterText.includes(word) ? word : ""}
                                      </motion.span>
                                    ))}
                                    {introPhase === 'typing' && (
                                      <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="ml-1 text-[#5DFF9F]"
                                      >
                                        |
                                      </motion.span>
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                           </motion.div>
                        ) : endScreenVisible || isEndDemo ? (
                           // Elegant End Screen with Enhanced Typography
                           <motion.div
                             key="end"
                             initial={{ opacity: 0, scale: 0.8 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.9 }}
                             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                             className="bg-[#0B141A] h-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
                           >
                             {/* Elegant Background Particles */}
                             {Array.from({ length: 8 }).map((_, i) => (
                               <motion.div
                                 key={`bg-particle-${i}`}
                                 className="absolute w-1 h-1 bg-[#5DFF9F]/20 rounded-full"
                                 style={{
                                   left: `${20 + (i * 10)}%`,
                                   top: `${30 + (i % 3) * 20}%`
                                 }}
                                 animate={{
                                   y: [-20, 20, -20],
                                   opacity: [0.2, 0.8, 0.2],
                                   scale: [1, 1.5, 1]
                                 }}
                                 transition={{
                                   duration: 3 + i * 0.5,
                                   repeat: Infinity,
                                   ease: "easeInOut",
                                   delay: i * 0.3
                                 }}
                               />
                             ))}

                             <motion.div
                               className="text-center relative z-10"
                               initial={{ scale: 0.5, opacity: 0 }}
                               animate={{ scale: 1, opacity: 1 }}
                               transition={{ duration: 0.6, ease: "easeOut" }}
                             >
                                {/* Enhanced Typography with Gradient and Effects */}
                                <motion.h1
                                  className="text-xl sm:text-2xl font-semibold whitespace-nowrap relative"
                                  style={{ 
                                    background: 'linear-gradient(135deg, #5DFF9F 0%, #ffffff 50%, #5DFF9F 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    letterSpacing: '0.05em'
                                  }}
                                  animate={{
                                    scale: [1, 1.02, 1],
                                    filter: [
                                      "drop-shadow(0 0 30px rgba(93, 255, 159, 0.4))",
                                      "drop-shadow(0 0 40px rgba(93, 255, 159, 0.6))",
                                      "drop-shadow(0 0 30px rgba(93, 255, 159, 0.4))"
                                    ]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  {"Ready to Move Fast?".split("").map((char, i) => (
                                    <motion.span
                                      key={i}
                                      initial={{ 
                                        opacity: 0, 
                                        y: 30,
                                        rotateX: -90
                                      }}
                                      animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        rotateX: 0
                                      }}
                                      transition={{
                                        delay: i * 0.08,
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                      }}
                                      style={{
                                        display: char === " " ? "inline" : "inline-block"
                                      }}
                                    >
                                      {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                  ))}
                                  
                                  {/* Shimmer Effect */}
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    style={{
                                      transform: 'skewX(-20deg)',
                                      width: '30%'
                                    }}
                                    animate={{
                                      x: ['-200%', '300%']
                                    }}
                                    transition={{
                                      duration: 3,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      repeatDelay: 2
                                    }}
                                  />
                                </motion.h1>
                             </motion.div>
                           </motion.div>
                        ) : (
                         // Demo Content
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
                              >
                                <span className="text-black text-xs font-bold">A</span>
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="text-white text-sm font-medium">Asmi - Chief of staff</h3>
                                <span className="text-xs text-gray-400">online</span>
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
                        )}
                      </AnimatePresence>
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Demo Progress Indicators - Only show for demo screens */}
        {isDemoScreen && (
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
                  index === (currentDemo - 1) ? 'bg-[#5DFF9F] w-6' : 'bg-gray-600'
                }`}
                animate={{
                  scale: index === (currentDemo - 1) ? 1.2 : 1,
                  backgroundColor: index === (currentDemo - 1) ? '#5DFF9F' : '#4b5563'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        )}
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
