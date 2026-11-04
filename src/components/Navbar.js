"use client";

import { Dancing_Script, Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getCartCount, subscribeToCart } from "@/components/cartStore";
import { menuItems } from "@/components/navLinks";

const logoFont = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

const menuFont = Roboto_Condensed({
  subsets: ["latin"],
});

const iconLinkClass =
  "relative block p-1 transition-colors hover:text-(color:--nav-hover)";

function subscribeToScroll(onChange) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function Icon({ children }) {
  return (
    <svg
      className="size-6 md:size-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Navbar() {
  const cartCount = useSyncExternalStore(subscribeToCart, getCartCount, () => 0);
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 40,
    () => false,
  );

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
        <nav
          aria-label="Main"
          className="col-span-3 row-start-2 md:col-span-1 md:col-start-1 md:row-start-1"
        >
          <ul className="flex justify-center gap-6 py-3 md:justify-end md:gap-5 md:py-0 md:pr-6 lg:gap-8 lg:pr-22">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${menuFont.className} text-[17px] font-medium uppercase tracking-wide transition-colors hover:text-(color:--nav-hover)`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/"
          aria-label="Ye Green Care home"
          className={`col-start-2 row-start-1 flex flex-col items-center justify-center rounded-b-full text-center text-brand-white transition-all duration-300 motion-reduce:transition-none ${isScrolled ? "h-16 w-20 md:h-20 md:w-24" : "h-28 w-24 gap-1 bg-brand-dark pb-3 md:h-34 md:w-28 md:gap-2 md:pb-4"}`}
        >
          <span
            className={`${logoFont.className} text-lg leading-none md:text-xl ${isScrolled ? "hidden" : ""}`}
          >
            Ye Green
            <br />
            Care
          </span>
          <Image
            src="/logo.png"
            alt=""
            width={640}
            height={505}
            sizes="(min-width: 768px) 72px, 56px"
            loading="eager"
            className={`h-auto transition-all duration-300 motion-reduce:transition-none ${isScrolled ? "w-11 md:w-14" : "w-14 md:w-18"}`}
          />
        </Link>

        <div className="col-start-3 row-start-1 flex items-center justify-self-end md:gap-4">
          <Link href="/search" aria-label="Search" className={iconLinkClass}>
            <Icon>
              <circle cx="11" cy="11" r="7" />
              <path d="m20.5 20.5-4.5-4.5" />
            </Icon>
          </Link>
          <Link href="/account" aria-label="Account" className={iconLinkClass}>
            <Icon>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
            </Icon>
          </Link>
          <Link
            href="/cart"
            aria-label={`Cart, ${cartCount} items`}
            className={iconLinkClass}
          >
            <Icon>
              <path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
              <circle cx="10" cy="20.5" r="1.25" />
              <circle cx="18" cy="20.5" r="1.25" />
            </Icon>
            <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-brand-gold text-xs font-medium text-brand-dark">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
