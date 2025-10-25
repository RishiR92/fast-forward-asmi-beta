import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Mic, RotateCcw, ChevronLeft, ChevronRight, MapPin, Calendar, Send, FileText, Users, Target, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

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
    title: "Morning Kickoff",
    userInput: "What's on tap today? Keep it tight",
    response: {
      title: "Today's Overview",
      items: [
        {
          title: "Emma's early dismissal",
          subtitle: "Pickup 3:30 PM (Room 204, north entrance)",
          details: ["Science fair permission slip due"]
        },
        {
          title: "Dentist appointment",
          subtitle: "10:00 AM with Dr. Chen",
          details: ["Bring insurance card"]
        },
        {
          title: "Acme Corp client call",
          subtitle: "2:00 PM (Zoom)",
          details: ["Pricing discussion", "$500K+ deal"]
        },
        {
          title: "Pharmacy pickup ready",
          subtitle: "Prescription refill #4782"
        },
        {
          title: "Date night reservation",
          subtitle: "7:30 PM at Zuni Café",
          details: ["Confirmed for 2 guests"]
        }
      ]
    },
    icon: Clock,
    color: "text-[#5DFF9F]"
  },
  {
    time: "1:45 PM",
    title: "Client Brief",
    userInput: "Quick brief on Acme Corp before the 2 PM call",
    response: {
      title: "Meeting Prep",
      items: [
        {
          title: "Steve Johnson - VP Sales at Acme Corp",
          subtitle: "Decision maker, MIT Sloan MBA",
          details: ["3 years at Acme", "Former Oracle director"]
        },
        {
          title: "Last conversation - July 15",
          details: ["Discussed pricing concerns", "Implementation timeline worries"]
        },
        {
          title: "Key talking points",
          details: ["Address timeline concerns", "Share ROI case studies from similar enterprise clients"]
        },
        {
          title: "Goal: Close pilot agreement",
          subtitle: "$500K+ deal value",
          details: ["Target: month-end"]
        }
      ]
    },
    icon: Eye,
    color: "text-[#5DFF9F]"
  },
  {
    time: "3:15 PM",
    title: "School Pickup",
    userInput: "Remind me about Emma's pickup and what's next",
    response: {
      title: "Emma's Afternoon",
      items: [
        {
          title: "School pickup - 3:30 PM",
          subtitle: "Early dismissal today",
          details: ["Room 204, north entrance"]
        },
        {
          title: "Soccer practice after school",
          subtitle: "4:00 - 5:00 PM at Central Park",
          details: ["Bring water bottle"]
        },
        {
          title: "Carpool duty",
          subtitle: "Drop off Mia (Sarah's daughter) on way home"
        },
        {
          title: "Evening routine",
          subtitle: "Piano practice 5:30-6:00 PM",
          details: ["Dinner ingredients ready (pasta + salad)", "Science project supplies arrived - unpack together tonight"]
        }
      ]
    },
    icon: Mic,
    color: "text-[#5DFF9F]"
  },
  {
    time: "5:45 PM",
    title: "Email Wrap-up",
    userInput: "Show me emails that need replies before I sign off",
    response: {
      title: "Ready to Send",
      items: [
        {
          title: "Acme Corp follow-up",
          subtitle: "Follow-up from today's call",
          details: ["Draft summarizes pricing discussion and next steps"],
          actions: [{ label: "Send Now", type: "send", status: "ready" }]
        },
        {
          title: "Priya interview confirmation",
          subtitle: "PM candidate interview schedule",
          details: ["Urgent - needs response tonight"],
          actions: [{ label: "Send Now", type: "send", status: "ready" }]
        },
        {
          title: "Northstar Logistics contract review",
          subtitle: "Proposed Thursday meeting",
          details: ["Can wait until tomorrow morning"],
          actions: [{ label: "Review Draft", type: "view", status: "ready" }]
        }
      ],
      summary: "2 urgent, 1 can wait"
    },
    icon: RotateCcw,
    color: "text-[#5DFF9F]"
  }
];

