import { motion } from "framer-motion";
import { Brain, Sparkles, CheckCircle } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Remembers What Matters",
    description: "Asmi learns your patterns from calendar, emails, and chats—understanding what's important to you.",
  },
  {
    icon: Sparkles,
    title: "Your Team of Smart Helpers",
    description: "When you ask, AI helpers coordinate together to get it done fast and right.",
  },
  {
    icon: CheckCircle,
    title: "Gets It Done",
    description: "From meetings to trips to hiring—Asmi finishes what you start.",
  },
];

export const OutcomesGrid = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mb-20 text-foreground"
        >
          How Asmi Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                  {/* Animated Icon */}
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {capability.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
