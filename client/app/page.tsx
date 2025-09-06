"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Slider from "@/components/Home/Slider";
import Stats from "@/components/Home/Stats";
import Featured from "@/components/Home/Featured";
import Experience from "@/components/Home/Experience";
import CTA from "@/components/Home/CTA";
import Testimonials from "@/components/Home/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Slider />

      <Stats />

      <Featured />

      <CTA />

      <Testimonials />
      <Experience />

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Visit <span className="text-primary">Urban Feast</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Located in the heart of the culinary district, we're ready to
                welcome you
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-foreground">
                    123 Gourmet Street, Culinary District
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-foreground">info@Urban Feast.com</span>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src="/restaurant-location-map-view-with-elegant-building.jpg"
                  alt="Restaurant location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
