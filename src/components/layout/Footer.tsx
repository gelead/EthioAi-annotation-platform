"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="container-ethio py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              Empowering Ethiopia's AI future through high-quality, ethically sourced data annotations 
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
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-zinc-500">
              © 2025 EthioAI. A Nile Academy Initiative
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a 
                href="https://twitter.com/ethioai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 00-1.804.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/ethioai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/ethioai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-1.008 2.665-1.008 2.52 0 4.608 1.734 5.475 4.092.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="mailto:hello@ethioai.com" 
                className="text-amber-500 hover:text-amber-400 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
