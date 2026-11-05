import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { menuItems } from "@/components/navLinks";
import SocialLinks from "@/components/SocialLinks";

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
            <SocialLinks labelledBy="footer-social" className="mt-2" />
            <p className="mt-3 text-sm leading-snug text-brand-dark/70 md:max-w-40">
              &copy; 2026 Ye Green Care. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
