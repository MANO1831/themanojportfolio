"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";
import experienceBanner from "@/src/assets/experience-bg.jpg";

const formFields = [
  { label: "Your Name", placeholder: "Enter your name", type: "text" },
  { label: "Your Email", placeholder: "Enter your email address", type: "email" },
  { label: "Your Phone", placeholder: "Enter your phone number", type: "tel" },
  { label: "Project Type", placeholder: "Select a project type", type: "text" },
];


const recipientEmail = "manomano1831@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${recipientEmail}`;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    const subject = formData.projectType
      ? `Project enquiry: ${formData.projectType}`
      : "New project enquiry";

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: subject,
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Message could not be sent.");

      setSubmitState("success");
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <Reveal id="contact" className="contact-section">
      <div className="contact-left-column">
        <div className="contact-copy">
          <span className="contact-script">Let&apos;s Connect</span>
          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            Have a project in mind or looking for a creative designer? I&apos;d love to hear from you.
            Let&apos;s discuss your ideas and create something meaningful together.
          </p>
        </div>

        <div className="contact-visual-wrap">
          <div className="contact-visual" aria-hidden="true">
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
        </div>
      </div>

      <div className="contact-form-panel">
        <h3>Send Me a Message</h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.label} className="field-group">
              <label htmlFor={field.label.toLowerCase().replaceAll(" ", "-")}>{field.label}</label>
              <input
                id={field.label.toLowerCase().replaceAll(" ", "-")}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.label === "Your Name" ? "name" : field.label === "Your Email" ? "email" : field.label === "Your Phone" ? "phone" : "projectType"]}
                onChange={(event) => updateField(field.label === "Your Name" ? "name" : field.label === "Your Email" ? "email" : field.label === "Your Phone" ? "phone" : "projectType", event.target.value)}
                required={field.label === "Your Name" || field.label === "Your Email"}
              />
            </div>
          ))}

          <div className="field-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Tell me about your project, goals, and requirements."
              rows={5}
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={submitState === "sending"}>
            {submitState === "sending" ? "Sending..." : "Send Message"} <span aria-hidden="true">→</span>
          </button>
          {submitState === "success" ? <p className="form-status success" role="status">Thanks. Your message was sent successfully.</p> : null}
          {submitState === "error" ? <p className="form-status error" role="alert">The message could not be sent. Please try again or email {recipientEmail} directly.</p> : null}
        </form>
      </div>
    </Reveal>
  );
}
