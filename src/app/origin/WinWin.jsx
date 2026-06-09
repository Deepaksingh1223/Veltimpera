"use client";

export default function WinWin() {
  return (
    <section style={{ background: "var(--bk2)", textAlign: "center" }} className="bg-[#0b120d] text-center py-[100px] px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="winwin">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a] justify-center">
          Perfectly Balanced
        </div>
        
        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mx-auto mb-3.5 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ textAlign: "center", margin: "0 auto 14px" }}>
          A Win-Win Ecosystem
        </h2>
        
        <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mx-auto mb-13 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ margin: "0 auto 52px" }}>
          The platform eliminates the zero-sum game of traditional advertising — creating a symbiotic environment where brands and communities elevate each other.
        </p>

        {/* Venn Diagram SVG */}
        <div className="sg w-full max-w-[760px] mx-auto reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          <svg viewBox="0 0 760 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <filter id="vf">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Left circle - Businesses */}
            <circle cx="280" cy="136" r="116" fill="rgba(34,100,180,0.07)" stroke="rgba(34,100,180,0.32)" strokeWidth="1.8"/>
            
            {/* Right circle - Community */}
            <circle cx="480" cy="136" r="116" fill="rgba(13,107,63,0.1)" stroke="rgba(34,201,122,0.32)" strokeWidth="1.8"/>
            
            {/* Intersection fill - The Ecosystem */}
            <path d="M380 36 Q436 78 436 136 Q436 194 380 236 Q324 194 324 136 Q324 78 380 36Z" fill="rgba(13,107,63,0.32)" filter="url(#vf)"/>
            
            {/* Center text - Intersection */}
            <text x="380" y="126" fill="white" fontSize="10.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">THE VELT</text>
            <text x="380" y="142" fill="white" fontSize="10.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">IMPERA</text>
            <text x="380" y="158" fill="#22c97a" fontSize="9.5" fontFamily="Space Grotesk" fontWeight="600" textAnchor="middle">ECOSYSTEM</text>
            
            {/* Left labels - Businesses Side */}
            <text x="222" y="106" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">🏢 Businesses</text>
            <text x="222" y="128" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle">Reach &amp; Awareness</text>
            <text x="222" y="144" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle">Organic Visibility</text>
            <text x="222" y="160" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle">Real Engagement</text>
            
            {/* Right labels - Community Side */}
            <text x="538" y="106" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">👥 Community</text>
            <text x="538" y="128" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle">Reward Points</text>
            <text x="538" y="144" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle">Flexible Earning</text>
            <text x="538" y="160" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle">Digital Ownership</text>
            
            {/* Bottom caption */}
            <text x="380" y="264" fill="#6b7d72" fontSize="9.5" fontFamily="Inter" textAnchor="middle" fontStyle="italic">
              Symbiotic environment where brands and communities rely on and elevate each other
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}