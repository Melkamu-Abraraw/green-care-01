import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { menuItems } from "@/components/navLinks";

const backgroundCommon = { alt: "", sizes: "100vw" };

const {
  props: { srcSet: desktopBackground },
} = getImageProps({
  ...backgroundCommon,
  src: "/images/footer_desktop.png",
  width: 2048,
  height: 768,
});

const {
  props: { srcSet: mobileBackground, ...backgroundProps },
} = getImageProps({
  ...backgroundCommon,
  src: "/images/footer_mobile.png",
  width: 941,
  height: 1672,
});

const linkColumns = [
  { id: "footer-menu", title: "Menu", items: menuItems },
  {
    id: "footer-navigation",
    title: "Navigation",
    items: [
      { label: "Search", href: "/search" },
      { label: "Account", href: "/account" },
      { label: "Cart", href: "/cart" },
    ],
  },
];

// PLACEHOLDER links: replace each "#" with the real profile URL.
const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M14 8.5V6.5c0-.8.5-1 1-1h2V2h-3c-2.8 0-4 1.9-4 4v2.5H7.5V12H10v10h4V12h2.6l.4-3.5z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.25" cy="6.75" r="0.5" />
      </g>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-brand-dark">
      <picture className="absolute inset-0 -z-10">
        <source media="(min-width: 768px)" srcSet={desktopBackground} />
        <source srcSet={mobileBackground} />
        {/* Positioned low so the shorter footer trims mostly empty sky. */}
        <img
          {...backgroundProps}
          alt=""
          loading="lazy"
          className="size-full object-cover object-bottom md:object-[center_80%]"
        />
      </picture>
      {/* Blends the sky into the white section above. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-linear-to-b from-brand-white to-transparent md:h-32" />

      {/* The bottom padding, sized in vw to scale with the image, keeps the landscape clear of the content. */}
      <div className="mx-auto grid w-full max-w-7xl gap-y-5 px-6 pt-8 pb-[55vw] md:grid-cols-[minmax(0,28rem)_auto] md:justify-between md:gap-x-10 md:px-8 md:pt-7 md:pb-[max(18vw,11rem)]">
        <div data-reveal>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={640}
              height={505}
              sizes="48px"
              className="h-auto w-12"
            />
            <span className="font-(family-name:--font-playfair) text-2xl font-bold">
              Ye Green Care
            </span>
          </Link>
          <p className="mt-2 leading-snug">
            Ye Green Care brings hair care, skin care and coffee bean oil
            together. Our story begins in Ethiopia, and every oil is bottled
            with care, for beautiful hair and body.
          </p>
        </div>

        <div
          data-reveal
          style={{ "--reveal-order": 1 }}
          className="grid grid-cols-2 gap-x-6 md:grid-cols-[auto_auto_auto] md:gap-x-8 lg:gap-x-16"
        >
          {linkColumns.map((column) => (
            <nav key={column.title} aria-labelledby={column.id}>
              <h2
                id={column.id}
                className="font-(family-name:--font-montserrat)! text-sm font-bold"
              >
                {column.title}
              </h2>
              <ul className="mt-2 space-y-1">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-brand-green"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 mt-5 md:col-span-1 md:mt-0">
            <h2
              id="footer-social"
              className="font-(family-name:--font-montserrat)! text-sm font-bold"
            >
              Follow us
            </h2>
            <ul aria-labelledby="footer-social" className="mt-2 flex gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-brand-dark/30 transition-colors hover:border-brand-dark hover:bg-brand-dark hover:text-brand-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-snug text-brand-dark/70 md:max-w-40">
              &copy; 2026 Ye Green Care. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
