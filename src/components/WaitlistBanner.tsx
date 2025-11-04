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
        description: "Experience Asmi before everyone else.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-primary to-primary-light">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-white">
          Ready to Enter the Future?
        </h2>
        <p className="text-white/90 text-lg mb-12">
          Join the waitlist. Experience Asmi before everyone else.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-14 bg-white border-white text-foreground text-lg"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="h-14 px-10 text-lg bg-accent hover:bg-accent/90 text-white font-semibold"
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
    </section>
  );
};
