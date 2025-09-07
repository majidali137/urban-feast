"use client";

import HeroSection from "@/components/Shared/HeroSection";
import Gallery from "@/components/Venue/Gallery";
import VirtualTour from "@/components/Venue/VirtualTour";
import CTA from "@/components/Home/CTA";
import EventHosting from "@/components/Venue/EventHosting";

export default function VenuePage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        backgroundImage="/Venue.jpg"
        title="Our"
        highlight="Venue"
        description="Culinary masterpieces crafted with passion and precision"
      />
      <Gallery />
      <VirtualTour />

      <EventHosting />

      <CTA />
    </div>
  );
}
