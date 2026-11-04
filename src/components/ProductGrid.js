import Image from "next/image";
import Link from "next/link";
import ProductCardActions from "@/components/ProductCardActions";
import { products } from "@/components/products";

const popularProducts = products.slice(0, 4);

const starPath =
  "M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7-6-3.4-6 3.4 1.3-6.7-5-4.7 6.8-.8L12 2.5Z";

function Stars({ className }) {
  return (
    <span className={`flex gap-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((star) => (
        <svg key={star} className="size-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d={starPath} />
        </svg>
      ))}
    </span>
  );
}

// A gold row clipped to the rating's width sits over a faint row, so part-stars also work.
function Rating({ value }) {
  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className="relative mt-2 inline-block align-top"
    >
      <Stars className="text-brand-dark/15" />
      <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${(value / 5) * 100}%` }}>
        <Stars className="text-brand-gold" />
      </span>
    </span>
  );
}

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
            <li
              key={product.slug}
              data-reveal
              style={{ "--reveal-order": index }}
              className="product-card relative"
            >
              <Link
                href={`/shop?product=${product.slug}`}
                className="group block text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
              >
                <span className="relative block aspect-4/5 overflow-hidden rounded-md bg-brand-dark/5">
                  {/* The extra bottom padding keeps the bottle clear of the Add to Cart button. */}
                  <Image
                    src={`/images/products/${product.slug}.png`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 300px, 50vw"
                    className="object-contain px-6 pt-6 pb-16 transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                </span>
                <span className="mt-4 block text-sm opacity-60">Ye Green Care</span>
                <h3 className="mt-1 font-(family-name:--font-montserrat)! text-base font-medium transition-colors group-hover:text-brand-green xl:text-lg">
                  {product.name}
                </h3>
                <span className="mt-1 block text-base">
                  <span className="font-semibold">${product.price}</span>
                  <span className="opacity-60"> · {product.size}</span>
                </span>
                <Rating value={product.rating} />
              </Link>
              {/* Matches the image tile's box; only the buttons inside it take clicks. */}
              <div className="pointer-events-none absolute inset-x-0 top-0 aspect-4/5">
                <ProductCardActions productName={product.name} />
              </div>
            </li>
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
