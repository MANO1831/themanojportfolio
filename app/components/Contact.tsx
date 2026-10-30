"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const recipientEmail = "manomano1831@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${recipientEmail}`;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <Reveal id="contact" className="contact-shell">
      <div className="contact-header-row">
        <div className="contact-title-tag">
          <span className="experience-eyebrow">
            Let&apos;s Work Together <span aria-hidden="true" />
          </span>
        </div>

        {/* <div className="contact-meta">
          <span>(CQ°—13)</span>
          <span>©2025</span>
        </div> */}
      </div>

      <div className="contact-layout">
        <motion.div
          className="contact-left-column"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <button type="button" className="contact-pill-btn">
            <span className="contact-pill-icon" aria-hidden="true">✦</span>
            <span>Contact Now</span>
          </button>

          <h2 className="contact-big-title">Contact Me!</h2>

          <p className="contact-copy">
            Let&apos;s create something amazing together! Reach out and I&apos;d love to hear about your project and ideas.
          </p>

          <div className="contact-support-list">
            <div className="support-item">
              <span className="support-plus" aria-hidden="true">+</span>
              <span>24/7 Full Time Support</span>
            </div>
            <div className="support-item">
              <span className="support-plus" aria-hidden="true">+</span>
              <span>Available Worldwide</span>
            </div>
          </div>

          <button type="button" className="contact-cta-button">
            <span className="contact-cta-circle" aria-hidden="true">→</span>
            <span>Contact now</span>
          </button>
        </motion.div>

        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <div className="form-corner" aria-hidden="true" />

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                type="text"
                placeholder=""
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                type="email"
                placeholder=""
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={submitState === "sending"}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitState === "sending" ? "Sending..." : "Submit Now"}
            </motion.button>

            {submitState === "success" ? (
              <p className="form-status success" role="status">Thanks. Your message was sent successfully.</p>
            ) : null}
            {submitState === "error" ? (
              <p className="form-status error" role="alert">The message could not be sent. Please try again or email {recipientEmail} directly.</p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </Reveal>
  );
}
