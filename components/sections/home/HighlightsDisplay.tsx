"use client";

import DisplayCards from "@/components/ui/display-cards";
import { BookOpen, Users, Heart } from "lucide-react";

const cards = [
  {
    icon: <BookOpen className="size-4 text-[#C9A84C]" />,
    title: "Scholar-Led",
    description: "Guided by Madinah University graduates",
    date: "Every single trip",
    iconClassName: "bg-[#C9A84C]/20",
    titleClassName: "text-[#C9A84C]",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Users className="size-4 text-[#C9A84C]" />,
    title: "Community First",
    description: "1,000+ pilgrims from New York",
    date: "Since 2013",
    iconClassName: "bg-[#C9A84C]/20",
    titleClassName: "text-[#C9A84C]",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Heart className="size-4 text-[#C9A84C]" />,
    title: "5.0 on Google",
    description: "464 five-star reviews",
    date: "Trusted by families",
    iconClassName: "bg-[#C9A84C]/20",
    titleClassName: "text-[#C9A84C]",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export function HighlightsDisplay() {
  return (
    <section className="bg-[#0D1B2A] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-4">
            <span className="uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-sans font-medium">
              Trusted Since 2013
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight">
              Everything you need for a blessed journey
            </h2>
            <p className="font-sans text-[#EDE8DF]/60 text-base leading-relaxed max-w-md">
              From your first inquiry to the moment you return home, Taqwa handles every detail — so all you carry is your intention.
            </p>
          </div>

          {/* Cards */}
          <div className="flex justify-center lg:justify-end py-10">
            <DisplayCards cards={cards} />
          </div>
        </div>
      </div>
    </section>
  );
}
