"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { products } from "@/components/products";

// Holds the design's team slider. Shows the oils until there are real team photos and names.
export default function AboutCollection() {
  const listRef = useRef(null);

  function scrollCards(direction) {
    const list = listRef.current;
    list.scrollBy({ left: direction * list.clientWidth * 0.75 });
  }

  return (
    <section
      aria-labelledby="about-collection-title"
      className="bg-brand-gold/10 px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="text-center">
          <p className="font-(family-name:--font-montserrat) text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            Our Collection
          </p>
          <h2 id="about-collection-title" className="mt-3 text-4xl leading-tight font-bold xl:text-5xl">
            Meet The Oils
          </h2>
        </div>

        <div data-reveal>
          <ul
            ref={listRef}
            className="mt-10 flex snap-x gap-4 overflow-x-auto [scrollbar-width:none] motion-safe:scroll-smooth md:mt-14 md:gap-6"
          >
            {products.map((product) => (
              <li
                key={product.slug}
                className="w-[70%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
              >
                <Link
                  href={`/shop/${product.slug}`}
                  className="group block text-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
                >
                  <span className="relative block aspect-796/972 overflow-hidden rounded-md bg-surface">
                    <Image
                      src={`/images/products/${product.slug}.png`}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 300px, 70vw"
                      className="object-contain p-8 transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-4 block text-xl font-bold transition-colors group-hover:text-accent font-(family-name:--font-playfair)">
                    {product.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center gap-3">
            {[
              { direction: -1, label: "Previous oils", path: "M19 12H5M11 6l-6 6 6 6" },
              { direction: 1, label: "Next oils", path: "M5 12h14M13 6l6 6-6 6" },
            ].map(({ direction, label, path }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollCards(direction)}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-surface"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={path} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
