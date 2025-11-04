import { useState, useEffect } from "react";
import { Mic } from "lucide-react";

interface DemoMessage {
  voiceInput: string;
  result: string;
}

const demos: DemoMessage[] = [
  {
    voiceInput: "Emma's science project due Friday, soccer conflicts with piano",
    result: "✅ Timeline created • Piano rescheduled • Supply list ready"
  },
  {
    voiceInput: "Brief me on the 2pm Acme call",
    result: "📊 Steve Johnson VP Sales • Key concerns ready • ROI deck prepped"
  },
  {
    voiceInput: "Plan Tahoe trip next month",
    result: "✈️ Flights tracked • Hotels researched • Packing list ready"
  },
  {
    voiceInput: "Handle my evening tasks",
    result: "✅ Pat replied • Dinner confirmed • Reports prepped"
  }
];

type DemoState = 'listening' | 'input' | 'processing' | 'result' | 'fadeOut';

export const VoiceInteractionDemo = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [state, setState] = useState<DemoState>('listening');
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const demo = demos[currentDemo];
    let timer: NodeJS.Timeout;

    switch (state) {
      case 'listening':
        setDisplayText('');
        timer = setTimeout(() => setState('input'), 500);
        break;
      case 'input':
        setDisplayText(demo.voiceInput);
        timer = setTimeout(() => setState('processing'), 1000);
        break;
      case 'processing':
        timer = setTimeout(() => setState('result'), 500);
        break;
      case 'result':
        setDisplayText(demo.result);
        timer = setTimeout(() => setState('fadeOut'), 1500);
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
    <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-light mb-4 text-foreground">
          Just talk. Asmi handles the rest.
        </h2>
        <p className="text-lg text-muted-foreground">
          Voice-first. Always on. Instant execution.
        </p>
      </div>

      {/* iPhone mockup */}
      <div className="relative max-w-sm mx-auto iphone-float">
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
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mic className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}

              {state === 'listening' && (
                <div className="flex gap-1 items-end justify-center h-8 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="waveform-bar w-1 bg-primary rounded-full"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Message display */}
              {displayText && (
                <div className={`transition-opacity duration-500 ${state === 'fadeOut' ? 'opacity-0' : 'opacity-100'}`}>
                  <div className={`rounded-2xl p-4 ${state === 'input' ? 'bg-primary/10 text-foreground' : 'bg-primary text-primary-foreground'} max-w-xs`}>
                    <p className="text-sm leading-relaxed">{displayText}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 justify-center mt-6">
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
