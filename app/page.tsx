import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Stats } from "@/components/stats";
import { TestimonialGrid } from "@/components/testimonial-grid";
import { Work } from "@/components/work";
import { CaseStudies } from "@/components/case-studies";
import { Comparison } from "@/components/comparison";
import { ProcessTimeline } from "@/components/process-timeline";
import { Services } from "@/components/services";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { BookCall } from "@/components/book-call";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      {/* Background noise/grain overlay for premium feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50 mix-blend-overlay" />

      <Navbar />
      <Hero />
      <SocialProof />
      <Stats />
      <TestimonialGrid />
      <Work />
      <CaseStudies />
      <Comparison />
      <ProcessTimeline />
      <Services />
      <BookCall />
      <FAQ />
      <Footer />
    </main>
  );
}
