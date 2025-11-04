import { motion } from "framer-motion";
import { Smartphone, Mail, Calendar, MessageSquare, FileText, Briefcase, Clock, Video, DollarSign, ShoppingCart, Music, Camera, Bell, Database, Globe } from "lucide-react";

const appIcons = [
  { Icon: Smartphone, delay: 0, color: "text-primary" },
  { Icon: Mail, delay: 0.1, color: "text-destructive" },
  { Icon: Calendar, delay: 0.2, color: "text-accent" },
  { Icon: MessageSquare, delay: 0.3, color: "text-foreground" },
  { Icon: FileText, delay: 0.4, color: "text-muted-foreground" },
  { Icon: Briefcase, delay: 0.5, color: "text-primary" },
  { Icon: Clock, delay: 0.6, color: "text-accent" },
  { Icon: Video, delay: 0.7, color: "text-primary" },
  { Icon: DollarSign, delay: 0.8, color: "text-destructive" },
  { Icon: ShoppingCart, delay: 0.9, color: "text-foreground" },
  { Icon: Music, delay: 1.0, color: "text-accent" },
  { Icon: Camera, delay: 1.1, color: "text-primary" },
  { Icon: Bell, delay: 1.2, color: "text-muted-foreground" },
  { Icon: Database, delay: 1.3, color: "text-foreground" },
  { Icon: Globe, delay: 1.4, color: "text-accent" },
];

export const ProblemStatement = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* App Icons Piling Up */}
            <div className="relative w-full h-full">
              {appIcons.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ y: -100, opacity: 0, rotate: 0 }}
                    whileInView={{ 
                      y: [
                        -100, 
                        Math.sin(index * 1.3) * 40 + 120,
                        Math.sin(index * 1.3) * 40 + 140
                      ], 
                      opacity: [0, 1, 0.9],
                      rotate: [0, Math.random() * 30 - 15, Math.random() * 30 - 15]
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.2,
                      delay: item.delay,
                      times: [0, 0.6, 1],
                      ease: "easeOut"
                    }}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      left: `${30 + Math.cos(index * 1.3) * 30}%`
                    }}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-card border-2 border-border shadow-lg flex items-center justify-center ${item.color}`}>
                      <Icon className="w-10 h-10" />
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Overwhelm indicator */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
              >
                <div className="text-6xl font-bold text-destructive/80">∞</div>
                <p className="text-sm text-muted-foreground mt-2">Too many tools</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground"
            >
              The Tools Overhang
            </motion.h2>
            
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl sm:text-2xl leading-relaxed text-foreground/80 font-light"
              >
                Your life is dynamic. Work challenges and personal tasks shift every day.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl leading-relaxed text-foreground/80 font-light"
              >
                AI made it easy to build tools for everything. Now we're drowning in apps.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl leading-relaxed text-foreground font-semibold pt-4"
              >
                <span className="text-accent">Asmi is different.</span>
                <br />
                <span className="text-foreground/90 font-light">One interface. Just talk. Everything gets done.</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
