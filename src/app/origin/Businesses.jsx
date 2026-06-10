"use client";

export default function Businesses() {
  return (
    <section style={{ background: "var(--bk2)" }} className="bg-[#0b120d] py-24 px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="businesses">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="biz-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Content */}
          <div>
            <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a]">
              For Businesses
            </div>
            
            <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
              Why Businesses Choose<br />Velt Impera
            </h2>
            
            <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mb-6 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
              Stop renting attention. Start owning it. Community-powered growth that compounds over time — no ad budget required.
            </p>
            
            {/* Business Features Grid */}
            <div className="biz-feats grid grid-cols-1 sm:grid-cols-2 gap-3.5 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
              
              <div className="biz-f p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-0.5">
                <div className="ico text-[19px] mb-1.5">🌱</div>
                <h4 className="text-xs font-bold mb-0.5">Organic Brand Growth</h4>
                <p className="text-[11px] text-[#6b7d72] leading-5">Real signals that algorithms reward naturally</p>
              </div>
              
              <div className="biz-f p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-0.5">
                <div className="ico text-[19px] mb-1.5">👥</div>
                <h4 className="text-xs font-bold mb-0.5">Real Human Engagement</h4>
                <p className="text-[11px] text-[#6b7d72] leading-5">Zero bots — verified community members only</p>
              </div>
              
              <div className="biz-f p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-0.5">
                <div className="ico text-[19px] mb-1.5">💰</div>
                <h4 className="text-xs font-bold mb-0.5">Cost Effective</h4>
                <p className="text-[11px] text-[#6b7d72] leading-5">Sustainable alternative to spiking PPC costs</p>
              </div>
              
              <div className="biz-f p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-0.5">
                <div className="ico text-[19px] mb-1.5">📡</div>
                <h4 className="text-xs font-bold mb-0.5">Scalable Distribution</h4>
                <p className="text-[11px] text-[#6b7d72] leading-5">Campaigns distributed to thousands instantly</p>
              </div>
              
              <div className="biz-f p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-0.5">
                <div className="ico text-[19px] mb-1.5">🛡️</div>
                <h4 className="text-xs font-bold mb-0.5">Trust &amp; Credibility</h4>
                <p className="text-[11px] text-[#6b7d72] leading-5">Peer-to-peer social proof you can't buy</p>
              </div>
              
              <div className="biz-f p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:-translate-y-0.5">
                <div className="ico text-[19px] mb-1.5">♾️</div>
                <h4 className="text-xs font-bold mb-0.5">Long-Term Presence</h4>
                <p className="text-[11px] text-[#6b7d72] leading-5">Growth persists beyond your campaign budget</p>
              </div>
            </div>
          </div>

          {/* Right Side - PILLARS INFOGRAPHIC */}
          <div className="reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
            <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <defs>
                <linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c97a"/>
                  <stop offset="100%" stopColor="#0d6b3f"/>
                </linearGradient>
                <linearGradient id="pg2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16a05e"/>
                  <stop offset="100%" stopColor="#0a4a2a"/>
                </linearGradient>
              </defs>
              
              {/* Quote */}
              <text x="200" y="22" fill="#b8c4bc" fontSize="9.5" fontFamily="Inter" textAnchor="middle" fontStyle="italic">
                "Organic reach creates credibility that money cannot buy."
              </text>
              
              {/* Roof */}
              <rect x="22" y="46" width="356" height="20" rx="4" fill="rgba(34,201,122,0.15)" stroke="rgba(34,201,122,0.3)" strokeWidth="1.2"/>
              <text x="200" y="60" fill="white" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Brand Success</text>
              
              {/* Pillar 1 - Trust */}
              <rect x="38" y="66" width="66" height="0" rx="3" fill="url(#pg2)" opacity="0.85">
                <animate attributeName="height" from="0" to="190" dur="1s" fill="freeze" begin="0.2s"/>
              </rect>
              <rect x="35" y="66" width="72" height="11" rx="3" fill="url(#pg1)"/>
              <rect x="35" y="256" width="72" height="0" rx="3" fill="url(#pg1)">
                <animate attributeName="height" from="0" to="11" dur="1s" fill="freeze" begin="0.2s"/>
              </rect>
              <text x="71" y="165" fill="white" fontSize="9.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" transform="rotate(-90,71,165)">TRUST</text>
              
              {/* Pillar 2 - Visibility */}
              <rect x="126" y="84" width="66" height="0" rx="3" fill="url(#pg1)" opacity="0.9">
                <animate attributeName="height" from="0" to="172" dur="1s" fill="freeze" begin="0.35s"/>
              </rect>
              <rect x="123" y="84" width="72" height="11" rx="3" fill="#39ff98"/>
              <rect x="123" y="256" width="72" height="0" rx="3" fill="#39ff98">
                <animate attributeName="height" from="0" to="11" dur="1s" fill="freeze" begin="0.35s"/>
              </rect>
              <text x="159" y="175" fill="#050a06" fontSize="9.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" transform="rotate(-90,159,175)">VISIBILITY</text>
              
              {/* Pillar 3 - Community */}
              <rect x="214" y="74" width="66" height="0" rx="3" fill="url(#pg2)" opacity="0.88">
                <animate attributeName="height" from="0" to="182" dur="1s" fill="freeze" begin="0.5s"/>
              </rect>
              <rect x="211" y="74" width="72" height="11" rx="3" fill="url(#pg1)"/>
              <rect x="211" y="256" width="72" height="0" rx="3" fill="url(#pg1)">
                <animate attributeName="height" from="0" to="11" dur="1s" fill="freeze" begin="0.5s"/>
              </rect>
              <text x="247" y="168" fill="white" fontSize="9.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" transform="rotate(-90,247,168)">COMMUNITY</text>
              
              {/* Pillar 4 - Loyalty */}
              <rect x="302" y="94" width="66" height="0" rx="3" fill="url(#pg1)" opacity="0.9">
                <animate attributeName="height" from="0" to="162" dur="1s" fill="freeze" begin="0.65s"/>
              </rect>
              <rect x="299" y="94" width="72" height="11" rx="3" fill="#39ff98"/>
              <rect x="299" y="256" width="72" height="0" rx="3" fill="#39ff98">
                <animate attributeName="height" from="0" to="11" dur="1s" fill="freeze" begin="0.65s"/>
              </rect>
              <text x="335" y="182" fill="#050a06" fontSize="9.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle" transform="rotate(-90,335,182)">LOYALTY</text>
              
              {/* Base */}
              <rect x="22" y="267" width="356" height="15" rx="4" fill="rgba(34,201,122,0.1)" stroke="rgba(34,201,122,0.18)" strokeWidth="1"/>
              
              {/* Bottom Labels */}
              <text x="71" y="300" fill="white" fontSize="8.5" fontFamily="Space Grotesk" fontWeight="600" textAnchor="middle">People Trust</text>
              <text x="71" y="312" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">People More</text>
              
              <text x="159" y="300" fill="white" fontSize="8.5" fontFamily="Space Grotesk" fontWeight="600" textAnchor="middle">Algorithms</text>
              <text x="159" y="312" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Prioritize Real</text>
              
              <text x="247" y="300" fill="white" fontSize="8.5" fontFamily="Space Grotesk" fontWeight="600" textAnchor="middle">Authentic</text>
              <text x="247" y="312" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Interactions</text>
              
              <text x="335" y="300" fill="white" fontSize="8.5" fontFamily="Space Grotesk" fontWeight="600" textAnchor="middle">Social Proof</text>
              <text x="335" y="312" fill="#6b7d72" fontSize="7.5" fontFamily="Inter" textAnchor="middle">Retains Users</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}