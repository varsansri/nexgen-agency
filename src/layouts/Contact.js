"use client";
import { useState } from "react";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { FiCheckCircle, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import LiquidGlassCard from "@layouts/components/LiquidGlassCard";

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
              <LiquidGlassCard className="text-center py-16 px-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4 border border-emerald-500/30">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-white mb-3 font-bold">Message Sent Successfully!</h3>
                <p className="text-text/90">Thank you for reaching out. We will respond to your inquiry within 24 business hours.</p>
              </LiquidGlassCard>
            ) : (
              <LiquidGlassCard className="p-8">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="text-white text-xl font-bold mb-6">Send Us a Message</h3>
                  <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
                    <input className="form-input w-full rounded-xl bg-body/90 border-white/15 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="name" type="text" placeholder="John Doe" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
                    <input className="form-input w-full rounded-xl bg-body/90 border-white/15 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">Subject</label>
                    <input className="form-input w-full rounded-xl bg-body/90 border-white/15 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="subject" type="text" placeholder="Project Inquiry / Consultation" required />
                  </div>
                  <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2">Message</label>
                    <textarea className="form-textarea w-full rounded-xl bg-body/90 border-white/15 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all p-3.5" name="message" rows="5" placeholder="Tell us about your project goals, timelines, and budget..." required />
                  </div>
                  {status === "error" && (
                    <div className="p-4 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                      Something went wrong. Please email us directly at hello@nexgendigital.com
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary w-full shadow-lg shadow-primary/20 py-4">Send Message →</button>
                </form>
              </LiquidGlassCard>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-5 mt-10 md:mt-0 md:pl-10">
            <LiquidGlassCard className="p-8 h-full">
              {markdownify(info.title, "h3", "text-white font-bold mb-4")}
              {markdownify(info.description, "p", "text-text/90 leading-relaxed mb-8")}
              <ul className="space-y-4">
                {info.contacts.map((contact, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium p-3.5 rounded-xl bg-body/90 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/30">
                      {i === 0 ? <FiMapPin className="w-5 h-5" /> : i === 1 ? <FiMail className="w-5 h-5" /> : <FiPhone className="w-5 h-5" />}
                    </div>
                    <span>{contact}</span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
