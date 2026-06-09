"use client";

import { useEffect } from "react";

export default function Stats() {
  // Animated Counter Functionality
  useEffect(() => {
    const fmt = (n, t) => {
      if (t >= 1e6) return (n / 1e6).toFixed(1) + "M+";
      if (t >= 1e3) return (n / 1e3).toFixed(0) + "K+";
      return n + "+";
    };
    
    const sts = document.querySelectorAll(".stat-num[data-t]");
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            const tgt = parseInt(el.dataset.t || "0", 10);
            const dur = 2000;
            const s = performance.now();
            const run = (t) => {
              const p = Math.min((t - s) / dur, 1);
              const ease = 1 - Math.pow(1 - p, 3);
              el.textContent = fmt(Math.floor(ease * tgt), tgt);
              if (p < 1) requestAnimationFrame(run);
            };
            requestAnimationFrame(run);
            co.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    sts.forEach((el) => co.observe(el));
    return () => co.disconnect();
  }, []);

  return (
    <div className="stats-bar py-11 px-4 sm:px-6 lg:px-10 bg-[rgba(13,107,63,0.08)] border-t border-b border-[rgba(34,201,122,0.1)]">
      <div className="stats-grid max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7">
        
        {/* Stat 1 */}
        <div className="stat-item text-center">
          <div 
            className="stat-num font-['Space_Grotesk',sans-serif] text-[36px] sm:text-[44px] font-bold leading-none bg-gradient-to-r from-[#22c97a] to-[#39ff98] bg-clip-text text-transparent" 
            data-t="50000"
          >
            0
          </div>
          <div className="stat-lbl text-[11px] sm:text-xs text-[#6b7d72] mt-1.5 sm:mt-2">
            Active Community Members
          </div>
        </div>

        {/* Stat 2 */}
        <div className="stat-item text-center">
          <div 
            className="stat-num font-['Space_Grotesk',sans-serif] text-[36px] sm:text-[44px] font-bold leading-none bg-gradient-to-r from-[#22c97a] to-[#39ff98] bg-clip-text text-transparent" 
            data-t="2400"
          >
            0
          </div>
          <div className="stat-lbl text-[11px] sm:text-xs text-[#6b7d72] mt-1.5 sm:mt-2">
            Campaigns Completed
          </div>
        </div>

        {/* Stat 3 */}
        <div className="stat-item text-center">
          <div 
            className="stat-num font-['Space_Grotesk',sans-serif] text-[36px] sm:text-[44px] font-bold leading-none bg-gradient-to-r from-[#22c97a] to-[#39ff98] bg-clip-text text-transparent" 
            data-t="1200000"
          >
            0
          </div>
          <div className="stat-lbl text-[11px] sm:text-xs text-[#6b7d72] mt-1.5 sm:mt-2">
            Tasks Executed
          </div>
        </div>

        {/* Stat 4 */}
        <div className="stat-item text-center">
          <div 
            className="stat-num font-['Space_Grotesk',sans-serif] text-[36px] sm:text-[44px] font-bold leading-none bg-gradient-to-r from-[#22c97a] to-[#39ff98] bg-clip-text text-transparent" 
            data-t="800"
          >
            0
          </div>
          <div className="stat-lbl text-[11px] sm:text-xs text-[#6b7d72] mt-1.5 sm:mt-2">
            Brands Served
          </div>
        </div>

      </div>
    </div>
  );
}