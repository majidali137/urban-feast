"use client";

import HeroSection from "@/components/Shared/HeroSection";
import Menu from "@/components/Menu/Menu";
export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        backgroundImage="/menu-header.jpg"
        title="Our"
        highlight="Menu"
        description="Culinary masterpieces crafted with passion and precision"
      />

      <Menu />
    </div>
  );
}
