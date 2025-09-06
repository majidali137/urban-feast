"use client";

import HeroSection from "@/components/Shared/HeroSection";
import RestaurantStory from "@/components/About/RestaurantStory";
import ChefSection from "@/components/About/ChefSection";
import Awards from "@/components/About/Awards";
import Mission from "@/components/About/Mission";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/about-hero.jpg"
        title="Our"
        highlight="Story"
        description="A journey of culinary passion spanning over two decades"
      />
      <RestaurantStory />
      <ChefSection />
      <Awards />
      <Mission />
    </div>
  );
}
