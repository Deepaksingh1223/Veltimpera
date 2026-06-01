"use client";

import SidebarNav from "./components/SidebarNav";
import Topbar from "./components/Topbar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [dark, setDark] = useState(true); // ✅ Changed from false to true

  const toggleDark = () => {
    setDark(!dark);
  };
  
  return (
    <html lang="en">
      <head>
      </head>
      <body className="dashboard-body">
        <div id="mudra-dashboard-root-react"
          data-dk={dark ? "1" : undefined}
          style={{ minHeight: "100vh" }}
        >
          <div className="app">
            <SidebarNav />
            <div className="main">
              <Topbar
                dark={dark}
                onToggleDark={toggleDark}
                points={"4,820 pts"}
              />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}