"use client";
import { heroSlides } from "@/content/content";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const SWIPE_THRESHOLD = 50; 

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      deltaX < 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="
        relative 
        h-[100svh] md:h-screen 
        min-h-[520px] 
        overflow-hidden 
        pb-[env(safe-area-inset-bottom)]
      "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Hero slider"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background image with next/image for proper responsive behavior */}
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-bold text-white
              text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              leading-tight
            "
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-base sm:text-lg md:text-2xl 
              text-gray-200 max-w-2xl mx-auto
            "
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Button
              asChild
              className="px-6 py-5 text-base sm:text-lg md:px-8 md:py-6"
            >
              <Link href="/reservation">Reserve Your Table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="
                px-6 py-5 text-base sm:text-lg md:px-8 md:py-6 
                bg-white/10 border-white/20 text-white hover:bg-white/20
              "
            >
              <Link href="/menu">View Our Menu</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Desktop/Large controls (sidelined) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="
          hidden sm:flex
          absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 
          p-3 md:p-4 rounded-full 
          bg-white/20 hover:bg-white/30 backdrop-blur
          touch-manipulation
        "
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          hidden sm:flex
          absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 
          p-3 md:p-4 rounded-full 
          bg-white/20 hover:bg-white/30 backdrop-blur
          touch-manipulation
        "
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </button>

      {/* Mobile control bar (bottom) */}
      <div
        className="
          sm:hidden
          absolute left-1/2 -translate-x-1/2 bottom-4 z-20
          w-[min(92%,680px)]
          rounded-full bg-black/35 backdrop-blur
          px-3 py-2
          flex items-center justify-between gap-3
        "
      >
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-2 rounded-full bg-white/20 hover:bg-white/30"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-5 bg-primary" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-2 rounded-full bg-white/20 hover:bg-white/30"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Desktop indicators */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
