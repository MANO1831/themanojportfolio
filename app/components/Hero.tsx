import Image from "next/image";
import background from "@/src/assets/Background.png";
import foreground from "@/src/assets/hero-portrait.png";
import { Reveal } from "./Reveal";


export function Hero() {
  return (
    <Reveal id="top" className="hero-section" threshold={0.05}>
      <Image
        className="hero-background"
        src={background}
        alt=""
        fill
        priority
        aria-hidden="true"
      />

      <div className="hero-copy">
        <span className="eyebrow">Hai I&apos;m</span>
        <h1>
          Manoj M
        </h1>
        <p className="summary">
          I&apos;m a Visual Communication Designer with 1.5 years of professional
          experience, passionate about creating meaningful visual identities,
          digital experiences, branding, and user-focused designs.
        </p>

        <div className="cta-row">
          <a className="primary-btn" href="#contact">
            Hire Me
          </a>
          <a className="secondary-btn" href="#works">
            See My Work
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <Image
          className="hero-foreground"
          src={foreground}
          alt=""
          width={1440}
          height={1024}
          priority
        />
      </div>

      <div className="hero-title">
        <span>GRAPHIC &amp;</span>
        <strong>
          <span>UI/UX DESIGNER</span>
        </strong>
      </div>
    </Reveal>
  );
}
