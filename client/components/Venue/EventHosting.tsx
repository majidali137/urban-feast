import { motion } from 'framer-motion';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, Users } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { eventTypes } from '@/content/content';

const EventHosting = () => {
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
                    <h4 className="font-semibold text-foreground">Features:</h4>
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
  );
}

export default EventHosting
