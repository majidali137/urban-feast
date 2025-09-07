"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Phone, Mail, Camera, Play } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/Shared/HeroSection";
import Gallery from "@/components/Venue/Gallery";

const eventTypes = [
  {
    id: 1,
    title: "Wedding Celebrations",
    description:
      "Create unforgettable memories with our elegant wedding packages",
    capacity: "50-200 guests",
    features: [
      "Custom menu design",
      "Dedicated event coordinator",
      "Floral arrangements",
      "Photography services",
    ],
    image: "/public/wedding-celebration-venue.jpg",
    price: "Starting from $150/person",
  },
  {
    id: 2,
    title: "Corporate Events",
    description:
      "Professional venues for business meetings and corporate gatherings",
    capacity: "20-100 guests",
    features: [
      "AV equipment",
      "Business lunch menus",
      "Private meeting rooms",
      "Catering services",
    ],
    image: "/public/corporate-event-venue.jpg",
    price: "Starting from $75/person",
  },
  {
    id: 3,
    title: "Private Parties",
    description:
      "Intimate celebrations for birthdays, anniversaries, and special occasions",
    capacity: "10-50 guests",
    features: [
      "Personalized menus",
      "Flexible seating",
      "Custom decorations",
      "Private bar service",
    ],
    image: "/public/private-party-venue.jpg",
    price: "Starting from $100/person",
  },
];

export default function VenuePage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        backgroundImage="/Venue.jpg"
        title="Our"
        highlight="Venue"
        description="Culinary masterpieces crafted with passion and precision"
      />
      {/* Photo Gallery */}

      <Gallery />
      {/* Virtual Tour */}
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
                Virtual <span className="text-primary">Tour</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Take a 360-degree virtual tour of our restaurant and experience
                our elegant atmosphere from the comfort of your home. Explore
                our dining rooms, bar area, and private event spaces.
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Start Virtual Tour
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-muted relative group cursor-pointer">
                <img
                  src="/public/restaurant-interior-elegant-dining-room.jpg"
                  alt="Virtual tour preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Hosting */}
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
              Event <span className="text-primary">Hosting</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Perfect venues for your special occasions and corporate events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {event.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">
                        {event.capacity}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">
                        Features:
                      </h4>
                      <ul className="space-y-1">
                        {event.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-lg font-bold text-primary mb-3">
                        {event.price}
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          <Calendar className="w-4 h-4 mr-2" />
                          Inquire Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Plan Your Perfect Event
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our event specialists are ready to help you create an
              unforgettable experience. Contact us to discuss your requirements
              and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Events Team
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                <Link href="tel:+15551234567">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
