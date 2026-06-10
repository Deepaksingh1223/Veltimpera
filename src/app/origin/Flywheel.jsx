"use client";

export default function Flywheel() {
  return (
    <section className="bg-[#050a06] text-center py-[100px] px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="flywheel">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a] justify-center">
          Momentum Flywheel
        </div>
        
        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mx-auto mb-3.5 transition-all duration-700 ease-out text-center max-w-[600px]">
          A Self-Reinforcing Growth Cycle
        </h2>
        
        <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mx-auto mb-14 transition-all duration-700 ease-out text-center">
          As the community grows, the digital value of the entire ecosystem compounds automatically — a perpetual motion machine of organic growth.
        </p>

        {/* Flywheel SVG */}
        <div className="max-w-[600px] mx-auto relative">
          <svg viewBox="0 0 600 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <linearGradient id="fw1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0d6b3f"/>
                <stop offset="100%" stopColor="#22c97a"/>
              </linearGradient>
              <filter id="fwg">
                <feGaussianBlur stdDeviation="5" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Rotating outer ring group */}
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0 300 240" to="360 300 240" dur="22s" repeatCount="indefinite"/>
              <circle cx="300" cy="240" r="155" stroke="url(#fw1)" strokeWidth="38" fill="none" opacity="0.88" filter="url(#fwg)"/>
              <polygon points="300,88 289,108 311,108" fill="#39ff98" opacity="0.9"/>
              <polygon points="450,148 432,148 441,168" fill="#22c97a" opacity="0.9"/>
              <polygon points="404,356 418,337 400,334" fill="#22c97a" opacity="0.88"/>
              <polygon points="196,356 182,337 200,334" fill="#22c97a" opacity="0.88"/>
              <polygon points="150,148 168,148 159,168" fill="#22c97a" opacity="0.9"/>
            </g>
            
            {/* Static inner circles */}
            <circle cx="300" cy="240" r="76" fill="rgba(13,107,63,0.22)" stroke="rgba(34,201,122,0.32)" strokeWidth="1.5"/>
            <circle cx="300" cy="240" r="46" fill="rgba(13,107,63,0.42)" stroke="rgba(34,201,122,0.28)" strokeWidth="1"/>
            
            {/* Center Image */}
            <image 
              href="/fav.png" 
              x="265" 
              y="205" 
              width="70" 
              height="70"
              className="animate-pulse"
            />
            
            {/* Label cards - Top */}
            <rect x="228" y="38" width="144" height="40" rx="8" fill="rgba(15,26,18,0.95)" stroke="rgba(34,201,122,0.22)" strokeWidth="1"/>
            <text x="300" y="56" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Participation</text>
            <text x="300" y="71" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">Users complete tasks</text>
            
            {/* Label cards - Right */}
            <rect x="455" y="152" width="130" height="40" rx="8" fill="rgba(15,26,18,0.95)" stroke="rgba(34,201,122,0.22)" strokeWidth="1"/>
            <text x="520" y="170" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Engagement</text>
            <text x="520" y="185" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">Brand metrics rise</text>
            
            {/* Label cards - Bottom Right */}
            <rect x="390" y="348" width="130" height="40" rx="8" fill="rgba(15,26,18,0.95)" stroke="rgba(34,201,122,0.22)" strokeWidth="1"/>
            <text x="455" y="366" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Visibility</text>
            <text x="455" y="381" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">Algorithms boost it</text>
            
            {/* Label cards - Bottom Left */}
            <rect x="80" y="348" width="130" height="40" rx="8" fill="rgba(15,26,18,0.95)" stroke="rgba(34,201,122,0.22)" strokeWidth="1"/>
            <text x="145" y="366" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Brand Growth</text>
            <text x="145" y="381" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">ROI scales budgets</text>
            
            {/* Label cards - Left */}
            <rect x="15" y="152" width="135" height="40" rx="8" fill="rgba(15,26,18,0.95)" stroke="rgba(34,201,122,0.22)" strokeWidth="1"/>
            <text x="83" y="170" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Community+</text>
            <text x="83" y="185" fill="#6b7d72" fontSize="8.5" fontFamily="Inter" textAnchor="middle">More users join</text>
            
            {/* Caption */}
            <rect x="80" y="438" width="440" height="30" rx="7" fill="rgba(13,107,63,0.14)" stroke="rgba(34,201,122,0.14)" strokeWidth="1"/>
            <text x="300" y="458" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle" fontStyle="italic">
              A self-reinforcing cycle — the network effect compounds as the ecosystem grows
            </text>
          </svg>

          {/* Optional: Add a pulsing ring effect behind the image using Tailwind */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-[#22c97a]/10 animate-ping pointer-events-none">
          </div>
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