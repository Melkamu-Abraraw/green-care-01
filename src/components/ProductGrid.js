import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/products";

const popularProducts = products.slice(0, 4);

export default function ProductGrid() {
  return (
    <section
      aria-labelledby="product-grid-title"
      className="product-grid bg-brand-white px-4 pb-16 md:px-8 md:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Important overrides the serif set on all headings in globals.css. */}
        <h2
          data-reveal
          id="product-grid-title"
          className="text-center font-(family-name:--font-montserrat)! text-3xl leading-tight font-semibold xl:text-4xl"
        >
          Popular Products
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-12 md:gap-x-6 lg:grid-cols-4">
          {popularProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </ul>

        <div data-reveal className="mt-10 text-center md:mt-14">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-3 border border-brand-dark px-8 py-3 font-(family-name:--font-montserrat) text-sm font-medium transition-colors duration-500 hover:bg-brand-dark hover:text-brand-white"
          >
            See more
            <svg
              className="size-4 transition-transform duration-500 motion-safe:group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
