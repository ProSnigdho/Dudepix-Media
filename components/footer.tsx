"use client";

import React from "react";
import { MoveRight, Mail, Instagram, MessageSquare } from "lucide-react"; // Added MessageSquare for WhatsApp
import { Button } from "./button";
import { ScrollReveal } from "./scroll-reveal";
import Link from "next/link";
import { useState } from "react";
import { LegalModal } from "./privacy/legal-modal";
import { PrivacyPolicyContent } from "./privacy/privacy-policy";
import { TermsOfServiceContent } from "./privacy/terms-of-service";

export const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="relative bg-[#050505] overflow-hidden">
      {/* Final CTA Inner Section */}
      <section className="py-24 border-b border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-accent opacity-20 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
              Ready To <span className="text-gradient">Dominate Your Niche?</span>
            </h2>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-muted mb-12">
              Join 500+ successful creators and brands who have scaled their presence with DudePix Media.
            </p>
            <Button
              size="lg"
              className="group"
              onClick={() => {
                const element = document.getElementById('book-call');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Apply To Work With Us
              <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Footer Info */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white uppercase">D</div>
              <span className="font-display font-bold text-2xl tracking-tight uppercase">DudePix Media</span>
            </Link>
            <p className="text-muted text-lg max-w-sm leading-relaxed mb-8">
              Building the next generation of social-first brands through high-impact content and strategic distribution.
            </p>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/dudepixmedia/"
                target="_blank"
                className="w-10 h-10 rounded-full glass-card border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-accent/40 transition-all duration-300"
              >
                <Instagram size={20} />
              </Link>
              {/* WhatsApp */}
              <Link
                href="https://wa.me/8801932553797"
                target="_blank"
                className="w-10 h-10 rounded-full glass-card border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-accent/40 transition-all duration-300"
              >
                <MessageSquare size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-white/40">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#review" className="text-muted hover:text-accent transition-colors">Review</Link></li>
              <li><Link href="#work" className="text-muted hover:text-accent transition-colors">Work</Link></li>
              <li><Link href="#case-study" className="text-muted hover:text-accent transition-colors">Case Study</Link></li>
              <li><Link href="#process" className="text-muted hover:text-accent transition-colors">Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-white/40">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:infodudepix@gmail.com"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <Mail size={18} className="text-accent group-hover:scale-110 transition-transform" />
                  <span>infodudepix@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <span className="text-xs text-white/20 uppercase tracking-widest">Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
          <span>&copy; 2026 DudePix Media Digital. All rights reserved.</span>
          <div className="flex gap-8">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Legal Modals */}
        <LegalModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
          title="Privacy Policy"
        >
          <PrivacyPolicyContent />
        </LegalModal>

        <LegalModal
          isOpen={isTermsOpen}
          onClose={() => setIsTermsOpen(false)}
          title="Terms of Service"
        >
          <TermsOfServiceContent />
        </LegalModal>
      </div>

      <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] glow-purple opacity-20 -z-10" />
    </footer>
  );
};