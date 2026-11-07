"use client";

import { useEffect, useRef, useState } from "react";

const countMs = 1500;

// Facts from ye-greencarenaturals.com/about-us. "Tens of thousands" is shown as 10,000+.
// Duotone icons on a 24px grid: `fill` parts take a soft tint, `stroke` parts draw the outline.
const stats = [
  {
    value: 15,
    label: "Years of herbal research",
    icon: (
      <>
        <path className="fill-current opacity-20" stroke="none" d="M12 14C7.5 14 4.5 11 4.5 7c4.5 0 7.5 3 7.5 7Z" />
        <path className="fill-current opacity-20" stroke="none" d="M12 11c0-4 3-7 7.5-7 0 4-3 7-7.5 7Z" />
        <path d="M12 14C7.5 14 4.5 11 4.5 7c4.5 0 7.5 3 7.5 7Z" />
        <path d="M12 11c0-4 3-7 7.5-7 0 4-3 7-7.5 7Z" />
        <path d="M12 11v10M8 21h8" />
      </>
    ),
  },
  {
    value: 10000,
    suffix: "+",
    label: "People treated",
    icon: (
      <>
        <path
          className="fill-current opacity-20"
          stroke="none"
          d="M12 12.5S7.5 10 7.5 6.8A2.3 2.3 0 0 1 12 6a2.3 2.3 0 0 1 4.5.8c0 3.2-4.5 5.7-4.5 5.7Z"
        />
        <path d="M12 12.5S7.5 10 7.5 6.8A2.3 2.3 0 0 1 12 6a2.3 2.3 0 0 1 4.5.8c0 3.2-4.5 5.7-4.5 5.7Z" />
        <path d="M3 15h2.5l3.5-1.5c1-.4 2 0 2.5.8l.3.7H15a1.5 1.5 0 0 1 0 3h-4" />
        <path d="M5.5 15v5H3M5.5 20l4 .5c1 .1 2-.1 2.8-.6L20 15.5a1.5 1.5 0 0 0-1.8-2.3L15 15" />
      </>
    ),
  },
  {
    value: 200,
    suffix: " mL",
    label: "Oil from every 1 kg of beans",
    icon: (
      <>
        <path
          className="fill-current opacity-20"
          stroke="none"
          d="M6.2 14h11.6a6 6 0 0 1-11.6 0Z"
        />
        <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />
        <path d="M9 15.5a3 3 0 0 0 2 2" />
      </>
    ),
  },
  {
    value: 0,
    label: "Solvents or infused oils",
    icon: (
      <>
        <path className="fill-current opacity-20" stroke="none" d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
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
    <section aria-label="Green Care in numbers" className="px-4 py-12 md:px-8 md:py-16">
      <ul
        ref={listRef}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 lg:grid-cols-4"
      >
        {stats.map(({ value, suffix = "", label, icon }, index) => (
          <li
            key={label}
            data-reveal
            style={{ "--reveal-order": index }}
            className="flex flex-col items-center border-ink/10 px-4 text-center lg:not-first:border-l-[0.5px]"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-brand-gold/12 text-[#9c7419] ring-[0.5px] ring-brand-gold/30 dark:text-brand-gold">
              <svg
                className="size-5.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icon}
              </svg>
            </span>
            <p className="mt-3 font-(family-name:--font-montserrat) text-2xl font-semibold tracking-tight tabular-nums lining-nums">
              {Math.round(value * progress).toLocaleString("en-US")}
              {suffix}
            </p>
            <p className="mt-1 text-sm text-ink/60">
              {label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
