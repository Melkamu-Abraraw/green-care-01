"use client";

import Image from "next/image";
import { useState } from "react";

// DRAFT copy, based on the bottle labels. Replace with the real company history and years.
const milestones = [
  {
    label: "Origins",
    title: "The Origins",
    text: "Ye Green Care begins with Ethiopia, where our coffee beans oil is made.",
  },
  {
    label: "Oils",
    title: "Our Oils",
    text: "From coffee beans and black seed to rosemary and orange seed, each oil has its own character.",
  },
  {
    label: "Bottling",
    title: "Bottling",
    text: "Every oil is bottled with care, from our 30 mL droppers to our 150 mL rosemary oil.",
  },
  {
    label: "Care",
    title: "Everyday Care",
    text: "Our oils are made to fit into your routine, for beautiful hair and body.",
  },
  {
    label: "Today",
    title: "Today",
    text: "Today our collection brings hair care, skin care and coffee bean oil together.",
  },
];

export default function OurStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = milestones[activeIndex];

  return (
    <section
      aria-labelledby="our-story-title"
      className="our-story bg-brand-white px-4 pb-16 md:px-8 md:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Image
          data-reveal
          src="/images/our-story.png"
          alt="A bottle of Ye Green Care coffee bean oil beside coffee beans and leaves"
          width={1077}
          height={861}
          sizes="(min-width: 1024px) 600px, 90vw"
          className="mx-auto h-auto w-full max-w-xl"
        />

        <div data-reveal style={{ "--reveal-order": 1 }}>
          <h2
            id="our-story-title"
            className="text-4xl leading-tight font-bold xl:text-5xl"
          >
            Our Story
          </h2>

          {/* Fixed height, so changing steps doesn't move the timeline. */}
          <div className="mt-6 min-h-36 sm:min-h-28" aria-live="polite">
            <h3 className="font-(family-name:--font-montserrat)! text-sm font-semibold tracking-[0.15em] text-brand-green uppercase">
              {active.title}
            </h3>
            <p className="mt-3 text-lg">{active.text}</p>
          </div>

          <div className="relative mt-6">
            <span
              className="absolute inset-x-[10%] top-1.5 h-px bg-brand-dark/20"
              aria-hidden="true"
            />
            <ul className="relative grid grid-cols-5">
              {milestones.map(({ label }, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onPointerEnter={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      className="flex w-full flex-col items-center gap-3 font-(family-name:--font-montserrat) text-xs md:text-sm"
                    >
                      <span
                        className={`size-3 rounded-full transition-colors duration-300 motion-reduce:transition-none ${isActive ? "bg-brand-gold" : "bg-brand-dark/20"}`}
                      />
                      <span className={isActive ? "font-semibold" : "opacity-60"}>{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
