import { contactInfo } from "@/components/contactInfo";
import SocialLinks from "@/components/SocialLinks";

const linkClass = "transition-colors hover:text-brand-green";

const icons = {
  location: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
};

const rows = [
  {
    title: "Locations",
    icon: icons.location,
    content: (
      <ol className="space-y-1">
        {contactInfo.locations.map((location) => (
          <li key={location}>{location}</li>
        ))}
      </ol>
    ),
  },
  {
    title: "Phone",
    icon: icons.phone,
    content: (
      <ul className="space-y-1">
        {contactInfo.phones.map((phone) => (
          <li key={phone}>
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className={linkClass}
            >
              {phone}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Email",
    icon: icons.email,
    // The long address has no spaces, so it may break anywhere to fit.
    content: (
      <a
        href={`mailto:${contactInfo.email}`}
        className={`${linkClass} break-all`}
      >
        {contactInfo.email}
      </a>
    ),
  },
];

export default function ContactDetails() {
  return (
    <section aria-labelledby="contact-details-title">
      <p className="flex items-center gap-3 font-(family-name:--font-montserrat) text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
        Contact Us
      </p>
      <h2
        id="contact-details-title"
        className="mt-4 text-4xl leading-tight font-medium xl:text-5xl"
      >
        Get In Touch
      </h2>
      <p className="mt-4 max-w-md text-lg text-ink/70">
        Questions about our oils or an order? Reach us at any of our locations,
        or send a message and we&apos;ll get back to you.
      </p>

      <ul className="mt-10 divide-y-[0.5px] divide-ink/15 border-y-[0.5px] border-ink/15">
        {rows.map(({ title, icon, content }, index) => (
          <li
            key={title}
            data-reveal
            style={{ "--reveal-order": index }}
            className="flex gap-4 py-5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-[#9c7419] ring-[0.5px] ring-brand-gold/30 dark:text-brand-gold">
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
                {icon}
              </svg>
            </span>
            <div className="min-w-0 pt-1.5">
              <h3 className="text-sm font-(family-name:--font-catamaran)! text-ink/60">
                {title}
              </h3>
              <div className="mt-1 text-base">{content}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
