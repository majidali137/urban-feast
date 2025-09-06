import { motion } from 'framer-motion';
import React from 'react'

const RestaurantStory = () => {
  return (
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
              celebrates both tradition and innovation. What started as a small
              neighborhood restaurant has grown into a culinary destination that
              attracts food enthusiasts from around the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to using only the finest ingredients, supporting
              local farmers, and creating memorable experiences has remained
              unchanged throughout our journey. Every dish tells a story, every
              meal creates a memory, and every guest becomes part of our
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
              src="/about-story.jpg"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantStory
