import { testimonials } from '@/content/content';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
     const [currentTestimonial, setCurrentTestimonial] = useState(0);

     useEffect(() => {
       const timer = setInterval(() => {
         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
       }, 4000);
       return () => clearInterval(timer);
     }, []);
  return (
    <section className="py-20 bg-card !overflow-x-hidden">
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
  );
}

export default Testimonials
