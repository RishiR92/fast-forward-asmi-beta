import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Asmi remembers everything. It's like having a second brain that actually works.",
    name: "Sarah Chen",
    role: "Product Manager",
    initials: "SC"
  },
  {
    quote: "I never miss a meeting prep anymore. Asmi just handles it.",
    name: "Michael Torres",
    role: "Sales Director",
    initials: "MT"
  },
  {
    quote: "Managing my kids' schedules used to be chaos. Now it's seamless.",
    name: "Priya Sharma",
    role: "Parent & Entrepreneur",
    initials: "PS"
  },
  {
    quote: "The voice interface is incredible. I just talk and things get done.",
    name: "David Kim",
    role: "Startup Founder",
    initials: "DK"
  },
  {
    quote: "Finally, an AI that doesn't need me to learn a new tool.",
    name: "Emma Wilson",
    role: "Consultant",
    initials: "EW"
  },
  {
    quote: "Asmi handles my travel planning better than I ever could.",
    name: "Alex Rodriguez",
    role: "Frequent Traveler",
    initials: "AR"
  }
];

export const MinimalTestimonials = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-16">
          Early Users Love Asmi
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-xl bg-background hover:shadow-md transition-shadow"
            >
              <p className="text-foreground/80 italic font-serif mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 bg-primary/20">
                  <AvatarFallback className="text-primary font-medium">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
