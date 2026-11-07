// Duotone icons on a 24px grid: `tint` shapes take a soft fill, `line` paths draw the outline.
const tint = "fill-current opacity-20";

const benefits = [
  {
    title: "Antioxidants",
    description: "Protects cells from damage",
    icon: (
      <>
        <path className={tint} stroke="none" d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Anti-Inflammatory",
    description: "Reduces inflammation",
    icon: (
      <>
        <path className={tint} stroke="none" d="M6.2 14h11.6a6 6 0 0 1-11.6 0Z" />
        <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />
        <path d="M9 15.5a3 3 0 0 0 2 2" />
      </>
    ),
  },
  {
    title: "Fragrance",
    description: "Sweet or delicate scent",
    icon: (
      <>
        <path className={tint} stroke="none" d="M7 4.5l2.5 2.5L12 4l2.5 3L17 4.5V9a5 5 0 0 1-10 0Z" />
        <path d="M7 4.5l2.5 2.5L12 4l2.5 3L17 4.5V9a5 5 0 0 1-10 0Z" />
        <path d="M12 14v7M12 18.5c-1.5-2-3.5-2.5-5-2 .5 2 2.5 3 5 2Zm0-1c1.5-2 3.5-2.5 5-2-.5 2-2.5 3-5 2Z" />
      </>
    ),
  },
  {
    title: "Natural",
    description: "Plant-based care for hair and body",
    icon: (
      <>
        <path className={tint} stroke="none" d="M20 4C11 4 5 9 5 16c0 1 .2 2 .5 3 1 .3 2 .5 3 .5C15 19.5 20 13 20 4Z" />
        <path d="M20 4C11 4 5 9 5 16c0 1 .2 2 .5 3 1 .3 2 .5 3 .5C15 19.5 20 13 20 4Z" />
        <path d="M4 21c3-5 6-8 10-10" />
      </>
    ),
  },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="bg-surface px-4 pb-16 md:px-8 md:pb-24">
      <h2 id="benefits-title" className="sr-only">
        Why choose our oils
      </h2>
      <ul className="mx-auto grid max-w-7xl gap-y-8 border-y-[0.5px] border-ink/15 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ title, description, icon }, index) => (
          <li
            key={title}
            data-reveal
            style={{ "--reveal-order": index }}
            className="flex items-center gap-4 border-ink/10 px-6 sm:even:border-l-[0.5px] lg:not-first:border-l-[0.5px]"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-[#9c7419] ring-[0.5px] ring-brand-gold/30 dark:text-brand-gold">
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
            <div>
              <h3 className="text-lg leading-snug font-medium">{title}</h3>
              <p className="mt-0.5 text-sm text-ink/60">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
