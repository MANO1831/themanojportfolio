import Image from "next/image";
import experienceBanner from "@/src/assets/image 3.png";

const roles = [
  {
    period: "2023-2024",
    title: "Junior Fullstack Developer",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    icon: "</>",
  },
  {
    period: "2024-2025",
    title: "Freelance Graphic Designer",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    icon: "✦",
  },
  {
    period: "2024-2025",
    title: "Visual Communication Designer",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    icon: "▣",
  },
];

export function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <span className="experience-script">My Journey</span>
        <h2>Experience</h2>
      </div>

      <p className="experience-subtitle">
        A journey of growth, creativity, and continuous learning. Here&apos;s a look at my professional
        experience so far.
      </p>

      <div className="experience-visual" aria-hidden="true">
        <div className="experience-scene">
          <Image
            src={experienceBanner}
            alt=""
            fill
            priority
            className="experience-banner-image"
          />
        </div>
      </div>

      <div className="experience-cards">
        {roles.map((role) => (
          <article key={role.title} className="experience-card">
            <div className="experience-icon">{role.icon}</div>
            <div className="experience-card-date">{role.period}</div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
