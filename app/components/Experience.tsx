"use client";

import Image from "next/image";
import { motion } from "motion/react";
import experienceBanner from "@/src/assets/image 3.png";
import { Reveal } from "./Reveal";

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
    period: "2025-still working",
    title: "Visual Communication Designer",
    description:
      "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, visual hierarchy, and seamless user experiences.",
    icon: "▣",
  },
];

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Experience() {
  return (
    <Reveal id="experience" className="experience-section">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...revealTransition }}
      >
        <span className="experience-script">My Journey</span>
        <h2>Experience</h2>
      </motion.div>

      <motion.p
        className="experience-subtitle"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...revealTransition, delay: 0.08 }}
      >
        A journey of growth, creativity, and continuous learning. Here&apos;s a look at my professional
        experience so far.
      </motion.p>

      <motion.div
        className="experience-visual"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...revealTransition, delay: 0.12 }}
      >
        <div className="experience-scene">
          <Image
            src={experienceBanner}
            alt=""
            fill
            priority
            className="experience-banner-image"
          />
        </div>
      </motion.div>

      <div className="experience-cards">
        {roles.map((role, index) => (
          <motion.article
            key={role.title}
            className="experience-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...revealTransition, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="experience-icon">{role.icon}</div>
            <div className="experience-card-date">{role.period}</div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}
