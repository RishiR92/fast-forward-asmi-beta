import { Brain, Sparkles, CheckCircle } from "lucide-react";

const outcomes = [
  {
    icon: Brain,
    title: "Learns Your Patterns",
    description: "Asmi integrates hierarchical context and memory across your calendar, email, and conversations - understanding what matters most."
  },
  {
    icon: Sparkles,
    title: "Deploys AI Minions",
    description: "Swarms of AI agents communicate, delegate, and execute together - optimizing for speed, cost, and accuracy."
  },
  {
    icon: CheckCircle,
    title: "Delivers Outcomes",
    description: "From gym sessions to trip planning to hiring updates - Asmi shifts into high-agency mode and gets it done."
  }
];

export const OutcomesGrid = () => {
  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-16">
          People don't want more tools. They want outcomes.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {outcomes.map((outcome) => (
            <div key={outcome.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <outcome.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">
                {outcome.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
