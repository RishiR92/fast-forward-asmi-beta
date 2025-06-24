
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Phone, Users, Brain, Target, Mail, Clock, Zap } from "lucide-react";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { phoneNumber, email });
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
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-[#5DFF9F]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold gradient-text-primary"
              whileHover={{ scale: 1.05 }}
            >
              Asmi AI
            </motion.div>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                className="text-[#5DFF9F] hover:bg-[#5DFF9F]/10"
              >
                🔥 Roast My Calendar
              </Button>
              <Button 
                variant="outline" 
                className="border-[#5DFF9F]/20 text-[#5DFF9F] hover:bg-[#5DFF9F]/10 glass-card hover-glow"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A07CFE]/3 rounded-full blur-3xl animate-particle-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5DFF9F]/3 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-[#5DFF9F]/20 text-[#5DFF9F] border-[#5DFF9F]/30 mb-8 animate-glow-pulse">
              <MessageSquare className="w-4 h-4 mr-2" />
              Invite-only • No app required
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 gradient-text-white leading-tight">
              Your <span className="gradient-text-primary">AI Chief of Staff.</span><br />
              On WhatsApp & iMessage.
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Asmi remembers everything — meetings, people, and promises — so you don't have to.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button 
                size="lg"
                className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-semibold h-14 px-8 text-lg hover-glow"
              >
                Join Waitlist
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#A07CFE]/30 text-[#A07CFE] hover:bg-[#A07CFE]/10 h-14 px-8 text-lg"
              >
                🔥 Roast My Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat Examples Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text-white">
              Your brilliant Chief of Staff
            </h2>
            <p className="text-xl text-gray-400">
              Who texts you at exactly the right moment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* WhatsApp Chat Example */}
            <motion.div 
              className="glass-card-dark rounded-3xl p-8 border border-[#5DFF9F]/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold">WhatsApp</span>
                <span className="text-xs text-gray-400">8:47 AM</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#5DFF9F]/10 rounded-2xl p-4 border-l-4 border-[#5DFF9F]">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white">You have 3 meetings today. Want briefs?</p>
                  <p className="text-gray-300 mt-2">📅 10am: Amanda @ Benchmark<br />🚀 2pm: Product sync w/ Sarah<br />💰 4pm: Series A follow-up call</p>
                </div>
                
                <div className="bg-[#A07CFE]/10 rounded-2xl p-4 ml-8">
                  <p className="text-white">Yes, brief me on Amanda</p>
                </div>
                
                <div className="bg-[#5DFF9F]/10 rounded-2xl p-4 border-l-4 border-[#5DFF9F]">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white">Amanda Chen, Partner @ Benchmark. You pitched 3 weeks ago. Last email: "Interesting pricing model, let's dive deeper." She's ex-Stripe, loves B2B SaaS. Talk expansion metrics + pricing strategy.</p>
                  <p className="text-gray-300 mt-2">Want a quick script? 📝</p>
                </div>
              </div>
            </motion.div>

            {/* iMessage Chat Example */}
            <motion.div 
              className="glass-card-dark rounded-3xl p-8 border border-[#A07CFE]/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold">iMessage</span>
                <span className="text-xs text-gray-400">2:15 PM</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#A07CFE]/10 rounded-2xl p-4 ml-8">
                  <p className="text-white">Schedule coffee with Mark from Acme Corp Friday 3pm</p>
                </div>
                
                <div className="bg-[#5DFF9F]/10 rounded-2xl p-4 border-l-4 border-[#5DFF9F]">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white">Found Mark Stevens, CTO @ Acme Corp in your contacts. Booking Friday 3pm coffee.</p>
                  <div className="mt-3 bg-black/20 rounded-xl p-3">
                    <p className="text-[#5DFF9F] text-sm">Calendar Invite Created</p>
                    <p className="text-white text-sm">Coffee w/ Mark Stevens</p>
                    <p className="text-gray-300 text-xs">Fri, Dec 8 • 3:00 PM</p>
                  </div>
                  <p className="text-white mt-2">Invite sent to mark@acmecorp.com ✅</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Flow Features */}
      <section ref={featuresRef} className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A07CFE]/3 rounded-full blur-3xl animate-particle-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5DFF9F]/3 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-8 gradient-text-white"
              variants={itemVariants}
            >
              Your <span className="gradient-text-primary">daily flow</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Asmi operates quietly in the background, prepping, following up, and organizing your life.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {[
              {
                emoji: "🟪",
                title: "Morning Clarity",
                description: "\"You have 3 meetings today. Want briefs?\" Smart prep before each call with context, background, and ready scripts.",
                color: "A07CFE"
              },
              {
                emoji: "🟩",
                title: "Background Intel",
                description: "Meeting someone new? Asmi pulls their role, company, recent activity — so you don't have to stalk LinkedIn.",
                color: "5DFF9F"
              },
              {
                emoji: "🟨",
                title: "Chat Scheduling",
                description: "\"Call with Amanda 4pm Friday\" → Asmi finds her email, books calendar, sends clean invite. Done.",
                color: "5DFF9F"
              },
              {
                emoji: "🟥",
                title: "Meeting Capture",
                description: "\"Want to log what happened?\" Send text or voice note → Asmi saves summary + action items, tagged by people.",
                color: "A07CFE"
              },
              {
                emoji: "🟦",
                title: "Follow-Up Detection",
                description: "\"You didn't reply to Benchmark. Want me to send a note?\" Asmi spots ghosted threads, drafts follow-ups.",
                color: "5DFF9F"
              },
              {
                emoji: "🟧",
                title: "Calendar Chaos Control",
                description: "\"Your Tuesday is overbooked. Shift asyncs to Friday?\" Smart rebalancing with one tap approval.",
                color: "A07CFE"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-white/10 hover-lift group h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-4xl mb-4">{feature.emoji}</div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
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
      <section ref={personasRef} className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#A07CFE]/5 via-transparent to-[#5DFF9F]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={personasInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-semibold mb-6 gradient-text-primary"
              variants={itemVariants}
            >
              Built for people who move fast
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
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
                emoji: "💰",
                title: "VCs & Solo GPs", 
                quote: "50 founder meetings a week. Asmi remembers every conversation, preps context, and drafts perfect follow-ups.",
                features: ["Founder background intel", "Deal flow tracking", "Portfolio company context"]
              },
              {
                emoji: "⚡",
                title: "Fast-Moving Teams",
                quote: "Our GTM team operates via chat. Asmi keeps us synced on prospects, deals, and next steps without the dashboard bloat.",
                features: ["Cross-team coordination", "Prospect interaction tracking", "Natural language scheduling"]
              }
            ].map((persona, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card-dark border-[#5DFF9F]/20 hover-lift group h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-4xl mb-4">{persona.emoji}</div>
                    <h3 className="text-2xl font-bold text-white">{persona.title}</h3>
                    <p className="text-slate-300 italic mb-4">
                      "{persona.quote}"
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {persona.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#5DFF9F] mt-1">•</span>
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
      <section ref={howItWorksRef} className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A07CFE]/3 rounded-full blur-3xl animate-particle-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#5DFF9F]/3 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-6 gradient-text-white"
              variants={itemVariants}
            >
              How it works
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-400 font-light"
              variants={itemVariants}
            >
              Connect once. Asmi learns quietly. Be smarter immediately.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-16"
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
                className="text-center space-y-8 group"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-20 h-20 glass-card rounded-full flex items-center justify-center mx-auto border border-[#5DFF9F]/10 hover-glow"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl font-bold gradient-text-primary">{step.number}</span>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-semibold text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.description}
                </p>
                <div className="glass-card rounded-2xl p-6 text-left space-y-3 border border-[#5DFF9F]/10 group-hover:border-[#5DFF9F]/20 transition-colors duration-300">
                  {step.examples.map((example, i) => (
                    <div key={i} className="text-gray-300 text-sm leading-relaxed">{example}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section ref={socialProofRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-semibold mb-6 gradient-text-primary"
              variants={itemVariants}
            >
              Trusted by top performers
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover-lift">
                <CardContent className="p-6">
                  <blockquote className="text-slate-300 mb-4">
                    "Finally, an AI that gets startup chaos. Asmi preps my investor calls better than I do."
                  </blockquote>
                  <div className="text-sm text-slate-400">— Sarah Chen, Founder @ TechFlow</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover-lift">
                <CardContent className="p-6">
                  <blockquote className="text-slate-300 mb-4">
                    "I meet 40+ founders weekly. Asmi remembers every conversation so I don't have to."
                  </blockquote>
                  <div className="text-sm text-slate-400">— Marcus Rodriguez, Partner @ Velocity VC</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover-lift">
                <CardContent className="p-6">
                  <blockquote className="text-slate-300 mb-4">
                    "Our GTM team lives in WhatsApp. Asmi keeps us synced without the dashboard bloat."
                  </blockquote>
                  <div className="text-sm text-slate-400">— David Park, VP Growth @ Unicorn Co</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section ref={finalCtaRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#A07CFE]/10 to-[#5DFF9F]/10"></div>
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
              <Badge className="bg-[#5DFF9F]/20 text-[#5DFF9F] border-[#5DFF9F]/30 animate-glow-pulse">
                🚀 Asmi is invite-only right now
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
              variants={itemVariants}
            >
              Join the waitlist to be{" "}
              <span className="gradient-text-primary">first in.</span>
            </motion.h2>
            
            <motion.div 
              className="max-w-md mx-auto mb-8"
              variants={itemVariants}
            >
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 h-12"
                />
                <Input
                  type="tel"
                  placeholder="WhatsApp number (optional)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 h-12"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-semibold h-12 text-lg hover-glow"
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
      <footer className="py-16 px-6 bg-[#0D0D0D] border-t border-[#5DFF9F]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text-primary mb-4 md:mb-0">
              Asmi AI
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#5DFF9F]/10 text-center text-gray-500">
            <p>&copy; 2024 Asmi AI. Your AI Chief of Staff.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
