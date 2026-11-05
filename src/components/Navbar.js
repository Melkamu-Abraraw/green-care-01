"use client";

import { Dancing_Script, Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getCartCount, subscribeToCart } from "@/components/cartStore";
import { menuItems } from "@/components/navLinks";
import {
  getTheme,
  subscribeToTheme,
  toggleTheme,
} from "@/components/themeStore";

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

function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    () => getTheme() === "dark",
    () => false,
  );

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Dark mode"
      aria-pressed={isDark}
      className={iconLinkClass}
    >
      {/* CSS picks the icon, so the right one shows from first paint, before this component hydrates. */}
      <span className="block dark:hidden">
        <Icon>
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
        </Icon>
      </span>
      <span className="hidden dark:block">
        <Icon>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </Icon>
      </span>
    </button>
  );
}

export default function Navbar() {
  const cartCount = useSyncExternalStore(
    subscribeToCart,
    getCartCount,
    () => 0,
  );
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 40,
    () => false,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Keyboard users land inside the panel when it slides in.
  useEffect(() => {
    if (isMenuOpen) closeButtonRef.current.focus();
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
    menuButtonRef.current.focus();
  }

  return (
    <header
      onKeyDown={(event) => event.key === "Escape" && isMenuOpen && closeMenu()}
      className="site-header"
      data-scrolled={isScrolled}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
        {/* The three icons on the right fill their column on small phones, so the theme toggle sits here instead. */}
        <div className="col-start-1 row-start-1 flex items-center justify-self-start md:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            className={iconLinkClass}
          >
            <Icon>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </Icon>
          </button>
          <ThemeToggle />
        </div>

        {/* Dims the page behind the phone menu; tapping it closes the menu. */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-500 ease-out motion-reduce:transition-none md:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-hidden="true"
        />

        {/* On phones this is a panel that slides in from the left. "invisible" keeps its links out of tab order while closed, and only applies after the slide out finishes. */}
        <nav
          id="main-menu"
          aria-label="Main"
          data-open={isMenuOpen}
          className={`md:col-start-1 md:row-start-1 max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-40 max-md:w-72 max-md:max-w-[80vw] max-md:overflow-y-auto max-md:bg-brand-dark max-md:text-brand-white max-md:shadow-xl max-md:[--nav-hover:var(--color-brand-gold)] motion-reduce:transition-none! ${isMenuOpen ? "max-md:translate-x-0 max-md:[transition:translate_500ms_cubic-bezier(0.22,1,0.36,1)]" : "max-md:invisible max-md:-translate-x-full max-md:[transition:translate_500ms_cubic-bezier(0.22,1,0.36,1),visibility_0s_500ms]"}`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className={`${iconLinkClass} mt-4 ml-4 md:hidden`}
          >
            <Icon>
              <path d="M6 6l12 12M18 6 6 18" />
            </Icon>
          </button>
          <ul className="flex flex-col px-6 py-4 md:flex-row md:px-0 md:justify-end md:gap-5 md:py-0 md:pr-6 lg:gap-8 lg:pr-22">
            {menuItems.map((item, index) => (
              <li key={item.href} style={{ "--menu-order": index }}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${menuFont.className} block py-3 text-[17px] font-medium uppercase tracking-wide transition-colors hover:text-(color:--nav-hover) md:inline md:py-0`}
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
            Green Care
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
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
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
