"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const faqs = [
  {
    question: "How long does it take to start seeing results?",
    answer: "Most of our clients see measurable growth within the first 30 days of consistent posting and implementation of our content strategy.",
  },
  {
    question: "Do I need to send my own raw footage?",
    answer: "Yes, you provide the raw footage and our team of expert editors takes care of everything from curation to final export.",
  },
  {
    question: "What platforms do you specialize in?",
    answer: "We specialize in YouTube (Shorts & Long-form), TikTok, and Instagram Reels. We also handle multi-platform distribution.",
  },
  {
    question: "How many videos can I expect per month?",
    answer: "This depends on your selected package, but our standard strategy typically involves 15-30 short-form clips and 4 long-form videos per month.",
  },
  {
    question: "Can you help with scripting and ideas?",
    answer: "Absolutely! Every client gets a dedicated strategist who helps with viral ideation and script development.",
  },
  {
    question: "Is there a long-term commitment?",
    answer: "We offer month-to-month flexibility for most of our services, though we recommend a 3-month commitment for optimal results and branding consistency.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1} width="100%">
      <div 
        className={`group relative w-full mb-4 px-8 py-6 rounded-[2rem] glass-card border-white/5 cursor-pointer transition-all duration-300 hover:border-white/15 ${isOpen ? "bg-white/[0.03] border-white/20" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-6">
             <HelpCircle className={`w-6 h-6 ${isOpen ? "text-accent" : "text-muted"}`} />
             <h3 className="text-xl md:text-2xl font-display font-medium text-white/90 group-hover:text-white">
                {faq.question}
             </h3>
          </div>
          <div className={`p-2 rounded-full border border-white/10 ${isOpen ? "bg-accent/20 border-accent/30 text-accent" : "text-muted"} transition-all duration-300`}>
             {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-3xl">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Frequently Asked Questions.</h2>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">Everything you need to know about partnering with DudePix Media.</p>

          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] glow-blue opacity-10 pointer-events-none" />
    </section>
  );
};
