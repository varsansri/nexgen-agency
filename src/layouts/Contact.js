"use client";
import { useState } from "react";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const hasRealEndpoint = contact_form_action && !contact_form_action.includes("your-form-id") && contact_form_action !== "#";

    if (hasRealEndpoint) {
      try {
        const res = await fetch(contact_form_action, { method: "POST", body: formData, headers: { Accept: "application/json" } });
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      setStatus("success");
      form.reset();
    }
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center mb-12")}
        <div className="row">
          <div className="col-12 md:col-6 lg:col-7">
            {status === "success" ? (
              <div className="card text-center py-16">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-text-dark mb-3">Message Sent!</h3>
                <p className="text-text">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input className="form-input w-full rounded-lg bg-body border-border text-text-dark" name="name" type="text" placeholder="Name" required />
                </div>
                <div className="mb-4">
                  <input className="form-input w-full rounded-lg bg-body border-border text-text-dark" name="email" type="email" placeholder="Your email" required />
                </div>
                <div className="mb-4">
                  <input className="form-input w-full rounded-lg bg-body border-border text-text-dark" name="subject" type="text" placeholder="Subject" required />
                </div>
                <div className="mb-4">
                  <textarea className="form-textarea w-full rounded-lg bg-body border-border text-text-dark" name="message" rows="6" placeholder="Your message" required />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm mb-4">Something went wrong. Please email us directly at hello@nexgendigital.com</p>
                )}
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-5 mt-10 md:mt-0 md:pl-10">
            {markdownify(info.title, "h3", "text-text-dark mb-4")}
            {markdownify(info.description, "p", "text-text mb-6")}
            <ul className="space-y-3">
              {info.contacts.map((contact, i) => (
                <li key={i} className="text-text-dark">{contact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
