"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = heroCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    let pts = [];
    let rafId;

    class Pt {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.32;
        this.vy = (Math.random() - 0.5) * 0.32;
        this.r = Math.random() * 1.6 + 0.4;
        this.a = Math.random() * 0.55 + 0.18;
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.32;
        this.vy = (Math.random() - 0.5) * 0.32;
        this.r = Math.random() * 1.6 + 0.4;
        this.a = Math.random() * 0.55 + 0.18;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 152, ${this.a})`;
        ctx.fill();
      }
    }

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function init() {
      resize();
      pts = [];
      const n = Math.floor((W * H) / 7000);
      for (let i = 0; i < n; i++) pts.push(new Pt());
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W * 0.5, -H * 0.05, 0, W * 0.5, -H * 0.05, H * 0.75);
      g.addColorStop(0, "rgba(13, 107, 63, 0.32)");
      g.addColorStop(0.45, "rgba(13, 107, 63, 0.09)");
      g.addColorStop(1, "rgba(5, 10, 6, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      const g2 = ctx.createRadialGradient(W * 0.18, H * 0.85, 0, W * 0.18, H * 0.85, H * 0.5);
      g2.addColorStop(0, "rgba(22, 160, 94, 0.1)");
      g2.addColorStop(1, "rgba(5, 10, 6, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(34, 201, 122, ${(1 - d / 115) * 0.16})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        p.update();
        p.draw();
      });
      rafId = requestAnimationFrame(frame);
    }

    const handleResize = () => {
      cancelAnimationFrame(rafId);
      init();
      frame();
    };
    window.addEventListener("resize", handleResize);
    init();
    frame();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero min-h-screen flex flex-col items-center justify-center text-center pt-[120px] pb-20 px-4 md:px-6 lg:px-10 relative overflow-hidden max-sm:pt-[90px] max-sm:pb-[55px]">
      <canvas ref={heroCanvasRef} id="heroCanvas" className="absolute inset-0 pointer-events-none z-0 w-full h-full"></canvas>

      <div className="hero-content relative z-[2] w-full max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 py-1.5 px-4 bg-[rgba(13,107,63,0.2)] border-[rgba(34,201,122,0.25)] rounded-full text-[11px] sm:text-xs font-semibold text-[#22c97a] tracking-[0.08em] uppercase mb-6 sm:mb-7">
          <span className="badge-dot w-1.5 h-1.5 bg-[#39ff98] rounded-full animate-pulse"></span>
          ORGANIC GROWTH · COMMUNITY POWERED · WEB3 ENABLED
        </div>

        {/* Heading */}
        <h1 className="font-['Space_Grotesk',sans-serif] text-[clamp(36px,6vw,80px)] font-bold leading-[1.05] tracking-[-0.025em] max-w-[900px] mx-auto mb-4 sm:mb-5">
          100% Organic Growth
          <br />
          <span className="gradient-text bg-gradient-to-r from-[#22c97a] via-[#39ff98] to-[#7affcb] bg-clip-text text-transparent">
            Powered By Real People
          </span>
        </h1>

        {/* Description */}
        <p className="hero-sub max-w-[650px] text-[15px] sm:text-[17px] text-[#b8c4bc] leading-[1.7] sm:leading-[1.75] mx-auto mb-6 sm:mb-8 px-2">
          Velt Impera connects businesses with a global community workforce that
          completes real engagement tasks across social media, content platforms,
          reviews and digital channels — helping brands gain authentic visibility,
          trust and growth.
        </p>

        {/* Buttons */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3.5 justify-center mb-12 sm:mb-16">
          <button className="btn-hp py-[14px] sm:py-[15px] px-[30px] sm:px-[34px] bg-gradient-to-br from-[#16a05e] to-[#22c97a] text-[#050a06] text-[14px] sm:text-[15px] font-bold rounded-xl cursor-pointer font-['Inter',sans-serif] transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(34,201,122,0.4)]">
            🚀 Launch Campaign
          </button>
          <button className="btn-hg py-[14px] sm:py-[15px] px-[30px] sm:px-[34px] bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.12)] text-white text-[14px] sm:text-[15px] font-semibold rounded-xl cursor-pointer font-['Inter',sans-serif] transition-all duration-200 backdrop-blur-[8px] hover:bg-[rgba(255,255,255,0.08)] hover:-translate-y-0.5">
            Explore Ecosystem →
          </button>
        </div>

    
        {/* Chips */}
        <div className="chips flex gap-1.5 sm:gap-2 flex-wrap justify-center mt-4 mb-8 px-2">
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            👁️ Views
          </div>
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            ❤️ Likes
          </div>
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            🔁 Shares
          </div>
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            💬 Comments
          </div>
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            ⭐ Reviews
          </div>
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            🔔 Subscriptions
          </div>
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            🤖 AI Visibility
          </div>
          <div className="chip py-1 px-2 sm:px-3 bg-[rgba(34,201,122,0.08)] border-[rgba(34,201,122,0.2)] rounded-full text-[10px] sm:text-[11px] font-semibold text-[#22c97a] flex items-center gap-1">
            🔍 Search Signals
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-ind absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-[2]">
        <div className="s-mouse w-[21px] h-[33px] border-2 border-[rgba(34,201,122,0.3)] rounded-[10px] flex justify-center pt-1">
          <div className="s-wheel w-0.5 h-1.5 bg-[#22c97a] rounded-[2px] animate-[sw_1.5s_ease_infinite]"></div>
        </div>
        <span className="s-txt text-[10px] tracking-[0.1em] uppercase text-[#6b7d72]">
          SCROLL TO EXPLORE
        </span>
      </div>
    </section>
  );
}