const formFields = [
  { label: "Your Name", placeholder: "Enter your name", type: "text" },
  { label: "Your Email", placeholder: "Enter your email address", type: "email" },
  { label: "Your Phone", placeholder: "Enter your phone number", type: "tel" },
  { label: "Project Type", placeholder: "Select a project type", type: "text" },
];
import { Reveal } from "./Reveal";

export function Contact() {
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
            <div className="contact-visual-inner" />
          </div>
        </div>
      </div>

      <div className="contact-form-panel">
        <h3>Send Me a Message</h3>

        <div className="contact-form">
          {formFields.map((field) => (
            <div key={field.label} className="field-group">
              <label>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} />
            </div>
          ))}

          <div className="field-group">
            <label>Your Message</label>
            <textarea placeholder="Tell me about your project, goals, and requirements." rows={5} />
          </div>

          <button type="button" className="submit-btn">
            Send Message <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </Reveal>
  );
}
