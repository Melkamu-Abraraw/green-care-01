import Link from "next/link";
import { socialLinks } from "@/components/SocialLinks";

// Each phrase gets a 6s slot; the 18s cycle in globals.css must equal slot x number of phrases.
const phraseSlotMs = 6000;

const phrases = [
  { subtitle: "For Beautiful", title: "Hair & Body" },
  { subtitle: "Made in Ethiopia", title: "Coffee Bean Oil" },
  { subtitle: "Rosemary & Carrot Seed", title: "Natural Oils" },
];

function AnimatedLine({ text, startMs, className }) {
  const words = text.split(" ");

  return (
    <span
      className={`col-start-1 row-start-1 block overflow-hidden whitespace-nowrap ${className}`}
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
                  style={{
                    animationDelay: `${startMs + (lettersBefore + letterIndex) * 50}ms`,
                  }}
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

function PhraseLines({ field, className }) {
  return (
    <span className="grid">
      {phrases.map((phrase, index) => (
        <AnimatedLine
          key={index}
          text={phrase[field]}
          startMs={500 + index * phraseSlotMs}
          className={`${className} ${index > 0 ? "hero-line-extra" : ""}`}
        />
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero relative h-svh overflow-hidden bg-brand-dark">
      <video
        className="hero-video absolute inset-0 size-full object-cover"
        poster="/videos/ye-green-care-poster.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/green%20new%20.mp4" type="video/mp4" />
      </video>

      {/* Keeps the white nav and social icons readable on the video's pale frames. */}
      <div className="absolute inset-0 bg-black/3" />
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-black/8 to-transparent" />

      <div className="absolute inset-x-0 top-[76%] -translate-y-1/2 px-4 text-center text-brand-white md:top-1/2">
        <h1>
          <span className="sr-only">
            {" "}
            Green Care: for beautiful hair and body
          </span>
          <span className="block" aria-hidden="true">
            <PhraseLines field="subtitle" className="hero-subtitle" />
            <span className="mx-auto my-3 block h-px w-8 bg-current" />
            <PhraseLines field="title" className="hero-title" />
          </span>
        </h1>
        <p className="sr-only">
          Coffee bean oil made in Ethiopia, and natural rosemary and carrot seed
          oils.
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
