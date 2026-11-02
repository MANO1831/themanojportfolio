import Image from "next/image";
import portrait from "@/src/assets/hero-portrait2.png";
import { Reveal } from "./Reveal";

const facts = [
  {
    label: "Primary focus",
    value: "Brand identity & digital experiences",
  },
  {
    label: "Design",
    value: "Visual storytelling & user-focused design",
  },
  {
    label: "Disciplines",
    value: "Branding · UI/UX · digital marketing",
  },
  {
    label: "Background",
    value: "Full-stack development & visual design",
  },
];

export default function AboutMe() {
  return (
    <Reveal className="about-section" id="about">
      <div className="about-layout">
         <article className="about-profile-card" aria-labelledby="about-profile-name">
          <div className="about-profile-header">
            <span className="about-profile-monogram" aria-hidden="true">
              M
            </span>
            <span className="about-profile-header-copy">
              <strong>DESIGNER</strong>
              <span>Nov 2025 — Present</span>
            </span>
            <span className="about-profile-status">Verified</span>
          </div>

          <div className="about-profile-body">
            <div className="about-profile-copy">
              <h3 id="about-profile-name" className="about-profile-name">
                Manoj M.
              </h3>
              <span className="about-profile-heading-accent" aria-hidden="true" />
              <p className="about-profile-role">Visual Communication Designer</p>

              <div className="about-profile-details">
                <div>
                  <span className="about-detail-icon" aria-hidden="true">✦</span>
                  <span className="about-detail-copy">
                    <small>FOCUS</small>
                    <strong>Brand &amp; Digital</strong>
                  </span>
                </div>
                <div>
                  <span className="about-detail-icon about-detail-icon--target" aria-hidden="true">◎</span>
                  <span className="about-detail-copy">
                    <small>APPROACH</small>
                    <strong>Ideas with purpose</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="about-profile-orbit" aria-hidden="true" />
            <div className="about-profile-photo">
              <Image
                src={portrait}
                alt="Portrait of Manoj"
                fill
                sizes="(max-width: 760px) 75vw, 330px"
              />
            </div>

            <div className="about-profile-footer">
              <span className="about-profile-barcode" aria-hidden="true" />
              <span>VISUALS THAT COMMUNICATE</span>
            </div>
          </div>
        </article>
        <div className="about-intro">
          <div className="about-eyebrow">
            <span>ABOUT</span>
            <span className="about-eyebrow-line" aria-hidden="true" />
          </div>

          <h2 className="about-title">
            <span>Hi, I&apos;m</span>
            <em>Manoj.</em>
          </h2>

          <p className="about-lead">
            I turn ideas into visuals that communicate.
          </p>

          <p className="about-description">
            I combine creative thinking, visual storytelling, and user-focused
            design to make clear, engaging experiences. From brand identity and
            digital marketing to UI/UX, I balance aesthetics with function so
            every design communicates with purpose.
          </p>

          <div className="about-actions">
            <a className="about-action-primary" href="/resume.pdf" download>
              Résumé <span aria-hidden="true">↓</span>
            </a>
            <a
              className="about-action-secondary"
              href="https://www.behance.net/manomano27"
              target="_blank"
              rel="noreferrer"
            >
              Behance <span aria-hidden="true">↗</span>
            </a>
            <a
              className="about-action-secondary"
              href="https://www.linkedin.com/in/manoj-m-b5b27b228/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* <aside className="about-facts" aria-label="Quick facts about Manoj">
          <div className="about-facts-eyebrow">QUICK FACTS</div>

          <dl className="about-facts-list">
            {facts.map((fact) => (
              <div className="about-fact-row" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="about-quote">
            Great design should look good, communicate clearly, and leave a
            lasting impression.
          </blockquote>
        </aside> */}
      </div>
    </Reveal>
  );
}
