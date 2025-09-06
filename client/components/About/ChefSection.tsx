import { chefs } from "@/content/content";
import { motion } from "framer-motion";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const ChefSection = () => {
  return (
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
                  <p className="text-primary font-medium mb-3">{chef.title}</p>
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
  );
};

export default ChefSection;
