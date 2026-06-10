"use client";

export default function WinWin() {
  return (
    <section className="bg-[#0b120d] text-center py-[100px] px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="winwin">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a] justify-center">
          Perfectly Balanced
        </div>
        
        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mx-auto mb-3.5 transition-all duration-700 ease-out text-center max-w-[600px]">
          A Win-Win Ecosystem
        </h2>
        
        <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mx-auto mb-13 transition-all duration-700 ease-out text-center">
          The platform eliminates the zero-sum game of traditional advertising — creating a symbiotic environment where brands and communities elevate each other.
        </p>

        {/* Venn Diagram SVG - Responsive text sizes */}
        <div className="w-full max-w-[760px] mx-auto relative">
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
            
            {/* Center Image - In the intersection of both circles */}
            <image 
              href="/fav.png" 
              x="345" 
              y="96" 
              width="70" 
              height="70"
              className="animate-pulse"
            />
            
            {/* Left labels - Businesses Side - Larger text for phone view */}
            <text x="222" y="100" fill="white" fontSize="13" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" className="max-sm:text-base">
              🏢 Businesses
            </text>
            <text x="222" y="124" fill="#b8c4bc" fontSize="11" fontFamily="Inter" textAnchor="middle" className="max-sm:text-sm">
              Reach &amp; Awareness
            </text>
            <text x="222" y="142" fill="#b8c4bc" fontSize="11" fontFamily="Inter" textAnchor="middle" className="max-sm:text-sm">
              Organic Visibility
            </text>
            <text x="222" y="160" fill="#b8c4bc" fontSize="11" fontFamily="Inter" textAnchor="middle" className="max-sm:text-sm">
              Real Engagement
            </text>
            
            {/* Right labels - Community Side - Larger text for phone view */}
            <text x="538" y="100" fill="white" fontSize="13" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" className="max-sm:text-base">
              👥 Community
            </text>
            <text x="538" y="124" fill="#b8c4bc" fontSize="11" fontFamily="Inter" textAnchor="middle" className="max-sm:text-sm">
              Reward Points
            </text>
            <text x="538" y="142" fill="#b8c4bc" fontSize="11" fontFamily="Inter" textAnchor="middle" className="max-sm:text-sm">
              Flexible Earning
            </text>
            <text x="538" y="160" fill="#b8c4bc" fontSize="11" fontFamily="Inter" textAnchor="middle" className="max-sm:text-sm">
              Digital Ownership
            </text>
            
            {/* Bottom caption - Larger text for phone view */}
            <text x="380" y="264" fill="#6b7d72" fontSize="10" fontFamily="Inter" textAnchor="middle" fontStyle="italic" className="max-sm:text-xs">
              Symbiotic environment where brands and communities rely on and elevate each other
            </text>
          </svg>

          {/* Pulsing ring effect behind the image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-[#22c97a]/10 animate-ping pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
}