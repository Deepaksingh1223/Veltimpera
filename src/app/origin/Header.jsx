"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { RiRocketLine, RiCompassLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "#solution", label: "Solution" },
    { href: "#howitworks", label: "How It Works" },
    { href: "#tasks", label: "Tasks" },
    { href: "#token", label: "VELT Token" },
    { href: "#community", label: "Community" },
  ];
    const router = useRouter();

  return (
    <> 
    
      {/* ── FIXED SHELL ── */}
      <div className="velt-header-shell">

        {/* Powered Bar */}
        <div className="velt-pbar">
          Powered by <span>Veltrixa</span>&nbsp;·&nbsp;Community-Powered Digital Growth Ecosystem
        </div>

        {/* Navbar */}
        <nav className={`velt-nav${scrolled ? " scrolled" : ""}`}>
          <div className="velt-nav-inner">

            {/* Logo */}
            <a href="/" className="velt-logo">
              <img src="/logo.png" alt="Veltrixa" />
            </a>

            {/* Desktop Links */}
            <ul className="velt-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="velt-cta">
              <button className="velt-btn-ghost" onClick={() => router.push("/Login")}>
                <RiCompassLine size={14} />
                Explore Ecosystem
              </button>
              <button className="velt-btn-primary"  onClick={() => router.push("/Register")}>
                <RiRocketLine size={14} />
                Launch Campaign
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="velt-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>

          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div className="velt-spacer" />

      {/* ── MOBILE OVERLAY ── */}
      <div className={`velt-overlay${menuOpen ? " open" : ""}`}>
        <div className="velt-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="velt-panel">

          <ul className="velt-mobile-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <hr className="velt-divider" />

          <div className="velt-mobile-cta">
            <button className="velt-btn-ghost" onClick={() => router.push("/Login")}>
              <RiCompassLine size={16} />
              Explore Ecosystem
            </button>
            <button className="velt-btn-primary"  onClick={() => router.push("/Register")}>
              <RiRocketLine size={16} />
              Launch Campaign
            </button>
          </div>

          <p className="velt-powered">
            Powered by <span>Veltrixa</span>
          </p>
        </div>
      </div>
    </>
  );
}