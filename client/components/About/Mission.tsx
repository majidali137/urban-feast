import { motion } from 'framer-motion';
import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Target, Heart } from 'lucide-react';

const Mission = () => {
  return (
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
                  To create extraordinary culinary experiences that bring people
                  together, celebrate local ingredients, and push the boundaries
                  of traditional cuisine while maintaining the highest standards
                  of service and hospitality.
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
  );
}

export default Mission
