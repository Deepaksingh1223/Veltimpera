"use client";

export default function Problem() {
  return (
    <section style={{ background: "var(--bk2)" }} className="bg-[#0b120d] py-24 px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="problem">
      <div className="container max-w-[1100px] mx-auto">

        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a]">
          The Problem
        </div>

        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          Traditional Digital Marketing<br />Is Broken
        </h2>

        <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          Millions of businesses burn budget on short-term results — spending exponentially more every quarter to reach fewer and fewer real people.
        </p>

        <div className="prob-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-[52px] items-start">

          <div className="prob-list flex flex-col gap-3.5 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">

            <div className="prob-item flex items-start gap-3.5 
            p-[17px_20px] bg-[rgba(255,60,60,0.04)] border-[rgba(255,80,80,0.12)] rounded-[13px] transition-all duration-200
             hover:bg-[rgba(255,60,60,0.07)] hover:border-[rgba(255,80,80,0.22)] hover:translate-x-1">
              <div className="pi-ico text-[19px] flex-shrink-0 mt-px">💸</div>
              <div className="pi-txt">
                <strong className="block text-[13px] font-bold text-[#ff6b6b] mb-0.5">Skyrocketing Ad Costs</strong>
                <p className="text-xs text-[#6b7d72] leading-5">Brands forced to spend exponentially more to reach fewer people each month.</p>
              </div>
            </div>

            <div className="prob-item flex items-start gap-3.5 p-[17px_20px] bg-[rgba(255,60,60,0.04)]  border-[rgba(255,80,80,0.12)] rounded-[13px] transition-all duration-200 hover:bg-[rgba(255,60,60,0.07)] hover:border-[rgba(255,80,80,0.22)] hover:translate-x-1">
              <div className="pi-ico text-[19px] flex-shrink-0 mt-px">🤖</div>
              <div className="pi-txt">
                <strong className="block text-[13px] font-bold text-[#ff6b6b] mb-0.5">Fake Traffic &amp; Bot Engagement</strong>
                <p className="text-xs text-[#6b7d72] leading-5">Paid traffic is riddled with bots that inflate numbers but never convert.</p>
              </div>
            </div>

            <div className="prob-item flex items-start gap-3.5 p-[17px_20px] bg-[rgba(255,60,60,0.04)]  border-[rgba(255,80,80,0.12)] rounded-[13px] transition-all duration-200 hover:bg-[rgba(255,60,60,0.07)] hover:border-[rgba(255,80,80,0.22)] hover:translate-x-1">
              <div className="pi-ico text-[19px] flex-shrink-0 mt-px">🚫</div>
              <div className="pi-txt">
                <strong className="block text-[13px] font-bold text-[#ff6b6b] mb-0.5">Ad Blindness &amp; Blockers</strong>
                <p className="text-xs text-[#6b7d72] leading-5">Traditional ads are consistently ignored or blocked by modern audiences.</p>
              </div>
            </div>

            <div className="prob-item flex items-start gap-3.5 p-[17px_20px] bg-[rgba(255,60,60,0.04)] border-[rgba(255,80,80,0.12)] rounded-[13px] transition-all duration-200 hover:bg-[rgba(255,60,60,0.07)] hover:border-[rgba(255,80,80,0.22)] hover:translate-x-1">
              <div className="pi-ico text-[19px] flex-shrink-0 mt-px">📉</div>
              <div className="pi-txt">
                <strong className="block text-[13px] font-bold text-[#ff6b6b] mb-0.5">Short-Term Results Only</strong>
                <p className="text-xs text-[#6b7d72] leading-5">Traffic flatlines the exact moment the advertising budget is exhausted.</p>
              </div>
            </div>

            <div className="prob-item flex items-start gap-3.5 p-[17px_20px] bg-[rgba(255,60,60,0.04)] border-[rgba(255,80,80,0.12)] rounded-[13px] transition-all duration-200 hover:bg-[rgba(255,60,60,0.07)] hover:border-[rgba(255,80,80,0.22)] hover:translate-x-1">
              <div className="pi-ico text-[19px] flex-shrink-0 mt-px">😤</div>
              <div className="pi-txt">
                <strong className="block text-[13px] font-bold text-[#ff6b6b] mb-0.5">Zero Trust Signals</strong>
                <p className="text-xs text-[#6b7d72] leading-5">People trust people, not ads. Paid placements carry zero social proof.</p>
              </div>
            </div>
          </div>

          <div className="reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
            <svg
              viewBox="0 0 480 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              style={{ borderRadius: "18px", background: "rgba(15,26,18,0.65)", border: "1px solid rgba(34,201,122,0.1)", padding: "4px" }}
            >
              <defs>
                <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ff4444" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c97a" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#22c97a" stopOpacity="0" />
                </linearGradient>
              </defs>

              <line x1="48" y1="48" x2="48" y2="248" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <line x1="48" y1="248" x2="456" y2="248" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <line x1="48" y1="188" x2="456" y2="188" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="48" y1="128" x2="456" y2="128" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="48" y1="68" x2="456" y2="68" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,4" />

              <text x="40" y="252" fill="#6b7d72" fontSize="9" fontFamily="Inter" textAnchor="end">0</text>
              <text x="40" y="192" fill="#6b7d72" fontSize="9" fontFamily="Inter" textAnchor="end">25</text>
              <text x="40" y="132" fill="#6b7d72" fontSize="9" fontFamily="Inter" textAnchor="end">50</text>
              <text x="40" y="72" fill="#6b7d72" fontSize="9" fontFamily="Inter" textAnchor="end">75</text>

              <path d="M58 68 L130 88 L160 78 L210 108 L240 98 L290 142 L330 132 L380 172 L420 160 L456 200 L456 248 L58 248 Z" fill="url(#rg)" />

              <path d="M58 68 L130 88 L160 78 L210 108 L240 98 L290 142 L330 132 L380 172 L420 160 L456 200" stroke="#ff4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="strokeDasharray" from="0,700" to="700,0" dur="2s" fill="freeze" begin="0.4s" />
              </path>

              <path d="M58 228 L130 212 L190 196 L240 178 L290 152 L330 126 L380 96 L420 72 L456 55 L456 248 L58 248 Z" fill="url(#gg)" />

              <path d="M58 228 L130 212 L190 196 L240 178 L290 152 L330 126 L380 96 L420 72 L456 55" stroke="#22c97a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="strokeDasharray" from="0,700" to="700,0" dur="2s" fill="freeze" begin="1s" />
              </path>

              <circle cx="456" cy="55" r="5" fill="#22c97a">
                <animate attributeName="r" values="0;5" dur=".3s" fill="freeze" begin="2.8s" />
              </circle>
              <circle cx="456" cy="200" r="5" fill="#ff4444">
                <animate attributeName="r" values="0;5" dur=".3s" fill="freeze" begin="2.8s" />
              </circle>

              <rect x="290" y="52" width="10" height="3" rx="1.5" fill="#ff4444" />
              <text x="305" y="58" fill="#ff8080" fontSize="9" fontFamily="Inter">Traditional Ads ROI</text>
              <rect x="290" y="68" width="10" height="3" rx="1.5" fill="#22c97a" />
              <text x="305" y="74" fill="#22c97a" fontSize="9" fontFamily="Inter">Velt Impera Model</text>

              <text x="252" y="22" fill="#b8c4bc" fontSize="10.5" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">
                ROI Over Time: Traditional vs Community-Powered
              </text>

              <rect x="330" y="90" width="118" height="32" rx="7" fill="rgba(34,201,122,0.1)" stroke="rgba(34,201,122,0.25)" strokeWidth="1" />
              <text x="389" y="104" fill="#22c97a" fontSize="9" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Compounding Growth ↑</text>
              <text x="389" y="116" fill="#6b7d72" fontSize="8" fontFamily="Inter" textAnchor="middle">Community-powered</text>

              <line x1="380" y1="172" x2="400" y2="155" stroke="rgba(255,100,100,0.4)" strokeWidth="1" />
              <text x="408" y="152" fill="#ff8080" fontSize="8" fontFamily="Inter">budget gone</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}