import Image from "next/image";

// From ye-greencarenaturals.com/about-us.
const freeCareFor = [
  "People in need",
  "Ethiopian veterans",
  "Senior citizens",
  "Children under 13",
];

export default function AboutTeam() {
  return (
    <section aria-labelledby="about-team-title" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className="font-(family-name:--font-montserrat) text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            Our Team
          </p>
          <h2 id="about-team-title" className="mt-3 text-4xl leading-tight font-bold xl:text-5xl">
            The Secret To Our Success
          </h2>
          <p className="mt-6 text-lg">
            Everyone says it, but in our case, it&apos;s true: our team is the secret to our
            success. Each of our employees is amazing, but together they are what make Green Care
            Naturals such a fun and rewarding place to work.
          </p>
        </div>

        <article
          data-reveal
          style={{ "--reveal-order": 1 }}
          className="rounded-lg border-[0.5px] border-ink/15 p-3 pb-6 md:p-4 md:pb-8 [&>:not(:first-child)]:px-3 md:[&>:not(:first-child)]:px-4"
        >
          <div className="relative aspect-3/2 overflow-hidden rounded-md">
            <Image
              src="/images/ceo.jpg"
              alt="Gizaw Bekele Begashaw at his desk"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              quality={90}
              className="object-cover"
            />
          </div>
          <h3 className="mt-6 text-2xl leading-tight font-medium">Gizaw Bekele Begashaw</h3>
          <p className="mt-1 text-sm text-ink/60">Founder &amp; CEO</p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            A well-known herbalist in Ethiopia and the Ethiopian diaspora, with 15 years of
            research into Ethiopian herbs and their uses.
          </p>
          <p className="mt-6 text-sm text-ink/60">He offers his service free of charge to:</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {freeCareFor.map((group) => (
              <li
                key={group}
                className="rounded-md border-[0.5px] border-ink/20 px-3 py-1.5 text-sm"
              >
                {group}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
