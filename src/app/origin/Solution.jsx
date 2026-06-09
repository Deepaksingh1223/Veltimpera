"use client";

export default function Solution() {
  return (
    <section id="solution" style={{ background: "var(--bk)" }} className="bg-[#050a06] py-24 px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a]">
          The Solution
        </div>
        
        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          Meet The Velt Impera<br />
          <span className="gradient-text bg-gradient-to-r from-[#22c97a] via-[#39ff98] to-[#7affcb] bg-clip-text text-transparent">Growth Engine</span>
        </h2>
        
        <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          A community-powered platform where businesses create campaigns, real people complete meaningful tasks, and every action creates genuine digital signals that improve brand visibility.
        </p>

        {/* BRIDGE / ECOSYSTEM GRAPHIC */}
        <div className="sg w-full overflow-hidden rounded-3xl my-11 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          <svg viewBox="0 0 1000 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0d6b3f"/>
                <stop offset="50%" stopColor="#22c97a"/>
                <stop offset="100%" stopColor="#0d6b3f"/>
              </linearGradient>
              <filter id="gf1">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Arch */}
            <path d="M90 148 Q500 12 910 148" stroke="url(#bg1)" strokeWidth="4" fill="none" filter="url(#gf1)">
              <animate attributeName="strokeDasharray" from="0,1200" to="1200,0" dur="2s" fill="freeze"/>
            </path>
            <path d="M90 158 Q500 24 910 158" stroke="url(#bg1)" strokeWidth="2" fill="none" opacity="0.35"/>
            {/* Struts */}
            <line x1="210" y1="100" x2="210" y2="160" stroke="rgba(34,201,122,0.25)" strokeWidth="1.2"/>
            <line x1="355" y1="52" x2="355" y2="160" stroke="rgba(34,201,122,0.25)" strokeWidth="1.2"/>
            <line x1="500" y1="36" x2="500" y2="160" stroke="rgba(34,201,122,0.4)" strokeWidth="1.6"/>
            <line x1="645" y1="52" x2="645" y2="160" stroke="rgba(34,201,122,0.25)" strokeWidth="1.2"/>
            <line x1="790" y1="100" x2="790" y2="160" stroke="rgba(34,201,122,0.25)" strokeWidth="1.2"/>
            {/* Center shield */}
            <circle cx="500" cy="32" r="22" fill="rgba(13,107,63,0.4)" stroke="#22c97a" strokeWidth="1.5"/>
            <text x="500" y="39" fill="#22c97a" fontSize="17" textAnchor="middle">⬡</text>
            {/* Left: Businesses */}
            <rect x="22" y="128" width="136" height="44" rx="10" fill="rgba(13,107,63,0.3)" stroke="rgba(34,201,122,0.28)" strokeWidth="1.2"/>
            <text x="90" y="148" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">🏢 Businesses</text>
            <text x="90" y="163" fill="#6b7d72" fontSize="9" fontFamily="Inter" textAnchor="middle">Demand Side</text>
            {/* Right: Community */}
            <rect x="842" y="128" width="136" height="44" rx="10" fill="rgba(13,107,63,0.3)" stroke="rgba(34,201,122,0.28)" strokeWidth="1.2"/>
            <text x="910" y="148" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">👥 Community</text>
            <text x="910" y="163" fill="#6b7d72" fontSize="9" fontFamily="Inter" textAnchor="middle">Supply Side</text>
            {/* Animated particles */}
            <circle r="5" fill="#39ff98" opacity="0.9" filter="url(#gf1)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M90 148 Q500 12 910 148"/>
            </circle>
            <circle r="3.5" fill="#22c97a" opacity="0.75">
              <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M910 148 Q500 12 90 148"/>
            </circle>
            <circle r="2.5" fill="#39ff98" opacity="0.5">
              <animateMotion dur="3s" begin="0.8s" repeatCount="indefinite" path="M90 148 Q500 12 910 148"/>
            </circle>
          </svg>
        </div>

        {/* Solution Cards */}
        <div className="sol-cards grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-[52px]">
          
          <div className="sol-card p-[30px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-3xl backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(34,201,122,0.35)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(13,107,63,0.2)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
            <div className="sc-ico w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] border border-[rgba(34,201,122,0.2)] flex items-center justify-center text-2xl mb-4">🎯</div>
            <h3 className="font-['Space_Grotesk',sans-serif] text-[17px] font-semibold mb-2 tracking-[-0.01em]">Businesses Create Campaigns</h3>
            <p className="text-[13px] text-[#b8c4bc] leading-[1.65]">Launch targeted campaigns across any platform. Define tasks, set goals, and distribute to thousands of verified community members instantly.</p>
          </div>

          <div className="sol-card p-[30px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-3xl backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(34,201,122,0.35)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(13,107,63,0.2)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.1s" }}>
            <div className="sc-ico w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] border border-[rgba(34,201,122,0.2)] flex items-center justify-center text-2xl mb-4">⚡</div>
            <h3 className="font-['Space_Grotesk',sans-serif] text-[17px] font-semibold mb-2 tracking-[-0.01em]">Community Completes Tasks</h3>
            <p className="text-[13px] text-[#b8c4bc] leading-[1.65]">Verified real humans perform genuine engagement activities — watching, liking, reviewing, sharing. Every interaction is authentic and platform-compliant.</p>
          </div>

          <div className="sol-card p-[30px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-3xl backdrop-blur-[20px] transition-all duration-300 hover:border-[rgba(34,201,122,0.35)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(13,107,63,0.2)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.2s" }}>
            <div className="sc-ico w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] border border-[rgba(34,201,122,0.2)] flex items-center justify-center text-2xl mb-4">🏆</div>
            <h3 className="font-['Space_Grotesk',sans-serif] text-[17px] font-semibold mb-2 tracking-[-0.01em]">Everyone Gets Rewarded</h3>
            <p className="text-[13px] text-[#b8c4bc] leading-[1.65]">Community members earn VELT points for participation. Businesses gain real visibility and social proof. The ecosystem grows stronger every cycle.</p>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="reveal opacity-1 translate-y-7 transition-all duration-700 ease-out mt-[52px]">
          <div className="compare-table w-full rounded-xl overflow-hidden border border-[rgba(34,201,122,0.12)]">
            
            <div className="cth grid grid-cols-[2fr_1fr_1fr] bg-[rgba(15,26,18,0.9)] py-[13px] px-5 text-[11px] font-bold tracking-[0.06em] uppercase text-[#6b7d72] border-b border-[rgba(34,201,122,0.1)]">
              <span>Dimension</span>
              <span>Traditional Marketing</span>
              <span className="vi text-[#22c97a]">Velt Impera Model</span>
            </div>
            
            <div className="ctr grid grid-cols-[2fr_1fr_1fr] py-3 px-5 text-xs border-b border-[rgba(34,201,122,0.05)] bg-[rgba(15,26,18,0.4)] transition-all duration-200 hover:bg-[rgba(13,107,63,0.08)] items-center">
              <span className="lbl text-[#b8c4bc] font-medium">Mechanism</span>
              <span style={{ color: "var(--svd)", fontSize: "11px" }}>Pay to Advertise — rent attention</span>
              <span style={{ color: "var(--eml)", fontSize: "11px" }}>Engage to Build — own attention</span>
            </div>
            
            <div className="ctr grid grid-cols-[2fr_1fr_1fr] py-3 px-5 text-xs border-b border-[rgba(34,201,122,0.05)] bg-[rgba(15,26,18,0.4)] transition-all duration-200 hover:bg-[rgba(13,107,63,0.08)] items-center">
              <span className="lbl text-[#b8c4bc] font-medium">Cost Structure</span>
              <span className="bad text-[#ff6b6b]">✕ Spiking, sunk costs</span>
              <span className="good text-[#22c97a] font-bold">✓ Sustainable tokenised</span>
            </div>
            
            <div className="ctr grid grid-cols-[2fr_1fr_1fr] py-3 px-5 text-xs border-b border-[rgba(34,201,122,0.05)] bg-[rgba(15,26,18,0.4)] transition-all duration-200 hover:bg-[rgba(13,107,63,0.08)] items-center">
              <span className="lbl text-[#b8c4bc] font-medium">Trust Level</span>
              <span className="bad text-[#ff6b6b]">✕ Low — Ignored/Blocked</span>
              <span className="good text-[#22c97a] font-bold">✓ High — Peer Social Proof</span>
            </div>
            
            <div className="ctr grid grid-cols-[2fr_1fr_1fr] py-3 px-5 text-xs border-b border-[rgba(34,201,122,0.05)] bg-[rgba(15,26,18,0.4)] transition-all duration-200 hover:bg-[rgba(13,107,63,0.08)] items-center">
              <span className="lbl text-[#b8c4bc] font-medium">Traffic Quality</span>
              <span className="bad text-[#ff6b6b]">✕ Bots &amp; fake clicks</span>
              <span className="good text-[#22c97a] font-bold">✓ Verified real humans</span>
            </div>
            
            <div className="ctr grid grid-cols-[2fr_1fr_1fr] py-3 px-5 text-xs bg-[rgba(15,26,18,0.4)] transition-all duration-200 hover:bg-[rgba(13,107,63,0.08)] items-center">
              <span className="lbl text-[#b8c4bc] font-medium">End Result</span>
              <span style={{ color: "var(--svd)", fontSize: "11px" }}>Temporary spikes that flatline</span>
              <span style={{ color: "var(--eml)", fontSize: "11px" }}>Compounding long-term growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}