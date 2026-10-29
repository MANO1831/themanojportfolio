"use client";

import Image from "next/image";
import { motion } from "motion/react";
import portrait from "@/src/assets/hero-portrait1.png";
import { Reveal } from "./Reveal";

const heroTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Hero() {
  return (
    <Reveal id="top" className="hero-section" threshold={0.05}>
      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heroTransition, delay: 0.05 }}
        >
          <h1>
            <span>Turning</span>
            <span>imagination into</span>
            <span>visual impact.</span>
          </h1>
          <p className="summary">
            Transforming creative ideas into impactful visuals, meaningful brand
            identities, and engaging digital experiences.
          </p>

          <div className="cta-row">
            <a className="primary-btn" href="#works">
              See My Work
            </a>
            <a className="secondary-btn" href="#contact">
              Start Project
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...heroTransition, delay: 0.18 }}
        >
          <Image
            className="hero-foreground"
            src={portrait}
            alt=""
            priority
            sizes="(max-width: 768px) 90vw, 46vw"
          />
        </motion.div>
      </div>
    </Reveal>
  );
}
