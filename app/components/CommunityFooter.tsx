import Image from "next/image";
import { Mail } from "lucide-react";
import logo from "@/src/assets/manoj logo.png";
import { Reveal } from "./Reveal";

const socials = [
  { label: "Behance", icon: <span className="behance-icon">Be</span> },
  { label: "Mail", icon: <Mail aria-hidden="true" size={20} strokeWidth={1.8} /> },
  { label: "LinkedIn", icon: <span className="linkedin-icon">in</span> },
  { label: "Instagram", icon: <span className="instagram-icon">ig</span> },
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
            <a href="#" key={social.label} className="social-badge" aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-meta">
        <Image className="footer-logo" src={logo} alt="Manoj Portfolio" width={1440} height={1024} />

        <div className="copyright">
          <span>® 2026 Mano&apos;s Portfolio</span>
          <strong>-</strong>
          All Rights Reserved.
        </div>
      </div>
    </Reveal>
  );
}
