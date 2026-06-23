"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const packages = [
  {
    name: "Economy Umrah",
    tagline: "Everything you need, nothing you don't",
    duration: "10 Days",
    price: "From $2,499",
    features: [
      "Round-trip flights from JFK",
      "3-star hotel near Haram",
      "Visa processing",
      "Airport transfers",
      "Scholar-led guidance",
      "Group support throughout",
    ],
    highlight: false,
  },
  {
    name: "Ramadan Umrah",
    tagline: "The most blessed nights of the year",
    duration: "14 Days",
    price: "From $3,499",
    features: [
      "Round-trip flights from JFK",
      "4-star hotel near Haram",
      "Visa processing",
      "Daily iftar arrangements",
      "Tahajjud & Tarawih programs",
      "Scholar-led guidance",
      "24/7 group support",
    ],
    highlight: true,
  },
  {
    name: "Premium Umrah",
    tagline: "A journey of comfort and contemplation",
    duration: "12 Days",
    price: "From $4,299",
    features: [
      "Business class upgrade available",
      "5-star hotel, Haram view",
      "Visa processing",
      "Private transfers",
      "Exclusive scholar lectures",
      "Ziyarat tours included",
      "Dedicated group coordinator",
    ],
    highlight: false,
  },
];

export function FeaturedPackages() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // 3D tilt: starts rotated back, flattens as it scrolls into view
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <section className="py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-sans font-medium">
            Our Packages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D1B2A] mt-3">
            Choose Your Journey
          </h2>
          <p className="text-[#0D1B2A]/60 font-sans mt-4 max-w-lg mx-auto">
            Every package includes a scholar or knowledgeable guide who travels with your group from New York.
          </p>
        </motion.div>

        {/* Scroll-animated card grid */}
        <div ref={containerRef} style={{ perspective: "1200px" }}>
          <motion.div
            style={{ rotateX, scale, opacity, y }}
            className="grid md:grid-cols-3 gap-6"
          >
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-sm p-8 flex flex-col gap-6 border transition-shadow hover:shadow-xl ${
                  pkg.highlight
                    ? "bg-[#0D1B2A] border-[#C9A84C] shadow-lg"
                    : "bg-white border-[#C9A84C]/20"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0D1B2A] text-xs font-sans font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div>
                  <span className={`text-xs font-sans uppercase tracking-widest ${pkg.highlight ? "text-[#C9A84C]/70" : "text-[#7A9E8E]"}`}>
                    {pkg.duration}
                  </span>
                  <h3 className={`font-serif text-2xl mt-1 ${pkg.highlight ? "text-[#F5F0E8]" : "text-[#0D1B2A]"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`font-sans text-sm mt-1 ${pkg.highlight ? "text-[#EDE8DF]/60" : "text-[#0D1B2A]/50"}`}>
                    {pkg.tagline}
                  </p>
                </div>

                <div className={`font-serif text-3xl ${pkg.highlight ? "text-[#C9A84C]" : "text-[#0D1B2A]"}`}>
                  {pkg.price}
                </div>

                <ul className="flex flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.highlight ? "text-[#C9A84C]" : "text-[#7A9E8E]"}`} />
                      <span className={`font-sans text-sm ${pkg.highlight ? "text-[#EDE8DF]/80" : "text-[#0D1B2A]/70"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-auto text-center text-sm font-sans font-semibold py-3 rounded-sm transition-colors ${
                    pkg.highlight
                      ? "bg-[#C9A84C] text-[#0D1B2A] hover:bg-[#b8963e]"
                      : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10"
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/packages"
            className="font-sans text-sm text-[#C9A84C] underline underline-offset-4 hover:text-[#b8963e]"
          >
            View all packages including Hajj →
          </Link>
        </div>
      </div>
    </section>
  );
}
