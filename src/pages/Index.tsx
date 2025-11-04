import { HeroSection } from "@/components/HeroSection";
import { VoiceInteractionDemo } from "@/components/VoiceInteractionDemo";
import { OutcomesGrid } from "@/components/OutcomesGrid";
import { ProblemStatement } from "@/components/ProblemStatement";
import { TaskShowcase } from "@/components/TaskShowcase";
import { TeamGrid } from "@/components/TeamGrid";
import { VisionStatement } from "@/components/VisionStatement";
import { MinimalTestimonials } from "@/components/MinimalTestimonials";
import { WaitlistBanner } from "@/components/WaitlistBanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VoiceInteractionDemo />
      <OutcomesGrid />
      <ProblemStatement />
      <TaskShowcase />
      <div id="team">
        <TeamGrid />
      </div>
      <div id="vision">
        <VisionStatement />
      </div>
      <MinimalTestimonials />
      <WaitlistBanner />
      <Footer />
    </div>
  );
};

export default Index;
