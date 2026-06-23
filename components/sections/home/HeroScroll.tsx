"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { IslamicPatternBg } from "@/components/ui/islamic-pattern";
import { AnimatedTitle } from "@/components/ui/animated-hero";

export function HeroScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0D1B2A] pt-0">
      {/* Background image with parallax */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1600&q=85"
          alt="Masjid al-Haram, Makkah"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/55" />
      </motion.div>

      <IslamicPatternBg className="z-10" />

      {/* Hero text */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-5"
      >
        <span className="uppercase tracking-[0.3em] text-[#C9A84C] text-xs font-sans font-medium">
          Guided Pilgrimage from New York
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-[#F5F0E8] leading-tight">
          Every Journey,
          <br />
          <span className="text-[#C9A84C] flex items-center justify-center md:pb-4 md:pt-1">
            Every&nbsp;
            <AnimatedTitle
              titles={["Step", "Du'a", "Salah", "Tawaf", "Sa'i", "Sajdah", "Intention"]}
              className="text-[#C9A84C]"
            />
          </span>
        </h1>
        <p className="text-[#EDE8DF]/70 font-sans text-lg max-w-xl">
          Scholar-led Umrah & Hajj groups departing from New York.
          Over 11 years of trusted service.
        </p>
        <div className="flex gap-4 mt-2 flex-wrap justify-center">
          <a
            href="/packages"
            className="bg-[#C9A84C] text-[#0D1B2A] font-sans font-semibold px-6 py-3 rounded-sm hover:bg-[#b8963e] transition-colors"
          >
            View Packages
          </a>
          <a
            href="/contact"
            className="border border-[#C9A84C] text-[#C9A84C] font-sans px-6 py-3 rounded-sm hover:bg-[#C9A84C]/10 transition-colors"
          >
            Contact Us
          </a>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="mt-8 flex flex-col items-center gap-1 text-[#C9A84C]/50"
        >
          <span className="font-sans text-xs uppercase tracking-widest">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
