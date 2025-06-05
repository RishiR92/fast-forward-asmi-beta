
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const AnimatedHero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta signup:", { phoneNumber });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0.1, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <section className="pt-32 pb-32 px-6 relative overflow-hidden min-h-screen flex items-center">
      {/* Ambient background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5DFF9F]/5 rounded-full blur-3xl animate-particle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A07CFE]/5 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/2 rounded-full blur-3xl animate-particle-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Badge variant="secondary" className="glass-card border-[#5DFF9F]/20 text-[#5DFF9F] hover-glow">
                  Early Access
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-6xl lg:text-8xl font-bold leading-tight gradient-text-white"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                Your Chief of Staff
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl text-gray-300 leading-relaxed max-w-lg font-light"
              >
                built inside{" "}
                <span className="gradient-text-primary font-medium">WhatsApp.</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-400 leading-relaxed max-w-lg"
              >
                Asmi remembers what you say, preps you before meetings, and follows up — so you don't have to.
              </motion.p>
            </div>
            
            <motion.form 
              onSubmit={handleBetaSignup} 
              className="space-y-4 max-w-md"
              variants={itemVariants}
            >
              <div className="flex gap-3">
                <Input
                  type="tel"
                  placeholder="Your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 glass-card border-white/10 text-white placeholder:text-gray-500"
                />
                <Button 
                  type="submit"
                  className="bg-white text-black hover:bg-[#5DFF9F] hover:text-black px-8 font-medium transition-all duration-300 hover-glow"
                >
                  Join Beta
                </Button>
              </div>
            </motion.form>
          </motion.div>

          <motion.div 
            className="relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="glass-card rounded-3xl p-8 shadow-2xl max-w-sm mx-auto border border-[#5DFF9F]/10 hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#5DFF9F]/20 rounded-full flex items-center justify-center neon-glow">
                  <Calendar className="h-5 w-5 text-[#5DFF9F]" />
                </div>
                <div>
                  <div className="text-white font-medium text-lg data-display">Sync up with Reducto</div>
                  <div className="text-[#5DFF9F] font-medium">3PM</div>
                </div>
              </div>
              
              <div className="space-y-4 text-white">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="w-6 h-6 bg-[#A07CFE]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 neon-glow-purple">
                    <Calendar className="h-3 w-3 text-[#A07CFE]" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm data-display">Context:</span>
                    <div className="text-white">YC founder, Series A at $15M ARR</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <div className="w-6 h-6 bg-[#5DFF9F]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 neon-glow">
                    <MessageSquare className="h-3 w-3 text-[#5DFF9F]" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm data-display">Last chat:</span>
                    <div className="text-white">Interested in your API integration</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  <div className="w-6 h-6 bg-[#5DFF9F]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 neon-glow">
                    <Target className="h-3 w-3 text-[#5DFF9F]" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm data-display">Talk about:</span>
                    <div className="text-white">Partnership timeline, technical requirements</div>
                  </div>
                </motion.div>
              </div>
              
              <div className="text-xs text-gray-500 text-right mt-6 data-display">2:58 PM</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
