import { Layout, Megaphone, Monitor, Palette, PenTool } from "lucide-react";

const services = [
  {
    title: "UI/UX\nDesign",
    icon: <Monitor aria-hidden="true" size={30} strokeWidth={1.8} />,
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
  },
  {
    title: "Visual Communication Design",
    icon: <PenTool aria-hidden="true" size={30} strokeWidth={1.8} />,
    description:
      "Creating compelling designs that communicate messages clearly through strong layouts, typography, imagery, and visual storytelling.",
  },
  {
    title: "Branding & Identity Design",
    icon: <Palette aria-hidden="true" size={30} strokeWidth={1.8} />,
    description:
      "Developing memorable brand identities through logos, color systems, typography, brand guidelines, and consistent visual language.",
  },
  {
    title: "Digital Marketing Design",
    icon: <Megaphone aria-hidden="true" size={30} strokeWidth={1.8} />,
    description:
      "Creating social media creatives, campaign graphics, advertisements, and promotional content that capture attention and support marketing goals.",
  },
  {
    title: "Web\nDesign",
    icon: <Layout aria-hidden="true" size={30} strokeWidth={1.8} />,
    description:
      "Designing clean, responsive websites that balance aesthetics, functionality, usability, and strong visual communication.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-header">
        <span className="works-script">What I Do</span>
        <div className="expertise-title-wrap">
          <h3 className="expertise-title">My Expertise</h3>
          {/* <div className="expertise-watermark" aria-hidden="true">
            EXPERTISE
          </div> */}
        </div>
      </div>

      <div className="expertise-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <span className="service-accent" aria-hidden="true" />
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
