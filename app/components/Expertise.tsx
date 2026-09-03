const services = [
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
  },
  {
    title: "Visual Communication Design",
    description:
      "Creating compelling designs that communicate messages clearly through strong layouts, typography, imagery, and visual storytelling.",
  },
  {
    title: "Branding & Identity Design",
    description:
      "Developing memorable brand identities through logos, color systems, typography, brand guidelines, and consistent visual language.",
  },
  {
    title: "Digital Marketing Design",
    description:
      "Creating social media creatives, campaign graphics, advertisements, and promotional content that capture attention and support marketing goals.",
  },
  {
    title: "Web Design",
    description:
      "Designing clean, responsive websites that balance aesthetics, functionality, usability, and strong visual communication.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      {/* <div className="expertise-header">
        <span className="section-script">What I Do</span>
        <div className="expertise-title-wrap">
          <h2 className="expertise-title">My Expertise</h2>
          <div className="expertise-watermark" aria-hidden="true">
            EXPERTISE
          </div>
        </div>
      </div> */}

    <div className="expertise-header">
        <span className="works-script">What I Do</span>
        <h2> My Expertise</h2>
  <div className="expertise-watermark" aria-hidden="true">
            EXPERTISE
          </div>
      </div>


      <div className="expertise-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden="true" />
            <h3>{service.title}</h3>
            <span className="service-accent" aria-hidden="true" />
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
