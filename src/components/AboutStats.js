"use client";

import { useEffect, useRef, useState } from "react";
import { products } from "@/components/products";

const countMs = 1500;

const collectionCount = new Set(
  products.map((product) => product.category?.slug).filter(Boolean),
).size;
const sizeCount = new Set(products.map((product) => product.size)).size;

// Facts from the catalog and bottle labels, not sales figures. The first three stay in step with products.js.
const stats = [
  {
    value: products.length,
    label: "Natural Oils",
    icon: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />,
  },
  {
    value: collectionCount,
    label: "Care Collections",
    icon: (
      <>
        <path d="M20 4C11 4 5 9 5 16c0 1 .2 2 .5 3 1 .3 2 .5 3 .5C15 19.5 20 13 20 4Z" />
        <path d="M4 21c3-5 6-8 10-10" />
      </>
    ),
  },
  {
    value: sizeCount,
    label: "Bottle Sizes",
    icon: (
      <>
        <path d="M10 2h4v4h-4Z" />
        <path d="M10 6c0 2-3 3-3 6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8c0-3-3-4-3-6" />
        <path d="M7 13h10" />
      </>
    ),
  },
  {
    value: 2,
    label: "Countries: Ethiopia & Canada",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" />
      </>
    ),
  },
  {
    value: 100,
    suffix: "%",
    label: "Organic Roasted Coffee Oil",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

export default function AboutStats() {
  const listRef = useRef(null);
  // Starts at the final numbers, so they are right without JavaScript or with reduced motion.
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();

        const tick = (now) => {
          const elapsed = Math.min((now - start) / countMs, 1);
          setProgress(1 - (1 - elapsed) ** 3);
          if (elapsed < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(listRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section aria-label="Green Care in numbers" className="px-4 py-16 md:px-8 md:py-24">
      <ul
        ref={listRef}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
      >
        {stats.map(({ value, suffix = "", label, icon }, index) => (
          <li
            key={label}
            data-reveal
            style={{ "--reveal-order": index }}
            className="flex flex-col items-center border-ink/20 px-4 text-center last:col-span-2 sm:last:col-span-1 lg:not-first:border-l"
          >
            <svg
              className="size-14 text-brand-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {icon}
            </svg>
            <p className="mt-4 font-(family-name:--font-playfair) text-3xl font-bold tabular-nums lining-nums">
              {Math.round(value * progress)}
              {suffix}
            </p>
            <p className="mt-2 font-(family-name:--font-montserrat) text-xs tracking-[0.15em] uppercase">
              {label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
