const filters = ["All", "UI/UX Design", "Branding", "Graphic Design", "Web Design"];
import { Reveal } from "./Reveal";

const projects = [
  {
    id: "previous-logo-overview",
    title: "Previous Logo Overview",
    description: "Logo exploration and identity direction focused on clarity, character, and standout brand presence.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/850524247893737.Y3JvcCw1NTIzLDQzMjAsMTA4MCww.jpg",
    href: "https://www.behance.net/gallery/247893737/Previous-Logo-Overview",
  },
  {
    id: "3dots-brand-identity",
    title: "3dots - BRAND IDENTITY",
    description: "A compact brand identity project built around bold communication, visual rhythm, and modern storytelling.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/945d2c246880577.Y3JvcCw1MzY5LDQyMDAsMTE5LDA.jpg",
    href: "https://www.behance.net/gallery/246880577/3dots-BRAND-IDENTITY",
  },
  {
    id: "ambiospace-interior-design-app",
    title: "Ambiospace Interior Design Application Prototype",
    description: "Interior design app concept designed to make planning, curation, and visualization intuitive and immersive.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/27f56b234864021.Y3JvcCwzNTA4LDI3NDQsMTMwLDA.jpg",
    href: "https://www.behance.net/gallery/234864021/Ambiospace-Interior-Deisgn-Application-Prototype",
  },
  {
    id: "fitness-app-onboarding",
    title: "Fitness Application Onboarding Screens",
    description: "Onboarding UX crafted to create an energetic first impression and smooth user activation flow.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1295a6234862203.Y3JvcCwxMDMwLDgwNiwxOTYsNjEy.png",
    href: "https://www.behance.net/gallery/234862203/Fitness-Application-Onboarding-Screens",
  },
  {
    id: "branding",
    title: "Branding",
    description: "Branding exploration that balances personality, consistency, and market-ready visual identity.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/472311234462007.Y3JvcCwyNDgwLDE5MzksMCw2NTY.jpg",
    href: "https://www.behance.net/gallery/234462007/Branding",
  },
  {
    id: "onam-festival-poster",
    title: "Onam Festival Poster",
    description: "Festival poster designed to celebrate culture, color, and tradition through expressive visual storytelling.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/95ae1c234071599.Y3JvcCwzODQwLDMwMDMsMCwxMTM1OA.jpg",
    href: "https://www.behance.net/gallery/234071599/Onam-Festival-Poster",
  },
  {
    id: "product-manipulation",
    title: "Product Manipulation",
    description: "Visual product manipulation crafted to enhance perception, impact, and premium presentation.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cba861230228591.Y3JvcCwyODYyLDIyMzksODc4LDM2OA.jpg",
    href: "https://www.behance.net/gallery/230228591/Product-Manipulation",
  },
  {
    id: "cyber-security-website",
    title: "Cyber Security Website",
    description: "Security-focused website design built around trust, clarity, and a strong digital-first user journey.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f3e4df229717867.Y3JvcCwxODU0LDE0NTAsNTczLDM5OQ.jpg",
    href: "https://www.behance.net/gallery/229717867/Cyber-Security-Website",
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    description: "Conversion-focused landing page design crafted for better attention flow and stronger call-to-action impact.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c775ce227001913.Y3JvcCwzODQwLDMwMDMsMCww.jpg",
    href: "https://www.behance.net/gallery/227001913/Landing-Page-Design",
  },
  {
    id: "adventure-trip-website-design",
    title: "Adventure Trip Website Design",
    description: "Travel experience design created to spark excitement, discovery, and easy booking decisions.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d0e1a8225707695.Y3JvcCwzODM1LDMwMDAsODUsMA.png",
    href: "https://www.behance.net/gallery/225707695/Adventure-Trip-Website-Design",
  },
  {
    id: "interior-design-app-ui",
    title: "Interior Design Application UI Design",
    description: "UI system for an interior planning app focused on elegant navigation and visually rich browsing.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9824f8225658937.Y3JvcCwxNDAwLDEwOTUsMCww.jpg",
    href: "https://www.behance.net/gallery/225658937/Interior-Design-Application-UI-Design",
  },
  {
    id: "interior-design-app-ux",
    title: "Interior Design Application UX Design",
    description: "User-centered product flow for interior design discovery, planning, and decision making.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c046d5225657229.Y3JvcCwxMjIzLDk1NiwwLDA.jpg",
    href: "https://www.behance.net/gallery/225657229/Interior-Design-Application-UX-Design",
  },
];

export function Works() {
  return (
    <Reveal id="works" className="works-section">
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
          <article key={project.id} className="work-card">
            <div className="work-image-wrap">
              <img src={project.image} alt={project.title} className="work-image" />
            </div>

            <div className="work-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer" className="work-link">
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
