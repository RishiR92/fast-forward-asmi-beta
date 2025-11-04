import { motion } from "framer-motion";
import { Calendar, Mail, MessageSquare, Users, Zap, CheckCircle2 } from "lucide-react";

export const OutcomesGrid = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mb-24 text-foreground"
        >
          How Asmi Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {/* Panel 1: Learns Your Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Animated Background */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                {[Calendar, Mail, MessageSquare].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{ x: -100, y: -100, opacity: 0 }}
                    whileInView={{ 
                      x: ["50%", "50%"],
                      y: ["50%", "50%"],
                      opacity: [0, 1, 1]
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.3,
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`
                    }}
                  >
                    <Icon className="w-16 h-16" />
                  </motion.div>
                ))}
              </div>

              {/* Central Brain */}
              <motion.div
                className="relative z-10 mb-8"
                whileInView={{ scale: [0, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl">
                  <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Learns Your Patterns
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                Asmi learns from your calendar, emails, and chats—understanding what's important to you.
              </p>
            </div>
          </motion.div>

          {/* Panel 2: Team of Smart Helpers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Network Animation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1,
                      x: Math.cos(i * 60 * Math.PI / 180) * 80,
                      y: Math.sin(i * 60 * Math.PI / 180) * 80,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
              </div>

              {/* Central Hub */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
              >
                <motion.div
                  className="absolute inset-0 bg-accent/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl">
                  <Users className="w-14 h-14 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Team of Smart Helpers
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                AI helpers coordinate together to get it done fast and right.
              </p>
            </div>
          </motion.div>

          {/* Panel 3: Gets It Done */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-3xl p-10 h-full flex flex-col items-center text-center overflow-hidden relative">
              {/* Task List Animation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 opacity-15 px-8">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-full flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </motion.div>
                    <div className="h-2 bg-muted rounded-full flex-1" />
                  </motion.div>
                ))}
              </div>

              {/* Central Checkmark */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
                  <CheckCircle2 className="w-14 h-14 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground relative z-10">
                Gets It Done
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
                From meetings to trips to hiring—Asmi finishes what you start.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-foreground/90 leading-relaxed">
            "A voice-first, always-on Chief of Staff for your life."
          </p>
        </motion.div>
      </div>
    </section>
  );
};