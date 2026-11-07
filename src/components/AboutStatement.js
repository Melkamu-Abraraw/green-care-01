import Image from "next/image";

// The business's inspiration, as stated on ye-greencarenaturals.com/about-us.
// Accented phrases are set in gold italic.
const statement = [
  { text: "Inspired by" },
  { text: "Ethiopian traditional wisdom,", accent: true },
  { text: "we make coffee bean oil to create an" },
  { text: "iconic image", accent: true },
  { text: "for our country in the international arena, and the rest of our profit" },
  { text: "helps the destitute.", accent: true },
];

const words = statement.flatMap(({ text, accent }) =>
  text.split(" ").map((word) => ({ word, accent })),
);

export default function AboutStatement() {
  return (
    <section
      aria-labelledby="about-statement-title"
      className="about-statement px-4 py-20 text-center md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="about-statement-title"
          data-reveal
          className="flex items-center justify-center gap-3 font-(family-name:--font-montserrat)! text-xs font-semibold tracking-[0.2em] text-accent uppercase"
        >
          <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
          Our Inspiration
          <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
        </h2>

        {/* Each word fills in as the paragraph scrolls through the screen; see .about-statement-word. */}
        <p className="mt-8 font-(family-name:--font-playfair) text-3xl leading-snug md:mt-10 md:text-5xl md:leading-tight">
          {words.map(({ word, accent }, index) => (
            <span
              key={index}
              style={{ "--word-progress": index / words.length }}
              className={`about-statement-word ${accent ? "text-brand-gold italic" : ""}`}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <div data-reveal className="mt-12 flex items-center justify-center gap-4 md:mt-16">
          <span className="relative size-14 shrink-0 overflow-hidden rounded-full ring-[0.5px] ring-ink/15">
            <Image
              src="/images/ceo.jpg"
              alt=""
              fill
              sizes="180px"
              quality={90}
              className="origin-[47%_44%] scale-[3.2] object-cover object-[48%_50%]"
            />
          </span>
          <span className="text-left">
            <span className="block font-(family-name:--font-playfair) text-lg font-medium">
              Gizaw Bekele Begashaw
            </span>
            <span className="block text-sm text-ink/60">Founder &amp; CEO</span>
          </span>
        </div>
      </div>
    </section>
  );
}
