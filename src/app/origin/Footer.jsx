"use client";

export default function Footer({ className = "" }) {
  return (
    <footer className={`footer py-[34px] px-4 sm:px-6 lg:px-10 border-t border-[rgba(34,201,122,0.08)] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 ${className}`}>
      <div className="fc text-xs text-[#6b7d72] text-center sm:text-left">
        © 2025 Velt Impera. Powered by Veltrixa. All rights reserved.
      </div>
      <div className="ft text-xs text-[#6b7d72] text-center sm:text-right">
        Built for the <span className="text-[#22c97a]">community-powered</span> future of digital growth.
      </div>
    </footer>
  );
}