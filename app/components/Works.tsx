const filters = ["All", "UI/UX Design", "Branding", "Graphic Design", "Web Design"];

const projects = [
  {
    title: "Contra Branding",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "3dots Branding",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contra",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contra Branding",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contra Branding",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contra Branding",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contra Branding",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Contra Branding",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Works() {
  return (
    <section id="works" className="works-section">
      <div className="works-header">
        <span className="works-script">My Recent Work</span>
        <h2 style={{ fontWeight: 400 }}>
          Creative Designs.
          <br />
          Meaningful Experiences.
        </h2>
      </div>

      <div className="works-filters" aria-label="Project filters">
        {filters.map((filter, index) => (
          <button key={filter} className={index === 0 ? "filter-button active" : "filter-button"} type="button">
            {filter}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {projects.map((project) => (
          <article key={project.title + project.image} className="work-card">
            <div className="work-image-wrap">
              <img src={project.image} alt={project.title} className="work-image" />
            </div>

            <div className="work-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" className="work-link">
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
