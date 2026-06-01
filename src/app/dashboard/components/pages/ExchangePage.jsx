"use client";

import { useMemo, useState } from "react";

export default function ExchangePage({ onGo, onToast }) {
  const [sendAmount, setSendAmount] = useState(0.42);

  const rate = 67842;
  const platformFeePct = 0.003;

  const receive = useMemo(() => {
    const v = Number(sendAmount) || 0;
    return v * rate;
  }, [sendAmount]);

  const networkFee = useMemo(() => 2.40, []);
  const platformFee = useMemo(() => {
    const v = Number(sendAmount) || 0;
    return v * rate * platformFeePct;
  }, [sendAmount]);

  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Task History</span>
      </div>
      <div className="h1">Task History</div>
      
      <div >
        <div className="vi-card">
          <div className="vi-card-body" style={{ padding: 0 }}>
            <table className="vi-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Platform</th>
                  <th>Date</th>
                  <th>Points</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Search — Debit Card</td>
                  <td>🔍 Google</td>
                  <td>Today</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+20</td>
                  <td><span className="vi-status vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>YouTube Watch &amp; Like Task</td>
                  <td>📺 YouTube</td>
                  <td>Today</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+15</td>
                  <td><span className="vi-status vi-status-pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Instagram Follow Campaign</td>
                  <td>📸 Instagram</td>
                  <td>Yesterday</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+25</td>
                  <td><span className="vi-status vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>WhatsApp Status 24h Task</td>
                  <td>💬 WhatsApp</td>
                  <td>2 days ago</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+30</td>
                  <td><span className="vi-status vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>X Retweet Campaign</td>
                  <td>🐦 X/Twitter</td>
                  <td>3 days ago</td>
                  <td style={{ color: "#c03030", fontWeight: 700 }}>0</td>
                  <td><span className="vi-status vi-status-rejected">Rejected</span></td>
                </tr>
                <tr>
                  <td>Telegram Group Join Task</td>
                  <td>✈️ Telegram</td>
                  <td>4 days ago</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+18</td>
                  <td><span className="vi-status vi-status-approved">Approved</span></td>
                </tr>
                <tr>
                  <td>Survey — Product Feedback</td>
                  <td>📋 Survey</td>
                  <td>5 days ago</td>
                  <td style={{ color: "var(--vi-green)", fontWeight: 700 }}>+50</td>
                  <td><span className="vi-status vi-status-approved">Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}