import { motion } from "framer-motion";

export const ProblemStatement = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-semibold mb-16 text-foreground"
        >
          The Tools Overhang
        </motion.h2>
        
        <div className="space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl leading-loose text-foreground/80"
          >
            Your life is dynamic. Work challenges (meetings, hiring) and personal tasks (kids, travel) shift every day.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl leading-loose text-foreground/80"
          >
            AI made it easy to build tools for everything. Now we're drowning in apps.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl leading-loose text-foreground font-medium"
          >
            <span className="text-accent">Asmi is different.</span> One interface. Just talk. Everything gets done.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
