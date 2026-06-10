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
            <div className="dash-wrap bg-[rgba(15,26,18,0.8)] border-[rgba(34,201,122,0.15)] rounded-2xl p-6 backdrop-blur-[20px]">
              
              {/* Dashboard Header */}
              <div className="dh flex justify-between items-center mb-[18px]">
                <div className="dt font-['Space_Grotesk',sans-serif] text-sm font-bold">Your Dashboard</div>
                <div className="db py-0.5 px-2.5 bg-[rgba(34,201,122,0.15)] border-[rgba(34,201,122,0.3)] rounded-full text-[10px] text-[#22c97a] font-semibold">
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
                  <span className="ts w-[17px] h-[17px] rounded-full bg-[rgba(34,201,122,0.2)] border-[#0d6b3f] flex items-center justify-center text-[9px] text-[#22c97a]">✓</span>
                </div>
                <div className="d-task flex items-center gap-2 py-2 px-3 bg-[rgba(34,201,122,0.05)] rounded-lg text-xs">
                  <span>📘</span>
                  <span className="tn flex-1 text-[#b8c4bc]">Facebook Page Like</span>
                  <span className="tp font-bold text-[#22c97a] text-[11px]">+80 pts</span>
                  <span className="ts w-[17px] h-[17px] rounded-full bg-[rgba(34,201,122,0.2)] border-[#0d6b3f] flex items-center justify-center text-[9px] text-[#22c97a]">✓</span>
                </div>
                <div className="d-task flex items-center gap-2 py-2 px-3 bg-[rgba(34,201,122,0.05)] rounded-lg text-xs">
                  <span>📸</span>
                  <span className="tn flex-1 text-[#b8c4bc]">Instagram Follow</span>
                  <span className="tp font-bold text-[#22c97a] text-[11px]">+60 pts</span>
                  <span className="ts w-[17px] h-[17px] rounded-full border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[9px] text-[#6b7d72]">→</span>
                </div>
                <div className="d-task flex items-center gap-2 py-2 px-3 bg-[rgba(34,201,122,0.05)] rounded-lg text-xs">
                  <span>✍️</span>
                  <span className="tn flex-1 text-[#b8c4bc]">Write a Review</span>
                  <span className="tp font-bold text-[#22c97a] text-[11px]">+200 pts</span>
                  <span className="ts w-[17px] h-[17px] rounded-full border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[9px] text-[#6b7d72]">→</span>
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
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">📋</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Daily Tasks</h4>
                  <p className="text-xs text-[#6b7d72]">Fresh tasks every day across all major platforms</p>
                </div>
              </div>
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">🏅</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Reward Points</h4>
                  <p className="text-xs text-[#6b7d72]">Earn VELT points for every completed activity</p>
                </div>
              </div>
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">🌍</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Global Community</h4>
                  <p className="text-xs text-[#6b7d72]">Join thousands of contributors worldwide</p>
                </div>
              </div>
              
              <div className="com-b flex gap-3.5 items-start p-[17px] bg-[rgba(15,26,18,0.85)] border-[rgba(34,201,122,0.15)] rounded-xl transition-all duration-200 hover:border-[rgba(34,201,122,0.3)] hover:translate-x-1">
                <div className="cb-ico w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(13,107,63,0.4)] to-[rgba(34,201,122,0.15)] flex items-center justify-center text-[17px] flex-shrink-0">🔗</div>
                <div className="cb-txt">
                  <h4 className="text-[13px] font-bold mb-0.5">Referral Income</h4>
                  <p className="text-xs text-[#6b7d72]">Multiply earnings by building your network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
}