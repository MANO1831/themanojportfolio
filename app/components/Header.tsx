"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/src/assets/manoj logo.png";
const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`topbar${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="#top" aria-label="Manoj portfolio home" onClick={() => setMenuOpen(false)}>
        <Image src={logo} alt="Manoj Portfolio" width={360} height={130} priority />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {menuOpen ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
      </button>

      <nav id="main-navigation" className="nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-item" onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="talk-btn" href="#contact" onClick={() => setMenuOpen(false)}>
        Let&apos;s Talk
      </a>
    </header>
  );
}
