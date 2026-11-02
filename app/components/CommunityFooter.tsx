import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
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
      <div className="footer-inner">
        <div className="community-block">
          <div className="footer-intro">
            <span className="community-script">THE NEXT IDEA STARTS HERE</span>
            <h2>
              Let&apos;s make
              <br />
              <span>something meaningful.</span>
            </h2>
            <p>
              Thoughtful design, bold ideas, and new work—follow along or let&apos;s
              create something together.
            </p>
          </div>

          <a className="footer-contact-link" href="#contact">
            Have a project in mind?
            <span>
              Let&apos;s talk <ArrowUpRight aria-hidden="true" size={18} />
            </span>
          </a>
        </div>

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
              <span>{social.label}</span>
              {social.href.startsWith("http") && (
                <ArrowUpRight aria-hidden="true" className="social-arrow" size={14} />
              )}
            </a>
          ))}
        </div>

        <div className="footer-divider" />

        <div className="footer-meta">
          <span className="footer-logo-wrap">
            <Image className="footer-logo" src={darkLogo} alt="Manoj Portfolio" width={1440} height={1024} />
          </span>

          <div className="copyright">
            <span>© 2026 Mano&apos;s Portfolio</span>
            <span>All rights reserved.</span>
          </div>

          <a className="footer-back-to-top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </Reveal>
  );
}
