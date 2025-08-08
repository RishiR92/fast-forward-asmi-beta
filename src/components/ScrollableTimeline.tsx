import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Mic, RotateCcw, ChevronLeft, ChevronRight, MapPin, Calendar, Send, FileText, Users, Target, ChevronDown } from "lucide-react";
import { useState } from "react";

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
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  
  const toggleCard = (index: number) => {
    setRevealedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
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
              <Card className="bg-gradient-to-br from-black/40 to-black/20 border border-white/5 hover:border-[#5DFF9F]/20 transition-all duration-300 h-full backdrop-blur-xl shadow-2xl cursor-pointer"
                onClick={() => toggleCard(index)}>
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
                    className="bg-muted/8 rounded-xl rounded-tr-md p-3 ml-6 relative shadow-lg border border-border/20 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + 0.5 }}
                  >
                    <p className="text-muted-foreground text-xs leading-relaxed">{moment.userInput}</p>
                    <div className="absolute top-2 -right-1 w-2 h-2 bg-muted/8 rotate-45 border-t border-r border-border/20" />
                  </motion.div>

                  {/* Reveal Hint */}
                  {!revealedCards.has(index) && (
                    <motion.div
                      className="flex items-center justify-center gap-2 py-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 + 1 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary/60 rounded-full"
                      />
                      <span className="text-muted-foreground text-xs">Tap to see Asmi's response</span>
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronDown className="w-3 h-3 text-primary/60" />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Asmi Response */}
                  <AnimatePresence>
                    {revealedCards.has(index) && (
                      <motion.div
                        className="bg-card/80 rounded-xl rounded-tl-md p-3 mr-6 relative shadow-lg border border-border/50 backdrop-blur-sm"
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
                          className="text-primary text-xs font-medium mb-2"
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
                                  <span className="text-primary/90 text-xs font-mono bg-primary/8 px-1.5 py-0.5 rounded flex-shrink-0 border border-primary/15 shadow-sm shadow-primary/5">
                                    {item.time}
                                  </span>
                                )}
                                 <div className="flex-1 min-w-0">
                                   <div className="flex items-center gap-1.5 mb-1">
                                     <span className="text-foreground text-xs font-medium">{item.title}</span>
                                     {item.type === 'zoom' && <div className="w-1.5 h-1.5 bg-primary/15 rounded-full shadow-sm shadow-primary/5 border border-primary/25"></div>}
                                     {item.type === 'in-person' && <div className="w-1.5 h-1.5 bg-secondary/15 rounded-full shadow-sm shadow-secondary/5 border border-secondary/25"></div>}
                                     {item.status && (
                                       <Badge className={`text-[10px] px-1.5 py-0 h-4 border ${
                                         item.status === 'Top choice' 
                                           ? 'bg-primary/10 text-primary border-primary/25' 
                                           : 'bg-secondary/10 text-secondary border-secondary/25'
                                       }`}>
                                         {item.status}
                                       </Badge>
                                     )}
                                   </div>
                                   
                                   {item.subtitle && (
                                     <div className="text-muted-foreground text-xs mb-1">{item.subtitle}</div>
                                   )}
                                   
                                   {item.location && (
                                     <div className="text-secondary text-xs flex items-center gap-1 mb-1 bg-secondary/8 px-1.5 py-0.5 rounded-md border border-secondary/20">
                                       <MapPin className="w-3 h-3" />
                                       {item.location}
                                     </div>
                                   )}
                                   
                                   {item.details && (
                                     <div className="space-y-0.5">
                                       {item.details.map((detail, detailIndex) => (
                                         <div key={detailIndex} className="text-muted-foreground text-xs flex items-center gap-1.5">
                                           <div className="w-1 h-1 bg-muted-foreground/40 rounded-full flex-shrink-0"></div>
                                           {detail}
                                         </div>
                                       ))}
                                     </div>
                                   )}
                                   
                                   {item.tags && (
                                     <div className="flex gap-1 mt-1 flex-wrap">
                                       {item.tags.map((tag, tagIndex) => {
                                         const isPersonal = tag === 'Personal';
                                         const isOperational = ['Operations', 'Logistics'].includes(tag);
                                         const isProbe = tag.startsWith('Probe:');
                                         return (
                                           <span 
                                             key={tagIndex} 
                                             className={`text-[10px] px-1.5 py-0.5 rounded-full border ${
                                               isPersonal 
                                                 ? 'text-secondary bg-secondary/10 border-secondary/25' 
                                                 : isOperational
                                                 ? 'text-primary bg-primary/10 border-primary/25'
                                                 : isProbe
                                                 ? 'text-foreground bg-muted/15 border-border/30'
                                                 : 'text-muted-foreground bg-muted/10 border-border/25'
                                             }`}
                                           >
                                             {tag}
                                           </span>
                                         );
                                       })}
                                     </div>
                                   )}
                                   
                                   {item.actions && (
                                     <div className="flex gap-1 mt-1.5 flex-wrap">
                                       {item.actions.map((action, actionIndex) => {
                                         const getActionStyles = () => {
                                           switch (action.type) {
                                             case 'send':
                                               return 'text-primary bg-primary/8 hover:bg-primary/15 border-primary/25';
                                             case 'view':
                                               return 'text-secondary bg-secondary/8 hover:bg-secondary/15 border-secondary/25';
                                             case 'prep':
                                               return 'text-foreground bg-muted/10 hover:bg-muted/20 border-border/30';
                                             case 'open':
                                               return 'text-accent bg-accent/8 hover:bg-accent/15 border-accent/25';
                                             default:
                                               return 'text-foreground bg-muted/10 hover:bg-muted/20 border-border/30';
                                           }
                                        };
                                        
                                        return (
                                          <motion.button
                                            key={actionIndex}
                                            className={`text-[10px] px-2 py-1 rounded-md border transition-colors ${getActionStyles()}`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            {action.type === 'send' && <Send className="w-2.5 h-2.5 inline mr-1" />}
                                            {action.type === 'open' && <FileText className="w-2.5 h-2.5 inline mr-1" />}
                                            {action.type === 'view' && <Eye className="w-2.5 h-2.5 inline mr-1" />}
                                            {action.type === 'prep' && <Target className="w-2.5 h-2.5 inline mr-1" />}
                                            {action.label}
                                          </motion.button>
                                        );
                                      })}
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
                            className="text-muted-foreground/80 text-xs mt-2 pt-2 border-t border-border/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            {moment.response.summary}
                          </motion.div>
                        )}
                        
                        {/* Quick Actions */}
                        {moment.response.quickActions && (
                          <motion.div 
                            className="flex gap-1 mt-2 flex-wrap"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                          >
                            {moment.response.quickActions.map((action, actionIndex) => {
                               const getActionStyles = () => {
                                 switch (action.type) {
                                   case 'send':
                                     return 'text-primary bg-primary/8 hover:bg-primary/15 border-primary/25';
                                   case 'view':
                                     return 'text-secondary bg-secondary/8 hover:bg-secondary/15 border-secondary/25';
                                   case 'prep':
                                     return 'text-foreground bg-muted/10 hover:bg-muted/20 border-border/30';
                                   case 'open':
                                     return 'text-accent bg-accent/8 hover:bg-accent/15 border-accent/25';
                                   default:
                                     return 'text-foreground bg-muted/10 hover:bg-muted/20 border-border/30';
                                 }
                               };
                              
                              return (
                                <motion.button
                                  key={actionIndex}
                                  className={`text-[10px] px-2 py-1 rounded-md border transition-colors ${getActionStyles()}`}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {action.type === 'send' && <Send className="w-2.5 h-2.5 inline mr-1" />}
                                  {action.type === 'open' && <FileText className="w-2.5 h-2.5 inline mr-1" />}
                                  {action.type === 'view' && <Eye className="w-2.5 h-2.5 inline mr-1" />}
                                  {action.type === 'prep' && <Target className="w-2.5 h-2.5 inline mr-1" />}
                                  {action.label}
                                </motion.button>
                              );
                            })}
                          </motion.div>
                        )}

                        {/* Collapse Button */}
                        <motion.button
                          className="flex items-center justify-center gap-1 w-full mt-3 pt-2 border-t border-border/30 text-muted-foreground/60 hover:text-muted-foreground text-xs transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(index);
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <motion.div
                            animate={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-3 h-3" />
                          </motion.div>
                          Hide response
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
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