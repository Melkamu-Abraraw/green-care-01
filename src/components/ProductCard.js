"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { addToCart } from "@/components/cartStore";
import Rating from "@/components/Rating";

// White product card (home, shop and related products): a tile whose image steps through the product's angles.
// Hovering shows the second angle; the arrows and dots browse the rest, and touch screens can swipe.
export default function ProductCard({ product, index, imageLoading }) {
  // The front shot opens the card; the bottle cut-out stands in for a product without one.
  const images = [
    product.front ?? `/images/products/${product.slug}.png`,
    ...(product.gallery ?? []),
  ];
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const hasPrice = product.price !== undefined;
  const hasGallery = images.length > 1;

  const show = (next) => setActive((next + images.length) % images.length);

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) > 40) show(active + (distance < 0 ? 1 : -1));
  }

  return (
    <li
      data-reveal
      style={{ "--reveal-order": index }}
      className="home-card group relative flex flex-col rounded-lg bg-brand-white p-2.5 text-brand-dark ring-[0.5px] ring-brand-dark/10 transition-shadow duration-300 hover:shadow-[0_10px_28px_rgb(12_40_24/0.08)]"
      onMouseEnter={() => hasGallery && setActive(1)}
      onMouseLeave={() => setActive(0)}
      onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <Link
        href={`/shop/${product.slug}`}
        className="block flex-1 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
      >
        <span className="relative block aspect-5/4 overflow-hidden rounded-md bg-brand-white">
          {images.map((src, imageIndex) => (
            <Image
              key={src}
              src={src}
              alt={
                imageIndex === 0 ? "" : `${product.name}, photo ${imageIndex}`
              }
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
              loading={imageIndex === 0 ? imageLoading : "lazy"}
              // The first image is the bottle cut-out, so it sits padded on white; the photos fill the box.
              className={`transition-[opacity,scale] duration-500 ${
                imageIndex === 0 ? "object-contain p-3" : "object-cover"
              } ${imageIndex === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
            />
          ))}
        </span>
        <span className="block px-2 pt-4 pb-1 text-center">
          <h3 className="font-(family-name:--font-montserrat)! text-lg leading-snug font-medium transition-colors group-hover:text-logo-green xl:text-xl">
            {product.name}
          </h3>
          <span className="mt-1 block font-(family-name:--font-montserrat) text-base">
            <span
              className={hasPrice ? "font-bold" : "text-sm italic opacity-60"}
            >
              {hasPrice ? `$${product.price}` : "Price coming soon"}
            </span>
            <span className="opacity-55"> · {product.size}</span>
          </span>
          {product.rating !== undefined && (
            <Rating value={product.rating} className="mt-2" />
          )}
        </span>
      </Link>

      <div className="home-card-cta px-2 pt-2 pb-2">
        <button
          type="button"
          onClick={() => addToCart()}
          disabled={!hasPrice}
          aria-label={hasPrice ? `Add ${product.name} to cart` : undefined}
          className="w-full rounded-md border-[0.5px] border-logo-green/50 py-2 text-sm font-semibold text-logo-green transition-colors duration-300 hover:border-logo-green hover:bg-logo-green hover:text-brand-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-logo-green/50 disabled:hover:bg-transparent disabled:hover:text-logo-green"
        >
          {hasPrice ? "Add to cart" : "Coming soon"}
        </button>
      </div>

      {/* Matches the image box; only the buttons inside it take clicks. */}
      <div className="pointer-events-none absolute inset-x-2.5 top-2.5 aspect-5/4">
        {hasGallery && (
          <>
            {[
              {
                label: "Previous",
                step: -1,
                side: "left-2",
                path: "M15 6l-6 6 6 6",
              },
              { label: "Next", step: 1, side: "right-2", path: "M9 6l6 6-6 6" },
            ].map(({ label, step, side, path }) => (
              <button
                key={label}
                type="button"
                onClick={() => show(active + step)}
                aria-label={`${label} image of ${product.name}`}
                className={`home-card-control pointer-events-auto absolute top-1/2 ${side} flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-white/90 text-brand-dark shadow-sm ring-1 ring-brand-dark/10 transition hover:bg-brand-dark hover:text-brand-white`}
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
            <div
              className="home-card-control absolute bottom-3 left-3 flex gap-1.5"
              aria-hidden="true"
            >
              {images.map((src, imageIndex) => (
                <span
                  key={src}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    imageIndex === active
                      ? "w-4 bg-brand-dark"
                      : "w-1.5 bg-brand-dark/25"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </li>
  );
}
