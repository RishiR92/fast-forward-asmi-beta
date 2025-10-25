
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Mail, MessageSquare, Globe, Brain } from "lucide-react";

interface MemoryNode {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  position: { x: number; y: number };
  mobilePosition: { x: number; y: number };
  data: string[];
}

const memoryNodes: MemoryNode[] = [
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
    position: { x: 50, y: 20 },
    mobilePosition: { x: 50, y: 25 },
    data: ["Sarah meeting 3pm", "Investor call 5pm", "Emma's soccer 4pm"]
  },
  {
    id: "mail",
    icon: Mail,
    label: "Mails",
    position: { x: 80, y: 50 },
    mobilePosition: { x: 75, y: 50 },
    data: ["Acme Corp follow-up", "School science fair", "Dentist confirmation"]
  },
  {
    id: "conversations",
    icon: MessageSquare,
    label: "Conversations",
    position: { x: 50, y: 80 },
    mobilePosition: { x: 50, y: 75 },
    data: ["Tahoe trip planning", "Emma's project help", "Client pricing talk"]
  },
  {
    id: "internet",
    icon: Globe,
    label: "Internet",
    position: { x: 20, y: 50 },
    mobilePosition: { x: 25, y: 50 },
    data: ["Steve's LinkedIn", "Tahoe weather", "SF pizza reviews"]
  }
];

export const NeuralMemoryEngine = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light mb-6 text-white">
            Asmi Memory Engine
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Every mail, meeting, and conversation connects in real-time
          </p>

          {/* Neural Network Visualization - Responsive */}
          <div className="relative h-80 md:h-96 bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-3xl border border-white/10 overflow-hidden backdrop-blur-xl mx-auto max-w-4xl">
            {/* Data Points Animation */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#5DFF9F]/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}

            {/* Central Brain */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(93, 255, 159, 0.4)",
                  "0 0 0 20px rgba(93, 255, 159, 0)",
                  "0 0 0 0 rgba(93, 255, 159, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5DFF9F] rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </div>
            </motion.div>

            {/* Memory Nodes - Responsive positioning */}
            {memoryNodes.map((node, index) => {
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              const position = isMobile ? node.mobilePosition : node.position;
              
              return (
                <motion.div
                  key={node.id}
                  className="absolute cursor-pointer z-20"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  onTap={() => setActiveNode(activeNode === node.id ? null : node.id)}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center relative backdrop-blur-sm border border-white/20">
                      <node.icon className="w-4 h-4 md:w-5 md:h-5 text-[#5DFF9F]" />
                      {activeNode === node.id && (
                        <motion.div
                          className="absolute inset-0 bg-[#5DFF9F]/20 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </div>
                    <span className="text-xs text-gray-300 font-medium whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>

                  {/* Data Popup - Better positioned and sized for mobile */}
                  {activeNode === node.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="absolute top-full mt-2 z-30"
                      style={{
                        left: position.x > 75 ? 'auto' : '50%',
                        right: position.x > 75 ? '0' : 'auto',
                        transform: position.x > 75 ? 'translateX(0)' : 'translateX(-50%)'
                      }}
                    >
                      <Card className="bg-black/90 border-[#5DFF9F]/30 p-3 backdrop-blur-xl w-48 md:w-56">
                        <div className="space-y-1">
                          {node.data.map((item, i) => (
                            <motion.p
                              key={i}
                              className="text-xs text-white break-words"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              • {item}
                            </motion.p>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Processing Lines - Reduced for mobile */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#5DFF9F]/30 to-transparent"
                style={{
                  width: `${20 + Math.random() * 30}%`,
                  left: `${Math.random() * 70}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scaleX: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-4">Tap nodes to see what Asmi learns</p>
        </motion.div>
      </div>
    </div>
  );
};
