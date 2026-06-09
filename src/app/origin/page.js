"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Stats from "./Stats";
import Problem from "./Problem";
import Solution from "./Solution";
import HowItWorks from "./HowItWorks";
import Tasks from "./Tasks";
import Businesses from "./Businesses";
import Community from "./Community";
import Token from "./Token";
import Flywheel from "./Flywheel";
import WinWin from "./WinWin";
import CTA from "./CTA";

export default function Origin() {
  const [isLoading, setIsLoading] = useState(true);

  // Inject CSS and Fonts dynamically on component mount
  useEffect(() => {
    // Check if CSS is already added
    if (!document.querySelector('link[href="/home.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/home.css";
      document.head.appendChild(link);
    }

    // Check if Google Fonts is already added
    if (!document.querySelector('link[href*="fonts.googleapis.com/css2"]')) {
      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap";
      document.head.appendChild(fontLink);
    }

    // Add preconnect for Google Fonts
    if (!document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = "https://fonts.googleapis.com";
      document.head.appendChild(preconnect);
    }

    if (!document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]')) {
      const preconnectGstatic = document.createElement("link");
      preconnectGstatic.rel = "preconnect";
      preconnectGstatic.href = "https://fonts.gstatic.com";
      preconnectGstatic.crossOrigin = "anonymous";
      document.head.appendChild(preconnectGstatic);
    }

    // 5 second loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for animations (only when loading is complete)
  useEffect(() => {
    if (isLoading) return;

    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isLoading]);

  // Simple Loading Screen - Perfectly Centered
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#050a06] flex items-center justify-center z-[9999]">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white mb-3">
            VELT <span className="text-[#22c97a]">IMPERA</span>
          </h1>
          <p className="text-[#22c97a] text-[11px] sm:text-xs tracking-wider animate-pulse">
            LOADING ECOSYSTEM...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050a06] text-white font-['Inter',sans-serif] overflow-x-hidden antialiased">
      <Header />

      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <HowItWorks />
        <Tasks />
        <Businesses />
        <Community />
        <Token />
        <Flywheel />
        <WinWin />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}