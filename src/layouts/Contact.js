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
        {markdownify(title, "h1", "text-center mb-4 font-bold")}
        <p className="text-center text-text text-lg max-w-xl mx-auto mb-12">Have a project in mind or want to learn more? Reach out to our team today.</p>
        
        <div className="row items-start">
          <div className="col-12 md:col-6 lg:col-7">
            {status === "success" ? (
              <div className="card text-center py-16 border-emerald-500/30 bg-emerald-500/5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-3xl mx-auto mb-4 font-bold">✓</div>
                <h3 className="text-text-dark mb-3 font-bold">Message Sent Successfully!</h3>
                <p className="text-text">Thank you for reaching out. We will respond to your inquiry within 24 business hours.</p>
              </div>
            ) : (
              <form className="contact-form bg-body border border-border p-8 rounded-2xl shadow-sm" onSubmit={handleSubmit}>
                <h3 className="text-text-dark text-xl font-bold mb-6">Send Us a Message</h3>
                <div className="mb-4">
                  <label className="block text-text-dark text-sm font-semibold mb-2">Full Name</label>
                  <input className="form-input w-full rounded-xl bg-body border-border text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="name" type="text" placeholder="John Doe" required />
                </div>
                <div className="mb-4">
                  <label className="block text-text-dark text-sm font-semibold mb-2">Email Address</label>
                  <input className="form-input w-full rounded-xl bg-body border-border text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="mb-4">
                  <label className="block text-text-dark text-sm font-semibold mb-2">Subject</label>
                  <input className="form-input w-full rounded-xl bg-body border-border text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="subject" type="text" placeholder="Project Inquiry / Consultation" required />
                </div>
                <div className="mb-6">
                  <label className="block text-text-dark text-sm font-semibold mb-2">Message</label>
                  <textarea className="form-textarea w-full rounded-xl bg-body border-border text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="message" rows="5" placeholder="Tell us about your project goals, timelines, and budget..." required />
                </div>
                {status === "error" && (
                  <div className="p-4 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-sm">
                    Something went wrong. Please email us directly at hello@nexgendigital.com
                  </div>
                )}
                <button type="submit" className="btn btn-primary w-full shadow-lg shadow-primary/20 py-4">Send Message →</button>
              </form>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-5 mt-10 md:mt-0 md:pl-10">
            <div className="bg-light p-8 rounded-2xl border border-border h-full">
              {markdownify(info.title, "h3", "text-text-dark font-bold mb-4")}
              {markdownify(info.description, "p", "text-text leading-relaxed mb-8")}
              <ul className="space-y-4">
                {info.contacts.map((contact, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-dark font-medium p-3 rounded-xl bg-body border border-border/60">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {i === 0 ? "📍" : i === 1 ? "✉️" : "📞"}
                    </span>
                    <span>{contact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
