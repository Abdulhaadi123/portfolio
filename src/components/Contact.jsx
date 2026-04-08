"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
//contact form
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.error || "Unknown error");
      }

      toast.success("Message Sent!", {
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Oops—something went wrong.", {
        description: err.message,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 pro-card p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:rana.talha3d@gmail.com" className="text-white hover:text-blue-300 transition-colors">
                      rana.talha3d@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 pro-card p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a href="https://github.com/Talha5t5" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-blue-300 transition-colors">
                      github.com/Talha5t5
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 pro-card p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/rana-talha-28275427a/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-blue-300 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pro-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Additional Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-blue-300">Phone:</span> 03229687307</p>
                <p><span className="text-blue-300">Location:</span> Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-600/50 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-600/50 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-600/50 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isSending
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25"
                }`}
              >
                {isSending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;   