"use client";

const VERIFY_LINKS = [
  {
    step: "01",
    stepLabel: "Smart Contract",
    stepIcon: "ti-file-code",
    stepColor: "#F0A500",
    stepBg: "rgba(240,165,0,0.1)",
    items: [
      {
        icon: "ti-brand-binance",
        iconBg: "#F0A500",
        label: "BSC Scan — Contract",
        desc: "0xb26df3...173f90a · Publicly verifiable",
        url: "https://bscscan.com/address/0xb26df3cadef9f4b771d98d20a7f05e055173f90a",
        badge: "✔ Verified",
        badgeColor: "#22C55E",
      },
    ],
  },
  {
    step: "02",
    stepLabel: "Global Availability",
    stepIcon: "ti-world",
    stepColor: "#3B82F6",
    stepBg: "rgba(59,130,246,0.1)",
    items: [
      {
        icon: "ti-chart-bar",
        iconBg: "#3B82F6",
        label: "CoinMarketCap",
        desc: "VELTRIXA — Live market data",
        url: "https://coinmarketcap.com/currencies/veltrixa/",
        badge: "CMC",
        badgeColor: "#3B82F6",
      },
      {
        icon: "ti-brand-google",
        iconBg: "#8DC63F",
        label: "CoinGecko",
        desc: "VELTRIXA — Price & market cap",
        url: "https://www.coingecko.com/en/coins/veltrixa",
        badge: "CG",
        badgeColor: "#8DC63F",
      },
      {
        icon: "ti-brand-binance",
        iconBg: "#F0A500",
        label: "Binance Web3",
        desc: "BSC Token · 0xb26df3...173f90a",
        url: "https://web3.binance.com/en-IN/token/bsc/0xb26df3cadef9f4b771d98d20a7f05e055173f90a",
        badge: "BNB",
        badgeColor: "#F0A500",
      },
      {
  icon: "ti-chart-candle",  // Changed from "ti-chart-candlestick"
  iconBg: "#A855F7",
  label: "Dexscreener",
  desc: "Live DEX chart · VELT/USDT pair",
  url: "https://dexscreener.com/bsc/0x64ae65093cafcecec8d0890e4f586c05b491f445",
  badge: "DEX",
  badgeColor: "#A855F7",
},
      {
        icon: "ti-arrows-exchange",
        iconBg: "#EC4899",
        label: "PancakeSwap",
        desc: "Swap VELT · BSC · Instant liquidity",
        url: "https://pancakeswap.finance/swap?outputCurrency=0xb26dF3cadeF9F4b771D98D20A7F05e055173f90A",
        badge: "Swap",
        badgeColor: "#EC4899",
      },
    ],
  },
  {
    step: "03",
    stepLabel: "Security & Transparency",
    stepIcon: "ti-shield-check",
    stepColor: "#22C55E",
    stepBg: "rgba(34,197,94,0.1)",
    items: [
      {
        icon: "ti-certificate",
        iconBg: "#22C55E",
        label: "CertiK Scan",
        desc: "Smart contract security audit",
        url: "https://skynet.certik.com/tools/token-scan/bsc/0xb26dF3cadeF9F4b771d98d20a7f05e055173f90a",
        badge: "Audited",
        badgeColor: "#22C55E",
      },
      {
        icon: "ti-radar",
        iconBg: "#06B6D4",
        label: "GoPlus Security",
        desc: "Public token risk analysis · Chain ID 56",
        url: "https://console.gopluslabs.io/token-security/56/0xb26dF3cadeF9F4b771D98D20A7F05e055173f90A",
        badge: "Safe",
        badgeColor: "#06B6D4",
      },
    ],
  },
];

