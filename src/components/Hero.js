"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/components/SocialLinks";

// Each phrase names the product on screen. `from` is the second in the hero video where that
// product's scene starts; update these if the video is re-cut.
const phrases = [
  { from: 0, subtitle: "Made in Ethiopia", title: "Coffee Bean Oil" },
  { from: 7.5, subtitle: "Cold-Pressed & Pure", title: "Orange Seed Oil" },
  { from: 11.5, subtitle: "Soothe & Nourish", title: "Rue Plant Oil" },
  { from: 16.5, subtitle: "Hair & Scalp Care", title: "Rosemary Oil" },
  { from: 19.5, subtitle: "Antioxidant-Rich", title: "Green Coffee Oil" },
  { from: 22.5, subtitle: "Strengthen & Revitalize", title: "Re-Black Hair Oil" },
  { from: 27.5, subtitle: "Strengthen & Soothe", title: "Complete Green" },
  { from: 32, subtitle: "The Full Collection", title: "Hair & Body" },
];

function phraseIndexAt(seconds) {
  let index = 0;
  phrases.forEach((phrase, i) => {
    if (seconds >= phrase.from) index = i;
  });
  return index;
}

// state: "idle" (never shown, hidden), "in" (letters drop in), "out" (letters drop away).
function AnimatedLine({ text, state, className }) {
  const words = text.split(" ");

  return (
    <span
      data-state={state}
      className={`hero-line col-start-1 row-start-1 block overflow-hidden whitespace-nowrap ${className}`}
    >
      {words.map((word, wordIndex) => {
        const lettersBefore = words.slice(0, wordIndex).join("").length;

        return (
          <span key={wordIndex}>
            {wordIndex > 0 && " "}
            <span className="inline-block">
              {[...word].map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className="hero-char"
                  style={{ "--i": lettersBefore + letterIndex }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

function PhraseLines({ field, className, active, shown }) {
  return (
    <span className="grid">
      {phrases.map((phrase, index) => (
        <AnimatedLine
          key={index}
          text={phrase[field]}
          state={index === active ? "in" : shown.has(index) ? "out" : "idle"}
          className={className}
        />
      ))}
    </span>
  );
}

export default function Hero() {
  const videoRef = useRef(null);
  const [active, setActive] = useState(0);
  // Phrases that have appeared at least once, so they can animate out instead of vanishing.
  const [shown, setShown] = useState(() => new Set([0]));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const sync = () => {
      const index = phraseIndexAt(video.currentTime);
      setActive(index);
      setShown((prev) => (prev.has(index) ? prev : new Set(prev).add(index)));
    };

    sync();
    video.addEventListener("timeupdate", sync);
    video.addEventListener("seeked", sync);
    return () => {
      video.removeEventListener("timeupdate", sync);
      video.removeEventListener("seeked", sync);
    };
  }, []);

  return (
    <section className="hero relative h-svh overflow-hidden bg-brand-dark">
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 size-full object-cover"
        poster="/videos/poster_new.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/green%20new%20%20.mp4" type="video/mp4" />
      </video>

      {/* Keeps the white nav and social icons readable on the video's pale frames. */}
      <div className="absolute inset-0 bg-black/3" />
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-black/8 to-transparent" />

      <div className="absolute inset-x-0 top-[80%] -translate-y-1/2 px-4 text-center text-brand-white md:top-[60%]">
        <h1>
          <span className="sr-only">
            {" "}
            Green Care: natural oils for beautiful hair and body
          </span>
          <span className="block" aria-hidden="true">
            <PhraseLines
              field="subtitle"
              className="hero-subtitle"
              active={active}
              shown={shown}
            />
            <span className="mx-auto my-3 block h-px w-8 bg-current" />
            <PhraseLines
              field="title"
              className="hero-title"
              active={active}
              shown={shown}
            />
          </span>
        </h1>
        <p className="sr-only">
          Coffee bean, orange seed, rue plant, rosemary, green coffee, Re-Black
          and Complete Green oils, made in Ethiopia.
        </p>
        <Link
          href="/shop"
          className="hero-button mt-6 inline-block bg-brand-gold px-8 py-4 text-sm font-medium text-brand-dark uppercase transition-colors hover:bg-brand-white md:mt-8"
        >
          Shop now
        </Link>
      </div>

      <div className="hero-socials absolute top-44 left-9 flex flex-col items-center gap-6 text-brand-white drop-shadow-[0_1px_2px_rgb(0_0_0/0.6)] md:top-40 md:left-32">
        <span className="h-11 w-px bg-brand-white" aria-hidden="true" />
        <ul className="flex flex-col items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                className="block transition-colors hover:text-brand-gold"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {link.icon}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
