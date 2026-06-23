"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  titles: string[];
  className?: string;
  interval?: number;
}

export function AnimatedTitle({ titles, className = "", interval = 2200 }: AnimatedTitleProps) {
  const [index, setIndex] = useState(0);
  const memoTitles = useMemo(() => titles, [titles]);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => (prev === memoTitles.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearTimeout(id);
  }, [index, memoTitles, interval]);

  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      {/* invisible spacer — matches current word so no extra gap */}
      <span className="invisible font-semibold">{memoTitles[index]}</span>
      {memoTitles.map((title, i) => (
        <motion.span
          key={i}
          className="absolute inset-0 flex items-center font-semibold"
          initial={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          animate={
            index === i
              ? { y: 0, opacity: 1 }
              : { y: index > i ? -60 : 60, opacity: 0 }
          }
        >
          {title}
        </motion.span>
      ))}
    </span>
  );
}
