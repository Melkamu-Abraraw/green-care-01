const steps = [
  {
    title: "Choose your oil",
    text: "Browse our collection and add your favorites to the cart.",
    icon: (
      <>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
  {
    title: "Place your order",
    text: "Review your cart, add your delivery details and check out.",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
  {
    title: "Packed with care",
    text: "We carefully pack your order and send it on its way.",
    icon: (
      <>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </>
    ),
  },
  {
    title: "Delivered to you",
    text: "Your oils arrive at your door, ready for your routine.",
    icon: (
      <>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </>
    ),
  },
];

export default function HowToOrder() {
  return (
    <section
      aria-labelledby="how-to-order-title"
      className="bg-brand-dark px-4 py-16 text-brand-white md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="text-center">
          <h2
            id="how-to-order-title"
            className="text-4xl leading-tight font-bold xl:text-5xl"
          >
            How to Order
          </h2>
          <p className="mt-3 text-lg">
            Four simple steps from our shop to your door.
          </p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-md md:mt-14 md:max-w-none md:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              style={{ "--reveal-order": index }}
              className="relative flex gap-5 pb-10 last:pb-0 md:flex-col md:items-center md:gap-0 md:pb-0 md:text-center"
            >
              {/* The line joining this step to the next: vertical on phones, horizontal from tablet up. */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-16 left-8 h-[calc(100%-4rem)] w-px bg-brand-gold/50 md:top-8 md:left-1/2 md:h-px md:w-[calc(100%+2rem)]"
                />
              )}

              {/* Filled with the section color so the joining line stops at the circle's edge. */}
              <span className="relative flex size-16 shrink-0 items-center justify-center rounded-full border border-brand-gold bg-brand-dark text-brand-gold">
                <svg
                  viewBox="0 0 24 24"
                  className="size-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {step.icon}
                </svg>
              </span>

              <div className="pt-1 md:mt-5 md:max-w-60 md:pt-0">
                <p className="font-(family-name:--font-montserrat) text-xs font-semibold tracking-[0.15em] text-brand-gold uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-(family-name:--font-montserrat)! text-base font-semibold xl:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 leading-snug">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
