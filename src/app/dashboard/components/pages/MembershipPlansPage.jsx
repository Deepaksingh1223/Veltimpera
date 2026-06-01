"use client";

import { MdEmojiEvents, MdTask, MdVerified } from "react-icons/md";
import { FaFire, FaBolt, FaUsers, FaSearch, FaShareAlt, FaChartLine } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

export default function MembershipPlansPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Achievements</span>
      </div>

      <div className="h1">Achievements</div>
      
      <div >
        <div className="vi-badge-grid" style={{ marginBottom: "14px" }}>
          <div className="vi-badge earned">
            <div className="vi-badge-icon"><MdEmojiEvents /></div>
            <div className="vi-badge-name">First Task</div>
            <div className="vi-badge-prog" style={{ color: "var(--vi-green)" }}>Earned</div>
          </div>
          <div className="vi-badge earned">
            <div className="vi-badge-icon"><MdTask /></div>
            <div className="vi-badge-name">100 Tasks</div>
            <div className="vi-badge-prog" style={{ color: "var(--vi-green)" }}>Earned</div>
          </div>
          <div className="vi-badge">
            <div className="vi-badge-icon"><FaFire /></div>
            <div className="vi-badge-name">500 Tasks</div>
            <div className="vi-badge-prog">183 / 500</div>
          </div>
          <div className="vi-badge">
            <div className="vi-badge-icon"><FaBolt /></div>
            <div className="vi-badge-name">1000 Tasks</div>
            <div className="vi-badge-prog">183 / 1000</div>
          </div>
          <div className="vi-badge earned">
            <div className="vi-badge-icon"><FaUsers /></div>
            <div className="vi-badge-name">Referral Champ</div>
            <div className="vi-badge-prog" style={{ color: "var(--vi-green)" }}>Earned</div>
          </div>
          <div className="vi-badge earned">
            <div className="vi-badge-icon"><FaSearch /></div>
            <div className="vi-badge-name">Search Master</div>
            <div className="vi-badge-prog" style={{ color: "var(--vi-green)" }}>Earned</div>
          </div>
          <div className="vi-badge">
            <div className="vi-badge-icon"><FaShareAlt /></div>
            <div className="vi-badge-name">Social Influencer</div>
            <div className="vi-badge-prog">34 / 50 tasks</div>
          </div>
          <div className="vi-badge">
            <div className="vi-badge-icon"><FaChartLine /></div>
            <div className="vi-badge-name">Leaderboard Hero</div>
            <div className="vi-badge-prog">Rank 8 / need 5</div>
          </div>
        </div>
        
        <div className="vi-card">
          <div className="vi-card-header">
            <div className="vi-card-title">Progress Toward Next Badge</div>
          </div>
          <div className="vi-card-body">
            <div style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: 500, color: "var(--tx)" }}>500 Tasks Badge</span>
                <span style={{ fontSize: "12px", color: "var(--vi-green)", fontWeight: 700 }}>183 / 500</span>
              </div>
              <div style={{ height: "6px", background: "var(--vi-surface2)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "37%", background: "linear-gradient(90deg,var(--vi-green),var(--vi-green-mid))", borderRadius: "3px" }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: 500, color: "var(--tx)" }}>Social Influencer</span>
                <span style={{ fontSize: "12px", color: "var(--vi-green)", fontWeight: 700 }}>34 / 50</span>
              </div>
              <div style={{ height: "6px", background: "var(--vi-surface2)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "68%", background: "linear-gradient(90deg,var(--vi-green),var(--vi-green-mid))", borderRadius: "3px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}