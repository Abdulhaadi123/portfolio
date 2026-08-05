"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const SectionHeading = ({ label, title, subtitle }) => (
  <div className="text-center mb-16">
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-3 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
      {label}
    </span>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2">{title}</h2>
    <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
    {subtitle && <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm">{subtitle}</p>}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cfb81423-c073-45c2-96ec-e864c3a4a493",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          from_name: "Abdul Hadi Portfolio",
        }),
      });
      const body = await res.json();
      if (!res.ok || !body.success) {
        throw new Error(body.message || "Failed to send message");
      }
      toast.success("Message Sent!", {
        description: "Thank you! Your message has been delivered directly to my inbox.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong.", { description: err.message });
    } finally {
      setIsSending(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "abdulhadi86411@gmail.com",
      href: "mailto:abdulhadi86411@gmail.com",
      color: "from-violet-500 to-indigo-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Abdulhaadi123",
      href: "https://github.com/Abdulhaadi123",
      color: "from-slate-500 to-slate-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abdul Hadi",
      href: "https://www.linkedin.com/in/abdul-hadi-6b2162247/",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 312 652 6771",
      href: "tel:+923126526771",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all duration-200 text-sm";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Say Hello"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to connect? My inbox is always open."
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left – Contact info */}
          <div className="space-y-5">
            <div className="pro-card p-6">
              <h3 className="text-white font-bold mb-1">Let's talk</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether you need a full-stack web app, an AI-powered system, or just want to say hi —
                feel free to reach out. I typically respond within 24 hours.
              </p>

              <div className="space-y-3">
                {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
                      <p className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors break-all sm:break-normal">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pro-card p-5 flex items-center gap-3">
              <MapPin size={16} className="text-violet-400 shrink-0" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Location</p>
                <p className="text-sm text-slate-300 font-medium">DHA Multan, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="pro-card p-7">
            <h3 className="text-white font-bold mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Your Name</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  required className={inputClass} placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email Address</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  required className={inputClass} placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/20 ${
                  isSending ? 'opacity-60 cursor-not-allowed' : ''
                }`}
                style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1,#06b6d4)' }}
              >
                {isSending
                  ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                  : <><Send size={15} /> Send Message</>
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;