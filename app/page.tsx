import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import CreativeExecution from "@/components/CreativeExecution";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import CreativeIntelligence from "@/components/CreativeIntelligence";
import Process from "@/components/Process";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#F5F3EE] text-[#111111]">
      <CustomCursor />
      <Header />
      <Hero />
      <Portfolio />
      <CreativeIntelligence />
      <Benefits />
      <Process />
      <About />
      <CreativeExecution />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
