"use client";

import Slider from "@/components/Home/Slider";
import Stats from "@/components/Home/Stats";
import Featured from "@/components/Home/Featured";
import Experience from "@/components/Home/Experience";
import CTA from "@/components/Home/CTA";
import Testimonials from "@/components/Home/Testimonials";
import VistLocation from "@/components/Home/vistLocation";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Slider />
      <Stats />
      <Featured />
      <CTA />
      <Testimonials />
      <Experience />
      <VistLocation />
    </div>
  );
}
