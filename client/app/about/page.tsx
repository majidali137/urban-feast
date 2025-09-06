"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Target, Star, Calendar } from "lucide-react";
import HeroSection from "@/components/Shared/HeroSection";
import RestaurantStory from "@/components/About/RestaurantStory";
import ChefSection from "@/components/About/ChefSection";


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
      <HeroSection
        backgroundImage="/about-hero.jpg"
        title="Our"
        highlight="Story"
        description="A journey of culinary passion spanning over two decades"
      />

      {/* Restaurant Story */}
      <RestaurantStory />
      
      <ChefSection/>

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
