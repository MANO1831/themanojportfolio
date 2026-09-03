import Image from "next/image";
import logo from "@/src/assets/manoj logo.png";
const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];
export function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Manoj portfolio home">
        <Image src={logo} alt="Manoj Portfolio" width={360} height={130} priority />
      </a>

    <nav className="nav" aria-label="Main navigation">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className="nav-item">
          {item.label}
        </a>
      ))}
    </nav>

      <a className="talk-btn" href="#contact">
        Let&apos;s Talk
      </a>
    </header>
  );
}
