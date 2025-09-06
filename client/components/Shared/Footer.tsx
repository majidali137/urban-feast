"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer
      className="
        relative border-t border-border/60 bg-gradient-to-b
        from-muted/30 via-background to-background
        dark:from-muted/20 dark:via-background dark:to-background
      "
    >
      {/* Decorative gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(120px 120px at 10% 30%, hsl(var(--primary)/.18), transparent), radial-gradient(140px 140px at 90% 20%, hsl(var(--muted-foreground)/.18), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / contact */}
          <div>
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Urban Feast"
                width={140}
                height={100}
                className="h-10 w-auto"
                priority
              />
            </div>

            <p className="mt-4 text-center md:text-left text-sm text-muted-foreground leading-relaxed">
              Experience culinary excellence in an elegant atmosphere—where
              every meal is a celebration.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>123 Gourmet Street, Culinary District</span>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2 text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-foreground transition"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2 text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@urbanfeast.com"
                  className="hover:text-foreground transition"
                >
                  info@urbanfeast.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sitemap */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-2"
          >
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
                Explore
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    className="hover:text-foreground transition"
                    href="/menu"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-foreground transition"
                    href="/reservations"
                  >
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-foreground transition"
                    href="/catering"
                  >
                    Catering
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    className="hover:text-foreground transition"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
               
                <li>
                  <Link
                    className="hover:text-foreground transition"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
              Opening Hours
            </h4>
            <dl className="mt-4 space-y-3 rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-sm">
                <dt className="text-muted-foreground">Mon – Thu</dt>
                <dd className="font-medium">5:00 PM – 10:00 PM</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-muted-foreground">Fri – Sat</dt>
                <dd className="font-medium">5:00 PM – 11:00 PM</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-muted-foreground">Sunday</dt>
                <dd className="font-medium">4:00 PM – 9:00 PM</dd>
              </div>
            </dl>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
              Stay Updated
            </h4>
            <p className="mt-3 text-sm text-muted-foreground">
              Join our newsletter for special offers and events.
            </p>
            <form
              className="mt-4 flex w-full items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const region = e.currentTarget as HTMLFormElement;
                const live = region.querySelector(
                  '[role="status"]'
                ) as HTMLElement | null;
                if (live) live.textContent = "Subscribed! Check your inbox.";
              }}
              aria-labelledby="newsletter-heading"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="your@email.com"
                className="flex-1"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p
              role="status"
              aria-live="polite"
              className="mt-2 h-5 text-xs text-muted-foreground"
            ></p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    group inline-flex h-10 w-10 items-center justify-center rounded-full
                    border border-border/70 bg-card/60 backdrop-blur
                    text-muted-foreground hover:text-foreground hover:shadow-sm
                    transition
                  "
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border/70 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Urban Feast. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Privacy Policy
              </Link>
              <span className="h-3 w-px bg-border/70" aria-hidden="true" />
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Terms of Service
              </Link>
              <span className="h-3 w-px bg-border/70" aria-hidden="true" />
              <Link
                href="/accessibility"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
