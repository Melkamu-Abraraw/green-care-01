import Image from "next/image";
import Link from "next/link";
import ProductCardActions from "@/components/ProductCardActions";
import Rating from "@/components/Rating";

export default function ProductCard({ product, index, imageLoading }) {
  const hasPrice = product.price !== undefined;

  return (
    <li data-reveal style={{ "--reveal-order": index }} className="product-card relative">
      <Link
        href={`/shop/${product.slug}`}
        className="group block text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <span className="relative block aspect-4/5 overflow-hidden rounded-md bg-ink/5">
          {/* The extra bottom padding keeps the bottle clear of the Add to Cart button. */}
          <Image
            src={`/images/products/${product.slug}.png`}
            alt=""
            fill
            sizes="(min-width: 1024px) 300px, 50vw"
            loading={imageLoading}
            className="object-contain px-6 pt-6 pb-16 transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        </span>
        <span className="mt-4 block text-sm opacity-60">Ye Green Care</span>
        <h3 className="mt-1 font-(family-name:--font-montserrat)! text-base font-medium transition-colors group-hover:text-accent xl:text-lg">
          {product.name}
        </h3>
        <span className="mt-1 block text-base">
          <span className="font-semibold">{hasPrice ? `$${product.price}` : "Price coming soon"}</span>
          <span className="opacity-60"> · {product.size}</span>
        </span>
        {product.rating !== undefined && <Rating value={product.rating} className="mt-2" />}
      </Link>
      {/* Matches the image tile's box; only the buttons inside it take clicks. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 aspect-4/5">
        <ProductCardActions productName={product.name} canAddToCart={hasPrice} />
      </div>
    </li>
  );
}
