const benefits = [
  {
    label: "Protection",
    title: "Antioxidants",
    description: "Protects cells from damage",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    label: "Comfort",
    title: "Anti-Inflammatory",
    description: "Reduces inflammation",
    icon: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />,
  },
  {
    label: "Scent",
    title: "Fragrance",
    description: "Sweet or delicate scent",
    icon: (
      <>
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 9.5a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM14.4 11.2a3.25 3.25 0 1 1 6.2-1.9 3.25 3.25 0 0 1-6.2 1.9ZM13.5 14a3.25 3.25 0 1 1 3.8 5.3 3.25 3.25 0 0 1-3.8-5.3ZM10.5 14a3.25 3.25 0 1 1-3.8 5.3 3.25 3.25 0 0 1 3.8-5.3ZM9.6 11.2a3.25 3.25 0 1 1-6.2-1.9 3.25 3.25 0 0 1 6.2 1.9Z" />
      </>
    ),
  },
  {
    label: "Ingredients",
    title: "Natural",
    description: "Plant-based care for hair and body",
    icon: (
      <>
        <path d="M20 4C11 4 5 9 5 16c0 1 .2 2 .5 3 1 .3 2 .5 3 .5C15 19.5 20 13 20 4Z" />
        <path d="M4 21c3-5 6-8 10-10" />
      </>
    ),
  },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="bg-brand-white px-4 pb-16 md:px-8 md:pb-24">
      <h2 id="benefits-title" className="sr-only">
        Why choose our oils
      </h2>
      {/* The list's vertical padding keeps the dividers from touching the outer border. */}
      <ul className="mx-auto grid max-w-7xl gap-y-6 rounded-md border border-brand-gold py-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ label, title, description, icon }, index) => (
          <li
            key={title}
            data-reveal
            style={{ "--reveal-order": index }}
            className="flex items-center gap-4 border-brand-gold px-6 sm:even:border-l lg:not-first:border-l"
          >
            <svg
              className="size-8 shrink-0 text-brand-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {icon}
            </svg>
            <div>
              <p className="font-(family-name:--font-montserrat) text-xs font-medium tracking-[0.15em] uppercase opacity-70">
                {label}
              </p>
              <h3 className="mt-1 text-xl font-bold">{title}</h3>
              <p className="mt-1 text-sm opacity-70">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
