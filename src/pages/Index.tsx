import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Phone, Users, Brain, Target, Mail, Clock, Zap, User, Eye, RotateCcw, CheckCircle, Send, Mic, PlayCircle, Search, Globe } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [currentDemo, setCurrentDemo] = useState("whatsapp");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typingText, setTypingText] = useState("");

  // Enhanced chat demo messages
  const whatsappMessages = [
    { type: "user", text: "Hey, can you help me prep for my meeting with Sarah tomorrow?", delay: 500 },
    { type: "asmi", text: "Of course! Let me pull up what I know about Sarah...", delay: 600 },
    { type: "asmi", text: "📋 **Sarah Meeting Brief**\n\n• Sarah Johnson, VP Marketing @ TechCorp\n• Last meeting: 2 weeks ago about Q4 campaign\n• Her priorities: Brand partnerships, growth metrics\n• You promised to send case studies (still pending)\n• Suggested talking points: ROI data, timeline updates", delay: 1000 },
    { type: "asmi", text: "Should I remind you to prepare those case studies? 📊", delay: 1400 }
  ];

  const imessageMessages = [
    { type: "user", text: "🎤 Coffee with Mark from Acme Friday 3pm", delay: 500, isVoice: true },
    { type: "asmi", text: "🔍 Found Mark Stevens, CTO @ Acme Corp", delay: 600 },
    { type: "asmi", text: "✅ **Calendar Updated**\nCoffee w/ Mark Stevens\nFri, Dec 8 • 3:00 PM\n\nInvite sent to mark@acmecorp.com", delay: 900 },
    { type: "asmi", text: "Asmi's got it. 🎯", delay: 1200 }
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

  // Demo animation with swish transition
  useEffect(() => {
    const demoInterval = setInterval(() => {
      if (currentDemo === "whatsapp") {
        if (messageIndex < whatsappMessages.length - 1) {
          setMessageIndex(prev => prev + 1);
        } else {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentDemo("imessage");
            setMessageIndex(0);
            setIsTransitioning(false);
          }, 300); // Faster swish transition
        }
      } else {
        if (messageIndex < imessageMessages.length - 1) {
          setMessageIndex(prev => prev + 1);
        } else {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentDemo("whatsapp");
            setMessageIndex(0);
            setIsTransitioning(false);
          }, 300); // Faster swish transition
        }
      }
    }, 600);

    return () => clearInterval(demoInterval);
  }, [currentDemo, messageIndex]);

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { email });
  };

  // Refs for scroll animations
  const heroRef = useRef(null);
  const useCasesRef = useRef(null);
  const memoryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const dailyFlowRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const useCasesInView = useInView(useCasesRef, { once: true, margin: "-100px" });
  const memoryInView = useInView(memoryRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const dailyFlowInView = useInView(dailyFlowRef, { once: true, margin: "-100px" });

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

      {/* Dynamic iPhone Demo - Static Height */}
      <section className="py-8 px-4 relative">
        <div className="max-w-xs mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Sleek iPhone Frame - Static dimensions */}
            <div className="relative bg-black rounded-[2.5rem] p-0.5 shadow-2xl border border-gray-700/50">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-1 bg-[#5DFF9F] rounded-full"
                />
              </div>
              
              {/* Screen - Fixed height */}
              <div className="bg-black rounded-[2.25rem] overflow-hidden relative h-[620px] w-[300px]">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-6 pb-2 text-white text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1.5 border border-white rounded-sm">
                      <div className="w-2 h-0.5 bg-green-500 rounded-sm m-0.5"></div>
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
                      transition={{ duration: 0.3, ease: "easeInOut" }} // Swish animation
                      className="px-2 pb-4 h-full"
                    >
                      {currentDemo === "whatsapp" ? (
                        <div className="bg-[#0B141A] rounded-t-2xl h-full">
                          {/* WhatsApp Header */}
                          <div className="flex items-center gap-3 p-3 bg-[#202C33] text-white">
                            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center relative">
                              <MessageSquare className="w-4 h-4 text-white" />
                              <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#5DFF9F] rounded-full"
                              />
                            </div>
                            <div>
                              <span className="font-medium text-sm">Asmi AI</span>
                              <p className="text-xs text-green-400">● online</p>
                            </div>
                          </div>
                          
                          {/* Messages */}
                          <div className="p-3 space-y-2 bg-[#0B141A] flex-1 overflow-y-auto">
                            <AnimatePresence>
                              {whatsappMessages.slice(0, messageIndex + 1).map((message, index) => (
                                <motion.div
                                  key={`whatsapp-${index}`}
                                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{ duration: 0.4, ease: "easeOut" }}
                                  className={message.type === 'asmi' ? 
                                    "bg-[#202C33] rounded-xl rounded-tl-md p-2.5 max-w-[85%] shadow-lg" :
                                    "bg-[#005C4B] rounded-xl rounded-tr-md p-2.5 max-w-[85%] ml-auto shadow-lg"
                                  }
                                >
                                  <p className="text-white text-xs whitespace-pre-line leading-relaxed">
                                    {message.text}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                    <span>{message.type === 'asmi' ? '8:47 AM' : '8:48 AM'}</span>
                                    {message.type === 'user' && <CheckCircle className="w-2 h-2 text-blue-400" />}
                                  </p>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-black rounded-t-2xl h-full">
                          {/* iMessage Header */}
                          <div className="flex items-center gap-3 p-3 bg-[#1C1C1E] text-white border-b border-gray-800">
                            <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center relative">
                              <MessageSquare className="w-4 h-4 text-white" />
                              <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#5DFF9F] rounded-full"
                              />
                            </div>
                            <span className="font-medium text-sm">Asmi AI</span>
                          </div>
                          
                          {/* Messages */}
                          <div className="p-3 space-y-2 bg-black flex-1 overflow-y-auto">
                            <AnimatePresence>
                              {imessageMessages.slice(0, messageIndex + 1).map((message, index) => (
                                <motion.div
                                  key={`imessage-${index}`}
                                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  transition={{ duration: 0.4, ease: "easeOut" }}
                                  className={message.type === 'asmi' ? 
                                    "bg-[#3C3C43] rounded-xl rounded-tl-md p-2.5 max-w-[85%] shadow-lg" :
                                    "bg-[#007AFF] rounded-xl rounded-tr-md p-2.5 max-w-[85%] ml-auto shadow-lg"
                                  }
                                >
                                  {message.isVoice && (
                                    <div className="flex items-center gap-2 mb-1">
                                      <Mic className="w-3 h-3 text-white" />
                                      <motion.div
                                        animate={{ scaleX: [1, 1.5, 1] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="flex-1 h-0.5 bg-[#5DFF9F] rounded"
                                      />
                                      <span className="text-xs text-gray-400">0:03</span>
                                    </div>
                                  )}
                                  <p className="text-white text-xs whitespace-pre-line leading-relaxed">
                                    {message.text}
                                  </p>
                                  {message.text.includes("Calendar Updated") && (
                                    <motion.div 
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.3 }}
                                      className="mt-2 bg-black/20 rounded-lg p-2"
                                    >
                                      <div className="flex items-center gap-2 text-[#5DFF9F] text-xs">
                                        <Calendar className="w-3 h-3" />
                                        <span>Event Created</span>
                                      </div>
                                    </motion.div>
                                  )}
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

      {/* Waitlist CTA */}
      <section className="py-12 px-4 relative">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-light mb-6 text-white">
              Ready to be 100x more productive?
            </h3>
            
            <form onSubmit={handleWaitlistSignup} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12 text-base rounded-2xl px-6"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-medium h-12 text-base rounded-2xl"
              >
                Join Waitlist
              </Button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4">
              We'll text you when it's ready. No spam, just Asmi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Case Story Tiles */}
      <section ref={useCasesRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-light text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Real-life flows
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "You whisper on the go",
                result: "Asmi schedules meetings, send follow-ups",
                icon: Mic,
                color: "text-blue-400"
              },
              {
                step: "Before your next meeting",
                result: "Asmi pulls their LinkedIn + last meeting notes",
                icon: User,
                color: "text-green-400"
              },
              {
                step: "Never forget anything",
                result: "Send voice note → Asmi saves action items & follows up",
                icon: Brain,
                color: "text-purple-400"
              }
            ].map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="bg-white/[0.02] border-white/10 hover:border-[#5DFF9F]/30 transition-all duration-500 h-full group-hover:bg-white/[0.05]">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      className={`w-12 h-12 mx-auto ${flow.color} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <flow.icon className="w-full h-full" />
                    </motion.div>
                    
                    <div className="space-y-3">
                      <p className="text-gray-300 text-base leading-relaxed">
                        "{flow.step}"
                      </p>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={useCasesInView ? { width: "100%" } : {}}
                        transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                        className="h-0.5 bg-gradient-to-r from-[#5DFF9F] to-[#A07CFE] rounded"
                      />
                      <p className="text-white font-medium text-base">
                        {flow.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Engine Visualization */}
      <section ref={memoryRef} className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={memoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light mb-6 text-white">
              Asmi Memory Engine
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Every mail, meeting, and voice note connects in real-time
            </p>

            {/* Memory Graph Visualization */}
            <div className="relative h-96 bg-white/[0.02] rounded-3xl border border-white/10 overflow-hidden">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={memoryInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Central Brain Node */}
                <motion.div
                  className="w-20 h-20 bg-[#5DFF9F] rounded-full flex items-center justify-center relative z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(93, 255, 159, 0.4)",
                      "0 0 0 30px rgba(93, 255, 159, 0)",
                      "0 0 0 0 rgba(93, 255, 159, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain className="w-10 h-10 text-black" />
                </motion.div>

                {/* Connected Input Sources - Symmetric arrangement */}
                {[
                  { icon: Calendar, position: { top: "20%", left: "50%", transform: "translateX(-50%)" }, delay: 0.2, label: "Calendar" },
                  { icon: Mail, position: { top: "50%", right: "15%" }, delay: 0.4, label: "Mails" },
                  { icon: Mic, position: { bottom: "20%", left: "50%", transform: "translateX(-50%)" }, delay: 0.6, label: "Voice Notes" },
                  { icon: Globe, position: { top: "50%", left: "15%" }, delay: 0.8, label: "Internet" }
                ].map((node, index) => (
                  <motion.div
                    key={index}
                    className="absolute flex flex-col items-center gap-3"
                    style={node.position}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={memoryInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: node.delay, duration: 0.6 }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <node.icon className="w-6 h-6 text-[#5DFF9F]" />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{node.label}</span>
                    
                    {/* Connection Lines to center */}
                    <motion.div
                      className="absolute w-0.5 bg-gradient-to-r from-[#5DFF9F] to-transparent"
                      style={{
                        height: index % 2 === 0 ? "80px" : "100px",
                        transformOrigin: "50% 0%",
                        transform: index === 0 ? "rotate(90deg) translateY(-40px)" :
                                 index === 1 ? "rotate(180deg) translateY(-50px)" :
                                 index === 2 ? "rotate(270deg) translateY(-40px)" :
                                 "rotate(0deg) translateY(-50px)"
                      }}
                      initial={{ scaleY: 0 }}
                      animate={memoryInView ? { scaleY: 1 } : {}}
                      transition={{ delay: node.delay + 0.3, duration: 0.8 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Data Heavy Visualization - More floating points */}
              {Array.from({ length: 25 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-[#5DFF9F]/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.5, 0.8]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}

              {/* Data Processing Lines */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#5DFF9F]/30 to-transparent"
                  style={{
                    width: `${30 + Math.random() * 40}%`,
                    left: `${Math.random() * 70}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scaleX: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-light text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Loved by fast movers
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "I live in iMessage. Asmi preps my investor calls, tracks follow-ups, and remembers promises I'd otherwise forget.",
                name: "Alex Chen",
                role: "Series A Founder",
                avatar: "🚀"
              },
              {
                quote: "Our GTM team operates via chat. Asmi keeps us synced on prospects, deals, and next steps without the dashboard bloat.",
                name: "Sarah Park",
                role: "VP Growth @ Scale Co",
                avatar: "⚡"
              },
              {
                quote: "50 founder meetings a week. Asmi remembers every conversation, preps context, and drafts perfect follow-ups.",
                name: "Marcus Rodriguez", 
                role: "Partner @ Velocity VC",
                avatar: "💰"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    {/* Speech Bubble */}
                    <motion.div
                      className="bg-[#5DFF9F]/10 rounded-2xl p-4 relative"
                      whileHover={{ backgroundColor: "rgba(93, 255, 159, 0.15)" }}
                    >
                      <p className="text-white text-base leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="absolute -bottom-2 left-6 w-4 h-4 bg-[#5DFF9F]/10 rotate-45" />
                    </motion.div>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div>
                        <p className="text-white font-medium">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Flow Timeline */}
      <section ref={dailyFlowRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-light text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={dailyFlowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Your day with Asmi
          </motion.h2>

          {/* Horizontal Scrolling Timeline */}
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6 min-w-max">
              {[
                {
                  time: "7:00 AM",
                  title: "Morning Brief",
                  description: "Asmi texts your day's agenda with cracked insights",
                  icon: Clock,
                  color: "text-yellow-400"
                },
                {
                  time: "10:30 AM", 
                  title: "Pre-Meeting Intel",
                  description: "Context on who you're meeting and how to win them",
                  icon: Eye,
                  color: "text-blue-400"
                },
                {
                  time: "2:15 PM",
                  title: "Voice Note Capture",
                  description: "Record thoughts on the go",
                  icon: Mic,
                  color: "text-green-400"
                },
                {
                  time: "6:00 PM",
                  title: "Follow-Up Reminders", 
                  description: "Never ghost important people",
                  icon: RotateCcw,
                  color: "text-purple-400"
                }
              ].map((moment, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-64"
                  initial={{ opacity: 0, x: 50 }}
                  animate={dailyFlowInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-white/[0.02] border-white/10 hover:border-[#5DFF9F]/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center space-y-4">
                      <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20">
                        {moment.time}
                      </Badge>
                      
                      <motion.div
                        className={`w-12 h-12 mx-auto ${moment.color}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <moment.icon className="w-full h-full" />
                      </motion.div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">
                          {moment.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {moment.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
