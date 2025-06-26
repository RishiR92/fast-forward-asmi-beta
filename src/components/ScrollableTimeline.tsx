
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Mic, RotateCcw } from "lucide-react";

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
    time: "7:00 AM",
    title: "Morning Brief",
    userInput: "Good morning",
    asmiAction: "📅 Today: 3 meetings, 5 follow-ups\n🎯 Priority: Close Acme deal\n⚡️ Sarah's birthday - send note",
    icon: Clock,
    color: "text-yellow-400"
  },
  {
    time: "10:30 AM", 
    title: "Pre-Meeting Intel",
    userInput: "Meeting with John in 10",
    asmiAction: "👤 John Smith, CTO @ TechFlow\n💼 Last met: Q3 roadmap discussion\n🎯 How to win: Focus on ROI metrics",
    icon: Eye,
    color: "text-blue-400"
  },
  {
    time: "2:15 PM",
    title: "Voice Note Capture",
    userInput: "🎤 Follow up with investors about Series A timeline",
    asmiAction: "✅ Action saved\n📅 Reminder set for Monday\n📧 Draft email ready to send",
    icon: Mic,
    color: "text-green-400"
  },
  {
    time: "6:00 PM",
    title: "Follow-Up Reminders", 
    userInput: "End of day",
    asmiAction: "📬 3 pending follow-ups\n👤 Sarah: Thank you note sent\n💼 Acme: Proposal needs review",
    icon: RotateCcw,
    color: "text-purple-400"
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

      {/* Scrollable Timeline */}
      <div className="overflow-x-auto pb-6">
        <div className="flex gap-6 min-w-max px-4">
          {timelineMoments.map((moment, index) => (
            <motion.div
              key={index}
              className="flex-none w-80"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white/[0.02] border-white/10 hover:border-[#5DFF9F]/30 transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  {/* Time Badge */}
                  <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20">
                    {moment.time}
                  </Badge>
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 mx-auto ${moment.color}`}
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
                      className="bg-[#007AFF] rounded-xl rounded-tr-md p-3 ml-8 relative"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      <p className="text-white text-sm">{moment.userInput}</p>
                      <div className="absolute top-3 -right-1 w-3 h-3 bg-[#007AFF] rotate-45" />
                    </motion.div>

                    {/* Asmi Response */}
                    <motion.div
                      className="bg-[#202C33] rounded-xl rounded-tl-md p-3 mr-8 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.8 }}
                    >
                      <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                        {moment.asmiAction}
                      </p>
                      <div className="absolute top-3 -left-1 w-3 h-3 bg-[#202C33] rotate-45" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
