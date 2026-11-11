"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const slideMs = 6000;

const slides = [
  {
    image: "/videos/poster_new.png",
    eyebrow: "For Beautiful",
    title: "Hair & Body",
  },
  {
    image: "/images/footer_desktop.png",
    eyebrow: "Made in Ethiopia",
    title: "Coffee Bean Oil",
  },
  {
    image: "/images/Roasted%20Coffee%20Beans%20on%20Green%20Texture.png",
    eyebrow: "A Small Collection",
    title: "Natural Oils",
  },
];

const reducedMotion = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange) {
  const query = window.matchMedia(reducedMotion);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function AboutSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHeld, setIsHeld] = useState(false);
  const canAutoplay = !useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(reducedMotion).matches,
    () => false,
  );

  useEffect(() => {
    if (!canAutoplay || isPaused || isHeld) return;
    const timer = setInterval(
      () => setActiveIndex((index) => (index + 1) % slides.length),
      slideMs,
    );
    return () => clearInterval(timer);
  }, [canAutoplay, isPaused, isHeld]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Our collection"
      onPointerEnter={() => setIsHeld(true)}
      onPointerLeave={() => setIsHeld(false)}
      onFocus={() => setIsHeld(true)}
      onBlur={() => setIsHeld(false)}
      className="relative isolate h-80 overflow-hidden bg-brand-dark text-center text-brand-white md:h-112"
    >
      {slides.map(({ image, eyebrow, title, placement = "" }, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={title}
            inert={!isActive}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-1000 motion-reduce:transition-none ${placement} ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover" />
            {/* Keeps the white text readable on the pale and busy photos. */}
            <div className="absolute inset-0 -z-10 bg-black/60" />
            <p className="text-lg font-extralight md:text-2xl">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold md:mt-3 md:text-5xl">
              {title}
            </h2>
            <Link
              href="/shop"
              className="mt-8 inline-block bg-brand-gold px-16 py-3 font-(family-name:--font-montserrat) text-sm font-medium tracking-[0.15em] text-brand-dark uppercase transition-colors hover:bg-brand-white md:mt-10"
            >
              Shop now
            </Link>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 md:bottom-8">
        {slides.map(({ title }, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}: ${title}`}
            aria-current={index === activeIndex}
            className="p-1.5"
          >
            <span
              className={`block size-2.5 rounded-full transition-colors ${index === activeIndex ? "bg-brand-gold" : "bg-brand-white/60"}`}
            />
          </button>
        ))}
        {canAutoplay && (
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            className="ml-1 p-1.5 transition-colors hover:text-brand-gold"
          >
            <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d={isPaused ? "M7 4v16l13-8Z" : "M6 4h4v16H6ZM14 4h4v16h-4Z"} />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
