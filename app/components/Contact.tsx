"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const recipientEmail = "manomano1831@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${recipientEmail}`;

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/manomano27", icon: "Be" },
  { label: "Instagram", href: "https://www.instagram.com/sundara_kuttan08/?hl=en", icon: "◎" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manoj-m-b5b27b228/", icon: "in" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("sending");

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Project enquiry",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Message could not be sent.");

      setSubmitState("success");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <Reveal id="contact">
      <span className="contact-edge-marker" aria-hidden="true" />

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="contact-intro">
          <span className="contact-pill">
            Contact <span className="contact-pill-dot" aria-hidden="true" />
          </span>
          <h2 className="contact-big-title">Let&apos;s create.</h2>
          <p className="contact-copy">
            Ready to shape something great together? Skip the small talk and tell me about your project.
          </p>
          <span className="contact-accent" aria-hidden="true" />
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field-row">
            <div className="field-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="contact-project-type">Project type</label>
            <select
              id="contact-project-type"
              name="projectType"
              value={formData.projectType}
              onChange={(event) => updateField("projectType", event.target.value)}
              required
            >
              <option value="" disabled>Select a project type</option>
              <option value="Brand identity">Brand identity</option>
              <option value="Web design">Web design</option>
              <option value="Visual design">Visual design</option>
              <option value="Other">Something else</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="contact-message">Tell me about your project</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="A few details about what you have in mind..."
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              required
            />
          </div>

          <nav className="contact-socials" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.label}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </nav>

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={submitState === "sending"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {submitState === "sending" ? "Sending..." : "Send a Message"}
          </motion.button>

          {submitState === "success" ? (
            <p className="form-status success" role="status">Thanks. Your message was sent successfully.</p>
          ) : null}
          {submitState === "error" ? (
            <p className="form-status error" role="alert">
              The message could not be sent. Please try again or email {recipientEmail} directly.
            </p>
          ) : null}
        </form>
      </motion.div>

      <span className="contact-edge-marker" aria-hidden="true" />
    </Reveal>
  );
}
