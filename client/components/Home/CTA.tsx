import { motion } from 'framer-motion';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';

const CTA = () => {
  return (
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
  );
}

export default CTA
