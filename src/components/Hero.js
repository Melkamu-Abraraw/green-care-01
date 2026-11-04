import Link from "next/link";

// Each phrase gets a 6s slot; the 18s cycle in globals.css must equal slot x number of phrases.
const phraseSlotMs = 6000;

const phrases = [
  { subtitle: "For Beautiful", title: "Hair & Body" },
  { subtitle: "Made in Ethiopia", title: "Coffee Bean Oil" },
  { subtitle: "Rosemary & Carrot Seed", title: "Natural Oils" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg
        className="size-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg
        className="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg
        className="size-5 rotate-90"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.12 1.07.32 1.485.6.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.9 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.24v3.44h3.28zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        className="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
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
        poster="/videos/poster_2.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/ye%20green%20new.mp4" type="video/mp4" />
      </video>

      {/* Keeps the white nav and social icons readable on the video's pale frames. */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-black/40 to-transparent" />

      <div className="absolute inset-x-0 top-[76%] -translate-y-1/2 px-4 text-center text-brand-white md:top-1/2">
        <h1>
          <span className="sr-only">Ye Green Care: for beautiful hair and body</span>
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
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
