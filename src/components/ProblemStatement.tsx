import { motion } from "framer-motion";

export const ProblemStatement = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-10" />
        <img 
          src="/images/gradient-mesh.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-16 text-foreground"
        >
          The Tools Overhang
        </motion.h2>
        
        <div className="space-y-10">
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
            className="text-2xl sm:text-3xl leading-relaxed text-foreground font-medium pt-6"
          >
            <span className="text-accent">Asmi is different.</span> One interface. Just talk. Everything gets done.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
