"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Target, Star, Calendar } from "lucide-react";

const chefs = [
  {
    id: 1,
    name: "Chef Marcus Rodriguez",
    title: "Executive Chef & Owner",
    image: "/public/chef-marcus-rodriguez-executive-chef.jpg",
    description:
      "With over 20 years of culinary excellence, Chef Marcus brings innovative techniques and passion to every dish.",
    specialties: ["Modern European", "Molecular Gastronomy", "Wine Pairing"],
  },
  {
    id: 2,
    name: "Chef Isabella Chen",
    title: "Pastry Chef",
    image: "/public/chef-isabella-chen-pastry-chef.jpg",
    description:
      "Award-winning pastry chef known for her artistic dessert presentations and innovative flavor combinations.",
    specialties: ["French Pastry", "Chocolate Art", "Seasonal Desserts"],
  },
  {
    id: 3,
    name: "Chef Antonio Silva",
    title: "Sous Chef",
    image: "/public/chef-antonio-silva-sous-chef.jpg",
    description:
      "Bringing authentic Mediterranean flavors with a modern twist, Chef Antonio ensures every plate is perfection.",
    specialties: ["Mediterranean", "Seafood", "Grilled Specialties"],
  },
];

const awards = [
  {
    year: "2024",
    title: "Michelin Star",
    description: "Awarded for exceptional cuisine and service excellence",
  },
  {
    year: "2023",
    title: "Best Fine Dining Restaurant",
    description: "City's Choice Awards - Voted by local food critics",
  },
  {
    year: "2023",
    title: "Wine Spectator Award",
    description: "Excellence in wine selection and sommelier service",
  },
  {
    year: "2022",
    title: "James Beard Nomination",
    description: "Outstanding Restaurant Design and Atmosphere",
  },
];

const milestones = [
  {
    year: "1999",
    event: "Urban Feast Founded",
    description: "Started as a small family restaurant with big dreams",
  },
  {
    year: "2005",
    event: "First Expansion",
    description: "Opened our second location due to overwhelming demand",
  },
  {
    year: "2010",
    event: "Celebrity Recognition",
    description: "Featured in major culinary magazines and TV shows",
  },
  {
    year: "2018",
    event: "Sustainable Practices",
    description: "Became the first carbon-neutral restaurant in the city",
  },
  {
    year: "2023",
    event: "Michelin Recognition",
    description: "Achieved our first Michelin star for culinary excellence",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/public/elegant-restaurant-interior-with-warm-lighting-and.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Our <span className="text-primary">Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            A journey of culinary passion spanning over two decades
          </motion.p>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="py-20 bg-background">
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
                Where It All <span className="text-primary">Began</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1999 by the Rodriguez family, Urban Feast began as a
                humble dream to create an extraordinary dining experience that
                celebrates both tradition and innovation. What started as a
                small neighborhood restaurant has grown into a culinary
                destination that attracts food enthusiasts from around the
                world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to using only the finest ingredients, supporting
                local farmers, and creating memorable experiences has remained
                unchanged throughout our journey. Every dish tells a story,
                every meal creates a memory, and every guest becomes part of our
                extended family.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/public/restaurant-interior-elegant-dining-room.jpg"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that shaped Urban Feast into what it is today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold text-primary">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Chefs */}
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
              Meet Our <span className="text-primary">Chefs</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The culinary artists behind every exceptional dish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={chef.image || "/placeholder.svg"}
                      alt={chef.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {chef.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {chef.title}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {chef.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Celebrating our achievements in culinary excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-lg font-bold text-primary">
                            {award.year}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-primary text-primary"
                              />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {award.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create extraordinary culinary experiences that bring
                    people together, celebrate local ingredients, and push the
                    boundaries of traditional cuisine while maintaining the
                    highest standards of service and hospitality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be recognized as the premier dining destination that sets
                    the standard for culinary innovation, sustainable practices,
                    and exceptional guest experiences, inspiring the next
                    generation of culinary artists.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
