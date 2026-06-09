"use client";

export default function Tasks() {
  return (
    <section id="tasks" style={{ background: "var(--bk)" }} className="bg-[#050a06] py-24 px-4 sm:px-6 lg:px-10 relative max-sm:py-[60px]">
      <div className="container max-w-[1100px] mx-auto">
        
        <div className="eyebrow text-[11px] font-bold tracking-[0.15em] uppercase text-[#22c97a] mb-3.5 flex items-center gap-2.5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#22c97a]">
          Task Network
        </div>
        
        <h2 className="sec-title font-['Space_Grotesk',sans-serif] text-[clamp(30px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.02em] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          Real Tasks. Real Engagement.<br />Real Growth.
        </h2>
        
        <p className="sec-sub text-base text-[#b8c4bc] max-w-[560px] leading-[1.75] mb-[18px] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          Every social platform. Every engagement signal. Our global workforce executes authentic tasks that algorithms reward.
        </p>

        {/* PLATFORM HUB GRAPHIC */}
        <div className="sg w-full overflow-x-auto my-11 reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
          <svg viewBox="0 0 960 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[760px] md:min-w-0 h-auto">
            <defs>
              <filter id="nh">
                <feGaussianBlur stdDeviation="2.5" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Hub */}
            <circle cx="480" cy="100" r="42" fill="rgba(13,107,63,0.35)" stroke="#22c97a" strokeWidth="2" filter="url(#nh)"/>
            <circle cx="480" cy="100" r="28" fill="rgba(13,107,63,0.55)"/>
            <text x="480" y="95" fill="#22c97a" fontSize="12" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">VELT</text>
            <text x="480" y="109" fill="#22c97a" fontSize="10" fontFamily="Space Grotesk" fontWeight="600" textAnchor="middle">IMPERA</text>
            {/* Spokes */}
            <line x1="438" y1="100" x2="134" y2="55" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            <line x1="443" y1="82" x2="220" y2="22" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            <line x1="455" y1="65" x2="345" y2="15" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            <line x1="477" y1="58" x2="477" y2="10" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            <line x1="510" y1="65" x2="615" y2="15" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            <line x1="522" y1="82" x2="748" y2="22" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            <line x1="525" y1="100" x2="826" y2="55" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            <line x1="480" y1="142" x2="480" y2="190" stroke="rgba(34,201,122,0.25)" strokeWidth="1.4" strokeDasharray="4,3"/>
            {/* Platform nodes */}
            <circle cx="122" cy="52" r="26" fill="rgba(15,26,18,0.92)" stroke="rgba(255,100,100,0.35)" strokeWidth="1.4"/>
            <text x="122" y="47" fill="#ff8080" fontSize="13" textAnchor="middle">▶️</text>
            <text x="122" y="62" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">YouTube</text>
            <circle cx="208" cy="20" r="24" fill="rgba(15,26,18,0.92)" stroke="rgba(66,103,178,0.4)" strokeWidth="1.4"/>
            <text x="208" y="15" fill="#88aaff" fontSize="12" textAnchor="middle">📘</text>
            <text x="208" y="29" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Facebook</text>
            <circle cx="340" cy="12" r="24" fill="rgba(15,26,18,0.92)" stroke="rgba(200,80,150,0.4)" strokeWidth="1.4"/>
            <text x="340" y="7" fill="#ff88cc" fontSize="12" textAnchor="middle">📸</text>
            <text x="340" y="21" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Instagram</text>
            <circle cx="477" cy="8" r="24" fill="rgba(15,26,18,0.92)" stroke="rgba(10,102,194,0.4)" strokeWidth="1.4"/>
            <text x="477" y="3" fill="#66aaff" fontSize="12" textAnchor="middle">💼</text>
            <text x="477" y="17" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">LinkedIn</text>
            <circle cx="619" cy="12" r="24" fill="rgba(15,26,18,0.92)" stroke="rgba(234,67,53,0.35)" strokeWidth="1.4"/>
            <text x="619" y="7" fill="#ffaa80" fontSize="12" textAnchor="middle">🔍</text>
            <text x="619" y="21" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Google</text>
            <circle cx="755" cy="20" r="24" fill="rgba(15,26,18,0.92)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4"/>
            <text x="755" y="15" fill="#dddddd" fontSize="11" textAnchor="middle" fontWeight="700">𝕏</text>
            <text x="755" y="29" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Twitter/X</text>
            <circle cx="838" cy="52" r="26" fill="rgba(15,26,18,0.92)" stroke="rgba(34,201,122,0.35)" strokeWidth="1.4"/>
            <text x="838" y="47" fill="#aaffcc" fontSize="13" textAnchor="middle">✍️</text>
            <text x="838" y="62" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">Content</text>
            <circle cx="480" cy="192" r="24" fill="rgba(15,26,18,0.92)" stroke="rgba(57,255,152,0.4)" strokeWidth="1.4"/>
            <text x="480" y="187" fill="#39ff98" fontSize="12" textAnchor="middle">🤖</text>
            <text x="480" y="201" fill="white" fontSize="8" fontFamily="Space Grotesk" fontWeight="700" textAnchor="middle">AI Visibility</text>
            {/* Animated particles */}
            <circle r="4" fill="#39ff98" filter="url(#nh)" opacity="0.9">
              <animateMotion dur="2.2s" repeatCount="indefinite" path="M438 100 L134 55"/>
            </circle>
            <circle r="3" fill="#22c97a" opacity="0.8">
              <animateMotion dur="2s" begin=".4s" repeatCount="indefinite" path="M443 82 L220 22"/>
            </circle>
            <circle r="3" fill="#39ff98" opacity="0.7">
              <animateMotion dur="2.4s" begin=".8s" repeatCount="indefinite" path="M455 65 L345 15"/>
            </circle>
            <circle r="4" fill="#22c97a" opacity="0.9">
              <animateMotion dur="1.8s" begin=".2s" repeatCount="indefinite" path="M510 65 L615 15"/>
            </circle>
            <circle r="3" fill="#39ff98" opacity="0.7">
              <animateMotion dur="2.1s" begin="1s" repeatCount="indefinite" path="M522 82 L748 22"/>
            </circle>
            <circle r="3.5" fill="#22c97a" opacity="0.8">
              <animateMotion dur="2.3s" begin=".6s" repeatCount="indefinite" path="M525 100 L826 55"/>
            </circle>
            <circle r="3" fill="#39ff98" opacity="0.7">
              <animateMotion dur="1.6s" begin=".3s" repeatCount="indefinite" path="M480 142 L480 190"/>
            </circle>
          </svg>
        </div>

        {/* Task Cards Grid */}
        <div className="task-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3.5 mt-11">
          
          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out">
            <div className="tc-ico text-[22px] mb-2">▶️</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">YouTube</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Watch &amp; View</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Like &amp; Subscribe</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Comment</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Channel Sub</li>
            </ul>
          </div>

          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.05s" }}>
            <div className="tc-ico text-[22px] mb-2">📘</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">Facebook</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Page Likes</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Post Shares</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Follow &amp; Comment</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Reactions</li>
            </ul>
          </div>

          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.1s" }}>
            <div className="tc-ico text-[22px] mb-2">📸</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">Instagram</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Profile Follow</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Post Like</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Comment</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Story Engagement</li>
            </ul>
          </div>

          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.15s" }}>
            <div className="tc-ico text-[22px] mb-2">💼</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">LinkedIn</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Follow &amp; React</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Comment</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Share Post</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Connection</li>
            </ul>
          </div>

          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.2s" }}>
            <div className="tc-ico text-[22px] mb-2">🌐</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">Website</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Visit Website</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Product Discovery</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Brand Awareness</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Local Reviews</li>
            </ul>
          </div>

          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.25s" }}>
            <div className="tc-ico text-[22px] mb-2">✍️</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">Content Tasks</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Blog Writing</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Reviews &amp; Testimonials</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Community Discussions</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Brand Citations</li>
            </ul>
          </div>

          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.3s" }}>
            <div className="tc-ico text-[22px] mb-2">🤖</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">AI Visibility</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Content Creation</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Knowledge Mentions</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Search Signals</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">AI Citations</li>
            </ul>
          </div>

          <div className="task-card p-5 bg-[rgba(15,26,18,0.85)] border border-[rgba(34,201,122,0.15)] rounded-2xl backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(34,201,122,0.3)] hover:shadow-[0_16px_40px_rgba(13,107,63,0.15)] reveal opacity-1 translate-y-7 transition-all duration-700 ease-out" style={{ transitionDelay: "0.35s" }}>
            <div className="tc-ico text-[22px] mb-2">📱</div>
            <div className="tc-name text-xs font-bold text-[#22c97a] mb-2">App Ecosystem</div>
            <ul className="tc-list list-none flex flex-col gap-1">
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">App Downloads</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Referral Tasks</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Rating &amp; Reviews</li>
              <li className="text-[11px] text-[#b8c4bc] flex items-center gap-1 before:content-[''] before:w-0.5 before:h-0.5 before:rounded-full before:bg-[#22c97a] before:flex-shrink-0">Partner Apps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}