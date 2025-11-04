import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Rishi Raj Rathore",
    title: "Co-founder & CEO",
    linkedin: "https://www.linkedin.com/in/rishi-r-37705a3a/",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Satwik Kottur",
    title: "Co-founder & CTO",
    linkedin: "https://satwikkottur.github.io/",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Sibi Venkatesan",
    title: "Senior Scientist",
    linkedin: "https://www.linkedin.com/in/sibi-venkatesan/",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Vishisht Dhawan",
    title: "Growth Lead",
    linkedin: "https://www.linkedin.com/in/vishishtdhawan/",
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
            Behind The Scenes
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            The team building your AI Chief of Staff
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-3xl p-6 h-full flex flex-col items-center text-center overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.color}`} />
                
                <div className="mt-6 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.title}
                  </p>
                </div>

                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
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
              "The rare combination of deep AI foundation and sharpest customer understanding"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};