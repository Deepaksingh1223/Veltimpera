"use client";

import { useEffect } from "react";

export default function Community() {
  // Dashboard Progress Bar Animation
  useEffect(() => {
    const dpf = document.getElementById("dpf");
    if (dpf) {
      const po = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setTimeout(() => {
                dpf.style.width = "68%";
              }, 350);
              po.unobserve(e.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      po.observe(dpf);
      return () => po.disconnect();
    }
  }, []);

  return (
    <section style={{ background: "var(--bk)" }} className="bg-[#050a06] py-24 px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]" id="community">
      <div className="container max-w-[1100px] mx-auto">
        
        {/* Grid Layout */}
        <div className="com-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Dashboard - Left Side */}
          <div className="reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
            <div className="dash-wrap bg-[rgba(15,26,18,0.8)] border border-[rgba(34,201,122,0.15)] rounded-2xl p-6 backdrop-blur-[20px]">
              
              {/* Dashboard Header */}
              <div className="dh flex justify-between items-center mb-[18px]">
                <div className="dt font-['Space_Grotesk',sans-serif] text-sm font-bold">Your Dashboard</div>
                <div className="db py-0.5 px-2.5 bg-[rgba(34,201,122,0.15)] border border-[rgba(34,201,122,0.3)] rounded-full text-[10px] text-[#22c97a] font-semibold">
                  🟢 Active
                </div>
              </div>
              
              {/* VELT Points */}
              <div className="dp-num font-['Space_Grotesk',sans-serif] text-[42px] font-bold bg-gradient-to-r from-[#22c97a] to-[#39ff98] bg-clip-text text-transparent leading-none text-center">
                4,820
              </div>
              <div className="dp-lbl text-[10px] text-[#6b7d72] mt-0.5 tracking-[0.04em] uppercase text-center">
                VELT Points Earned
              </div>
              
              {/* Progress Bar */}
              <div className="dpb-wrap my-4">
                <div className="dpb-top flex justify-between text-[11px] text-[#6b7d72] mb-1">
                  <span>Silver Contributor</span>
                  <span>68%</span>
                </div>
                <div className="dpb-bar h-[5px] bg-[rgba(34,201,122,0.1)] rounded-full overflow-hidden">
                  <div id="dpf" className="dpb-fill h-full w-0 bg-gradient-to-r from-[#16a05e] to-[#39ff98] rounded-full transition-all duration-[2000ms]"></div>
                </div>
              </div>
              
              {/* Today's Tasks */}
              <div className="text-[10px] font-bold text-[#6b7d72] tracking-[0.06em] uppercase mb-2">
                Today's Tasks
              </div>
              <div className="d-tasks flex flex-col gap-1.5">
                <div className="d-task flex items-center gap-2 py-2 px-3 bg-[rgba(34,201,122,0.05)] rounded-lg text-xs">
                  <span>▶️</span>
                  <span className="tn flex-1 text-[#b8c4bc]">YouTube Watch Task</span>
                  <span className="tp font-bold text-[#22c97a] text-[11px]">+120 pts</span>
                  <span className="ts w-[17px] h-[17px] rounded-full bg-[rgba(34,201,122,0.2)] border border-[#0d6b3f] flex items-center justify-center text-[9px] text-[#22c97a]">✓</span>
                </div>
                <div className="d-task flex items-center gap-2 py-2 px-3 bg-[rgba(34,201,122,0.05)] rounded-lg text-xs">
                  <span>📘</span>
                  <span className="tn flex-1 text-[#b8c4bc]">Facebook Page Like</span>
                  <span className="tp font-bold text-[#22c97a] text-[11px]">+80 pts</span>
                  <span className="ts w-[17px] h-[17px] rounded-full bg-[rgba(34,201,122,0.2)] border border-[#0d6b3f] flex items-center justify-center text-[9px] text-[#22c97a]">✓</span>
                </div>
                <div className="d-task flex items-center gap-2 py-2 px-3 bg-[rgba(34,201,122,0.05)] rounded-lg text-xs">
                  <span>📸</span>
                  <span className="tn flex-1 text-[#b8c4bc]">Instagram Follow</span>
                  <span className="tp font-bold text-[#22c97a] text-[11px]">+60 pts</span>
                  <span className="ts w-[17px] h-[17px] rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[9px] text-[#6b7d72]">→</span>
                </div>
                <div className="d-task flex items-center gap-2 py-2 px-3 bg-[rgba(34,201,122,0.05)] rounded-lg text-xs">
                  <span>✍️</span>
                  <span className="tn flex-1 text-[#b8c4bc]">Write a Review</span>
                  <span className="tp font-bold text-[#22c97a] text-[11px]">+200 pts</span>
                  <span className="ts w-[17px] h-[17px] rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[9px] text-[#6b7d72]">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Community Info */}
          <div>
            <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a]">
              For Community
            </div>
            
            <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
              Give 10 Minutes Daily.<br />Earn Points.
            </h2>
            
            <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mb-6 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
              Turn passive scrolling into active digital value creation. Students, freelancers, professionals — anyone can participate from anywhere in the world.
            </p>
            
            {/* Community Benefits */}
            <div className="com-bens flex flex-col gap-3.5 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">📋</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Daily Tasks</h4>
                  <p className="text-xs text-[#6b7d72]">Fresh tasks every day across all major platforms</p>
                </div>
              </div>
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">🏅</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Reward Points</h4>
                  <p className="text-xs text-[#6b7d72]">Earn VELT points for every completed activity</p>
                </div>
              </div>
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">🌍</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Global Community</h4>
                  <p className="text-xs text-[#6b7d72]">Join thousands of contributors worldwide</p>
                </div>
              </div>
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">🔗</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Referral Income</h4>
                  <p className="text-xs text-[#6b7d72]">Multiply earnings by building your network</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GLOBAL NETWORK MAP */}
        <div className="sg w-full mt-[60px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          <svg viewBox="0 0 960 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl" style={{ background: "rgba(15,26,18,0.5)", border: "1px solid rgba(34,201,122,0.08)" }}>
            <defs>
              <filter id="ng2">
                <feGaussianBlur stdDeviation="2.5" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Continent silhouettes */}
            <path d="M75 75 Q95 55 128 60 Q142 53 152 62 Q168 50 183 58 Q193 54 197 66 Q207 61 212 76 Q217 86 206 96 Q196 104 180 101 Q169 110 154 103 Q138 110 125 103 Q104 101 89 93 Q73 87 75 75Z" fill="rgba(34,201,122,0.07)" stroke="rgba(34,201,122,0.14)" strokeWidth="0.7"/>
            <path d="M228 50 Q252 41 276 46 Q294 43 304 56 Q312 65 304 77 Q295 85 280 83 Q262 90 245 85 Q229 80 222 70 Q220 60 228 50Z" fill="rgba(34,201,122,0.07)" stroke="rgba(34,201,122,0.14)" strokeWidth="0.7"/>
            <path d="M336 56 Q374 42 412 47 Q440 45 455 61 Q465 74 450 88 Q435 98 408 94 Q382 102 352 94 Q332 87 325 74 Q320 63 336 56Z" fill="rgba(34,201,122,0.07)" stroke="rgba(34,201,122,0.14)" strokeWidth="0.7"/>
            <path d="M492 50 Q532 38 566 46 Q590 48 600 61 Q608 73 594 84 Q578 94 552 90 Q527 97 502 89 Q482 81 479 68 Q476 57 492 50Z" fill="rgba(34,201,122,0.07)" stroke="rgba(34,201,122,0.14)" strokeWidth="0.7"/>
            <path d="M645 56 Q684 45 712 52 Q736 54 746 67 Q753 79 740 90 Q722 99 696 95 Q670 102 648 92 Q630 85 628 72 Q627 61 645 56Z" fill="rgba(34,201,122,0.07)" stroke="rgba(34,201,122,0.14)" strokeWidth="0.7"/>
            <path d="M778 60 Q812 51 836 58 Q850 60 853 72 Q856 84 840 92 Q823 98 804 93 Q784 88 774 76 Q769 65 778 60Z" fill="rgba(34,201,122,0.07)" stroke="rgba(34,201,122,0.14)" strokeWidth="0.7"/>
            {/* Nodes */}
            <circle cx="118" cy="73" r="6" fill="#22c97a" filter="url(#ng2)"/><circle cx="118" cy="73" r="3" fill="#39ff98"/>
            <circle cx="172" cy="61" r="5" fill="#22c97a" filter="url(#ng2)"/><circle cx="172" cy="61" r="2.5" fill="#39ff98"/>
            <circle cx="254" cy="56" r="7" fill="#22c97a" filter="url(#ng2)"/><circle cx="254" cy="56" r="3.5" fill="#39ff98"/>
            <circle cx="290" cy="74" r="5" fill="#22c97a" filter="url(#ng2)"/><circle cx="290" cy="74" r="2.5" fill="#39ff98"/>
            <circle cx="376" cy="51" r="6" fill="#22c97a" filter="url(#ng2)"/><circle cx="376" cy="51" r="3" fill="#39ff98"/>
            <circle cx="425" cy="72" r="9" fill="#22c97a" filter="url(#ng2)"/><circle cx="425" cy="72" r="4.5" fill="#39ff98"/>
            <circle cx="450" cy="84" r="5" fill="#22c97a" filter="url(#ng2)"/><circle cx="450" cy="84" r="2.5" fill="#39ff98"/>
            <circle cx="514" cy="56" r="6" fill="#22c97a" filter="url(#ng2)"/><circle cx="514" cy="56" r="3" fill="#39ff98"/>
            <circle cx="558" cy="68" r="9" fill="#22c97a" filter="url(#ng2)"/><circle cx="558" cy="68" r="4.5" fill="#39ff98"/>
            <circle cx="596" cy="58" r="5" fill="#22c97a" filter="url(#ng2)"/><circle cx="596" cy="58" r="2.5" fill="#39ff98"/>
            <circle cx="660" cy="66" r="7" fill="#22c97a" filter="url(#ng2)"/><circle cx="660" cy="66" r="3.5" fill="#39ff98"/>
            <circle cx="704" cy="56" r="5" fill="#22c97a" filter="url(#ng2)"/><circle cx="704" cy="56" r="2.5" fill="#39ff98"/>
            <circle cx="740" cy="76" r="6" fill="#22c97a" filter="url(#ng2)"/><circle cx="740" cy="76" r="3" fill="#39ff98"/>
            <circle cx="800" cy="68" r="8" fill="#22c97a" filter="url(#ng2)"/><circle cx="800" cy="68" r="4" fill="#39ff98"/>
            <circle cx="836" cy="58" r="5" fill="#22c97a" filter="url(#ng2)"/><circle cx="836" cy="58" r="2.5" fill="#39ff98"/>
            <circle cx="866" cy="74" r="6" fill="#22c97a" filter="url(#ng2)"/><circle cx="866" cy="74" r="3" fill="#39ff98"/>
            {/* Connection lines */}
            <line x1="118" y1="73" x2="172" y2="61" stroke="rgba(34,201,122,0.2)" strokeWidth="1"/>
            <line x1="172" y1="61" x2="254" y2="56" stroke="rgba(34,201,122,0.2)" strokeWidth="1"/>
            <line x1="254" y1="56" x2="290" y2="74" stroke="rgba(34,201,122,0.15)" strokeWidth="1"/>
            <line x1="290" y1="74" x2="376" y2="51" stroke="rgba(34,201,122,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="376" y1="51" x2="425" y2="72" stroke="rgba(34,201,122,0.2)" strokeWidth="1"/>
            <line x1="425" y1="72" x2="450" y2="84" stroke="rgba(34,201,122,0.15)" strokeWidth="1"/>
            <line x1="450" y1="84" x2="514" y2="56" stroke="rgba(34,201,122,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="514" y1="56" x2="558" y2="68" stroke="rgba(34,201,122,0.2)" strokeWidth="1"/>
            <line x1="558" y1="68" x2="596" y2="58" stroke="rgba(34,201,122,0.15)" strokeWidth="1"/>
            <line x1="596" y1="58" x2="660" y2="66" stroke="rgba(34,201,122,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="660" y1="66" x2="704" y2="56" stroke="rgba(34,201,122,0.2)" strokeWidth="1"/>
            <line x1="704" y1="56" x2="740" y2="76" stroke="rgba(34,201,122,0.15)" strokeWidth="1"/>
            <line x1="740" y1="76" x2="800" y2="68" stroke="rgba(34,201,122,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="800" y1="68" x2="836" y2="58" stroke="rgba(34,201,122,0.2)" strokeWidth="1"/>
            <line x1="836" y1="58" x2="866" y2="74" stroke="rgba(34,201,122,0.15)" strokeWidth="1"/>
            {/* Pulsing rings on biggest nodes */}
            <circle cx="425" cy="72" r="9" fill="none" stroke="#22c97a" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="9;22;9" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="558" cy="68" r="9" fill="none" stroke="#22c97a" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="9;22;9" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="68" r="8" fill="none" stroke="#22c97a" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
            {/* Caption */}
            <text x="480" y="152" fill="#6b7d72" fontSize="10.5" fontFamily="Space Grotesk" fontWeight="600" textAnchor="middle">
              50,000+ Verified Community Members Across 120+ Countries
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}