export default function HomePage({ onGo, onToast }) {
  return (
    <div className="pg on" id="pg-home">
      <div className="pad">

        {/* ── Gold Membership Banner ── */}
        <div className="mbanner">
          <div className="mbi">
            <i className="ti ti-award" aria-hidden="true" />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--glt)" }}>
              Gold Membership — Active
            </div>
            <div style={{ fontSize: 11, color: "var(--tx3)", marginTop: 2 }}>
              Renews Dec 14, 2025 · 2 active VISA cards · Unlimited conversions
            </div>
          </div>
          <button
            className="btn bo bsm"
            style={{ marginLeft: "auto" }}
            onClick={() => onGo("membership")}
          >
            Manage Plan
          </button>
          <div className="mact">Active</div>
        </div>

        {/* ── 6-stat grid ── */}
        <div className="g6">
          <div className="card">
            <div className="st-hd">
              <div className="st-lbl">Total Points</div>
              <div className="st-ico" style={{ background: "var(--gdim)" }}>
                <i className="ti ti-wallet" style={{ color: "var(--glt)" }} />
              </div>
            </div>
            <div className="st-val">12,481</div>
            <div className="up-chg">
              <i className="ti ti-arrow-up" style={{ fontSize: 10 }} /> +340 this month
            </div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,18 10,12 20,15 30,8 40,12 50,5 60,8" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="card">
            <div className="st-hd">
              <div className="st-lbl">Today's Earnings</div>
              <div className="st-ico" style={{ background: "var(--pubg)" }}>
                <i className="ti ti-star" style={{ color: "var(--pu)" }} />
              </div>
            </div>
            <div className="st-val">4,820</div>
            <div className="up-chg">
              <i className="ti ti-arrow-up" style={{ fontSize: 10 }} /> +180 this week
            </div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,20 10,15 20,17 30,10 40,13 50,7 60,4" fill="none" stroke="var(--pu)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="card">
            <div className="st-hd">
              <div className="st-lbl">This Month</div>
              <div className="st-ico" style={{ background: "var(--blbg)" }}>
                <i className="ti ti-coin" style={{ color: "var(--bl)" }} />
              </div>
            </div>
            <div className="st-val">8,250</div>
            <div className="dn-chg">
              <i className="ti ti-arrow-down" style={{ fontSize: 10 }} /> -0.6% today
            </div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,8 10,11 20,9 30,14 40,11 50,17 60,15" fill="none" stroke="var(--bl)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="card">
            <div className="st-hd">
              <div className="st-lbl">Tasks Done</div>
              <div className="st-ico" style={{ background: "var(--grbg)" }}>
                <i className="ti ti-checklist" style={{ color: "var(--gr)" }} />
              </div>
            </div>
            <div className="st-val">$340</div>
            <div className="up-chg">
              <i className="ti ti-trending-up" style={{ fontSize: 10 }} /> +12% vs last mo
            </div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,20 10,17 20,19 30,12 40,14 50,7 60,5" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="card">
            <div className="st-hd">
              <div className="st-lbl">In Progress</div>
              <div className="st-ico" style={{ background: "var(--ambg)" }}>
                <i className="ti ti-clock" style={{ color: "var(--am)" }} />
              </div>
            </div>
            <div className="st-val">$182</div>
            <div style={{ fontSize: 11, color: "var(--tx3)" }}>
              <i className="ti ti-refresh" style={{ fontSize: 10 }} /> 2 withdrawals
            </div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,13 10,15 20,11 30,16 40,13 50,15 60,13" fill="none" stroke="var(--am)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="card">
            <div className="st-hd">
              <div className="st-lbl">Available Rewards</div>
              <div className="st-ico" style={{ background: "var(--grbg)" }}>
                <i className="ti ti-gift" style={{ color: "var(--gr)" }} />
              </div>
            </div>
            <div className="st-val">$96.40</div>
            <div className="up-chg">
              <i className="ti ti-circle-check" style={{ fontSize: 10 }} /> Ready to withdraw
            </div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,17 10,14 20,16 30,10 40,12 50,6 60,8" fill="none" stroke="var(--gr)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* ── Exchange + Loyalty Tasks ── */}
        <div className="g2">
            <div className="card">
            <div className="ch">
              <div>
                <div className="ct">
                  <i className="ti ti-circle-check" style={{ marginRight: 6, color: "var(--glt)" }} />
                  Verify VELT On-Chain
                </div>
                <div className="cs">Smart Contract · Global Listings · Security Audits</div>
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--gr)",
                  background: "var(--grbg)",
                  border: "1px solid var(--gr)",
                  borderRadius: 20,
                  padding: "3px 10px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  flexShrink: 0,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gr)", display: "inline-block" }} />
                On-chain Live
              </span>
            </div>

            {/* Contract Address Row */}
            <div
              style={{
                background: "var(--sf)",
                border: "1px solid var(--br)",
                borderRadius: 10,
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <i className="ti ti-file-code" style={{ fontSize: 16, color: "var(--glt)", flexShrink: 0 }} />
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--tx)", wordBreak: "break-all", flex: 1 }}>
                0xb26df3cadef9f4b771d98d20a7f05e055173f90a
              </span>
              <button
                className="btn bo bxs"
                style={{ flexShrink: 0 }}
                onClick={() => {
                  navigator.clipboard?.writeText("0xb26df3cadef9f4b771d98d20a7f05e055173f90a");
                  onToast("Contract address copied!");
                }}
              >
                <i className="ti ti-copy" /> Copy
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
              {[
                { icon: "ti-shield-check", text: "CertiK Audited", color: "#22C55E" },
                { icon: "ti-brand-binance", text: "BSC Chain", color: "#F0A500" },
                { icon: "ti-eye", text: "Public Contract", color: "#3B82F6" },
                { icon: "ti-lock", text: "Ownership Verified", color: "#A855F7" },
                { icon: "ti-chart-bar", text: "CMC Listed", color: "#3B82F6" },
                { icon: "ti-radar", text: "GoPlus Safe", color: "#06B6D4" },
              ].map((tag) => (
                <span
                  key={tag.text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: `${tag.color}15`,
                    border: `1px solid ${tag.color}40`,
                    borderRadius: 8,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 600,
                    color: tag.color,
                  }}
                >
                  <i className={`ti ${tag.icon}`} style={{ fontSize: 11 }} />
                  {tag.text}
                </span>
              ))}
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VERIFY_LINKS.map((sec) => (
                <div key={sec.step}>
                  {/* Step Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: sec.stepBg,
                        border: `1px solid ${sec.stepColor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`ti ${sec.stepIcon}`} style={{ fontSize: 14, color: sec.stepColor }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 800,
                          color: sec.stepColor,
                          background: `${sec.stepColor}18`,
                          borderRadius: 5,
                          padding: "1px 6px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        STEP {sec.step}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--tx)" }}>{sec.stepLabel}</span>
                    </div>
                  </div>

                  {/* Link Rows */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {sec.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "9px 12px",
                          borderRadius: 10,
                          background: "var(--sf)",
                          border: "1px solid var(--grd)", 
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: `${item.iconBg}20`,
                            border: `1px solid ${item.iconBg}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i className={`ti ${item.icon}`} style={{ fontSize: 15, color: item.iconBg }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--tx)", marginBottom: 1 }}>{item.label}</div>
                          <div style={{ fontSize: 10, color: "var(--tx3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.desc}</div>
                        </div>
                        <span
                          style={{
                            flexShrink: 0,
                            fontSize: 9,
                            fontWeight: 700,
                            padding: "2px 7px",
                            borderRadius: 20,
                            border: `1px solid ${item.badgeColor}`,
                            color: item.badgeColor,
                            background: `${item.badgeColor}15`,
                          }}
                        >
                          {item.badge}
                        </span>
                        <i className="ti ti-external-link" style={{ fontSize: 13, color: "var(--tx3)", flexShrink: 0 }} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* VELT → Fiat Exchange */}
        

          {/* Loyalty Tasks */}
          <div className="card">
            <div className="ch">
              <div>
                <div className="ct">
                  <i className="ti ti-target" style={{ marginRight: 6, color: "var(--pu)" }} />
                  Loyalty Tasks
                </div>
                <div className="cs">Complete tasks · Earn VELT Points</div>
              </div>
              <span className="cl" onClick={() => onGo("tasks")}>View All ›</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div className="tr dn2">
                <div className="tico" style={{ background: "#FF0000" }}>
                  <i className="ti ti-brand-youtube" />
                </div>
                <div className="tb">
                  <div className="tt">Watch: Velt Impera Platform Overview</div>
                  <div className="td">YouTube · 4 min · Completed</div>
                  <div className="tpg">
                    <div className="bar" style={{ flex: 1 }}><div className="bf" style={{ width: "100%" }} /></div>
                    <span className="tpct">100%</span>
                  </div>
                </div>
                <div className="tr-r">
                  <div className="pts">+12 pts</div>
                  <span className="pill pd"><i className="ti ti-check" />Done</span>
                </div>
              </div>

              <div className="tr dn2" style={{ cursor: "pointer" }} onClick={() => onGo("yt")}>
                <div className="tico" style={{ background: "#FF0000" }}>
                  <i className="ti ti-brand-youtube" />
                </div>
                <div className="tb">
                  <div className="tt">Watch: VELT Crypto to Fiat Tutorial</div>
                  <div className="td">YouTube · 6 min · 60% done</div>
                  <div className="tpg">
                    <div className="bar" style={{ flex: 1 }}><div className="bf" style={{ width: "60%" }} /></div>
                    <span className="tpct">60%</span>
                  </div>
                </div>
                <div className="tr-r">
                  <div className="pts">+15 pts</div>
                  <span className="pill pp"><i className="ti ti-clock" />Progress</span>
                  <button className="btn bo bxs" onClick={(e) => { e.stopPropagation(); onGo("yt"); }} style={{ marginTop: 3 }}>Continue</button>
                </div>
              </div>

              <div className="tr dn2" style={{ cursor: "pointer" }} onClick={() => onGo("fb")}>
                <div className="tico" style={{ background: "#1877F2" }}>
                  <i className="ti ti-brand-facebook" />
                </div>
                <div className="tb">
                  <div className="tt">Share VELT Impera Post on Facebook</div>
                  <div className="td">Facebook · Step 2 of 4</div>
                  <div className="tpg">
                    <div className="bar" style={{ flex: 1 }}><div className="bf" style={{ width: "50%" }} /></div>
                    <span className="tpct">50%</span>
                  </div>
                </div>
                <div className="tr-r">
                  <div className="pts">+8 pts</div>
                  <span className="pill pp"><i className="ti ti-clock" />Progress</span>
                  <button className="btn bo bxs" onClick={(e) => { e.stopPropagation(); onGo("fb"); }} style={{ marginTop: 3 }}>Continue</button>
                </div>
              </div>

              <div className="tr dn2" style={{ cursor: "pointer" }} onClick={() => onGo("stake")}>
                <div className="tico" style={{ background: "linear-gradient(135deg,#9A7020,#C9A03A)" }}>
                  <i className="ti ti-lock" />
                </div>
                <div className="tb">
                  <div className="tt">Stake VELT on veltimpera.com</div>
                  <div className="td">Web3 · Daily passive income · Step 1 of 3</div>
                  <div className="tpg">
                    <div className="bar" style={{ flex: 1 }}><div className="bf" style={{ width: "0%" }} /></div>
                    <span className="tpct">0%</span>
                  </div>
                </div>
                <div className="tr-r">
                  <div className="pts">+25 pts</div>
                  <span className="pill pw"><i className="ti ti-player-play" />Start</span>
                  <button className="btn bo bxs" onClick={(e) => { e.stopPropagation(); onGo("stake"); }} style={{ marginTop: 3 }}>Begin</button>
                </div>
              </div>
 
            </div>
             <div className="mt-3">
              <div className="ch">
                <div className="ct">
                  <i className="ti ti-cash" style={{ marginRight: 6, color: "var(--gr)" }} />
                  Withdraw Rewards
                </div>
              </div>
              <label className="fl"><i className="ti ti-currency-dollar" style={{ fontSize: 12, marginRight: 4 }} />Amount (USDT)</label>
              <input className="fi" value="50.00" type="text" readOnly />
              <label className="fl"><i className="ti ti-network" style={{ fontSize: 12, marginRight: 4 }} />Network</label>
              <div className="np" style={{ marginBottom: 10 }}>
                <div className="netp on" onClick={() => onToast("TRC20 selected")}>TRC20</div>
                <div className="netp" onClick={() => onToast("BEP20 selected")}>BEP20 <span style={{ fontSize: 9, marginLeft: 3, color: "var(--glt)", fontWeight: 700 }}>BSC</span></div>
                <div className="netp" onClick={() => onToast("ERC20 selected")}>ERC20</div>
              </div>
              <label className="fl"><i className="ti ti-wallet" style={{ fontSize: 12, marginRight: 4 }} />Wallet Address</label>
              <input className="fi" value="TXjk3...9mQp" readOnly style={{ fontFamily: "monospace", fontSize: 12 }} />
              <div className="dv" />
              <div className="fr">
                <span className="fk"><i className="ti ti-receipt" style={{ fontSize: 11, marginRight: 4 }} />Processing Fee</span>
                <span className="fv">1 USDT</span>
              </div>
              <div className="fr">
                <span className="fk"><i className="ti ti-circle-check" style={{ fontSize: 11, marginRight: 4 }} />You Receive</span>
                <span className="fv" style={{ color: "var(--gr)" }}>49 USDT</span>
              </div>
              <div className="fr" style={{ marginBottom: 12 }}>
                <span className="fk"><i className="ti ti-clock" style={{ fontSize: 11, marginRight: 4 }} />Est. Arrival</span>
                <span className="fv">~5 min</span>
              </div>
              <button className="D-btn bg bfw" onClick={() => onToast("Withdrawal submitted — processing in ~5 min")}>
                <i className="ti ti-send" /> Submit Withdrawal
              </button>
            </div>
          </div>
        </div>

        {/* ── Rewards Wallet + Withdraw + VELT Token ── */}
        <div className="g3">
          <div className="card">
            <div className="ch">
              <div>
                <div className="ct">
                  <i className="ti ti-arrows-right-left" style={{ marginRight: 6, color: "var(--glt)" }} />
                  VELT → Fiat Exchange
                </div>
                <div className="cs">Live rates · BSC Chain · Instant settlement</div>
              </div>
              <span className="cl" onClick={() => onGo("exchange")}>Full Exchange ›</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div className="ex-lbl">
                  <i className="ti ti-send" style={{ fontSize: 11, marginRight: 4 }} />You send
                </div>
              <div className="ex-box">
                
                <div className="ex-row">
                  <input className="ex-amt" value="1000" readOnly />
                  <div className="ccy">
                    <div className="ccy-dot" style={{ background: "linear-gradient(135deg,#B8942A,#E6C44A)", color: "#fff", fontWeight: 900, fontSize: 10 }}>V</div>
                    VELT
                    <i className="ti ti-chevron-down" style={{ fontSize: 11, color: "var(--tx3)" }} />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="swap-btn" onClick={() => onToast("Currency pair swapped")}>
                  <i className="ti ti-arrows-up-down" />
                </div>
              </div> <div className="ex-lbl">
                  <i className="ti ti-download" style={{ fontSize: 11, marginRight: 4 }} />You receive
                </div>
              <div className="ex-box">
               
                <div className="ex-row">
                  <input className="ex-amt" value="0.90" readOnly style={{ color: "var(--glt)" }} />
                  <div className="ccy">
                    <div className="ccy-dot" style={{ background: "#16A34A", color: "#fff" }}>$</div>
                    USD
                    <i className="ti ti-chevron-down" style={{ fontSize: 11, color: "var(--tx3)" }} />
                  </div>
                </div>
              </div>
              <div className="rate-bar">
                <span>
                  <i className="ti ti-chart-line" style={{ fontSize: 11, marginRight: 4 }} />
                  1 VELT = $0.0009 USD &nbsp;·&nbsp; +80% since launch
                </span>
                <span><span className="live" />Live</span>
              </div>
              <div style={{ margin: "2px 0" }}>
                <div className="fr">
                  <span className="fk"><i className="ti ti-brand-binance" style={{ fontSize: 11, marginRight: 4 }} />BSC Network Fee</span>
                  <span className="fv">$0.10</span>
                </div>
                <div className="fr">
                  <span className="fk"><i className="ti ti-percentage" style={{ fontSize: 11, marginRight: 4 }} />Platform Fee (0.3%)</span>
                  <span className="fv">$0.003</span>
                </div>
                <div className="fr">
                  <span className="fk"><i className="ti ti-clock" style={{ fontSize: 11, marginRight: 4 }} />Est. Arrival</span>
                  <span className="fv" style={{ color: "var(--gr)" }}>~2 min</span>
                </div>
              </div>
              <button className="D-btn bg bfw" onClick={() => onToast("Exchange placed — funds arrive in ~2 min")}>
                <i className="ti ti-arrows-right-left" /> Confirm Exchange
              </button>
            </div>
          </div>
          <div className="card">
            <div className="ch">
              <div className="ct">
                <i className="ti ti-diamond" style={{ marginRight: 6, color: "var(--glt)" }} />
                Rewards Wallet
              </div>
              <span className="cl" onClick={() => onGo("rewards")}>Details ›</span>
            </div>
            <div className="pc">
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="46" fill="none" stroke="var(--sf3)" strokeWidth="9" />
                <circle cx="55" cy="55" r="46" fill="none" stroke="url(#rg0)" strokeWidth="9" strokeDasharray="202 289" strokeLinecap="round" transform="rotate(-90 55 55)" />
                <defs>
                  <linearGradient id="rg0">
                    <stop offset="0%" stopColor="#9A7020" />
                    <stop offset="100%" stopColor="#C9A03A" />
                  </linearGradient>
                </defs>
                <text x="55" y="51" textAnchor="middle" fill="var(--tx)" fontSize="17" fontWeight="700" fontFamily="Outfit,sans-serif">4,820</text>
                <text x="55" y="64" textAnchor="middle" fill="var(--tx3)" fontSize="8.5" fontFamily="Outfit,sans-serif" letterSpacing="1">POINTS</text>
              </svg>
            </div>
            <div className="g2" style={{ gap: 6, marginBottom: 10 }}>
              <div className="mst"><div className="mv">$96.40</div><div className="ml">USDT Value</div></div>
              <div className="mst"><div className="mv">2,400</div><div className="ml">For VELT</div></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <button className="D-btn bg bfw" onClick={() => onToast("Redeem flow opened — choose your reward!")}>
                <i className="ti ti-gift" /> Redeem Now
              </button>
              <button className="btn bo bfw" onClick={() => onGo("velt")}>
                <i className="ti ti-coin" /> Buy Velt Impera
              </button>
              <button className="btn bn bfw" onClick={() => onToast("Withdrawal form opened")}>
                <i className="ti ti-download" /> Withdraw as USDT
              </button>
            </div>

            <hr className="mt-5"/>

          
          </div>


          {/* VELT Token Card */}
          <div className="card">
            <div className="ch">
              <div className="ct">
                <i className="ti ti-brand-binance" style={{ marginRight: 6, color: "var(--gold)" }} />
                Velt Impera (VELT)
              </div>
              <span className="cl" onClick={() => onGo("velt")}>Trade ›</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 3 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--tx)" }}>$0.0009</div>
              <span className="chip up"><i className="ti ti-rocket" style={{ fontSize: 10 }} /> +80%</span>
            </div>
            <div style={{ fontSize: 11, color: "var(--tx3)", marginBottom: 4 }}>VELT/USDT · BSC Chain · 24h Vol: $2.4M</div>
            <div style={{ fontSize: 11, color: "var(--tx3)", marginBottom: 9, display: "flex", gap: 10 }}>
              <span><i className="ti ti-calendar" style={{ fontSize: 10, marginRight: 3 }} />Launch: Jul 27, 2025</span>
              <span style={{ color: "var(--gr)" }}><i className="ti ti-shield-check" style={{ fontSize: 10, marginRight: 3 }} />CertiK Verified</span>
            </div>
            <svg viewBox="0 0 170 44" style={{ width: "100%", height: 44, marginBottom: 9 }}>
              <defs>
                <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B8942A" stopOpacity=".18" />
                  <stop offset="100%" stopColor="#B8942A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline points="0,40 20,38 40,34 60,29 85,22 110,16 140,10 170,7" fill="none" stroke="var(--gold)" strokeWidth="1.8" />
              <polygon points="0,40 20,38 40,34 60,29 85,22 110,16 140,10 170,7 170,44 0,44" fill="url(#mg)" />
            </svg>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
              <div className="mst"><div className="mv">8,250</div><div className="ml"><i className="ti ti-coin" style={{ fontSize: 10, marginRight: 3 }} />Holdings (VELT)</div></div>
              <div className="mst"><div className="mv">$7.43</div><div className="ml"><i className="ti ti-currency-dollar" style={{ fontSize: 10, marginRight: 3 }} />USD Value</div></div>
              <div className="mst"><div className="mv">$0.0005</div><div className="ml"><i className="ti ti-flag" style={{ fontSize: 10, marginRight: 3 }} />Launch Price</div></div>
              <div className="mst"><div className="mv" style={{ color: "var(--gr)" }}>+80%</div><div className="ml"><i className="ti ti-trending-up" style={{ fontSize: 10, marginRight: 3 }} />Total Growth</div></div>
            </div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
              {[
                { icon: "ti-credit-card", label: "VISA Card" },
                { icon: "ti-world", label: "170+ Countries" },
                { icon: "ti-robot", label: "AI System" },
                { icon: "ti-lock", label: "Staking" },
              ].map((b) => (
                <span key={b.label} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "var(--gdim)", color: "var(--glt)", borderRadius: 6, padding: "2px 8px", fontSize: 10, fontWeight: 600 }}>
                  <i className={`ti ${b.icon}`} style={{ fontSize: 10 }} />{b.label}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="D-btn bg" style={{ flex: 1 }} onClick={() => onGo("velt")}>
                <i className="ti ti-shopping-cart" /> Buy VELT
              </button>
              <button className="btn bn" style={{ flex: 1 }} onClick={() => onGo("stake")}>
                <i className="ti ti-lock" /> Stake VELT
              </button>
            </div>

<hr className="mt-5"/>

      
          </div>
        </div>
<div className="g2">
      <div className="card">
              <div className="ch">
                <div className="ct">
                  <i className="ti ti-history" style={{ marginRight: 6, color: "var(--bl)" }} />
                  Recent Transactions
                </div>
                <span className="cl" onClick={() => onGo("transactions")}>View All ›</span>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table className="tbl">
                  <thead>
                    <tr>
                      <th style={{ width: 70 }}>Date</th>
                      <th style={{ width: 160 }}>Type</th>
                      <th style={{ width: 100 }}>Amount</th>
                      <th style={{ width: 65 }}>Currency</th>
                      <th>Status</th>
                      <th style={{ width: 85 }}>Txn ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: "Apr 28", icon: "ti-arrows-right-left", color: "var(--gr)", type: "VELT → USDT", amount: "1,000 VELT", cur: "USDT", status: "pill pd", sicon: "ti-check", slabel: "Success", id: "VLT-8842A" },
                      { date: "Apr 27", icon: "ti-gift", color: "var(--pu)", type: "Reward Redeem", amount: "500 pts", cur: "POINTS", status: "pill pd", sicon: "ti-check", slabel: "Success", id: "VLT-7731B" },
                      { date: "Apr 26", icon: "ti-download", color: "var(--am)", type: "USDT Withdraw", amount: "$49.00", cur: "USDT", status: "pill pw", sicon: "ti-clock", slabel: "Pending", id: "VLT-6620C" },
                      { date: "Apr 25", icon: "ti-shopping-cart", color: "var(--bl)", type: "VELT Purchase", amount: "10,000 VELT", cur: "VELT", status: "pill pd", sicon: "ti-check", slabel: "Success", id: "VLT-5512D" },
                      { date: "Apr 24", icon: "ti-lock", color: "var(--glt)", type: "VELT Staking", amount: "5,000 VELT", cur: "VELT", status: "pill pd", sicon: "ti-check", slabel: "Success", id: "VLT-4403E" },
                      { date: "Apr 23", icon: "ti-credit-card", color: "var(--rd)", type: "VISA Card Charge", amount: "$5.00", cur: "USD", status: "pill pf", sicon: "ti-x", slabel: "Failed", id: "VLT-3312F" },
                    ].map((row) => (
                      <tr key={row.id}>
                        <td>{row.date}</td>
                        <td>
                          <span className="td-dot" style={{ background: row.color }} />
                          <i className={`ti ${row.icon}`} style={{ fontSize: 10, marginRight: 4, color: row.color }} />
                          {row.type}
                        </td>
                        <td className="bo2">{row.amount}</td>
                        <td>{row.cur}</td>
                        <td><span className={row.status}><i className={`ti ${row.sicon}`} /> {row.slabel}</span></td>
                        <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>{row.id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
 
        {/* ── Recent Transactions ── */}
</div>


      </div>
    </div>
  );
}