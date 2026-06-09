"use client";

export default function HowItWorks() {
  return (
    <section style={{ background: "var(--bk2)" }} className="bg-[#0b120d] py-24 px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="howitworks">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a]">
          How It Works
        </div>
        
        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          Six Steps to Unstoppable<br />Organic Growth
        </h2>

        {/* Steps Grid */}
        <div className="steps-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-5 md:gap-3.5 mt-[52px]">
          
          <div className="step-item flex flex-col items-center text-center gap-3 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
            <div className="step-num w-[70px] h-[70px] sm:w-[74px] sm:h-[74px] rounded-full bg-[#162019] border-2 border-[rgba(34,201,122,0.25)] flex items-center justify-center text-2xl relative transition-all duration-300 hover:border-[#22c97a] hover:shadow-[0_0_20px_rgba(34,201,122,0.2)] hover:scale-105">
              <div className="absolute -top-[7px] -right-[7px] w-[19px] h-[19px] bg-[#16a05e] rounded-full text-[9px] font-extrabold text-[#050a06] flex items-center justify-center font-['Space_Grotesk',sans-serif]" data-n="1">1</div>
              🏢
            </div>
            <div className="step-lbl text-[11px] font-semibold text-[#b8c4bc] leading-[1.4]">Business Creates Campaign</div>
          </div>

          <div className="step-item flex flex-col items-center text-center gap-3 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.07s" }}>
            <div className="step-num w-[70px] h-[70px] sm:w-[74px] sm:h-[74px] rounded-full bg-[#162019] border-2 border-[rgba(34,201,122,0.25)] flex items-center justify-center text-2xl relative transition-all duration-300 hover:border-[#22c97a] hover:shadow-[0_0_20px_rgba(34,201,122,0.2)] hover:scale-105">
              <div className="absolute -top-[7px] -right-[7px] w-[19px] h-[19px] bg-[#16a05e] rounded-full text-[9px] font-extrabold text-[#050a06] flex items-center justify-center font-['Space_Grotesk',sans-serif]" data-n="2">2</div>
              📡
            </div>
            <div className="step-lbl text-[11px] font-semibold text-[#b8c4bc] leading-[1.4]">Tasks Are Distributed</div>
          </div>

          <div className="step-item flex flex-col items-center text-center gap-3 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.14s" }}>
            <div className="step-num w-[70px] h-[70px] sm:w-[74px] sm:h-[74px] rounded-full bg-[#162019] border-2 border-[rgba(34,201,122,0.25)] flex items-center justify-center text-2xl relative transition-all duration-300 hover:border-[#22c97a] hover:shadow-[0_0_20px_rgba(34,201,122,0.2)] hover:scale-105">
              <div className="absolute -top-[7px] -right-[7px] w-[19px] h-[19px] bg-[#16a05e] rounded-full text-[9px] font-extrabold text-[#050a06] flex items-center justify-center font-['Space_Grotesk',sans-serif]" data-n="3">3</div>
              👥
            </div>
            <div className="step-lbl text-[11px] font-semibold text-[#b8c4bc] leading-[1.4]">Community Performs Tasks</div>
          </div>

          <div className="step-item flex flex-col items-center text-center gap-3 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.21s" }}>
            <div className="step-num w-[70px] h-[70px] sm:w-[74px] sm:h-[74px] rounded-full bg-[#162019] border-2 border-[rgba(34,201,122,0.25)] flex items-center justify-center text-2xl relative transition-all duration-300 hover:border-[#22c97a] hover:shadow-[0_0_20px_rgba(34,201,122,0.2)] hover:scale-105">
              <div className="absolute -top-[7px] -right-[7px] w-[19px] h-[19px] bg-[#16a05e] rounded-full text-[9px] font-extrabold text-[#050a06] flex items-center justify-center font-['Space_Grotesk',sans-serif]" data-n="4">4</div>
              🎁
            </div>
            <div className="step-lbl text-[11px] font-semibold text-[#b8c4bc] leading-[1.4]">Points Are Rewarded</div>
          </div>

          <div className="step-item flex flex-col items-center text-center gap-3 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.28s" }}>
            <div className="step-num w-[70px] h-[70px] sm:w-[74px] sm:h-[74px] rounded-full bg-[#162019] border-2 border-[rgba(34,201,122,0.25)] flex items-center justify-center text-2xl relative transition-all duration-300 hover:border-[#22c97a] hover:shadow-[0_0_20px_rgba(34,201,122,0.2)] hover:scale-105">
              <div className="absolute -top-[7px] -right-[7px] w-[19px] h-[19px] bg-[#16a05e] rounded-full text-[9px] font-extrabold text-[#050a06] flex items-center justify-center font-['Space_Grotesk',sans-serif]" data-n="5">5</div>
              📈
            </div>
            <div className="step-lbl text-[11px] font-semibold text-[#b8c4bc] leading-[1.4]">Brand Gains Visibility</div>
          </div>

          <div className="step-item flex flex-col items-center text-center gap-3 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.35s" }}>
            <div className="step-num w-[70px] h-[70px] sm:w-[74px] sm:h-[74px] rounded-full bg-[#162019] border-2 border-[rgba(34,201,122,0.25)] flex items-center justify-center text-2xl relative transition-all duration-300 hover:border-[#22c97a] hover:shadow-[0_0_20px_rgba(34,201,122,0.2)] hover:scale-105">
              <div className="absolute -top-[7px] -right-[7px] w-[19px] h-[19px] bg-[#16a05e] rounded-full text-[9px] font-extrabold text-[#050a06] flex items-center justify-center font-['Space_Grotesk',sans-serif]" data-n="6">6</div>
              🌱
            </div>
            <div className="step-lbl text-[11px] font-semibold text-[#b8c4bc] leading-[1.4]">Ecosystem Grows</div>
          </div>
        </div>

        {/* INFINITY LOOP — Operational Flow */}
        <div className="mt-[72px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a] justify-center">
            Operational Flow
          </div>
          <h3 className="font-['Space_Grotesk',sans-serif] text-[24px] sm:text-[28px] font-bold tracking-[-0.02em] mb-11 text-center">
            How Value Is Exchanged
          </h3>
          <div className="max-w-[680px] mx-auto">
            <svg viewBox="0 0 680 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ filter: "drop-shadow(0 0 36px rgba(34,201,122,0.1))" }}>
              <defs>
                <linearGradient id="il1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0d6b3f"/>
                  <stop offset="100%" stopColor="#22c97a"/>
                </linearGradient>
                <linearGradient id="il2" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#22c97a"/>
                  <stop offset="100%" stopColor="#0d6b3f"/>
                </linearGradient>
                <filter id="ig">
                  <feGaussianBlur stdDeviation="4" result="b"/>
                  <feMerge>
                    <feMergeNode in="b"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Left loop */}
              <ellipse cx="220" cy="145" rx="162" ry="92" stroke="url(#il1)" strokeWidth="28" fill="none" filter="url(#ig)" opacity="0.88"/>
              {/* Right loop */}
              <ellipse cx="460" cy="145" rx="162" ry="92" stroke="url(#il2)" strokeWidth="28" fill="none" filter="url(#ig)" opacity="0.88"/>
              {/* Mask seam */}
              <rect x="310" y="60" width="60" height="170" fill="var(--bk2)"/>
              {/* Center circle */}
              <circle cx="340" cy="145" r="36" fill="rgba(13,107,63,0.35)" stroke="#22c97a" strokeWidth="1.5"/>
              <text x="340" y="138" fill="#22c97a" fontSize="10" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">5. GROWTH</text>
              <text x="340" y="152" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">Ecosystem</text>
              <text x="340" y="164" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">expands</text>
              {/* Labels */}
              <text x="86" y="105" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">1. DEMAND</text>
              <text x="86" y="120" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">Businesses publish</text>
              <text x="86" y="132" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">campaigns</text>
              <text x="595" y="105" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">2. ACTION</text>
              <text x="595" y="120" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">Community</text>
              <text x="595" y="132" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">completes tasks</text>
              <text x="86" y="180" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">4. REWARD</text>
              <text x="86" y="195" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">VELT tokens for</text>
              <text x="86" y="207" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">engagement</text>
              <text x="595" y="180" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">3. RESULT</text>
              <text x="595" y="195" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">Brands receive</text>
              <text x="595" y="207" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">organic visibility</text>
              {/* Animated dots on loops */}
              <circle r="6" fill="#39ff98" opacity="0.9" filter="url(#ig)">
                <animateMotion dur="4s" repeatCount="indefinite" path="M220 53 A162 92 0 1 1 219.9 53"/>
              </circle>
              <circle r="4.5" fill="#22c97a" opacity="0.8">
                <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M460 53 A162 92 0 1 0 459.9 53"/>
              </circle>
              <circle r="3" fill="#39ff98" opacity="0.5">
                <animateMotion dur="4s" begin="1s" repeatCount="indefinite" path="M220 53 A162 92 0 1 1 219.9 53"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}