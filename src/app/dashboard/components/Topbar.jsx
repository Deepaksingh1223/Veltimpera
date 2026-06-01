"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FiSun, FiMoon } from "react-icons/fi"; 
import { FiUser } from "react-icons/fi";

export default function Topbar({ onToggleDark, onGo, points, dark }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    
    const sidebar = document.querySelector('.sb');
    if (sidebar) {
      if (newState) {
        sidebar.style.transform = 'translateX(0%)';
      } else {
        sidebar.style.transform = 'translateX(-100%)';
      }
    }
  };

  return (
    <div className="topbar">
      <div className="ticker">
        <div className="tk">
          <span className="tk-s">BTC</span>
          <span className="tk-p">$67,842</span>
          <span className="chip up">+2.4%</span>
        </div>
        <div className="tk">
          <span className="tk-s">ETH</span>
          <span className="tk-p">$3,491</span>
          <span className="chip up">+1.8%</span>
        </div>
        <div className="tk">
          <span className="tk-s">Velt</span>
          <span className="tk-p">$0.0009</span> 
        </div> 
      </div>

      <div className="tb-r">
    

        

        <div className="tb-bal">
          <FiUser size={12} />
          User ID : 0001
        </div> 
           <button 
          className="tbi" 
          onClick={onToggleDark} 
          aria-label="Toggle theme"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>
            {/* Hamburger / Close Menu Button */}
        <button 
          className="tbi hamburger" 
          onClick={handleToggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

     
      </div>
    </div>
  );
}