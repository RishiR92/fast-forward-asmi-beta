
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Mail, Mic, Globe, Brain } from "lucide-react";

interface MemoryNode {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  position: { x: number; y: number };
  data: string[];
}

const memoryNodes: MemoryNode[] = [
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
    position: { x: 50, y: 20 },
    data: ["Meeting with Sarah @ 3pm", "Investor call @ 5pm", "Team standup @ 9am"]
  },
  {
    id: "mail",
    icon: Mail,
    label: "Mails",
    position: { x: 80, y: 50 },
    data: ["Follow-up from John", "Q4 report due", "Partnership proposal"]
  },
  {
    id: "voice",
    icon: Mic,
    label: "Voice Notes",
    position: { x: 50, y: 80 },
    data: ["Remember to call mom", "Book flight to NYC", "Review pitch deck"]
  },
  {
    id: "internet",
    icon: Globe,
    label: "Internet",
    position: { x: 20, y: 50 },
    data: ["Sarah's LinkedIn updated", "Company news alert", "Market trends"]
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
            Every mail, meeting, and voice note connects in real-time
          </p>

          {/* Neural Network Visualization */}
          <div className="relative h-96 bg-white/[0.02] rounded-3xl border border-white/10 overflow-hidden">
            {/* Data Points Animation */}
            {Array.from({ length: 30 }).map((_, i) => (
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
              <div className="w-16 h-16 bg-[#5DFF9F] rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-black" />
              </div>
            </motion.div>

            {/* Memory Nodes */}
            {memoryNodes.map((node, index) => (
              <motion.div
                key={node.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                onTap={() => setActiveNode(activeNode === node.id ? null : node.id)}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center relative">
                    <node.icon className="w-5 h-5 text-[#5DFF9F]" />
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

                {/* Connection Line to Center */}
                <motion.div
                  className="absolute w-0.5 bg-gradient-to-r from-[#5DFF9F] to-transparent origin-center"
                  style={{
                    height: `${Math.sqrt(
                      Math.pow(50 - node.position.x, 2) + Math.pow(50 - node.position.y, 2)
                    )}px`,
                    transform: `rotate(${Math.atan2(
                      50 - node.position.y,
                      50 - node.position.x
                    )}rad)`,
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 50%'
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                />

                {/* Data Popup */}
                {activeNode === node.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <Card className="bg-black/90 border-[#5DFF9F]/30 p-3 min-w-48">
                      <div className="space-y-1">
                        {node.data.map((item, i) => (
                          <motion.p
                            key={i}
                            className="text-xs text-white"
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
            ))}

            {/* Processing Lines */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#5DFF9F]/30 to-transparent"
                style={{
                  width: `${30 + Math.random() * 40}%`,
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
