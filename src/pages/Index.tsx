
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
    <div className="min-h-screen bg-[#0B0B0B] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-[#5DFF9F]"
              whileHover={{ scale: 1.05 }}
            >
              Asmi AI
            </motion.div>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                className="text-[#5DFF9F] hover:bg-[#5DFF9F]/10 font-mono"
              >
                🔥 Roast My Calendar
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-700 text-[#5DFF9F] hover:bg-[#5DFF9F]/10 font-mono"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 mb-8 font-mono">
              <MessageSquare className="w-4 h-4 mr-2" />
              Invite-only • No app required
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight font-mono">
              Your AI Chief of Staff.
            </h1>
            
            <div className="text-xl lg:text-2xl text-gray-300 mb-6 font-mono">
              On{" "}
              <motion.span
                className="text-[#5DFF9F]"
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  times: [0, 0.5, 1],
                }}
              >
                WhatsApp
              </motion.span>
              <motion.span
                className="text-[#A07CFE]"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  times: [0, 0.5, 1],
                }}
              >
                iMessage
              </motion.span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed font-mono">
              Asmi remembers everything — meetings, people, and promises — so you don't have to.
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-12 font-mono"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-semibold h-12 text-lg font-mono"
                >
                  Join Waitlist
                </Button>
              </form>
            </div>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-[#A07CFE] hover:bg-[#A07CFE]/10 px-8 text-lg font-mono"
            >
              🔥 Roast My Calendar
            </Button>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white font-mono">
              Your brilliant Chief of Staff
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              Who texts you at exactly the right moment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* WhatsApp Chat Example */}
            <motion.div 
              className="bg-gray-900 rounded-lg p-8 border border-gray-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold font-mono">WhatsApp</span>
                <span className="text-xs text-gray-400 font-mono">8:47 AM</span>
              </div>
              
              <div className="space-y-4 font-mono">
                <div className="bg-[#5DFF9F]/10 rounded-lg p-4 border border-[#5DFF9F]/20">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white">You have 3 meetings today. Want briefs?</p>
                  <p className="text-gray-300 mt-2">📅 10am: Amanda @ Benchmark<br />🚀 2pm: Product sync w/ Sarah<br />💰 4pm: Series A follow-up call</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 ml-8">
                  <p className="text-white">Yes, brief me on Amanda</p>
                </div>
                
                <div className="bg-[#5DFF9F]/10 rounded-lg p-4 border border-[#5DFF9F]/20">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white">Amanda Chen, Partner @ Benchmark. You pitched 3 weeks ago. Last email: "Interesting pricing model, let's dive deeper." She's ex-Stripe, loves B2B SaaS. Talk expansion metrics + pricing strategy.</p>
                  <p className="text-gray-300 mt-2">Want a quick script? 📝</p>
                </div>
              </div>
            </motion.div>

            {/* iMessage Chat Example */}
            <motion.div 
              className="bg-gray-900 rounded-lg p-8 border border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold font-mono">iMessage</span>
                <span className="text-xs text-gray-400 font-mono">2:15 PM</span>
              </div>
              
              <div className="space-y-4 font-mono">
                <div className="bg-gray-800 rounded-lg p-4 ml-8">
                  <p className="text-white">Schedule coffee with Mark from Acme Corp Friday 3pm</p>
                </div>
                
                <div className="bg-[#5DFF9F]/10 rounded-lg p-4 border border-[#5DFF9F]/20">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi</p>
                  <p className="text-white">Found Mark Stevens, CTO @ Acme Corp in your contacts. Booking Friday 3pm coffee.</p>
                  <div className="mt-3 bg-gray-800 rounded-lg p-3">
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
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-8 text-white font-mono"
              variants={itemVariants}
            >
              Your daily flow
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono"
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
                icon: Brain,
                title: "Smart Briefs",
                description: "1hr before your call: \"Here's your brief w/ Amanda @ Benchmark. Want a script?\" Smart prep before each call with context, background, and ready scripts.",
                color: "#A07CFE"
              },
              {
                icon: Mail,
                title: "Email Ghosting Detection",
                description: "48hr silence: \"Want me to nudge Keith re: the deck?\" Drafts the perfect follow-up.",
                color: "#5DFF9F"
              },
              {
                icon: Calendar,
                title: "Natural Scheduling",
                description: "\"Catch up with Amanda Friday 3pm\" → Meeting booked, briefed, and ready.",
                color: "#5DFF9F"
              },
              {
                icon: Clock,
                title: "Chaos Fixing",
                description: "Spots overloaded days and rebalances your calendar intelligently. No more double-books.",
                color: "#A07CFE"
              },
              {
                icon: Target,
                title: "Meeting Outcomes",
                description: "Post-call: \"Want to log the outcome?\" Captures notes, tags people, tracks follow-ups.",
                color: "#5DFF9F"
              },
              {
                icon: Zap,
                title: "Memory Graph",
                description: "Builds a private map of who you talk to and why. Never walks into a meeting blind again.",
                color: "#A07CFE"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-xl font-semibold text-white font-mono">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-mono text-sm">
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
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={personasInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-semibold mb-6 text-[#5DFF9F] font-mono"
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
                <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-4xl mb-4">{persona.emoji}</div>
                    <h3 className="text-2xl font-bold text-white font-mono">{persona.title}</h3>
                    <p className="text-gray-300 italic mb-4 font-mono">
                      "{persona.quote}"
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300 font-mono">
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
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-6 text-white font-mono"
              variants={itemVariants}
            >
              How it works
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-400 font-light font-mono"
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
                  className="w-20 h-20 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl font-bold text-[#5DFF9F] font-mono">{step.number}</span>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-semibold text-white font-mono"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed text-lg font-mono">
                  {step.description}
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left space-y-3">
                  {step.examples.map((example, i) => (
                    <div key={i} className="text-gray-300 text-sm leading-relaxed font-mono">{example}</div>
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
              className="text-4xl lg:text-5xl font-semibold mb-6 text-[#5DFF9F] font-mono"
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
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <blockquote className="text-gray-300 mb-4 font-mono">
                    "Finally, an AI that gets startup chaos. Asmi preps my investor calls better than I do."
                  </blockquote>
                  <div className="text-sm text-gray-400 font-mono">— Sarah Chen, Founder @ TechFlow</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <blockquote className="text-gray-300 mb-4 font-mono">
                    "I meet 40+ founders weekly. Asmi remembers every conversation so I don't have to."
                  </blockquote>
                  <div className="text-sm text-gray-400 font-mono">— Marcus Rodriguez, Partner @ Velocity VC</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <blockquote className="text-gray-300 mb-4 font-mono">
                    "Our GTM team lives in WhatsApp. Asmi keeps us synced without the dashboard bloat."
                  </blockquote>
                  <div className="text-sm text-gray-400 font-mono">— David Park, VP Growth @ Unicorn Co</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section ref={finalCtaRef} className="py-32 px-6 relative">
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
              <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 font-mono">
                🚀 Asmi is invite-only right now
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight font-mono"
              variants={itemVariants}
            >
              Join the waitlist to be{" "}
              <span className="text-[#5DFF9F]">first in.</span>
            </motion.h2>
            
            <motion.div 
              className="max-w-md mx-auto mb-8"
              variants={itemVariants}
            >
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-12 font-mono"
                />
                <Input
                  type="tel"
                  placeholder="WhatsApp number (optional)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 h-12 font-mono"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-semibold h-12 text-lg font-mono"
                >
                  Join Waitlist
                </Button>
              </form>
            </motion.div>

            <motion.p 
              className="text-sm text-gray-400 font-mono"
              variants={itemVariants}
            >
              We'll text you when it's ready. No spam, just Asmi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0D0D0D] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-[#5DFF9F] mb-4 md:mb-0 font-mono">
              Asmi AI
            </div>
            <div className="flex space-x-8 text-gray-400 font-mono">
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p className="font-mono">&copy; 2024 Asmi AI. Your AI Chief of Staff.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
