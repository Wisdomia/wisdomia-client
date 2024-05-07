'use client'
import React from 'react';
import About from "@/components/sections/about/About";
import Benefits from "@/components/sections/benefits/Benefits";
import Footer from "@/components/sections/footer/Footer";
import Roadmap from "@/components/sections/roadmap/Roadmap";
import Tokenomics from "@/components/sections/tokenomics/Tokenomics";
import Welcome from "@/components/welcome/Welcome";
import { ScrollProvider, useScroll } from "./context"; 
import TokenContract from '@/components/sections/token-contract/TokenContract';

export const runtime = "edge"

const Sections = () => {
  const { welcomeRef, aboutRef, tokenomicsRef, benefitsRef, roadmapRef } = useScroll();

  return (
    <>
      <Welcome innerRef={welcomeRef} />
      <About innerRef={aboutRef} />
      <Tokenomics innerRef={tokenomicsRef} />
      <Benefits innerRef={benefitsRef} />
      <Roadmap innerRef={roadmapRef} />
      <TokenContract/>
      <Footer />
    </>
  );
};

export default function Home() {
  return (
    <div className="home">
      <ScrollProvider>
        <Sections />
      </ScrollProvider>
    </div>
  );
}
