
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Mic, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineMoment {
  time: string;
  title: string;
  userInput: string;
  asmiAction: string;
  icon: React.ComponentType<any>;
  color: string;
}

const timelineMoments: TimelineMoment[] = [
  {
    time: "7:45 AM",
    title: "Focus Guard",
    userInput: "Protect two deep‑work blocks this week and move anything low‑priority.",
    asmiAction: "Deep Work Scheduled\nTUE 10:30–12:00 — moved 2 low‑priority 1:1s\nTHU 2:00–3:30 — rescheduled roadmap sync\nNOTIFIED: Attendees informed with context\nEXTRA: Slack status + calendar focus mode set",
    icon: Clock,
    color: "text-[#5DFF9F]"
  },
  {
    time: "10:15 AM",
    title: "Travel Concierge",
    userInput: "NYC day trip next Tuesday — earliest outbound, back by 9 PM. Aisle seat. Hotel walkable to SoHo office.",
    asmiAction: "Trip Locked\nFLIGHTS: UA 1542 6:20 AM → 9:40 AM (aisle) | UA 2189 7:10 PM → 8:55 PM\nHOTEL: Arlo SoHo — 0.4 mi from office (early check‑in requested)\nRIDES: Uber Reserve to SFO 4:50 AM, return pickup 6:10 PM\nCALENDAR: Holds + buffers added, boarding passes in Wallet",
    icon: Eye,
    color: "text-[#5DFF9F]"
  },
  {
    time: "2:05 PM",
    title: "Hiring Brief",
    userInput: "Who’s strongest for Senior PM? Prep me for the onsite loop.",
    asmiAction: "Top Candidates\n1) Priya N. — ex-Stripe, led 0→1 platform; Strengths: stakeholder mgmt, metrics; Risks: hardware exp.\n2) Marcus L. — Uber Eats growth; Strengths: exp. experiments; Risks: less enterprise.\nASKS: Validate roadmap thinking, dig on prioritization tradeoffs\nDOCS: Resumes + interview notes attached",
    icon: Mic,
    color: "text-[#5DFF9F]"
  },
  {
    time: "6:10 PM",
    title: "Revenue Follow‑ups",
    userInput: "Turn last week’s prospect threads into follow‑ups I can send in two taps.",
    asmiAction: "Drafted for Review\nACME — ‘Looping back on pilot start next Monday — attaching success plan’\nNIMBUS — ‘Sending the SOC2 + redlines — Thursday 3 PM work?’\nORBITAL — ‘ROI model w/ your data — 14% lift projected; 20‑min skim?’\nREMINDERS: Nudges scheduled, CRM updated",
    icon: RotateCcw,
    color: "text-[#5DFF9F]"
  }
];

export const ScrollableTimeline = () => {
  return (
    <div className="py-16 px-4">
      <motion.h2 
        className="text-3xl font-light text-center mb-12 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your day with Asmi
      </motion.h2>

      {/* Mobile Swipe Indicators */}
      <div className="flex justify-center items-center gap-4 mb-6 md:hidden">
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </motion.div>
        <span className="text-gray-400 text-sm">Swipe to explore timeline</span>
        <motion.div
          animate={{ x: [5, -5, 5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </motion.div>
      </div>

      {/* Scrollable Timeline */}
      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-6 min-w-max px-4 md:justify-center">
          {timelineMoments.map((moment, index) => (
            <motion.div
              key={index}
              className="flex-none w-80"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-black/40 to-black/20 border border-white/5 hover:border-[#5DFF9F]/20 transition-all duration-300 h-full backdrop-blur-xl shadow-2xl">
                <CardContent className="p-6 space-y-4">
                  {/* Time Badge */}
                  <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 font-medium">
                    {moment.time}
                  </Badge>
                  
                  {/* Icon - Monochromatic and premium */}
                  <motion.div
                    className={`w-12 h-12 mx-auto p-3 rounded-xl bg-white/[0.03] border border-white/5 ${moment.color}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <moment.icon className="w-full h-full" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-medium text-white text-center">
                    {moment.title}
                  </h3>

                  {/* Chat Flow */}
                  <div className="space-y-3">
                    {/* User Input */}
                    <motion.div
                      className="bg-[#007AFF] rounded-xl rounded-tr-md p-3 ml-8 relative shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      <p className="text-white text-sm">{moment.userInput}</p>
                      <div className="absolute top-3 -right-1 w-3 h-3 bg-[#007AFF] rotate-45" />
                    </motion.div>

                    {/* Asmi Response */}
                    <motion.div
                      className="bg-[#1F2937] rounded-xl rounded-tl-md p-3 mr-8 relative shadow-lg border border-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.8 }}
                    >
                      <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                        {moment.asmiAction}
                      </p>
                      <div className="absolute top-3 -left-1 w-3 h-3 bg-[#1F2937] rotate-45" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicators for larger screens */}
      <div className="hidden md:flex justify-center gap-2 mt-6">
        {timelineMoments.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-white/10"
            whileHover={{ scale: 1.5, backgroundColor: "rgba(93, 255, 159, 0.5)" }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};
