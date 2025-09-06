"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  highlight?: string;
  description: string;
  height?: string;
  overlayOpacity?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  highlight,
  description,
  height = "h-[60vh]",
  overlayOpacity = "bg-black/50",
}) => {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          {title}{" "}
          {highlight && <span className="text-primary">{highlight}</span>}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
