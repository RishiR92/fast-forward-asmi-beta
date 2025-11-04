import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const WaitlistBanner = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll reach out soon with early access.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-primary/10">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light mb-4">
          Ready to Move Fast?
        </h2>
        <p className="text-muted-foreground mb-8">
          Join the waitlist. Be among the first to experience Asmi.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 bg-background border-border"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
    </section>
  );
};
