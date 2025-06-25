
import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Phone, Users, Brain, Target, Mail, Clock, Zap, User, Eye, RotateCcw, CheckCircle, Send } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [currentApp, setCurrentApp] = useState("WhatsApp");
  const [currentDemo, setCurrentDemo] = useState("whatsapp");
  const [messageIndex, setMessageIndex] = useState(0);

  // Chat demo messages
  const whatsappMessages = [
    { type: "asmi", text: "You have 3 meetings today. Want briefs?", delay: 1000 },
    { type: "asmi", text: "📅 10am: Amanda @ Benchmark\n🚀 2pm: Product sync w/ Sarah\n💰 4pm: Series A follow-up call", delay: 2000 },
    { type: "user", text: "Yes, brief me on Amanda", delay: 3500 },
    { type: "asmi", text: "Amanda Chen, Partner @ Benchmark. You pitched 3 weeks ago. Last email: \"Interesting pricing model, let's dive deeper.\" She's ex-Stripe, loves B2B SaaS. Talk expansion metrics + pricing strategy.", delay: 5000 },
    { type: "asmi", text: "Want a quick script? 📝", delay: 6500 }
  ];

  const imessageMessages = [
    { type: "user", text: "Schedule coffee with Mark from Acme Corp Friday 3pm", delay: 1000 },
    { type: "asmi", text: "Found Mark Stevens, CTO @ Acme Corp in your contacts. Booking Friday 3pm coffee.", delay: 2500 },
    { type: "asmi", text: "Calendar Invite Created\nCoffee w/ Mark Stevens\nFri, Dec 8 • 3:00 PM", delay: 4000 },
    { type: "asmi", text: "Invite sent to mark@acmecorp.com ✅", delay: 5500 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApp(prev => prev === "WhatsApp" ? "iMessage" : "WhatsApp");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Demo animation effect
  useEffect(() => {
    const demoInterval = setInterval(() => {
      if (currentDemo === "whatsapp") {
        if (messageIndex < whatsappMessages.length - 1) {
          setMessageIndex(prev => prev + 1);
        } else {
          // Switch to iMessage demo
          setCurrentDemo("imessage");
          setMessageIndex(0);
        }
      } else {
        if (messageIndex < imessageMessages.length - 1) {
          setMessageIndex(prev => prev + 1);
        } else {
          // Switch back to WhatsApp demo
          setCurrentDemo("whatsapp");
          setMessageIndex(0);
        }
      }
    }, 2000);

    return () => clearInterval(demoInterval);
  }, [currentDemo, messageIndex]);

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { email });
  };

  const featuresRef = useRef(null);
  const personasRef = useRef(null);
  const socialProofRef = useRef(null);
  const howItWorksRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-50px" });
  const personasInView = useInView(personasRef, { once: true, margin: "-50px" });
  const socialProofInView = useInView(socialProofRef, { once: true, margin: "-50px" });
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl sm:text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Asmi AI
            </motion.div>
            <Button 
              variant="outline" 
              className="border-[#5DFF9F]/20 text-[#5DFF9F] hover:bg-[#5DFF9F]/10 text-sm sm:text-base px-3 sm:px-4"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 mb-6 sm:mb-8 text-xs sm:text-sm">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Invite-only • No app required
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 text-white leading-tight tracking-tight">
              Your AI Chief of Staff.
            </h1>
            
            <div className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 h-8 flex items-center justify-center">
              <span className="mr-2 text-base sm:text-lg">On</span>
              <motion.span
                key={currentApp}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[#5DFF9F] font-medium text-base sm:text-lg"
              >
                {currentApp}
              </motion.span>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Asmi remembers everything — meetings, people, and promises — so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Chat Demo Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 relative">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {currentDemo === "whatsapp" ? (
              <motion.div
                key="whatsapp-demo"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 min-h-[400px]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">WhatsApp</span>
                  <span className="text-xs text-gray-500">8:47 AM</span>
                </div>
                
                <div className="space-y-4">
                  <AnimatePresence>
                    {whatsappMessages.slice(0, messageIndex + 1).map((message, index) => (
                      <motion.div
                        key={`whatsapp-${index}`}
                        variants={messageVariants}
                        initial="hidden"
                        animate="visible"
                        className={message.type === 'asmi' ? 
                          "bg-[#5DFF9F]/5 border border-[#5DFF9F]/20 rounded-2xl p-4" :
                          "bg-white/5 rounded-2xl p-4 ml-8"
                        }
                      >
                        {message.type === 'asmi' && (
                          <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                        )}
                        <p className="text-white text-sm sm:text-base whitespace-pre-line">
                          {message.text}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {messageIndex < whatsappMessages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-[#5DFF9F]/5 border border-[#5DFF9F]/20 rounded-2xl p-4 flex items-center gap-2"
                    >
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-[#5DFF9F] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#5DFF9F] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#5DFF9F] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                        />
                      </div>
                      <span className="text-gray-400 text-sm">Asmi is typing...</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="imessage-demo"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 min-h-[400px]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">iMessage</span>
                  <span className="text-xs text-gray-500">2:15 PM</span>
                </div>
                
                <div className="space-y-4">
                  <AnimatePresence>
                    {imessageMessages.slice(0, messageIndex + 1).map((message, index) => (
                      <motion.div
                        key={`imessage-${index}`}
                        variants={messageVariants}
                        initial="hidden"
                        animate="visible"
                        className={message.type === 'asmi' ? 
                          "bg-[#5DFF9F]/5 border border-[#5DFF9F]/20 rounded-2xl p-4" :
                          "bg-white/5 rounded-2xl p-4 ml-8"
                        }
                      >
                        {message.type === 'asmi' && (
                          <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                        )}
                        <p className="text-white text-sm sm:text-base whitespace-pre-line">
                          {message.text}
                        </p>
                        {message.text.includes("Calendar Invite Created") && (
                          <div className="mt-3 bg-black/20 rounded-xl p-3">
                            <p className="text-[#5DFF9F] text-sm">✅ Event Created</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {messageIndex < imessageMessages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-[#5DFF9F]/5 border border-[#5DFF9F]/20 rounded-2xl p-4 flex items-center gap-2"
                    >
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-[#5DFF9F] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#5DFF9F] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#5DFF9F] rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                        />
                      </div>
                      <span className="text-gray-400 text-sm">Asmi is typing...</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleWaitlistSignup} className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 text-base text-center"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-medium h-12 px-8 text-base"
              >
                Join Waitlist
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We'll text you when it's ready. No spam, just Asmi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Daily Flow Features - Enhanced with Mobile Animations */}
      <section ref={featuresRef} className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-white"
              variants={itemVariants}
            >
              Your daily flow
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              Asmi operates quietly in the background, prepping, following up, and organizing your life.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Clock,
                title: "Morning Clarity",
                description: "\"You have 3 meetings today. Want briefs?\" Smart prep before each call with context, background, and ready scripts.",
                color: "text-blue-400"
              },
              {
                icon: Eye,
                title: "Background Intel",
                description: "Meeting someone new? Asmi pulls their role, company, recent activity — so you don't have to stalk LinkedIn.",
                color: "text-green-400"
              },
              {
                icon: Calendar,
                title: "Chat Scheduling",
                description: "\"Call with Amanda 4pm Friday\" → Asmi finds her email, books calendar, sends clean invite. Done.",
                color: "text-yellow-400"
              },
              {
                icon: MessageSquare,
                title: "Meeting Capture",
                description: "\"Want to log what happened?\" Send text or voice note → Asmi saves summary + action items, tagged by people.",
                color: "text-red-400"
              },
              {
                icon: Mail,
                title: "Follow-Up Detection",
                description: "\"You didn't reply to Benchmark. Want me to send a note?\" Asmi spots ghosted threads, drafts follow-ups.",
                color: "text-purple-400"
              },
              {
                icon: RotateCcw,
                title: "Calendar Chaos Control",
                description: "\"Your Tuesday is overbooked. Shift asyncs to Friday?\" Smart rebalancing with one tap approval.",
                color: "text-orange-400"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience - Enhanced Animations */}
      <section ref={personasRef} className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-10 sm:mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={personasInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-light mb-4 text-white"
              variants={itemVariants}
            >
              Built for people who move fast
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={personasInView ? "visible" : "hidden"}
          >
            {[
              {
                emoji: "🚀",
                title: "Startup Founders",
                quote: "I live in WhatsApp. Asmi preps my investor calls, tracks follow-ups, and remembers promises I'd otherwise forget.",
                features: ["Pre-meeting briefs with investor context", "Follow-up detection for funding rounds", "Calendar chaos management during crunch time"]
              },
              {
                emoji: "⚡",
                title: "Fast-Moving Teams", 
                quote: "Our GTM team operates via chat. Asmi keeps us synced on prospects, deals, and next steps without the dashboard bloat.",
                features: ["Cross-team coordination", "Prospect interaction tracking", "Natural language scheduling"]
              },
              {
                emoji: "💰",
                title: "VCs & Solo GPs",
                quote: "50 founder meetings a week. Asmi remembers every conversation, preps context, and drafts perfect follow-ups.",
                features: ["Founder background intel", "Deal flow tracking", "Portfolio company context"]
              }
            ].map((persona, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <motion.div 
                      className="text-2xl sm:text-3xl mb-3"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {persona.emoji}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-medium text-white">{persona.title}</h3>
                    <p className="text-gray-300 italic mb-3 text-sm sm:text-base">
                      "{persona.quote}"
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                      {persona.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-[#5DFF9F] mt-1 text-xs">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works - Enhanced Mobile Experience */}
      <section ref={howItWorksRef} className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-white"
              variants={itemVariants}
            >
              How it works
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 font-light"
              variants={itemVariants}
            >
              Connect once. Asmi learns quietly. Be smarter immediately.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
          >
            {[
              {
                number: "1",
                title: "Connect your life",
                description: "Gmail, Calendar, Contacts → Asmi builds your life graph. Privacy-first, no inbox content reading.",
                examples: [
                  "• Secure OAuth connections",
                  "• Learns communication patterns",
                  "• Maps your professional network"
                ]
              },
              {
                number: "2", 
                title: "Operate via chat",
                description: "No setup, no workflows. Just text Asmi in WhatsApp or iMessage like you would a human Chief of Staff.",
                examples: [
                  "\"Prep me for the 3pm with Sarah\"",
                  "\"Why haven't I heard from Acme?\"",
                  "\"Schedule coffee with the team Friday\""
                ]
              },
              {
                number: "3",
                title: "Stay ahead", 
                description: "Asmi proactively briefs, follows up, and keeps you sharp. Morning prep → Meeting → Follow-up.",
                examples: [
                  "• Smart briefs 1hr before calls",
                  "• Detects email silence automatically", 
                  "• Suggests follow-ups and next steps"
                ]
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center space-y-4 sm:space-y-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white/[0.02] border border-white/10 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xl sm:text-2xl font-medium text-[#5DFF9F]">{step.number}</span>
                </motion.div>
                <motion.h3 
                  className="text-xl sm:text-2xl font-medium text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-light">
                  {step.description}
                </p>
                <motion.div 
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-3 sm:p-4 text-left space-y-2"
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  {step.examples.map((example, i) => (
                    <motion.div 
                      key={i} 
                      className="text-gray-300 text-xs sm:text-sm leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {example}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section ref={socialProofRef} className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10 sm:mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-light mb-4 text-white"
              variants={itemVariants}
            >
              Trusted by top performers
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}>
              <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <blockquote className="text-gray-300 mb-4 text-sm sm:text-base">
                    "Finally, an AI that gets startup chaos. Asmi preps my investor calls better than I do."
                  </blockquote>
                  <div className="text-xs sm:text-sm text-gray-400">— Sarah Chen, Founder @ TechFlow</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}>
              <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <blockquote className="text-gray-300 mb-4 text-sm sm:text-base">
                    "I meet 40+ founders weekly. Asmi remembers every conversation so I don't have to."
                  </blockquote>
                  <div className="text-xs sm:text-sm text-gray-400">— Marcus Rodriguez, Partner @ Velocity VC</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}>
              <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <blockquote className="text-gray-300 mb-4 text-sm sm:text-base">
                    "Our GTM team lives in WhatsApp. Asmi keeps us synced without the dashboard bloat."
                  </blockquote>
                  <div className="text-xs sm:text-sm text-gray-400">— David Park, VP Growth @ Unicorn Co</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final Waitlist CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 text-sm mb-6">
              🚀 Asmi is invite-only right now
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-white leading-tight">
              Join the waitlist to be{" "}
              <span className="text-[#5DFF9F]">first in.</span>
            </h2>
            
            <div className="max-w-md mx-auto mb-6 sm:mb-8">
              <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 text-base"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-medium h-12 px-6 sm:px-8 text-base whitespace-nowrap"
                >
                  Join Waitlist
                </Button>
              </form>
            </div>

            <p className="text-sm text-gray-400">
              We'll text you when it's ready. No spam, just Asmi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-0">
              Asmi AI
            </div>
            <div className="flex space-x-6 sm:space-x-8 text-gray-400 text-sm sm:text-base">
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Asmi AI. Your AI Chief of Staff.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
