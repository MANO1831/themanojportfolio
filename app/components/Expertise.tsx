"use client";

import { Code2, Layout, Megaphone, Monitor, Palette, PenTool } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "UI/UX Design",
    category: "Digital Products & Interfaces",
    description:
      "Intuitive, accessible interfaces shaped around clear user flows, visual hierarchy, and enjoyable experiences.",
    icon: <Monitor aria-hidden="true" size={22} strokeWidth={1.8} />,
  },
  {
    title: "UI Development",
    category: "React.js & Frontend Development",
    description:
      "Building responsive, reusable React.js interfaces that bring polished designs to life across screen sizes.",
    icon: <Code2 aria-hidden="true" size={22} strokeWidth={1.8} />,
  },
  {
    title: "Visual Communication",
    category: "Graphic Design & Storytelling",
    description:
      "Clear, compelling visuals that bring ideas to life through considered layouts, typography, and imagery.",
    icon: <PenTool aria-hidden="true" size={22} strokeWidth={1.8} />,
  },
  {
    title: "Branding & Identity",
    category: "Logos & Visual Systems",
    description:
      "Memorable brand identities built from distinctive logos, color systems, typography, and consistent visual language.",
    icon: <Palette aria-hidden="true" size={22} strokeWidth={1.8} />,
  },
  {
    title: "Digital Marketing",
    category: "Digital Marketing Design",
    description:
      "Social media creatives, campaign graphics, and promotional visuals designed to capture attention and support marketing goals.",
    icon: <Megaphone aria-hidden="true" size={22} strokeWidth={1.8} />,
  },
  {
    title: "Web Design",
    category: "Responsive Websites",
    description:
      "Clean, responsive websites that balance visual appeal, functionality, usability, and clear communication.",
    icon: <Layout aria-hidden="true" size={22} strokeWidth={1.8} />,
  },
];

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Expertise() {
  return (
    <Reveal id="expertise" className="expertise-section">
      <span className="expertise-edge-accent expertise-edge-accent-top" aria-hidden="true" />

      <header className="expertise-header">
        <motion.span
          className="expertise-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={revealTransition}
        >
          Services <span aria-hidden="true" />
        </motion.span>
        <motion.h2
          className="expertise-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.06 }}
        >
          A Composition of My Skills
        </motion.h2>
        <motion.p
          className="expertise-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.12 }}
        >
          Six ways I shape ideas into visual experiences that connect.
        </motion.p>
        <span className="expertise-heading-accent" aria-hidden="true" />
      </header>

      <ul className="expertise-list">
        {services.map((service, index) => (
          <motion.li
            key={service.title}
            className="expertise-row"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...revealTransition, delay: index * 0.08 }}
          >
            <div className="expertise-service">
              <span className="expertise-service-icon">{service.icon}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.category}</p>
              </div>
            </div>
            <p className="expertise-description">{service.description}</p>
            <span className="expertise-row-marker" aria-hidden="true" />
          </motion.li>
        ))}
      </ul>

      <span className="expertise-edge-accent expertise-edge-accent-bottom" aria-hidden="true" />
    </Reveal>
  );
}
