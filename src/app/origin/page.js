"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

    // Loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  // Modern Loader with Image + Animation
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#050a06] via-[#0a1210] to-[#050a06] flex items-center justify-center z-[9999]">
        <div className="text-center">
          <Image
            src="/fav.png"
            alt="Loading"
            width={50}
            height={50}
            style={{ objectFit: 'contain', width:"50px" , hieght:"50px", margin:"20% auto"}}
          />
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