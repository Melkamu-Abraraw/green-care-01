"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { products } from "@/components/products";

function collectionItem(name, category, bottleSlug) {
  return { ...products.find((product) => product.slug === bottleSlug), name, category };
}

// Each category is pictured by one bottle. The featured bottle sits in the center, shown larger.
const collection = [
  collectionItem("Coffee Bean Oil", "coffee-bean-oil", "roasted-coffee"),
  collectionItem("Hair Care", "hair-care", "rosemary"),
  collectionItem("Skin Care", "skin-care", "black-seed"),
];

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const listRef = useRef(null);

  // Touch screens have no hover, so the bottle swiped to the center becomes active.
  function handleScroll() {
    if (window.matchMedia("(hover: hover)").matches) return;

    const list = listRef.current;
    const center = list.scrollLeft + list.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;

    [...list.children].forEach((item, index) => {
      const distance = Math.abs(item.offsetLeft + item.offsetWidth / 2 - center);
      if (distance < closestDistance) {
        closest = index;
        closestDistance = distance;
      }
    });
    setActiveIndex(closest);
  }

  return (
    <section
      aria-labelledby="product-showcase-title"
      className="product-showcase bg-brand-white px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
        <header data-reveal className="lg:order-last">
          <p className="font-(family-name:--font-montserrat) text-xs font-semibold tracking-[0.2em] text-brand-green uppercase md:text-sm">
            The Collection
          </p>
          <h2
            id="product-showcase-title"
            className="mt-3 text-4xl leading-tight font-bold xl:text-5xl"
          >
            Our Oil Collection
          </h2>
          <p className="mt-4 max-w-sm text-lg">
            A small collection of natural oils for beautiful hair and body.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-block bg-brand-gold px-6 py-4 whitespace-nowrap font-(family-name:--font-montserrat) text-sm font-medium text-brand-dark uppercase transition-colors hover:bg-brand-dark hover:text-brand-white"
          >
            Shop the collection
          </Link>
        </header>

        <ul
          data-reveal
          ref={listRef}
          onScroll={handleScroll}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setActiveIndex(null);
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setActiveIndex(null);
          }}
          className="relative -mx-4 flex snap-x snap-mandatory overflow-x-auto px-[20%] scrollbar-none md:mx-0 md:justify-center md:overflow-visible md:px-0"
        >
          {collection.map((product, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={product.slug} className="relative w-3/5 shrink-0 snap-center md:w-48">
                {/* Only the hovered bottle's surroundings take its color. */}
                <span
                  className={`pointer-events-none absolute inset-y-0 -inset-x-6 transition-opacity duration-500 motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-0"}`}
                  style={{ background: `radial-gradient(closest-side, ${product.color} 50%, transparent)` }}
                />
                <Link
                  href={`/shop?category=${product.category}`}
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className="relative flex h-full flex-col items-center justify-end pb-2 text-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-dark"
                >
                  <Image
                    src={`/images/products/${product.slug}.png`}
                    alt=""
                    width={product.width}
                    height={product.height}
                    className={`w-auto origin-bottom transition-transform duration-500 motion-reduce:transition-none ${isActive ? "scale-105" : "scale-100"} ${product.featured ? "h-72 lg:h-80 xl:h-96" : "h-52 lg:h-48 xl:h-60"}`}
                  />
                  <span className="-mt-1 h-3 w-32 rounded-[50%] bg-black/25 blur-md" />
                  {/* Important overrides the serif set on all headings in globals.css. */}
                  <h3 className="mt-3 px-1 font-(family-name:--font-montserrat)! text-xs font-medium tracking-wide xl:text-sm">
                    {product.name}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
