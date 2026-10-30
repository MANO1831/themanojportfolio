import "../styles/Works1.css";

const projects = [
  {
    title: "Sol productivity app",
    summary: "Designing a focused task management experience for remote teams",
    variant: "product",
  },
  {
    title: "Finova Dashboard",
    summary: "Designing a scalable financial platform for real-time decision making",
    variant: "dashboard",
  },
  {
    title: "Amin SaaS Landing",
    summary: "Conversion-focused website for a growing B2B SaaS product",
    variant: "landing",
  },
  {
    title: "E-commerce Redesign",
    summary: "Streamlining shopping experience for a modern lifestyle brand",
    variant: "commerce",
  },
];

export default function WorksSection() {
  return (
    <section className="works-section" id="works" aria-labelledby="recent-work-title">
      <div className="works-deco works-deco-top" aria-hidden="true" />

      <header className="works-header">
        <span className="works-kicker">
           <span className="experience-eyebrow">
                      Featured projects
 <span aria-hidden="true" />
        </span>
          {/* <span className="works-kicker-dot" aria-hidden="true" />
          (02) Featured projects */}
        </span>
        <h2 id="recent-work-title">My recent works</h2>
        <span className="works-line" aria-hidden="true" />
      </header>

      <div className="works-grid" role="list" aria-label="Featured work items">
        {projects.map((project) => (
          <article key={project.title} className={`work-card work-card--${project.variant}`} role="listitem">
            <div className="work-card__visual" aria-hidden="true">
              <span className="card-arrow" aria-hidden="true">↗</span>
              {project.variant === "product" && (
                <>
                  <span className="mock-box" />
                  <span className="mock-box-text">paper<br />mockp</span>
                </>
              )}
              {project.variant === "dashboard" && (
                <>
                  <span className="dashboard-plate" />
                  <span className="dashboard-screen">
                    <span className="dashboard-chip">L</span>
                    <span className="dashboard-text">Mockups</span>
                    <span className="dashboard-count">13</span>
                  </span>
                </>
              )}
              {project.variant === "landing" && (
                <>
                  <span className="landing-stack" />
                  <span className="landing-stack landing-stack--two" />
                  <span className="landing-stack landing-stack--three" />
                  <span className="landing-copy">[mockp]</span>
                </>
              )}
              {project.variant === "commerce" && (
                <>
                  <span className="phone-shell">
                    <span className="phone-notch" />
                    <span className="phone-screen">
                      <span className="phone-label">iPhone 15</span>
                      <span className="phone-mock">Mockup</span>
                      <span className="phone-number">15</span>
                    </span>
                  </span>
                </>
              )}
            </div>

            <div className="work-card__meta">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="works-cta-wrap">
        <a href="#contact" className="works-cta">
          See all work
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="works-deco works-deco-bottom" aria-hidden="true" />
    </section>
  );
}
