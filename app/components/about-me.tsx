"use client";

import Image from "next/image";
import { motion } from "motion/react";
import background from "@/src/assets/about-idea.png";
import { Reveal } from "./Reveal";

const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function AboutMe() {
  return (
    <Reveal className="about-section" id="about">
      <motion.div
        className="about-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...revealTransition }}
      >
        <h2>
          ABOUT <span>ME</span>
        </h2>

        <p className="lead">
          I turn ideas into visuals that communicate.
        </p>

        <p>
          My approach combines creative thinking, visual storytelling, and
          user-focused design to transform ideas into clear and engaging
          experiences. I enjoy exploring the balance between aesthetics and
          functionality, ensuring that every design not only looks good but
          also communicates with purpose. From brand identity and digital
          marketing to UI/UX design, I work across different areas of design
          to solve visual and communication challenges.
        </p>

        <div className="drive-block">
          <div className="quote-mark">“</div>
          <div className="drive-copy">
            <h3>What drives me</h3>
            <p>
              I believe great design is more than aesthetics. It should capture
              attention, communicate clearly, solve problems, and create a
              lasting impression.
            </p>
          </div>
        </div>

        <div className="works-script">Think. Create. Communicate.</div>
      </motion.div>
      <motion.div
        className="hero-visual"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.96, x: 24 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ ...revealTransition, delay: 0.1 }}
      >
        <Image
          className="hero-foreground"
          src={background}
          alt=""
          width={1440}
          height={1024}
          priority
        />
      </motion.div>
    </Reveal>
  );
}