import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { vanueImages } from "@/content/content";
import { Badge } from "../ui/badge";
import { Camera } from "lucide-react";

const Gallery = () => {
  const categories = [
    "All",
    "Interior",
    "Exterior",
    "Bar",
    "Kitchen",
    "Private Dining",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = vanueImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory
  );
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our beautiful spaces and elegant ambiance
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-primary text-primary-foreground">
                  {image.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
