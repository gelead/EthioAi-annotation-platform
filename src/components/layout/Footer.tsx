"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="container-ethio py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-400 flex items-center justify-center">
                <span className="text-black font-bold text-sm">EA</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">EthioAI</h3>
                <p className="text-zinc-400 text-sm">A Nile Academy Initiative for Sovereign AI</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Empowering Ethiopia&apos;s AI future through high-quality, ethically sourced data annotations
              tailored for Ethiopian languages and cultural context.
            </p>
          </div>

          {/* Platform Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Platform</h3>
            <nav className="space-y-3">
              <Link
                href="/services/image"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Image Annotation
              </Link>
              <Link
                href="/services/text"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Text Annotation
              </Link>
              <Link
                href="/services/audio"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Audio Annotation
              </Link>
              <Link
                href="/dashboard"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Dashboard
              </Link>
              <Link
                href="/workspace"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Workspace
              </Link>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <nav className="space-y-3">
              <Link
                href="/privacy"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Data Sovereignty Policy
              </Link>
              <Link
                href="/security"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Security Policy
              </Link>
              <Link
                href="/terms"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/compliance"
                className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                Compliance
              </Link>
            </nav>
          </div>

          {/* Contact Column - NEW */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <nav className="space-y-3">
              <a
                href="mailto:hello@ethioai.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@ethioai.com
              </a>
              <Link
                href="/demo"
                className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Book a Demo
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-white/10">
              <span className="text-zinc-500 text-sm">Follow us:</span>
              <a
                href="https://x.com/ethioai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/ethioai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-zinc-500">
              © 2025 EthioAI. A Nile Academy Initiative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
