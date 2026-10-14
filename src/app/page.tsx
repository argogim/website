import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { CapsuleExplorer } from "@/components/CapsuleExplorer";
import { CapsuleFilm } from "@/components/CapsuleFilm";
import { Comparison } from "@/components/Comparison";
import { Routine } from "@/components/Routine";
import { JourneySimulation } from "@/components/JourneySimulation";
import { Milestones } from "@/components/Milestones";
import { Versions } from "@/components/Versions";
import { Waitlist } from "@/components/Waitlist";
import { ProjectDivider } from "@/components/ProjectDivider";
import { WhySection } from "@/components/WhySection";
import { Roadmap } from "@/components/Roadmap";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Statement />
        <CapsuleExplorer />
        <CapsuleFilm />
        <Comparison />
        <Routine />
        <JourneySimulation />
        <Milestones />
        <Versions />
        <Waitlist />
        <ProjectDivider />
        <WhySection />
        <Roadmap />
        <TeamSection />
        <ContactSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
