
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const ToggleComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showWithAsmi, setShowWithAsmi] = useState(false);

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

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: showWithAsmi ? 20 : -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: showWithAsmi ? -20 : 20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const comparisonData = [
    {
      without: {
        text: "Walk in blind — no context from past meetings",
        icon: "❌"
      },
      with: {
        text: "Prepped in seconds — WhatsApp briefs with names, history, key points",
        icon: "✅"
      }
    },
    {
      without: {
        text: "Forget follow-ups — voice notes disappear",
        icon: "❌"
      },
      with: {
        text: "Asmi remembers — follows up for you automatically",
        icon: "✅"
      }
    },
    {
      without: {
        text: "Waste 15 mins prepping every call",
        icon: "❌"
      },
      with: {
        text: "Skip prep — Asmi summarizes it all instantly",
        icon: "✅"
      }
    },
    {
      without: {
        text: "Juggle WhatsApp, calendar, Notion",
        icon: "❌"
      },
      with: {
        text: "Say it once — Asmi syncs it all",
        icon: "✅"
      }
    },
    {
      without: {
        text: "Manually chase people for updates",
        icon: "❌"
      },
      with: {
        text: "Gentle nudges sent automatically",
        icon: "✅"
      }
    }
  ];

  const currentData = showWithAsmi 
    ? comparisonData.map(item => item.with)
    : comparisonData.map(item => item.without);

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#A07CFE]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#5DFF9F]/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[900px] mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Gradient divider line */}
          <motion.div 
            className="h-0.5 w-15 mx-auto mb-3"
            style={{
              background: "linear-gradient(90deg, #A07CFE, #5DFF9F)",
              borderRadius: "2px"
            }}
            variants={itemVariants}
          />
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-semibold mb-12"
            style={{
              background: "linear-gradient(90deg, #A07CFE 0%, #5DFF9F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.5px",
              textShadow: "0 0 12px rgba(93, 255, 159, 0.15)"
            }}
            variants={itemVariants}
          >
            The difference is night and day
          </motion.h2>

          {/* Toggle Switch */}
          <motion.div 
            className="flex items-center justify-center mb-12"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-6">
              <span className={`text-lg font-medium transition-colors duration-300 ${!showWithAsmi ? 'text-white' : 'text-gray-400'}`}>
                Without Asmi
              </span>
              
              <button
                onClick={() => setShowWithAsmi(!showWithAsmi)}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none ${
                  showWithAsmi 
                    ? 'bg-[#5DFF9F]/20 shadow-[0_0_20px_rgba(93,255,159,0.3)]' 
                    : 'bg-red-500/20 shadow-[0_0_20px_rgba(255,92,92,0.3)]'
                }`}
                style={{
                  border: showWithAsmi 
                    ? '1px solid rgba(93, 255, 159, 0.3)' 
                    : '1px solid rgba(255, 92, 92, 0.3)'
                }}
              >
                <motion.div
                  className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ${
                    showWithAsmi ? 'bg-[#5DFF9F]' : 'bg-red-500'
                  }`}
                  animate={{
                    x: showWithAsmi ? 32 : 4,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </button>
              
              <span className={`text-lg font-medium transition-colors duration-300 ${showWithAsmi ? 'text-white' : 'text-gray-400'}`}>
                With Asmi
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Card */}
        <motion.div 
          className="glass-card rounded-2xl p-8 border border-white/8 max-w-[900px] mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(20px)"
          }}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={showWithAsmi ? 'with' : 'without'}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              {currentData.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/5 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <span 
                      className={`text-lg leading-relaxed transition-colors duration-300 ${
                        showWithAsmi 
                          ? 'text-white group-hover:text-[#5DFF9F]' 
                          : 'text-gray-300 group-hover:text-white'
                      }`}
                      style={{
                        fontFamily: "'General Sans', Inter, sans-serif"
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ToggleComparison;
