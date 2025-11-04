import { motion } from "framer-motion";
import { Linkedin, Award, GraduationCap, Sparkles, TrendingUp } from "lucide-react";

const teamMembers = [
  {
    name: "Rishi Raj Rathore",
    title: "Co-founder & CEO",
    linkedin: "https://www.linkedin.com/in/rishi-r-37705a3a/",
    highlights: [
      { icon: TrendingUp, text: "Built & exited $400M company (Arzooo)" },
      { icon: Award, text: "Forbes 30 Under 30 Asia" },
      { icon: Sparkles, text: "Started Quick Commerce at Flipkart (Walmart)" }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Satwik Kottur",
    title: "Co-founder & CTO",
    linkedin: "https://satwikkottur.github.io/",
    highlights: [
      { icon: Sparkles, text: "AI Scientist at Meta & DeepMind" },
      { icon: GraduationCap, text: "PhD from Carnegie Mellon (Top AI thesis)" },
      { icon: Award, text: "40+ research papers, 8K+ citations" }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Sibi Venkatesan",
    title: "Senior Scientist",
    highlights: [
      { icon: Sparkles, text: "AI Scientist at Amazon" },
      { icon: GraduationCap, text: "PhD from Carnegie Mellon" }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Vishisht Dhawan",
    title: "Growth Lead",
    highlights: [
      { icon: TrendingUp, text: "Scaled Classplus to 100M users" },
      { icon: Sparkles, text: "Consumer product expert" }
    ],
    color: "from-orange-500 to-red-500"
  },
];

export const TeamGrid = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-foreground">
            One of The Most Cracked Teams in Consumer AI
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Built products for millions. Now building the future of personal AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-3xl p-8 h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.color}`} />
                
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-base text-accent font-semibold">
                      {member.title}
                    </p>
                  </div>
                  {member.linkedin && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                  )}
                </div>

                <div className="space-y-4 flex-grow">
                  {member.highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${member.color} flex items-center justify-center shadow-md`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                          {highlight.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 px-4"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 sm:p-12 border border-primary/20">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-foreground leading-relaxed">
              "Rishi and Satwik have been friends for 12 years and finally decided to build the next consumer revolution together."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};