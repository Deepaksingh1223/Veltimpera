"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
  const ctaCanvasRef = useRef(null);

  // Canvas Animation for floating orbs
  useEffect(() => {
    const canvas = ctaCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    let orbs = [];
    let rafId;

    class Orb {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.28;
        this.vy = (Math.random() - 0.5) * 0.28;
        this.r = Math.random() * 2.8 + 0.8;
        this.a = Math.random() * 0.28 + 0.08;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
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
      orbs = [];
      for (let i = 0; i < 55; i++) orbs.push(new Orb());
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      orbs.forEach((o) => {
        o.update();
        o.draw();
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
    <section className="cta-sec relative py-[110px] px-4 sm:px-6 lg:px-10 text-center overflow-hidden bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(13,107,63,0.2),transparent),#050a06] max-sm:py-[60px]">
      {/* Canvas Background */}
      <canvas ref={ctaCanvasRef} id="ctaCanvas" className="absolute inset-0 pointer-events-none z-0 w-full h-full"></canvas>
      
      {/* Content */}
      <div className="relative z-[1]">
        <h2 className="font-['Space_Grotesk',sans-serif] text-[clamp(34px,5vw,62px)] font-bold leading-[1.1] tracking-[-0.025em] max-w-[720px] mx-auto mb-5">
          Power Your Growth With<br />
          <span className="gradient-text bg-gradient-to-r from-[#22c97a] via-[#39ff98] to-[#7affcb] bg-clip-text text-transparent">
            Real Community Engagement
          </span>
        </h2>
        
        <p className="text-[17px] text-[#b8c4bc] max-w-[480px] mx-auto mb-[42px]">
          Join the next generation ecosystem where businesses and communities grow together.
        </p>
        
        <div className="cta-btns flex flex-col sm:flex-row gap-3.5 justify-center">
          <button className="btn-cp py-[17px] px-10 bg-gradient-to-br from-[#16a05e] to-[#22c97a] text-[#050a06] text-[15px] font-extrabold rounded-[13px] cursor-pointer font-['Inter',sans-serif] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(34,201,122,0.45)]">
            🚀 Start Campaign
          </button>
          <button className="btn-cg py-[17px] px-10 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] text-white text-[15px] font-semibold rounded-[13px] cursor-pointer font-['Inter',sans-serif] transition-all duration-200 backdrop-blur-[8px] hover:bg-[rgba(255,255,255,0.08)] hover:-translate-y-0.5">
            Join Community →
          </button>
        </div>
        
        {/* Footer Links */}
        <div className="flex justify-center gap-8 flex-wrap mt-12 relative z-[1]">
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#6b7d72]">Engage</span>
          <span className="text-[rgba(34,201,122,0.3)]">·</span>
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#6b7d72]">Grow</span>
          <span className="text-[rgba(34,201,122,0.3)]">·</span>
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#6b7d72]">Earn</span>
          <span className="text-[rgba(34,201,122,0.3)]">·</span>
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#6b7d72]">Empower</span>
        </div>
      </div>
    </section>
  );
}