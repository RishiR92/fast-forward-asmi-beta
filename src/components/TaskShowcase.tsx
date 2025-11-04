import { CheckCircle } from "lucide-react";

const simpleTasks = [
  "Plan my gym sessions this week",
  "Prep me for key meetings",
  "Alert me on Paris flight price drops",
  "Send daily hiring updates at 7 PM",
  "Draft replies to important emails"
];

const complexTasks = [
  {
    title: "Manage my kid's school",
    details: "Science projects, schedules, carpools, supplies"
  },
  {
    title: "Organize my Paris trip",
    details: "Flights tracked, hotels researched, packing lists, activities planned"
  }
];

export const TaskShowcase = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-16">
          From Gym Sessions to Family Management
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Simple Tasks */}
          <div>
            <h3 className="text-2xl font-medium mb-6 text-foreground">Simple Tasks</h3>
            <div className="space-y-4">
              {simpleTasks.map((task) => (
                <div key={task} className="flex items-start gap-3 p-4 rounded-lg bg-background hover:bg-primary/5 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complex Tasks */}
          <div>
            <h3 className="text-2xl font-medium mb-6 text-foreground">Complex Tasks</h3>
            <div className="space-y-4">
              {complexTasks.map((task) => (
                <div key={task.title} className="p-6 rounded-lg bg-background hover:scale-[1.02] transition-transform">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-medium text-foreground">{task.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-8">{task.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
