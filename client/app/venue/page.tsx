"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Phone, Mail, Camera, Play } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  {
    id: 1,
    src: "/public/elegant-restaurant-interior-with-warm-lighting-and.jpg",
    alt: "Main dining room",
    category: "Interior",
  },
  {
    id: 2,
    src: "/public/restaurant-bar-with-golden-lighting-and-premium-at.jpg",
    alt: "Premium bar area",
    category: "Bar",
  },
  {
    id: 3,
    src: "/public/outdoor-restaurant-terrace-evening-ambiance.jpg",
    alt: "Outdoor terrace",
    category: "Exterior",
  },
  { id: 4, src: "/public/premium-wine-cellar.png", alt: "Wine cellar", category: "Wine Cellar" },
  { id: 5, src: "/public/chef-preparing-food-in-open-kitchen.jpg", alt: "Open kitchen", category: "Kitchen" },
  {
    id: 6,
    src: "/public/restaurant-interior-elegant-dining-room.jpg",
    alt: "Private dining room",
    category: "Private Dining",
  },
]

const eventTypes = [
  {
    id: 1,
    title: "Wedding Celebrations",
    description: "Create unforgettable memories with our elegant wedding packages",
    capacity: "50-200 guests",
    features: ["Custom menu design", "Dedicated event coordinator", "Floral arrangements", "Photography services"],
    image: "/public/wedding-celebration-venue.jpg",
    price: "Starting from $150/person",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Professional venues for business meetings and corporate gatherings",
    capacity: "20-100 guests",
    features: ["AV equipment", "Business lunch menus", "Private meeting rooms", "Catering services"],
    image: "/public/corporate-event-venue.jpg",
    price: "Starting from $75/person",
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Intimate celebrations for birthdays, anniversaries, and special occasions",
    capacity: "10-50 guests",
    features: ["Personalized menus", "Flexible seating", "Custom decorations", "Private bar service"],
    image: "/public/private-party-venue.jpg",
    price: "Starting from $100/person",
  },
]

const categories = ["All", "Interior", "Exterior", "Bar", "Kitchen", "Private Dining", "Wine Cellar"]

export default function VenuePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/public/elegant-restaurant-interior-with-warm-lighting-and.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Our <span className="text-primary">Venue</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            Elegant spaces for unforgettable dining and special events
          </motion.p>
        </div>
      </section>

      {/* Photo Gallery */}
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
            <p className="text-xl text-muted-foreground mb-8">Explore our beautiful spaces and elegant ambiance</p>

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
                  <Badge className="bg-primary text-primary-foreground">{image.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                Take a 360-degree virtual tour of our restaurant and experience our elegant atmosphere from the comfort
                of your home. Explore our dining rooms, bar area, and private event spaces.
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
                    <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{event.capacity}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Features:</h4>
                      <ul className="space-y-1">
                        {event.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-lg font-bold text-primary mb-3">{event.price}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Plan Your Perfect Event</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our event specialists are ready to help you create an unforgettable experience. Contact us to discuss your
              requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Events Team
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
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
  )
}
