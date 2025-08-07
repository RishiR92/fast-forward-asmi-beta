
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
    time: "8:30 AM",
    title: "Task Intelligence",
    userInput: "What should I focus on today?",
    asmiAction: "Today's priority matrix:\nURGENT: VC presentation rehearsal (2 hours)\nIMPORTANT: Review Q4 budget proposals\nQUICK WINS: 3 client follow-ups pending\nHEADS UP: Maria's promotion announcement today",
    icon: Clock,
    color: "text-[#5DFF9F]"
  },
  {
    time: "12:45 PM", 
    title: "Profile Discovery",
    userInput: "I'm meeting David Chen from Google Ventures next week. What should I know?",
    asmiAction: "David Chen - Deep Dive\nPartner at GV, focuses on B2B SaaS (5+ years)\nFormer product manager at Stripe, Stanford CS\nLed investments in 12 companies, 3 unicorns\nSWEET SPOT: Fintech, AI tools, enterprise software\nPRO TIP: He's passionate about developer tools - mention your API strategy",
    icon: Eye,
    color: "text-[#5DFF9F]"
  },
  {
    time: "3:20 PM",
    title: "Context Switching",
    userInput: "Jumping from engineering standup to investor call in 5 minutes",
    asmiAction: "Context Switch Ready\nSTANDUP RECAP: 2 blockers resolved, sprint on track\nINVESTOR CALL: Sarah Mitchell, Andreessen Horowitz\nKEY POINTS: Q3 growth (127%), new enterprise deals\nHAVE READY: User retention metrics, burn rate update",
    icon: Mic,
    color: "text-[#5DFF9F]"
  },
  {
    time: "7:30 PM",
    title: "Email Intelligence", 
    userInput: "Catch me up on important emails",
    asmiAction: "CRITICAL: VC wants term sheet meeting Friday\nURGENT: Client escalation - server downtime issue\nOPPORTUNITY: TechCorp interested in partnership\nHOUSEKEEPING: 12 other emails triaged, 3 need responses",
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
