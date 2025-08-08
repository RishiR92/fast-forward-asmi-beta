import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Mic, RotateCcw, ChevronLeft, ChevronRight, MapPin, Calendar, Send, FileText, Users, Target } from "lucide-react";

interface ActionItem {
  label: string;
  type?: 'prep' | 'send' | 'open' | 'view';
  status?: 'ready' | 'draft' | 'pending';
}

interface TimelineMoment {
  time: string;
  title: string;
  userInput: string;
  response: {
    title: string;
    items: Array<{
      time?: string;
      title: string;
      subtitle?: string;
      details?: string[];
      location?: string;
      type?: 'zoom' | 'in-person';
      status?: string;
      tags?: string[];
      actions?: ActionItem[];
    }>;
    summary?: string;
    quickActions?: ActionItem[];
  };
  icon: React.ComponentType<any>;
  color: string;
}

const timelineMoments: TimelineMoment[] = [
  {
    time: "7:30 AM",
    title: "Plan of Day",
    userInput: "Give me a crisp plan for today—meetings, agenda, and what to prep.",
    response: {
      title: "Today's Agenda",
      items: [
        {
          time: "9:00",
          title: "Team Standup",
          subtitle: "Demo handoff + blockers",
          type: "zoom",
          actions: [{ label: "Prep Notes", type: "prep" }]
        },
        {
          time: "11:00",
          title: "PM Onsite (Priya N.)",
          subtitle: "Product sense interview",
          type: "in-person",
          actions: [{ label: "Hiring Brief", type: "view" }]
        },
        {
          time: "2:30",
          title: "Northstar Check-in",
          subtitle: "Ananya P. • Rollout & pricing",
          location: "SoMa office",
          type: "in-person",
          details: ["Leave at 2:05", "20min commute"],
          actions: [{ label: "Relationship Brief", type: "prep" }]
        },
        {
          time: "5:30",
          title: "Email Focus",
          subtitle: "Follow-ups & approvals",
          actions: [{ label: "Draft Queue", type: "open" }]
        }
      ]
    },
    icon: Clock,
    color: "text-[#5DFF9F]"
  },
  {
    time: "9:30 AM",
    title: "Relationship Brief",
    userInput: "Quick background on Ananya Patel for the 2:30 check‑in — keep it tight.",
    response: {
      title: "Ananya Patel",
      items: [
        {
          title: "Head of Ops, Northstar Logistics",
          details: ["Ex-Amazon operations", "Led 3 DC rollouts", "KPI-driven leader"],
          tags: ["Operations", "Logistics"]
        },
        {
          title: "Last Discussion",
          details: ["Phased rollout strategy", "Pricing guardrails", "Success = on-time departures"]
        },
        {
          title: "Rapport Builder",
          subtitle: "IIT Delhi Connection",
          details: ["Both alumni", "Mention robotics club story"],
          tags: ["Personal"]
        }
      ],
      quickActions: [
        { label: "Account Brief", type: "view" },
        { label: "Last Deck", type: "open" }
      ]
    },
    icon: Eye,
    color: "text-[#5DFF9F]"
  },
  {
    time: "11:00 AM",
    title: "Hiring Brief",
    userInput: "Prep me for the Senior PM onsite loop — what to validate?",
    response: {
      title: "PM Candidates",
      items: [
        {
          title: "Priya N.",
          subtitle: "Ex-Stripe • 0→1 Platform",
          details: ["Strong: Stakeholder mgmt", "Strong: Metrics-driven"],
          tags: ["Probe: Hardware exp"],
          status: "Top choice"
        },
        {
          title: "Marcus L.",
          subtitle: "Uber Eats • Growth",
          details: ["Strong: Experiments", "Strong: Scale"],
          tags: ["Probe: Enterprise depth"]
        }
      ],
      summary: "Focus: Roadmap thinking, prioritization tradeoffs",
      quickActions: [
        { label: "Interview Packet", type: "open" },
        { label: "Exercises", type: "prep" }
      ]
    },
    icon: Mic,
    color: "text-[#5DFF9F]"
  },
  {
    time: "5:30 PM",
    title: "Important Emails",
    userInput: "Surface important emails I haven't replied to and draft replies.",
    response: {
      title: "Draft Replies Ready",
      items: [
        {
          title: "ACME Corp",
          subtitle: "Pilot kickoff Monday",
          details: ["Success plan attached"],
          actions: [{ label: "Send", type: "send", status: "ready" }]
        },
        {
          title: "Nimbus",
          subtitle: "SOC2 compliance review",
          details: ["Thursday 3 PM meeting?"],
          actions: [{ label: "Send", type: "send", status: "ready" }]
        },
        {
          title: "Orbital",
          subtitle: "ROI model results",
          details: ["14% lift projected", "20-min overview"],
          actions: [{ label: "Send", type: "send", status: "ready" }]
        }
      ],
      summary: "CRM updated • Follow-up nudges scheduled"
    },
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
        <div className="flex gap-4 min-w-max px-4 md:justify-center">
          {timelineMoments.map((moment, index) => (
            <motion.div
              key={index}
              className="flex-none w-[300px] md:w-[320px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-black/40 to-black/20 border border-white/5 hover:border-[#5DFF9F]/20 transition-all duration-300 h-full backdrop-blur-xl shadow-2xl">
                <CardContent className="p-5 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] border-[#5DFF9F]/20 font-medium text-xs">
                      {moment.time}
                    </Badge>
                    <motion.div
                      className={`w-8 h-8 p-2 rounded-lg bg-white/[0.03] border border-white/5 ${moment.color}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <moment.icon className="w-full h-full" />
                    </motion.div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-medium text-white">
                    {moment.title}
                  </h3>

                  {/* User Input */}
                  <motion.div
                    className="bg-[#007AFF]/90 rounded-xl rounded-tr-md p-3 ml-6 relative shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + 0.5 }}
                  >
                    <p className="text-white text-xs leading-relaxed">{moment.userInput}</p>
                    <div className="absolute top-2 -right-1 w-2 h-2 bg-[#007AFF]/90 rotate-45" />
                  </motion.div>

                  {/* Asmi Response */}
                  <motion.div
                    className="bg-[#1F2937]/90 rounded-xl rounded-tl-md p-3 mr-6 relative shadow-lg border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + 0.8 }}
                  >
                    <div className="absolute top-2 -left-1 w-2 h-2 bg-[#1F2937]/90 rotate-45" />
                    
                    {/* Response Title */}
                    <div className="text-[#5DFF9F] text-xs font-medium mb-2">
                      {moment.response.title}
                    </div>
                    
                    {/* Response Items */}
                    <div className="space-y-2">
                      {moment.response.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-1">
                          <div className="flex items-start gap-2">
                            {item.time && (
                              <span className="text-[#5DFF9F] text-xs font-mono bg-[#5DFF9F]/10 px-1.5 py-0.5 rounded flex-shrink-0">
                                {item.time}
                              </span>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="text-white text-xs font-medium">{item.title}</span>
                                {item.type === 'zoom' && <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>}
                                {item.type === 'in-person' && <MapPin className="w-3 h-3 text-orange-400" />}
                                {item.status && (
                                  <Badge className="bg-[#5DFF9F]/10 text-[#5DFF9F] text-[10px] px-1 py-0 h-4 border-none">
                                    {item.status}
                                  </Badge>
                                )}
                              </div>
                              
                              {item.subtitle && (
                                <div className="text-gray-300 text-xs mb-1">{item.subtitle}</div>
                              )}
                              
                              {item.location && (
                                <div className="text-orange-300 text-xs flex items-center gap-1 mb-1">
                                  <MapPin className="w-3 h-3" />
                                  {item.location}
                                </div>
                              )}
                              
                              {item.details && (
                                <div className="space-y-0.5">
                                  {item.details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="text-gray-400 text-xs flex items-center gap-1">
                                      <div className="w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></div>
                                      {detail}
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {item.tags && (
                                <div className="flex gap-1 mt-1 flex-wrap">
                                  {item.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              {item.actions && (
                                <div className="flex gap-1 mt-1.5 flex-wrap">
                                  {item.actions.map((action, actionIndex) => (
                                    <motion.button
                                      key={actionIndex}
                                      className="text-[10px] text-[#5DFF9F] bg-[#5DFF9F]/10 hover:bg-[#5DFF9F]/20 px-2 py-1 rounded-md border border-[#5DFF9F]/20 transition-colors"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      {action.type === 'send' && <Send className="w-2.5 h-2.5 inline mr-1" />}
                                      {action.type === 'open' && <FileText className="w-2.5 h-2.5 inline mr-1" />}
                                      {action.type === 'view' && <Eye className="w-2.5 h-2.5 inline mr-1" />}
                                      {action.type === 'prep' && <Target className="w-2.5 h-2.5 inline mr-1" />}
                                      {action.label}
                                    </motion.button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Summary */}
                    {moment.response.summary && (
                      <div className="text-gray-400 text-xs mt-2 pt-2 border-t border-white/5">
                        {moment.response.summary}
                      </div>
                    )}
                    
                    {/* Quick Actions */}
                    {moment.response.quickActions && (
                      <div className="flex gap-1 mt-2 flex-wrap">
                        {moment.response.quickActions.map((action, actionIndex) => (
                          <motion.button
                            key={actionIndex}
                            className="text-[10px] text-[#5DFF9F] bg-[#5DFF9F]/10 hover:bg-[#5DFF9F]/20 px-2 py-1 rounded-md border border-[#5DFF9F]/20 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {action.type === 'send' && <Send className="w-2.5 h-2.5 inline mr-1" />}
                            {action.type === 'open' && <FileText className="w-2.5 h-2.5 inline mr-1" />}
                            {action.type === 'view' && <Eye className="w-2.5 h-2.5 inline mr-1" />}
                            {action.type === 'prep' && <Target className="w-2.5 h-2.5 inline mr-1" />}
                            {action.label}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </motion.div>
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