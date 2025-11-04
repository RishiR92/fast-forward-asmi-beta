import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const [showSubheadline, setShowSubheadline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubheadline(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="shimmer-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8">
          Asmi: The AI That Gets Things Done for You
        </h1>
        
        {showSubheadline && (
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-light fade-in">
            Part Psychic. Part Chief of Staff. One conversation.
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};
