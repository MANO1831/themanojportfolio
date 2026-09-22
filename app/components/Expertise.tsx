"use client";

import { motion } from "motion/react";
import { Layout, Megaphone, Monitor, Palette, PenTool } from "lucide-react";
import { Reveal } from "./Reveal";

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

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Expertise() {
  return (
    <Reveal id="expertise" className="expertise-section">
      <motion.div
        className="expertise-header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...revealTransition }}
      >
        <span className="works-script">What I Do</span>
        <div className="expertise-title-wrap">
          <h3 className="expertise-title">My Expertise</h3>
        </div>
      </motion.div>

      <div className="expertise-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...revealTransition, delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <span className="service-accent" aria-hidden="true" />
            <p>{service.description}</p>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}
