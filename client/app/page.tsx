"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Quote,
} from "lucide-react";

// Hero slider data
const heroSlides = [
  {
    id: 1,
    image: "/elegant-restaurant-interior-with-warm-lighting-and.jpg",
    title: "Exquisite Dining Experience",
    subtitle: "Where culinary artistry meets elegant ambiance",
  },
  {
    id: 2,
    image: "/gourmet-dish-presentation-with-golden-lighting.jpg",
    title: "Culinary Masterpieces",
    subtitle: "Crafted by award-winning chefs",
  },
  {
    id: 3,
    image: "/restaurant-bar-with-golden-lighting-and-premium-at.jpg",
    title: "Premium Bar Experience",
    subtitle: "Curated wines and signature cocktails",
  },
];

// Statistics data
const stats = [
  { number: 25, label: "Years of Excellence", suffix: "+" },
  { number: 50000, label: "Happy Customers", suffix: "+" },
  { number: 500, label: "Daily Orders", suffix: "+" },
  { number: 8, label: "Locations", suffix: "" },
];

// Featured menu items
const featuredItems = [
  {
    id: 1,
    name: "Wagyu Beef Tenderloin",
    description:
      "Premium wagyu beef with truffle sauce and seasonal vegetables",
    price: 85,
    image: "/wagyu-beef-tenderloin-with-truffle-sauce-elegant-p.jpg",
    category: "Main Course",
  },
  {
    id: 2,
    name: "Pan-Seared Lobster",
    description: "Fresh Atlantic lobster with saffron risotto and microgreens",
    price: 72,
    image: "/pan-seared-lobster-with-saffron-risotto-fine-dinin.jpg",
    category: "Seafood",
  },
  {
    id: 3,
    name: "Chocolate Soufflé",
    description: "Decadent dark chocolate soufflé with vanilla bean ice cream",
    price: 28,
    image: "/chocolate-souffle-with-vanilla-ice-cream-elegant-d.jpg",
    category: "Dessert",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Critic",
    content:
      "Urban Feast delivers an unparalleled dining experience. Every dish is a masterpiece that tells a story.",
    rating: 5,
    image: "/professional-woman-food-critic-headshot.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    content:
      "The attention to detail and exceptional service make every visit memorable. Truly world-class.",
    rating: 5,
    image: "/professional-man-customer-headshot.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Event Planner",
    content:
      "Perfect venue for special occasions. The ambiance and cuisine exceeded all expectations.",
    rating: 5,
    image: "/professional-woman-event-planner-headshot.jpg",
  },
];

// Gallery images
const galleryImages = [
  "/restaurant-interior-elegant-dining-room.jpg",
  "/gourmet-food-plating-artistic-presentation.jpg",
  "/restaurant-bar-area-with-golden-lighting.jpg",
  "/chef-preparing-food-in-open-kitchen.jpg",
  "/premium-wine-cellar.png",
  "/outdoor-restaurant-terrace-evening-ambiance.jpg",
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <div className="min-h-screen">

      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/reservation">Reserve Your Table</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/menu">View Our Menu</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.number.toLocaleString()}
                    {stat.suffix}
                  </motion.span>
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Dishes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our chef's signature creations, crafted with the finest
              ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ${item.price}
                      </span>
                      <Button size="sm">Order Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Book your table now and let us create magical moments for you and
              your loved ones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/reservation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Make Reservation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Guests</span> Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from those who have experienced our culinary excellence
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="p-8">
                  <CardContent className="space-y-6">
                    <Quote className="w-12 h-12 text-primary mx-auto" />
                    <p className="text-lg text-muted-foreground italic">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        )
                      )}
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={
                          testimonials[currentTestimonial].image ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience Our <span className="text-primary">Ambiance</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into the elegant world of Urban Feast
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/venue">View More Photos</Link>
            </Button>
          </motion.div>
        </div>
      </section>

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
