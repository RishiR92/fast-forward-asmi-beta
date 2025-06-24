
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Phone, Users, Brain, Target, Mail, Clock, Zap, User, Eye, RotateCcw } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [currentApp, setCurrentApp] = useState("WhatsApp");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApp(prev => prev === "WhatsApp" ? "iMessage" : "WhatsApp");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { email });
  };

  const featuresRef = useRef(null);
  const personasRef = useRef(null);
  const socialProofRef = useRef(null);
  const howItWorksRef = useRef(null);
  const finalCtaRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const personasInView = useInView(personasRef, { once: true, margin: "-100px" });
  const socialProofInView = useInView(socialProofRef, { once: true, margin: "-100px" });
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const finalCtaInView = useInView(finalCtaRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
            <div className="flex gap-2 sm:gap-4">
              <Button 
                variant="ghost" 
                className="text-[#5DFF9F] hover:bg-[#5DFF9F]/10 text-sm sm:text-base px-2 sm:px-4"
              >
                🔥 Roast My Calendar
              </Button>
              <Button 
                variant="outline" 
                className="border-[#5DFF9F]/20 text-[#5DFF9F] hover:bg-[#5DFF9F]/10 text-sm sm:text-base px-2 sm:px-4"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative">
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
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-4 sm:mb-6 text-white leading-tight tracking-tight">
              Your AI Chief of Staff.
            </h1>
            
            <div className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 h-8 flex items-center justify-center">
              <span className="mr-2">On</span>
              <motion.span
                key={currentApp}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[#5DFF9F] font-medium"
              >
                {currentApp}
              </motion.span>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Asmi remembers everything — meetings, people, and promises — so you don't have to.
            </p>
            
            <div className="max-w-md mx-auto mb-6 sm:mb-8">
              <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email to join waitlist"
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
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 h-12 px-6 sm:px-8 text-base"
            >
              🔥 Roast My Calendar
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Chat Examples Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
              Your brilliant Chief of Staff
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light">
              Who texts you at exactly the right moment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* WhatsApp Chat Example */}
            <motion.div 
              className="bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">WhatsApp</span>
                <span className="text-xs text-gray-500">8:47 AM</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#5DFF9F]/5 border border-[#5DFF9F]/20 rounded-2xl p-4">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white text-sm sm:text-base">You have 3 meetings today. Want briefs?</p>
                  <p className="text-gray-300 mt-2 text-sm">📅 10am: Amanda @ Benchmark<br />🚀 2pm: Product sync w/ Sarah<br />💰 4pm: Series A follow-up call</p>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-4 ml-8">
                  <p className="text-white text-sm sm:text-base">Yes, brief me on Amanda</p>
                </div>
                
                <div className="bg-[#5DFF9F]/5 border border-[#5DFF9F]/20 rounded-2xl p-4">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white text-sm sm:text-base">Amanda Chen, Partner @ Benchmark. You pitched 3 weeks ago. Last email: "Interesting pricing model, let's dive deeper." She's ex-Stripe, loves B2B SaaS. Talk expansion metrics + pricing strategy.</p>
                  <p className="text-gray-300 mt-2 text-sm">Want a quick script? 📝</p>
                </div>
              </div>
            </motion.div>

            {/* iMessage Chat Example */}
            <motion.div 
              className="bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">iMessage</span>
                <span className="text-xs text-gray-500">2:15 PM</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 ml-8">
                  <p className="text-white text-sm sm:text-base">Schedule coffee with Mark from Acme Corp Friday 3pm</p>
                </div>
                
                <div className="bg-[#5DFF9F]/5 border border-[#5DFF9F]/20 rounded-2xl p-4">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white text-sm sm:text-base">Found Mark Stevens, CTO @ Acme Corp in your contacts. Booking Friday 3pm coffee.</p>
                  <div className="mt-3 bg-black/20 rounded-xl p-3">
                    <p className="text-[#5DFF9F] text-sm">Calendar Invite Created</p>
                    <p className="text-white text-sm">Coffee w/ Mark Stevens</p>
                    <p className="text-gray-300 text-xs">Fri, Dec 8 • 3:00 PM</p>
                  </div>
                  <p className="text-white mt-2 text-sm">Invite sent to mark@acmecorp.com ✅</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Flow Features */}
      <section ref={featuresRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-white"
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Brain,
                title: "Morning Clarity",
                description: "\"You have 3 meetings today. Want briefs?\" Smart prep before each call with context, background, and ready scripts.",
              },
              {
                icon: Eye,
                title: "Background Intel",
                description: "Meeting someone new? Asmi pulls their role, company, recent activity — so you don't have to stalk LinkedIn.",
              },
              {
                icon: Calendar,
                title: "Chat Scheduling",
                description: "\"Call with Amanda 4pm Friday\" → Asmi finds her email, books calendar, sends clean invite. Done.",
              },
              {
                icon: MessageSquare,
                title: "Meeting Capture",
                description: "\"Want to log what happened?\" Send text or voice note → Asmi saves summary + action items, tagged by people.",
              },
              {
                icon: Mail,
                title: "Follow-Up Detection",
                description: "\"You didn't reply to Benchmark. Want me to send a note?\" Asmi spots ghosted threads, drafts follow-ups.",
              },
              {
                icon: RotateCcw,
                title: "Calendar Chaos Control",
                description: "\"Your Tuesday is overbooked. Shift asyncs to Friday?\" Smart rebalancing with one tap approval.",
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#5DFF9F]" />
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

      {/* Target Audience */}
      <section ref={personasRef} className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={personasInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white"
              variants={itemVariants}
            >
              Built for people who move fast
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 sm:p-8 space-y-4">
                    <div className="text-3xl sm:text-4xl mb-4">{persona.emoji}</div>
                    <h3 className="text-xl sm:text-2xl font-medium text-white">{persona.title}</h3>
                    <p className="text-gray-300 italic mb-4 text-sm sm:text-base">
                      "{persona.quote}"
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                      {persona.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#5DFF9F] mt-1 text-xs">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white"
              variants={itemVariants}
            >
              How it works
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-400 font-light"
              variants={itemVariants}
            >
              Connect once. Asmi learns quietly. Be smarter immediately.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16"
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
                className="text-center space-y-6 sm:space-y-8"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/[0.02] border border-white/10 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl sm:text-3xl font-medium text-[#5DFF9F]">{step.number}</span>
                </motion.div>
                <motion.h3 
                  className="text-2xl sm:text-3xl font-medium text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-light">
                  {step.description}
                </p>
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-6 text-left space-y-3">
                  {step.examples.map((example, i) => (
                    <div key={i} className="text-gray-300 text-xs sm:text-sm leading-relaxed">{example}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section ref={socialProofRef} className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white"
              variants={itemVariants}
            >
              Trusted by top performers
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <blockquote className="text-gray-300 mb-4 text-sm sm:text-base">
                    "Finally, an AI that gets startup chaos. Asmi preps my investor calls better than I do."
                  </blockquote>
                  <div className="text-xs sm:text-sm text-gray-400">— Sarah Chen, Founder @ TechFlow</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <blockquote className="text-gray-300 mb-4 text-sm sm:text-base">
                    "I meet 40+ founders weekly. Asmi remembers every conversation so I don't have to."
                  </blockquote>
                  <div className="text-xs sm:text-sm text-gray-400">— Marcus Rodriguez, Partner @ Velocity VC</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/[0.02] border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6">
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

      {/* Waitlist CTA */}
      <section ref={finalCtaRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={finalCtaInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="mb-4"
              variants={itemVariants}
            >
              <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 text-sm">
                🚀 Asmi is invite-only right now
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-white leading-tight"
              variants={itemVariants}
            >
              Join the waitlist to be{" "}
              <span className="text-[#5DFF9F]">first in.</span>
            </motion.h2>
            
            <motion.div 
              className="max-w-md mx-auto mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
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
            </motion.div>

            <motion.p 
              className="text-sm text-gray-400"
              variants={itemVariants}
            >
              We'll text you when it's ready. No spam, just Asmi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0D0D0D] border-t border-white/5">
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
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Asmi AI. Your AI Chief of Staff.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
