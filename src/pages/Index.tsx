
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Phone, Users, Brain, Target, Mail, Clock, Zap } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import ToggleComparison from "@/components/ToggleComparison";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta signup:", { phoneNumber, email });
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
                Roast My Calendar
              </Button>
              <Button 
                variant="outline" 
                className="border-[#5DFF9F]/20 text-[#5DFF9F] hover:bg-[#5DFF9F]/10 glass-card hover-glow"
              >
                Start on WhatsApp
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
              No app required — just chat
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 gradient-text-white leading-tight">
              Asmi is your <span className="gradient-text-primary">AI Chief of Staff.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              She lives inside WhatsApp & iMessage.<br />
              She remembers everything — meetings, people, and promises — so you don't have to.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button 
                size="lg"
                className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-semibold h-14 px-8 text-lg hover-glow"
              >
                Start on WhatsApp
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
              Your brilliant, sassy Chief of Staff
            </h2>
            <p className="text-xl text-gray-400">
              She texts you like a human, thinks like AI, and remembers like an elephant.
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
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#5DFF9F]/10 rounded-2xl p-4 border-l-4 border-[#5DFF9F]">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi AI</p>
                  <p className="text-white">Your call with Amanda @ Benchmark is in 1hr. Here's your brief:</p>
                  <p className="text-gray-300 mt-2">• Series A, $50M ARR<br />• Last chat: Pricing concerns<br />• Talk about: Expansion plan</p>
                  <p className="text-white mt-2">Want a script? 😉</p>
                </div>
                
                <div className="bg-[#A07CFE]/10 rounded-2xl p-4 ml-8">
                  <p className="text-white">Yes, make it witty but professional</p>
                </div>
                
                <div className="bg-[#5DFF9F]/10 rounded-2xl p-4 border-l-4 border-[#5DFF9F]">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi AI</p>
                  <p className="text-white">"Amanda, remember when you said our pricing was 'interesting'? Let's make it boring-profitable instead. Here's the expansion plan..." 🎯</p>
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
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#A07CFE]/10 rounded-2xl p-4 ml-8">
                  <p className="text-white">Keith hasn't replied to the deck I sent. It's been 48hrs</p>
                </div>
                
                <div className="bg-[#5DFF9F]/10 rounded-2xl p-4 border-l-4 border-[#5DFF9F]">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi AI</p>
                  <p className="text-white">I noticed. Keith's probably drowning in emails (aren't we all?). Want me to nudge him with a gentle follow-up?</p>
                </div>
                
                <div className="bg-[#A07CFE]/10 rounded-2xl p-4 ml-8">
                  <p className="text-white">Yeah, but make it sound human</p>
                </div>
                
                <div className="bg-[#5DFF9F]/10 rounded-2xl p-4 border-l-4 border-[#5DFF9F]">
                  <p className="text-[#5DFF9F] text-sm font-medium mb-1">Asmi AI</p>
                  <p className="text-white">Sent: "Keith, following up on the deck — no rush if you're buried, but would love your thoughts when you get a chance!"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Asmi Does Section */}
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
              What Asmi <span className="gradient-text-primary">actually does</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              No dashboards. No complex setups. Just smart assistance that works like magic.
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
                description: "1hr before your call: \"Here's your brief w/ Amanda @ Benchmark. Want a script?\"",
                color: "A07CFE"
              },
              {
                icon: Mail,
                title: "Email Ghosting Detection",
                description: "48hr silence: \"Want me to nudge Keith re: the deck?\" Drafts the perfect follow-up.",
                color: "5DFF9F"
              },
              {
                icon: Calendar,
                title: "Natural Scheduling",
                description: "\"Catch up with Amanda Friday 3pm\" → Meeting booked, briefed, and ready.",
                color: "5DFF9F"
              },
              {
                icon: Clock,
                title: "Chaos Fixing",
                description: "Spots overloaded days and rebalances your calendar intelligently. No more double-books.",
                color: "A07CFE"
              },
              {
                icon: Target,
                title: "Meeting Outcomes",
                description: "Post-call: \"Want to log the outcome?\" Captures notes, tags people, tracks follow-ups.",
                color: "5DFF9F"
              },
              {
                icon: Zap,
                title: "Memory Graph",
                description: "Builds a private map of who you talk to and why. Never walks into a meeting blind again.",
                color: "A07CFE"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-white/10 hover-lift group h-full">
                  <CardContent className="p-8 space-y-6">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      style={{ 
                        background: `rgba(${feature.color === '5DFF9F' ? '93, 255, 159' : '160, 124, 254'}, 0.2)`,
                        boxShadow: `0 0 20px rgba(${feature.color === '5DFF9F' ? '93, 255, 159' : '160, 124, 254'}, 0.3)`
                      }}
                    >
                      <feature.icon 
                        className={`h-6 w-6`}
                        style={{ color: `#${feature.color}` }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors data-display">
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
              className="text-4xl lg:text-5xl font-semibold mb-6"
              style={{
                background: "linear-gradient(90deg, #A07CFE 0%, #5DFF9F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.5px",
                fontFamily: "'General Sans', Inter, sans-serif"
              }}
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
                quote: "I text Asmi my investor updates at midnight. She turns them into follow-ups and calendar events before I forget.",
                features: ["Pre-meeting briefs with context", "Automatic follow-up detection", "Calendar chaos management"]
              },
              {
                emoji: "💰",
                title: "VCs & Angels", 
                quote: "No more prepping for founder calls. Asmi texts me their context, deal notes, and talking points right before we speak.",
                features: ["Founder interaction tracking", "Deal context & history", "Perfect intro preparation"]
              },
              {
                emoji: "⚡",
                title: "Startup Teams",
                quote: "Our team uses WhatsApp more than Slack. Asmi keeps us synced without the noise.",
                features: ["Cross-team coordination", "Project status updates", "Natural language scheduling"]
              }
            ].map((persona, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card-dark border-[#5DFF9F]/20 hover-lift group h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-4xl mb-4">{persona.emoji}</div>
                    <h3 className="text-2xl font-bold text-white">{persona.title}</h3>
                    <p className="text-slate-300 italic mb-4 data-display">
                      "{persona.quote}"
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {persona.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
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
              Connect once. Text forever. Be smarter immediately.
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
                description: "Gmail, Calendar, Contacts → Asmi builds your life graph. Privacy-first, zero inbox reading.",
                examples: [
                  "• Secure OAuth connections",
                  "• Learns your communication patterns",
                  "• Maps your professional network"
                ]
              },
              {
                number: "2", 
                title: "Text like normal",
                description: "No commands, no setup. Just chat in WhatsApp or iMessage like you would with a human.",
                examples: [
                  "\"Prep me for the 3pm with Sarah\"",
                  "\"Why haven't I heard from the Acme deal?\"",
                  "\"Schedule drinks with the team Friday\""
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
              className="text-4xl lg:text-5xl font-semibold mb-6"
              style={{
                background: "linear-gradient(90deg, #A07CFE 0%, #5DFF9F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.5px",
                fontFamily: "'General Sans', Inter, sans-serif"
              }}
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
                  <blockquote className="text-slate-300 mb-4 data-display">
                    "Feels like I hired a Chief of Staff who actually gets it. Game changer."
                  </blockquote>
                  <div className="text-sm text-slate-400">— Founder, Series B SaaS</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover-lift">
                <CardContent className="p-6">
                  <blockquote className="text-slate-300 mb-4 data-display">
                    "Finally, an AI that understands the chaos of startup life. Worth every penny."
                  </blockquote>
                  <div className="text-sm text-slate-400">— VP Growth, Unicorn Startup</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover-lift">
                <CardContent className="p-6">
                  <blockquote className="text-slate-300 mb-4 data-display">
                    "I can't believe I lived without this. Asmi knows my portfolio better than I do."
                  </blockquote>
                  <div className="text-sm text-slate-400">— Partner, Tier 1 VC</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
                🔥 Get started in 30 seconds
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
              variants={itemVariants}
            >
              Ready to get your{" "}
              <span className="gradient-text-primary">Chief of Staff?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              No app downloads. No complex setup. Just text Asmi and watch your life get organized.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              variants={itemVariants}
            >
              <Button 
                size="lg"
                className="bg-[#5DFF9F] text-black hover:bg-[#5DFF9F]/90 font-semibold h-14 px-8 text-lg hover-glow"
              >
                Start on WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#A07CFE]/30 text-[#A07CFE] hover:bg-[#A07CFE]/10 h-14 px-8 text-lg"
              >
                🔥 Roast My Calendar
              </Button>
            </motion.div>

            <motion.p 
              className="text-sm text-gray-400"
              variants={itemVariants}
            >
              Trusted by 500+ founders, VCs, and startup teams
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
