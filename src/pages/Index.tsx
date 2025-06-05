import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Phone, Users, Brain, Target } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedComparison from "@/components/AnimatedComparison";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta signup:", { phoneNumber, email });
  };

  const featuresRef = useRef(null);
  const personasRef = useRef(null);
  const howItWorksRef = useRef(null);
  const finalCtaRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const personasInView = useInView(personasRef, { once: true, margin: "-100px" });
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
              Asmi
            </motion.div>
            <Button 
              variant="outline" 
              className="border-[#5DFF9F]/20 text-[#5DFF9F] hover:bg-[#5DFF9F]/10 glass-card hover-glow"
            >
              Join Beta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <AnimatedHero />

      {/* Problem/Solution Section */}
      <AnimatedComparison />

      {/* Features Section */}
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
              Built for <span className="gradient-text-primary">high-context</span> operators
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Asmi handles the cognitive overhead so you can focus on what matters.
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
                title: "Infinite Memory, Instant Recall",
                description: "Voice notes, conversations, decisions — Asmi never forgets context or commitments.",
                color: "A07CFE"
              },
              {
                icon: Users,
                title: "Meeting Briefs",
                description: "Get context on who you're meeting, your last conversation, and key talking points.",
                color: "5DFF9F"
              },
              {
                icon: Calendar,
                title: "Natural Language Scheduling",
                description: "\"Schedule coffee with Sarah next Tuesday at 3pm\" — works with Google, Outlook, Apple.",
                color: "5DFF9F"
              },
              {
                icon: Phone,
                title: "Contact-Aware",
                description: "Uses contact names from your phone — no need to explain who people are.",
                color: "A07CFE"
              },
              {
                icon: Target,
                title: "Follow-ups Handled For You",
                description: "Automatically follows up on commitments via WhatsApp — no more chasing people.",
                color: "5DFF9F"
              },
              {
                icon: MessageSquare,
                title: "Just Talk — It Gets It",
                description: "Just speak naturally — Asmi understands context and intent from voice messages.",
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

      {/* Target Personas */}
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
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Built for <span className="gradient-text-primary">high-velocity</span> operators
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
                emoji: "🧑‍🚀",
                title: "Founders",
                quote: "I voice-note investor updates at midnight. Asmi turns them into follow-ups, summaries, and calendar events — before I forget.",
                features: ["Remember every investor conversation", "Never miss a follow-up", "Prep for every meeting"]
              },
              {
                emoji: "🧑‍💼",
                title: "Startup Teams", 
                quote: "No more chasing teammates. I just say it once. Asmi tracks it, reminds them, and gives me updates before standup.",
                features: ["Coordinate without context-switching", "Automate status updates", "Never drop commitments"]
              },
              {
                emoji: "💸",
                title: "VCs & Angels",
                quote: "I don't prep decks for calls anymore. Asmi gives me the founder's context, last chat, and deal notes in WhatsApp — right before we speak.",
                features: ["Track every founder interaction", "Remember deal terms and updates", "Perfect intro preparation"]
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

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What early users are saying</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <blockquote className="text-slate-300 mb-4">
                  "Feels like I hired an EA and never had to explain anything."
                </blockquote>
                <div className="text-sm text-slate-400">— Founder, Series B SaaS</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <blockquote className="text-slate-300 mb-4">
                  "Finally, an AI that actually understands the context of fast-moving conversations."
                </blockquote>
                <div className="text-sm text-slate-400">— VP Growth, Unicorn Startup</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <blockquote className="text-slate-300 mb-4">
                  "I can't believe how much mental overhead this removes. Game changer."
                </blockquote>
                <div className="text-sm text-slate-400">— Partner, Tier 1 VC</div>
              </CardContent>
            </Card>
          </div>
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
              How Asmi works
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-400 font-light"
              variants={itemVariants}
            >
              Three steps. Zero effort. High leverage.
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
                title: "Say it",
                description: "Voice note or text Asmi inside WhatsApp — no commands, just talk naturally.",
                examples: [
                  "\"Remind me to follow up with Tony on pricing.\"",
                  "\"Schedule intro call with Alex next Tuesday at 3PM.\""
                ]
              },
              {
                number: "2", 
                title: "It remembers",
                description: "Asmi understands what matters, connects it to past context, and tracks it.",
                examples: [
                  "• Remembers convos, decisions, promises — no manual entry needed",
                  "• Builds your contextual memory graph across meetings & messages"
                ]
              },
              {
                number: "3",
                title: "You stay sharp", 
                description: "Asmi handles the rest — scheduling, briefing, nudging, reminding — before you even ask.",
                examples: [
                  "• Prepares talking points before your next call",
                  "• Follows up with your team or investors", 
                  "• Sends gentle nudges automatically in WhatsApp"
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
                    <div key={i} className="text-gray-300 text-sm leading-relaxed data-display">{example}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Example Output Visual */}
          <motion.div 
            className="mt-20 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="glass-card rounded-3xl p-8 border border-[#5DFF9F]/20 hover-lift neon-glow">
              <div className="space-y-4 text-white">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-[#A07CFE] mt-0.5 flex-shrink-0" />
                  <span className="text-lg data-display">Your call with Alex is prepped.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#5DFF9F] text-lg">💼</span>
                  <span className="data-display">Series A, $50M ARR</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-[#5DFF9F] mt-0.5 flex-shrink-0" />
                  <span className="data-display">Last chat: Pricing concerns</span>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-[#5DFF9F] mt-0.5 flex-shrink-0" />
                  <span className="data-display">Talk about: Expansion plan, next steps</span>
                </div>
              </div>
            </div>
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
                <span className="animate-typing-cursor">🔥</span> Only 100 spots left
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
              variants={itemVariants}
            >
              We're onboarding 100 people who move{" "}
              <span className="gradient-text-primary">faster than their calendar.</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Join the beta and get your AI Chief of Staff inside WhatsApp.
            </motion.p>

            <motion.form 
              onSubmit={handleBetaSignup} 
              className="max-w-md mx-auto space-y-6"
              variants={itemVariants}
            >
              <Input
                type="tel"
                placeholder="Your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full glass-card border-[#5DFF9F]/20 text-white placeholder:text-gray-400 h-14 text-lg"
              />
              <Input
                type="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full glass-card border-[#5DFF9F]/20 text-white placeholder:text-gray-400 h-14 text-lg"
              />
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-white text-black hover:bg-[#5DFF9F] hover:text-black font-semibold h-14 text-lg transition-all duration-300 hover-glow"
              >
                Join the Beta
              </Button>
            </motion.form>

            <motion.p 
              className="text-sm text-gray-400 mt-6"
              variants={itemVariants}
            >
              No credit card required. Early access closes December 15th.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0D0D0D] border-t border-[#5DFF9F]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text-primary mb-4 md:mb-0">
              Asmi
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#5DFF9F] transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#5DFF9F]/10 text-center text-gray-500">
            <p>&copy; 2024 Asmi. Built for founders who move fast.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
