"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ page, onGo }) {
  const pathname = usePathname();

  // Function to check if current path matches the link
  const isActive = (path) => {
    if (path === "/dashboard" && pathname === "/dashboard") {
      return true;
    }
    // For nested routes, check if current path starts with the href
    if (path !== "/dashboard" && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <nav className="sb vi-sidebar">
      <div className="logo-row vi-logo-wrap">
        <img
          className="Dashboard-img"
          alt="MDR Futuristics Crypto Card"
          loading="lazy"
          width="150"
          height="150"
          src="/img/dashboard-logo.png"
        />
      </div>

      <div className="nav">
        <span className="nav-sec">Overview</span>

        <Link
          className={"ni " + (isActive("/dashboard") ? "on" : "")}
          href="/dashboard"
        >
          <i className="ti ti-layout-dashboard" aria-hidden="true" />Dashboard
        </Link>

        <Link
          className={"ni " + (isActive("/dashboard/my-card") ? "on" : "")}
          href="/dashboard/my-card"
        >
          <i className="ti ti-credit-card" aria-hidden="true" />Task Center <span className="nb">12</span>
        </Link>

        <Link
          className={"ni " + (isActive("/dashboard/payment") ? "on" : "")}
          href="/dashboard/payment"
        >
          <i className="ti ti-send" aria-hidden="true" />My Tasks
        </Link>
        <Link
          className={"ni " + (isActive("/dashboard/exchange") ? "on" : "")}
          href="/dashboard/exchange"
        >
          <i className="ti ti-arrows-right-left" aria-hidden="true" />Task History
        </Link>

        <span className="nav-sec">REWARDS</span> 

        <Link
          className={"ni " + (isActive("/dashboard/tasks") ? "on" : "")}
          href="/dashboard/tasks"
        >
          <i className="ti ti-checklist" aria-hidden="true" />Rewards Wallet 
        </Link>

        <Link
          className={"ni " + (isActive("/dashboard/rewards") ? "on" : "")}
          href="/dashboard/rewards"
        >
          <i className="ti ti-star" aria-hidden="true" />Redeem Rewards
        </Link>

        <Link
          className={"ni " + (isActive("/dashboard/mdr-token") ? "on" : "")}
          href="/dashboard/mdr-token"
        >
          <i className="ti ti-coin" aria-hidden="true" /> VIP Status
        </Link> 
        <Link
          className={"ni " + (isActive("/dashboard/membership-plan") ? "on" : "")}
          href="/dashboard/membership-plan"
        >
          <i className="ti ti-award" aria-hidden="true" /> Achievements
        </Link>

        <Link
          className={"ni " + (isActive("/dashboard/transaction") ? "on" : "")}
          href="/dashboard/transaction"
        >
          <i className="ti ti-receipt" aria-hidden="true" />Leaderboard
        </Link>

   <span className="nav-sec">GROW</span> 

        <Link
          className={"ni " + (isActive("/dashboard/Referral") ? "on" : "")}
          href="/dashboard/Referral"
        >
          <i className="ti ti-help-circle" aria-hidden="true" />Referrals
        </Link>

        <Link
          className={"ni " + (isActive("/dashboard/Notifications") ? "on" : "")}
          href="/dashboard/Notifications"
        >
          <i className="ti ti-settings" aria-hidden="true" /> Notifications <span className="nb">5</span>
        </Link>
          <Link
          className={"ni " + (isActive("/dashboard/settings") ? "on" : "")}
          href="/dashboard/settings"
        >
          <i className="ti ti-settings" aria-hidden="true" /> Profile  
        </Link>
          <Link
          className={"ni " + (isActive("/dashboard/support") ? "on" : "")}
          href="/dashboard/support"
        >
          <i className="ti ti-settings" aria-hidden="true" /> Support 
        </Link>
      </div>

      <div className="sb-foot">
        <div className="usr" onClick={() => onGo("settings")}>
          <div className="av">AK</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--tx)" }}>Arjun Kapoor</div>
            <div style={{ fontSize: 10, color: "var(--tx3)" }}>MUD-2847 · Gold</div>
          </div>
          <i
            className="ti ti-chevron-right"
            style={{ marginLeft: "auto", fontSize: 14, color: "var(--tx3)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
  );
}