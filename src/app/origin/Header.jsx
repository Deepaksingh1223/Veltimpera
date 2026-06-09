"use client";

import { useEffect } from "react";
export default function Header() {
  // Nav Scroll Effect
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    const handleScroll = () => {
      if (nav) {
        nav.style.background =
          window.scrollY > 80 ? "rgba(5, 10, 6, 0.97)" : "rgba(5, 10, 6, 0.85)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Powered Bar */}
      <div className="pbar text-center py-2.5 px-3 bg-[rgba(13,107,63,0.1)] border-b border-[rgba(34,201,122,0.1)] text-[11px] sm:text-xs text-[#6b7d72] tracking-[0.04em]">
        Powered by <span className="text-[#22c97a] font-semibold">Veltrixa</span>{" "}
        &nbsp;·&nbsp; Community-Powered Digital Growth Ecosystem
      </div>

      {/* Navigation */}
      <nav
        id="mainNav"
        className="fixed top-0 left-0 right-0 z-[100] py-4 sm:py-[18px] px-4 sm:px-6 lg:px-10 flex items-center justify-between backdrop-blur-[20px] bg-[rgba(5,10,6,0.85)] border-b border-[rgba(34,201,122,0.08)] transition-all duration-300"
      >
        {/* Logo */}
        <a href="/" className="nav-logo flex items-center gap-2 sm:gap-3 no-underline flex-shrink-0 home-logo">
          <img src="/logo.png" />
        </a>

        {/* Navigation Links - Desktop */}
        <ul className="nav-links hidden md:flex gap-5 lg:gap-7 list-none">
          <li>
            <a
              href="#solution"
              className="text-[#b8c4bc] no-underline text-[12px] lg:text-[13px] font-medium transition-colors duration-200 hover:text-[#22c97a]"
            >
              Solution
            </a>
          </li>
          <li>
            <a
              href="#howitworks"
              className="text-[#b8c4bc] no-underline text-[12px] lg:text-[13px] font-medium transition-colors duration-200 hover:text-[#22c97a]"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#tasks"
              className="text-[#b8c4bc] no-underline text-[12px] lg:text-[13px] font-medium transition-colors duration-200 hover:text-[#22c97a]"
            >
              Tasks
            </a>
          </li>
          <li>
            <a
              href="#token"
              className="text-[#b8c4bc] no-underline text-[12px] lg:text-[13px] font-medium transition-colors duration-200 hover:text-[#22c97a]"
            >
              VELT Token
            </a>
          </li>
          <li>
            <a
              href="#community"
              className="text-[#b8c4bc] no-underline text-[12px] lg:text-[13px] font-medium transition-colors duration-200 hover:text-[#22c97a]"
            >
              Community
            </a>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="nav-cta flex gap-2 sm:gap-2.5">
          <button className="btn-ghost hidden sm:block py-1.5 sm:py-2 px-3 sm:px-[18px] border border-[rgba(34,201,122,0.3)] bg-transparent text-[#22c97a] text-[11px] sm:text-[13px] font-semibold rounded-lg cursor-pointer font-['Inter',sans-serif] transition-all duration-200 hover:bg-[rgba(34,201,122,0.08)] whitespace-nowrap">
            Explore Ecosystem
          </button>
          <button className="btn-primary py-1.5 sm:py-2 px-3 sm:px-5 bg-gradient-to-br from-[#16a05e] to-[#22c97a] text-[#050a06] text-[11px] sm:text-[13px] font-bold rounded-lg cursor-pointer font-['Inter',sans-serif] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(34,201,122,0.35)] whitespace-nowrap">
            Launch Campaign →
          </button>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-[70px] sm:h-[85px]"></div>
    </>
  );
}