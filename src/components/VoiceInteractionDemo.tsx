import { useState, useEffect } from "react";
import { Mic } from "lucide-react";

interface DemoMessage {
  voiceInput: string;
  results: string[];
}

const demos: DemoMessage[] = [
  {
    voiceInput: "Emma's science project is due Friday, and soccer conflicts with piano",
    results: [
      "✅ Created 3-day timeline for project",
      "✅ Rescheduled piano to Thursday 5pm",
      "✅ Supply list emailed: poster board, markers, clay",
      "✅ Carpool arranged with Sarah's mom"
    ]
  },
  {
    voiceInput: "Brief me on the 2pm Acme call",
    results: [
      "📊 Steve Johnson, VP Sales - Decision maker",
      "📋 Key concerns: ROI timeline, integration",
      "📁 Deck ready: Custom ROI projections loaded",
      "💡 Talking points prepped in your notes"
    ]
  },
  {
    voiceInput: "Plan my Tahoe trip next month",
    results: [
      "✈️ Tracking 3 flight options (alerts set)",
      "🏨 Top 5 hotels researched + links",
      "📝 Packing list for ski trip created",
      "🎿 Lift ticket deals found, calendar blocked"
    ]
  },
  {
    voiceInput: "Handle my evening tasks",
    results: [
      "✅ Replied to Pat re: Q4 strategy",
      "🍽️ Dinner confirmed at Osteria, 7:30pm",
      "📊 Q3 reports compiled in your inbox",
      "📅 Tomorrow prepped: 3 meetings briefed"
    ]
  }
];

type DemoState = 'listening' | 'input' | 'processing' | 'result' | 'fadeOut';

export const VoiceInteractionDemo = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [state, setState] = useState<DemoState>('listening');
  const [displayText, setDisplayText] = useState('');
  const [displayResults, setDisplayResults] = useState<string[]>([]);

  useEffect(() => {
    const demo = demos[currentDemo];
    let timer: NodeJS.Timeout;

    switch (state) {
      case 'listening':
        setDisplayText('');
        setDisplayResults([]);
        timer = setTimeout(() => setState('input'), 1000);
        break;
      case 'input':
        setDisplayText(demo.voiceInput);
        timer = setTimeout(() => setState('processing'), 2000);
        break;
      case 'processing':
        timer = setTimeout(() => setState('result'), 500);
        break;
      case 'result':
        setDisplayText('');
        setDisplayResults(demo.results);
        timer = setTimeout(() => setState('fadeOut'), 4000);
        break;
      case 'fadeOut':
        timer = setTimeout(() => {
          setCurrentDemo((prev) => (prev + 1) % demos.length);
          setState('listening');
        }, 500);
        break;
    }

    return () => clearTimeout(timer);
  }, [state, currentDemo]);

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-medium mb-6 text-foreground">
          Just Tell. Asmi Handles the Rest.
        </h2>
        <p className="text-xl text-muted-foreground">
          Voice-first. Always on. Instant execution.
        </p>
      </div>

      {/* iPhone mockup */}
      <div className="relative max-w-sm mx-auto" style={{ animation: 'iphone-float 6s ease-in-out infinite' }}>
        {/* iPhone frame */}
        <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
          {/* Screen */}
          <div className="bg-background rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {/* Status bar */}
            <div className="h-12 bg-background flex items-center justify-between px-8 pt-2">
              <span className="text-xs font-medium">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-3 border border-foreground rounded-sm" />
                <div className="w-1 h-3 bg-foreground rounded-sm" />
              </div>
            </div>

            {/* Content area */}
            <div className="h-full flex flex-col items-center justify-center p-6 pb-24">
              {/* Waveform or Mic */}
              {state === 'listening' && (
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                </div>
              )}

              {state === 'listening' && (
                <div className="flex gap-1.5 items-end justify-center h-12 mb-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="waveform-bar w-1.5 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* User input */}
              {displayText && state === 'input' && (
                <div className="transition-opacity duration-500 w-full">
                  <div className="rounded-2xl p-5 bg-secondary text-foreground max-w-xs mx-auto">
                    <p className="text-sm leading-relaxed">{displayText}</p>
                  </div>
                </div>
              )}

              {/* Processing */}
              {state === 'processing' && (
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-primary rounded-full"
                      style={{
                        animation: 'pulse-glow 1s ease-in-out infinite',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Results */}
              {displayResults.length > 0 && (
                <div className={`transition-opacity duration-500 w-full ${state === 'fadeOut' ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-primary to-primary-light text-white max-w-xs mx-auto space-y-3">
                    {displayResults.map((result, i) => (
                      <p key={i} className="text-sm leading-relaxed text-left">
                        {result}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 justify-center mt-8">
          {demos.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentDemo ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
