const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="nav" aria-label="Main navigation">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className="nav-item">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
