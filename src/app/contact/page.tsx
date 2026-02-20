"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send
} from "lucide-react";

const contactInfo = [
  {
    title: "General Inquiries",
    description: "Questions about EthioAI, our mission, or how we work.",
    email: "hello@ethioai.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Technical Support",
    description: "Issues with the platform, accounts, or annotation tools.",
    email: "support@ethioai.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Partnerships",
    description: "Collaborations with government, universities, and businesses.",
    email: "partners@ethioai.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-start/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-mid/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-ethio relative z-10 pt-24 pb-32">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gold-mid text-sm font-bold tracking-widest uppercase mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl heading-premium font-bold mb-8 text-gold-gradient"
          >
            Connect With EthioAI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            Whether you're an annotator, researcher, or institution, we're here to help you 
            build the future of AI in Ethiopia.
          </motion.p>
        </motion.header>

        {/* Contact Cards */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid gap-8 md:grid-cols-3 mb-24"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-gold-mid/50 rounded-3xl p-8 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-start/5 to-transparent pointer-events-none rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-gold-mid/20 flex items-center justify-center mb-6 text-gold-mid">
                  {item.icon}
                </div>
                
                <h3 className="text-xl heading-premium font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <a 
                  href={`mailto:${item.email}`}
                  className="inline-flex items-center gap-2 text-gold-mid text-sm font-medium hover:text-gold-mid/80 transition-colors gold-underline-hover"
                >
                  {item.email}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Contact Form and Map */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start"
        >
          {/* Contact Form */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-zinc-900/50 border border-zinc-800 hover:border-gold-mid/30 rounded-3xl p-8 lg:p-12 transition-all duration-500"
          >
            <div className="relative z-10">
              <h2 className="text-3xl heading-premium font-bold text-white mb-4">
                Send us a message
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Share your needs and we'll connect you with the right team. 
                We typically respond within 24 business hours.
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-gold-mid focus:outline-none focus:ring-2 focus:ring-gold-mid/20 transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-gold-mid focus:outline-none focus:ring-2 focus:ring-gold-mid/20 transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-base text-white focus:border-gold-mid focus:outline-none focus:ring-2 focus:ring-gold-mid/20 transition-all"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="annotator">Join as Annotator</option>
                    <option value="government">Government Partnership</option>
                    <option value="business">Business Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-gold-mid focus:outline-none focus:ring-2 focus:ring-gold-mid/20 transition-all resize-none"
                    placeholder="Tell us how we can help. Please include timelines, data types, and any key constraints."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gold-gradient text-black font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-gold-glow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Office Location */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-zinc-900/50 border border-zinc-800 hover:border-gold-mid/30 rounded-3xl overflow-hidden transition-all duration-500"
          >
            <div className="p-6 border-b border-zinc-800">
              <h3 className="text-xl heading-premium font-bold text-white mb-2">
                Nile Academy Office
              </h3>
              <p className="text-zinc-400 text-sm">
                Addis Ababa, Ethiopia
              </p>
            </div>
            
            <div className="h-80 bg-gradient-to-br from-gold-start/10 to-transparent relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-gold-mid/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-gold-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gold-mid font-medium">Visit Us</p>
                  <p className="text-zinc-400 text-sm mt-1">Bole, Addis Ababa</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