export const ScrollableTimeline = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const toggleCard = (index: number) => {
    setOpenIndex(prev => {
      const next = prev === index ? null : index;
      if (next === index) {
        const el = cardRefs.current[index];
        el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      return next;
    });
  };

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
      <div className="overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-4 min-w-max px-4 md:justify-center items-start">
          {timelineMoments.map((moment, index) => (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex-none w-[280px] md:w-[320px] snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
              <Card className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#5DFF9F]/30 transition-all duration-300 rounded-xl shadow-lg cursor-pointer"
                onClick={() => toggleCard(index)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                aria-controls={`response-${index}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(index);
                  }
                }}
              >
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
                    className="bg-muted/8 rounded-xl rounded-tr-md p-2.5 ml-4 relative shadow-lg border border-border/20 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + 0.5 }}
                  >
                    <p className="text-gray-400 text-[11px] leading-relaxed">{moment.userInput}</p>
                    <div className="absolute top-2 -right-1 w-2 h-2 bg-muted/8 rotate-45 border-t border-r border-border/20" />
                  </motion.div>

                  {/* Reveal Hint */}
                  {openIndex !== index && (
                    <motion.div
                      className="flex items-center justify-center gap-2 py-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 + 1 }}
                    >
                       <motion.div
                         animate={{ scale: [1, 1.1, 1] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-1.5 h-1.5 bg-[#5DFF9F]/60 rounded-full"
                       />
                      <span className="text-gray-400 text-[10px]">Tap to see response</span>
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronDown className="w-3 h-3 text-[#5DFF9F]/60" />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Asmi Response */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`response-${index}`}
                        className="bg-card/80 rounded-xl rounded-tl-md p-2.5 mr-4 relative shadow-lg border border-border/50 backdrop-blur-sm"
                        initial={{ opacity: 0, height: 0, x: -20 }}
                        animate={{ opacity: 1, height: "auto", x: 0 }}
                        exit={{ opacity: 0, height: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6,
                          ease: "easeInOut",
                          height: { duration: 0.4 }
                        }}
                      >
                        <div className="absolute top-2 -left-1 w-2 h-2 bg-card/80 rotate-45 border-l border-t border-border/50" />
                        
                         {/* Response Title */}
                         <motion.div 
                           className="text-[#5DFF9F] text-[10px] font-medium mb-2"
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.2 }}
                         >
                           {moment.response.title}
                         </motion.div>
                        
                        {/* Response Items */}
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {moment.response.items.map((item, itemIndex) => (
                            <motion.div 
                              key={itemIndex} 
                              className="space-y-1"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + itemIndex * 0.1 }}
                            >
                               <div className="flex items-start gap-2">
                                 {item.time && (
                                   <span className="bg-[#5DFF9F]/10 text-[#5DFF9F] text-[10px] font-mono px-1.5 py-0.5 rounded flex-shrink-0 border border-[#5DFF9F]/30">
                                     {item.time}
                                   </span>
                                 )}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                      <span className="text-white text-[11px] font-medium">{item.title}</span>
                                      {item.type === 'zoom' && <div className="w-1.5 h-1.5 bg-[#5DFF9F]/20 rounded-full border border-[#5DFF9F]/40"></div>}
                                      {item.type === 'in-person' && <div className="w-1.5 h-1.5 bg-[#A07CFE]/20 rounded-full border border-[#A07CFE]/40"></div>}
                                      {item.status && (
                                        <Badge className="text-[10px] px-1.5 py-0 h-4 bg-[#5DFF9F]/10 text-[#5DFF9F] border border-[#5DFF9F]/30">
                                          {item.status}
                                        </Badge>
                                      )}
                                    </div>
                                    
                                    {item.subtitle && (
                                      <div className="text-gray-400 text-[10px] mb-0.5">{item.subtitle}</div>
                                    )}
                                    
                                    {item.location && (
                                      <div className="text-[#A07CFE] text-[10px] flex items-center gap-1 mb-0.5 bg-[#A07CFE]/10 px-1.5 py-0.5 rounded-md border border-[#A07CFE]/30">
                                        <MapPin className="w-2.5 h-2.5" />
                                        {item.location}
                                      </div>
                                    )}
                                    
                                    {item.details && (
                                      <div className="space-y-0.5">
                                        {item.details.map((detail, detailIndex) => (
                                          <div key={detailIndex} className="text-gray-400 text-[10px] flex items-center gap-1.5">
                                            <div className="w-0.5 h-0.5 bg-gray-400/40 rounded-full flex-shrink-0"></div>
                                            {detail}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                    
                                    
                                     {item.actions && (
                                       <div className="flex gap-1 mt-1.5 flex-wrap">
                                         {item.actions.map((action, actionIndex) => (
                                           <button 
                                             key={actionIndex} 
                                             className="text-[10px] px-2 py-1 rounded-md transition-all duration-200 border bg-[#5DFF9F]/10 text-[#5DFF9F] hover:bg-[#5DFF9F]/20 border-[#5DFF9F]/30 hover:scale-105 active:scale-95"
                                             onClick={(e) => e.stopPropagation()}
                                           >
                                             {action.label}
                                           </button>
                                         ))}
                                       </div>
                                     )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Summary */}
                        {moment.response.summary && (
                          <motion.div
                            className="mt-3 pt-2 border-t border-border/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            <p className="text-gray-400 text-xs">{moment.response.summary}</p>
                          </motion.div>
                        )}

                        {/* Quick Actions */}
                        {moment.response.quickActions && (
                          <motion.div
                            className="flex gap-2 mt-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                          >
                            {moment.response.quickActions.map((action, actionIndex) => (
                              <button
                                key={actionIndex}
                                className="text-xs px-3 py-1.5 rounded-lg transition-all duration-200 border bg-[#5DFF9F]/10 text-[#5DFF9F] hover:bg-[#5DFF9F]/20 border-[#5DFF9F]/30 hover:scale-105 active:scale-95"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {action.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Scroll Indicators */}
      <div className="hidden md:flex justify-center items-center gap-4 mt-6">
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </motion.div>
        <span className="text-gray-400 text-sm">Scroll to see more moments</span>
        <motion.div
          animate={{ x: [5, -5, 5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </motion.div>
      </div>
    </div>
  );
};