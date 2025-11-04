import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Rishi Raj Rathore",
    title: "Co-founder & CEO",
    linkedin: "https://www.linkedin.com/in/rishi-r-37705a3a/",
    credentials: [
      "Built & exited $400M company (Arzooo)",
      "Forbes 30 Under 30 Asia",
      "Started Quick Commerce at Flipkart (Walmart)"
    ]
  },
  {
    name: "Satwik Kottur",
    title: "Co-founder & CTO",
    linkedin: "https://satwikkottur.github.io/",
    credentials: [
      "AI Scientist at Meta & DeepMind",
      "PhD from Carnegie Mellon (Top AI thesis)",
      "40+ research papers, 8K+ citations"
    ]
  },
  {
    name: "Sibi Venkatesan",
    title: "Senior Scientist",
    credentials: [
      "AI Scientist at Amazon",
      "PhD from Carnegie Mellon"
    ]
  },
  {
    name: "Vishisht Dhawan",
    title: "Growth Lead",
    credentials: [
      "Scaled Classplus to 100M users",
      "Consumer product expert"
    ]
  }
];

export const TeamGrid = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-medium text-center mb-20 text-foreground"
        >
          One of The Most Cracked Teams in Consumer AI
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.title}
                  </p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
              </div>
              <ul className="space-y-2">
                {member.credentials.map((credential, i) => (
                  <li key={i} className="text-muted-foreground flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20"
        >
          <p className="text-xl text-foreground/80 italic">
            "Rishi and Satwik have been friends for 12 years and finally decided to build the next consumer revolution together."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
