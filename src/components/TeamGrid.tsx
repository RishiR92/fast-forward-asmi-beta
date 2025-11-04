import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Rishi Raj Rathore",
    title: "Co-founder & CEO",
    linkedin: "https://www.linkedin.com/in/rishi-r-37705a3a/",
    bio: [
      "Second-time founder",
      "Scaled & exited Arzooo: $400M GMV",
      "Raised $75M, built India's largest vertical e-commerce",
      "Started Quick Commerce at Flipkart (Walmart)",
      "Forbes 30U30 Asia, #9 Hurun India U35"
    ],
    featured: true
  },
  {
    name: "Satwik Kottur",
    title: "Co-founder & CTO",
    linkedin: "https://satwikkottur.github.io/",
    bio: [
      "Top AI Agents & NLP scientist",
      "ex-Meta FAIR & DeepMind",
      "PhD CMU (best thesis in AI agents)",
      "40+ papers, 8K+ citations",
      "Worked on foundational models, Meta glasses, CAIR",
      "All India Rank-6 IIT, Bronze medal International Olympiad"
    ],
    featured: true
  },
  {
    name: "Sibi Venkatesan",
    title: "Senior Scientist",
    bio: [
      "AI scientist ex-Amazon",
      "CMU PhD + UC Berkeley",
      "Tech advisor to multiple startups"
    ],
    featured: false
  },
  {
    name: "Vishisht Dhawan",
    title: "GTM Head",
    bio: [
      "Consumer GTM expert",
      "Scaled Classplus to 100M users",
      "Worked with Granola & AI-native companies"
    ],
    featured: false
  }
];

export const TeamGrid = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-4">
          One of The Most Cracked Teams in Consumer AI
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`p-8 rounded-2xl bg-card hover:shadow-lg transition-all hover:-translate-y-1 ${
                member.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-medium text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Name & Title */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-medium text-foreground">{member.name}</h3>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-primary text-sm">{member.title}</p>
              </div>

              {/* Bio */}
              <ul className="space-y-2">
                {member.bio.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex">
                    <span className="mr-2 text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <p className="text-lg italic text-muted-foreground max-w-2xl mx-auto font-serif">
            "Rishi and Satwik have been friends for 12 years and finally decided to build the next consumer revolution together."
          </p>
        </div>
      </div>
    </section>
  );
};
