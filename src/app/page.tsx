"use client";

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectorsSection from "@/components/SectorsSection";
import MethodologySection from "@/components/MethodologySection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import AnimationsManager from "@/components/AnimationsManager";
import { AnalyticsScripts } from "@/components/Analytics";

export default function Home() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scroll
    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      } as any);

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
  }, []);

  return (
    <>
      <AnalyticsScripts />
      <div className="grid-bg"></div>
      <div ref={canvasRef} id="canvas-container"></div>
      
      <Navigation />
      <main id="main-content" role="main">
        <ThreeBackground canvasRef={canvasRef} />
        <HeroSection />
        <SectorsSection />
        <MethodologySection />
        <ResourcesSection />
        <Footer />
      </main>
      
      <AnimationsManager />
    </>
  );
}
