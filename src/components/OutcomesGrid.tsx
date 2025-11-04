import { Brain, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const outcomes = [
  {
    icon: Brain,
    title: "Learns Your Patterns",
    description: "Asmi learns from your calendar, emails, and chats—understanding what matters to you."
  },
  {
    icon: Sparkles,
    title: "Deploys AI Helpers",
    description: "When you ask, Asmi sends out a team of AI helpers that work together to get it done."
  },
  {
    icon: CheckCircle,
    title: "Delivers Results",
    description: "From gym bookings to trip planning to hiring updates—Asmi finishes what you start."
  }
];

export const OutcomesGrid = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium text-center mb-20 text-foreground"
        >
          How Asmi Works
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <outcome.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {outcome.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-3xl md:text-4xl text-foreground/80 font-light italic max-w-4xl mx-auto leading-relaxed">
            A voice-first, always-on Chief of Staff for your life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
