
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const leftItems = [
    "Walk into meetings unsure who you're talking to or what was last discussed",
    "Promise follow-ups in voice notes and chats, but forget to act",
    "Spend 10–15 mins prepping before every important call",
    "Juggle WhatsApp, calendar, Notion, and reminders just to stay on top",
    "Chase people manually to close loops on intros, updates, or tasks"
  ];

  const rightItems = [
    "Get pre-meeting briefs on WhatsApp: last convo, who they are, what to say",
    "Asmi tracks every spoken commitment and follows up at the right time",
    "Skip the scramble — you're always 2 steps ahead, context-first",
    "Voice-note \"Reschedule that to Friday 3PM\" → synced across Google/Outlook",
    "Nudges your team, partners, or investors — without you lifting a finger"
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#5DFF9F]/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-8 group" variants={itemVariants}>
            <motion.h2 
              className="text-5xl font-bold text-red-400 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Without Asmi
            </motion.h2>
            <ul className="space-y-6">
              {leftItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-4 group/item"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0 transition-all duration-300 group-hover/item:shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <span className="text-gray-300 text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="space-y-8 group" variants={itemVariants}>
            <motion.h2 
              className="text-5xl font-bold gradient-text-primary mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              With Asmi
            </motion.h2>
            <ul className="space-y-6">
              {rightItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-4 group/item"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-[#5DFF9F] rounded-full mt-3 flex-shrink-0 transition-all duration-300 group-hover/item:shadow-[0_0_10px_rgba(93,255,159,0.5)]"></div>
                  <span className="text-gray-300 text-lg leading-relaxed group-hover/item:text-white transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedComparison;
