"use client";

export default function Token() {
  return (
    <section style={{ background: "var(--bk2)", textAlign: "center" }} className="bg-[#0b120d] text-center py-24 px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="token">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a] justify-center">
          VELT Token Ecosystem
        </div>
        
        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mx-auto mb-4 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ textAlign: "center", margin: "0 auto 16px" }}>
          The Native Utility Layer
        </h2>
        
        <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mx-auto reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ margin: "0 auto" }}>
          VELT Token is the reward mechanism of the ecosystem — the digital fuel that powers community participation and drives sustainable growth.
        </p>

        {/* Token Visual */}
        <div className="token-vis relative w-[250px] h-[250px] flex items-center justify-center mx-auto my-[52px]">
          <div className="t-orbit absolute rounded-full border border-dashed border-[rgba(34,201,122,0.15)] w-[248px] h-[248px] top-0 left-0 animate-[orb_10s_linear_infinite]">
            <div className="orb-dot absolute w-2 h-2 rounded-full bg-[#39ff98] shadow-[0_0_9px_#39ff98] -top-1 left-[calc(50%-4.5px)]"></div>
          </div>
          <div className="t-orbit absolute rounded-full border border-dashed border-[rgba(34,201,122,0.15)] w-[190px] h-[190px] top-[29px] left-[29px] animate-[orb_16s_linear_infinite_reverse] opacity-50">
            <div className="orb-dot absolute w-1.5 h-1.5 rounded-full shadow-[0_0_6px_rgba(34,201,122,0.5)] -top-[3.5px] left-[calc(50%-3.5px)]" style={{ background: "rgba(34,201,122,0.5)" }}></div>
          </div>
          <div className="t-coin w-[140px] h-[140px] rounded-full bg-[conic-gradient(from_0deg,#1a3320,#2d6b45,#22c97a,#0d6b3f,#1a3320)] border-4 border-[rgba(34,201,122,0.4)] flex items-center justify-center shadow-[0_0_0_12px_rgba(13,107,63,0.08),0_0_0_24px_rgba(13,107,63,0.04),0_30px_80px_rgba(13,107,63,0.4)] z-[2] relative animate-[coinS_18s_linear_infinite]">
            <div className="coin-in w-[104px] h-[104px] rounded-full bg-gradient-to-br from-[#0f2217] to-[#1a4a2e] border-2 border-[rgba(34,201,122,0.3)] flex flex-col items-center justify-center gap-0.5">
              <div className="c-v font-['Space_Grotesk',sans-serif] text-[32px] font-bold bg-gradient-to-r from-[#22c97a] to-[#39ff98] bg-clip-text text-transparent leading-none">V</div>
              <div className="c-lbl text-[8px] font-bold tracking-[0.12em] text-[#6b7d72] uppercase">VELT IMPERA</div>
            </div>
          </div>
        </div>

        {/* TOKEN FLOW GRAPHIC */}
        <div className="sg w-full max-w-[680px] mx-auto mb-10 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          <svg viewBox="0 0 680 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <marker id="ar" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0 0 L6 3 L0 6 Z" fill="#22c97a"/>
              </marker>
              <filter id="tf">
                <feGaussianBlur stdDeviation="2" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="78" cy="60" r="34" fill="rgba(13,107,63,0.3)" stroke="rgba(34,201,122,0.3)" strokeWidth="1.4"/>
            <text x="78" y="55" fill="white" fontSize="17" textAnchor="middle">🏢</text>
            <text x="78" y="72" fill="#22c97a" fontSize="7.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">BUSINESS</text>
            <circle cx="250" cy="60" r="34" fill="rgba(13,107,63,0.4)" stroke="#22c97a" strokeWidth="1.8" filter="url(#tf)"/>
            <text x="250" y="55" fill="white" fontSize="17" textAnchor="middle">⬡</text>
            <text x="250" y="72" fill="#22c97a" fontSize="7.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">PLATFORM</text>
            <circle cx="430" cy="60" r="34" fill="rgba(13,107,63,0.35)" stroke="rgba(34,201,122,0.35)" strokeWidth="1.4"/>
            <text x="430" y="55" fill="white" fontSize="17" textAnchor="middle">👥</text>
            <text x="430" y="72" fill="#22c97a" fontSize="7.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">COMMUNITY</text>
            <circle cx="604" cy="60" r="34" fill="rgba(57,255,152,0.12)" stroke="rgba(57,255,152,0.4)" strokeWidth="1.4"/>
            <text x="604" y="55" fill="white" fontSize="17" textAnchor="middle">🪙</text>
            <text x="604" y="72" fill="#39ff98" fontSize="7.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">VELT TOKEN</text>
            {/* Arrows */}
            <path d="M112 60 L205 60" stroke="rgba(34,201,122,0.6)" strokeWidth="1.8" markerEnd="url(#ar)"/>
            <path d="M284 60 L385 60" stroke="rgba(34,201,122,0.6)" strokeWidth="1.8" markerEnd="url(#ar)"/>
            <path d="M464 60 L558 60" stroke="rgba(57,255,152,0.7)" strokeWidth="1.8" markerEnd="url(#ar)"/>
            <text x="158" y="50" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Campaign</text>
            <text x="335" y="50" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Task Dist.</text>
            <text x="511" y="50" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Points Earned</text>
            {/* Return arc */}
            <path d="M558 78 Q340 115 112 78" stroke="rgba(34,201,122,0.2)" strokeWidth="1.3" strokeDasharray="4,3" fill="none"/>
            <text x="340" y="113" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">← Ecosystem Growth Returns Value →</text>
            {/* Animated dot */}
            <circle r="4.5" fill="#39ff98" filter="url(#tf)">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M112 60 L205 60 L284 60 L385 60 L464 60 L558 60"/>
            </circle>
          </svg>
        </div>

        {/* Token Features */}
        <div className="tok-feats grid grid-cols-1 md:grid-cols-3 gap-[18px] text-left reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          
          <div className="tf p-[22px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-1">
            <div className="ico text-2xl mb-2.5">⚡</div>
            <h4 className="font-['Space_Grotesk',sans-serif] text-sm font-bold mb-1.5">Participation Rewards</h4>
            <p className="text-xs text-[#6b7d72] leading-6">Incentivises consistent daily platform participation across all task types and engagement activities.</p>
          </div>
          
          <div className="tf p-[22px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-1">
            <div className="ico text-2xl mb-2.5">🔧</div>
            <h4 className="font-['Space_Grotesk',sans-serif] text-sm font-bold mb-1.5">Ecosystem Utility</h4>
            <p className="text-xs text-[#6b7d72] leading-6">Provides tangible digital asset utility for completed engagement activities within the Velt Impera platform.</p>
          </div>
          
          <div className="tf p-[22px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-1">
            <div className="ico text-2xl mb-2.5">📊</div>
            <h4 className="font-['Space_Grotesk',sans-serif] text-sm font-bold mb-1.5">Community Growth</h4>
            <p className="text-xs text-[#6b7d72] leading-6">Drives ecosystem expansion and sustains long-term community motivation as the network compounds.</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 py-3.5 px-3.5 bg-[rgba(34,201,122,0.05)] border border-[rgba(34,201,122,0.12)] rounded-xl text-xs text-[#6b7d72] max-w-[560px] mx-auto" style={{ marginTop: "26px", padding: "14px", background: "rgba(34,201,122,0.05)", border: "1px solid rgba(34,201,122,0.12)", borderRadius: "11px", fontSize: "12px", color: "var(--svd)", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
          ⚠️ VELT Token represents ecosystem utility for participation. No financial returns are guaranteed or implied.
        </div>
      </div>
    </section>
  );
}