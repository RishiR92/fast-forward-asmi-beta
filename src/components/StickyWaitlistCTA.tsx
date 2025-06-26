
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send } from "lucide-react";

export const StickyWaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Waitlist signup:", { email });
    setIsLoading(false);
    setEmail("");
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 right-4 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <motion.div
        className="bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 p-4 max-w-md mx-auto"
        whileHover={{ scale: 1.02 }}
      >
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 flex-1"
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
        
        <p className="text-gray-400 text-xs mt-2 text-center">
          Join 10,000+ fast movers • No spam, just Asmi
        </p>
      </motion.div>
    </motion.div>
  );
};
