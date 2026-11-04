"use client";

import { useState } from "react";
import { addToCart } from "@/components/cartStore";

export default function ProductCardActions({ productName }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsSaved(!isSaved)}
        aria-pressed={isSaved}
        aria-label={`Save ${productName} to wishlist`}
        className="product-card-action pointer-events-auto absolute top-3 right-3 flex size-9 items-center justify-center bg-brand-green text-brand-white transition-colors hover:text-brand-gold"
      >
        <svg
          className={`size-5 ${isSaved ? "fill-brand-gold text-brand-gold" : "fill-none"}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 20.5s-8-4.9-8-10.8A4.7 4.7 0 0 1 12 6.7a4.7 4.7 0 0 1 8 3c0 5.9-8 10.8-8 10.8Z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={addToCart}
        aria-label={`Add ${productName} to cart`}
        className="product-card-action product-card-cart pointer-events-auto absolute inset-x-3 bottom-3 bg-brand-green py-3 font-(family-name:--font-montserrat) text-xs font-medium tracking-[0.15em] text-brand-white uppercase transition-colors hover:bg-brand-gold hover:text-brand-dark"
      >
        Add to cart
      </button>
    </>
  );
}
