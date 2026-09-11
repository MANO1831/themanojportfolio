import Image from "next/image";
import { Mail } from "lucide-react";
import logo from "@/src/assets/manoj logo.png";
import darkLogo from "@/src/assets/manoj logo white.png";
import { Reveal } from "./Reveal";

const socials = [
  { label: "Behance",
    href: "https://www.behance.net/manomano27",
    icon: <span className="behance-icon">Be</span> },
  { label: "Mail",
    href: "mailto:manomano1831@gmail.com",
    icon: <Mail aria-hidden="true" size={20} strokeWidth={1.8} /> },
  { label: "LinkedIn", 
    href: "https://www.linkedin.com/in/manoj-m-b5b27b228/",
    icon: <span className="linkedin-icon">in</span> },
  { label: "Instagram",
    href: "https://www.instagram.com/sundara_kuttan08/?hl=en",
    icon: <span className="instagram-icon" aria-hidden="true" /> },
];

export function CommunityFooter() {
  return (
    <Reveal as="footer" className="community-footer" threshold={0.05}>
      <div className="community-block">
        <span className="community-script">Let&apos;s Join</span>
        <h2>
          <span>Our</span> Community
        </h2>

        <div className="social-row" aria-label="Social media links">
          {socials.map((social) => (
            <a
              href={social.href}
              key={social.label}
              className="social-badge"
              aria-label={social.label}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-meta">
        <span className="footer-logo-wrap">
          <Image className="footer-logo" src={darkLogo} alt="Manoj Portfolio" width={1440} height={1024} />
          <Image className="footer-logo-text-overlay" src={darkLogo} alt="" width={1440} height={1024} />
        </span>

        <div className="copyright">
          <span>® 2026 Mano&apos;s Portfolio</span>
          <strong>-</strong>
          All Rights Reserved.
        </div>
      </div>
    </Reveal>
  );
}
