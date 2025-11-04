import { HeroSection } from "@/components/HeroSection";
import { ProblemStatement } from "@/components/ProblemStatement";
import { VoiceInteractionDemo } from "@/components/VoiceInteractionDemo";
import { OutcomesGrid } from "@/components/OutcomesGrid";
import { TeamGrid } from "@/components/TeamGrid";
import { WaitlistBanner } from "@/components/WaitlistBanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemStatement />
      <VoiceInteractionDemo />
      <OutcomesGrid />
      <div id="team">
        <TeamGrid />
      </div>
      <WaitlistBanner />
      <Footer />
    </div>
  );
};

export default Index;
