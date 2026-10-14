import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { CapsuleExplorer } from "@/components/CapsuleExplorer";
import { CapsuleFilm } from "@/components/CapsuleFilm";
import { Routine } from "@/components/Routine";
import { JourneySimulation } from "@/components/JourneySimulation";
import { Versions } from "@/components/Versions";
import { Faq } from "@/components/Faq";
import { Waitlist } from "@/components/Waitlist";
import { ProjectDivider } from "@/components/ProjectDivider";
import { WhySection } from "@/components/WhySection";
import { Roadmap } from "@/components/Roadmap";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
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
        <Routine />
        <JourneySimulation />
        <Versions />
        <Faq />
        <Waitlist />
        <ProjectDivider />
        <WhySection />
        <Roadmap />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
