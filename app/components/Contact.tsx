"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Consultation Request from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested In: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@nazihsidhomcpa.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactItems = [
    {
      label: "Office Location",
      value: "Cypress, California",
      detail: "Serving the greater Los Angeles area",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "Call for appointment",
      detail: "Available during business hours",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      label: "In Business Since",
      value: "1992",
      detail: "Over 30 years serving clients",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Get in Touch
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out to schedule your consultation. We&apos;ll take the time to
            understand your needs and explain how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 border border-zinc-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/8 rounded-xl flex items-center justify-center text-navy flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-navy font-semibold text-base">
                      {item.value}
                    </p>
                    <p className="text-zinc-400 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Highlight box */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-gold text-sm font-medium">
                  Free Initial Consultation
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                We offer a complimentary initial consultation to discuss your
                needs and determine how we can best serve you.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-gold/15 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-500">
                    Your email client should open. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-navy mb-1">
                    Send Us a Message
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-zinc-400 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-zinc-400 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-zinc-400 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="Tax Planning">Tax Planning</option>
                        <option value="Tax Preparation">Tax Preparation</option>
                        <option value="Accounting Services">
                          Accounting Services
                        </option>
                        <option value="Estate Planning">Estate Planning</option>
                        <option value="Investment Services">
                          Investment Services
                        </option>
                        <option value="Cash Management">Cash Management</option>
                        <option value="Computer Consulting">
                          Computer Consulting
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-zinc-400 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-colors resize-none"
                      placeholder="Tell us about your situation and how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-white font-semibold py-4 rounded-xl hover:bg-navy-dark transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}