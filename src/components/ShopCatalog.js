"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useSyncExternalStore } from "react";
import { addToCart, getCartCount, subscribeToCart } from "@/components/cartStore";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/products";
import Rating from "@/components/Rating";
import SocialLinks from "@/components/SocialLinks";

const sortOptions = [
  { value: "default", label: "Default sorting" },
  { value: "price", label: "Sort by price: low to high" },
  { value: "price-desc", label: "Sort by price: high to low" },
];

const categories = [
  ...new Map(
    products
      .filter((product) => product.category)
      .map(({ category }) => [category.slug, category]),
  ).values(),
];

const prices = products.map((product) => product.price).filter((price) => price !== undefined);
const lowestPrice = Math.min(...prices);
const highestPrice = Math.max(...prices);

const noSearchParams = new URLSearchParams();

function readPrice(searchParams, name, fallback) {
  const value = searchParams.get(name);
  const price = value === null || value === "" ? NaN : Number(value);
  if (!Number.isFinite(price)) return fallback;
  return Math.min(highestPrice, Math.max(lowestPrice, price));
}

function readFilters(searchParams) {
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  return {
    search: (searchParams.get("q") ?? "").trim(),
    category: categories.some(({ slug }) => slug === category) ? category : null,
    sort: sortOptions.some(({ value }) => value === sort) ? sort : "default",
    min: readPrice(searchParams, "min", lowestPrice),
    max: readPrice(searchParams, "max", highestPrice),
  };
}

// Default values stay out of the URL, so an unfiltered shop is always plain /shop.
function shopHref({ search, category, sort, min, max }) {
  const query = new URLSearchParams();
  if (search) query.set("q", search);
  if (category) query.set("category", category);
  if (sort !== "default") query.set("sort", sort);
  if (min !== lowestPrice) query.set("min", min);
  if (max !== highestPrice) query.set("max", max);

  const queryString = query.toString();
  return queryString ? `/shop?${queryString}` : "/shop";
}

// Every word must appear somewhere in the product, so "hair oil" and "ginseng" both find results.
function matchesSearch(product, search) {
  const text = [product.name, product.summary, product.category?.name, ...product.details.flat()]
    .join(" ")
    .toLowerCase();
  return search
    .toLowerCase()
    .split(/\s+/)
    .every((word) => text.includes(word));
}

function findProducts({ search, category, sort, min, max }) {
  const isPriceFiltered = min !== lowestPrice || max !== highestPrice;
  const matches = products.filter((product) => {
    if (search && !matchesSearch(product, search)) return false;
    if (category && product.category?.slug !== category) return false;
    // A product with no price yet only drops out once someone narrows the price range.
    if (product.price === undefined) return !isPriceFiltered;
    return product.price >= min && product.price <= max;
  });

  // Unpriced products sort last in both directions.
  if (sort === "price") {
    return matches.toSorted((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  }
  if (sort === "price-desc") {
    return matches.toSorted((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  }
  return matches;
}

function resultsLabel(count) {
  if (count === 0) return "No results";
  if (count === 1) return "Showing the single result";
  return `Showing all ${count} results`;
}

function Widget({ title, titleId, children }) {
  return (
    <section className="bg-brand-green/5 p-6 lg:p-8 dark:bg-ink/5">
      {/* Important overrides the serif set on all headings in globals.css. */}
      <h2
        id={titleId}
        className="font-(family-name:--font-montserrat)! text-lg font-light tracking-[0.08em] uppercase"
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SearchWidget({ filters, onApply }) {
  return (
    <Widget title="Search">
      <form
        role="search"
        className="flex border border-ink/25 bg-surface"
        onSubmit={(event) => {
          event.preventDefault();
          onApply({ search: event.currentTarget.elements.search.value.trim() });
        }}
      >
        <input
          type="search"
          name="search"
          aria-label="Search products"
          placeholder="Search products"
          defaultValue={filters.search}
          onChange={(event) => {
            // The browser's clear button empties the field without submitting the form.
            if (event.target.value === "" && filters.search) onApply({ search: "" });
          }}
          className="min-w-0 grow bg-transparent px-3 py-2.5 outline-offset-2"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex w-11 shrink-0 items-center justify-center bg-brand-green text-brand-white transition-colors hover:bg-brand-gold hover:text-brand-dark"
        >
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20.5 20.5-4.5-4.5" />
          </svg>
        </button>
      </form>
    </Widget>
  );
}

function CartWidget() {
  const count = useSyncExternalStore(subscribeToCart, getCartCount, () => 0);

  return (
    <Widget title="Shopping Cart">
      <p>
        {count === 0
          ? "No products in the cart."
          : `${count} ${count === 1 ? "item" : "items"} in your cart.`}
      </p>
    </Widget>
  );
}

function PriceWidget({ filters, onApply }) {
  const [min, setMin] = useState(filters.min);
  const [max, setMax] = useState(filters.max);
  const range = highestPrice - lowestPrice;

  return (
    <Widget title="Price Filter">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onApply({ min, max });
        }}
      >
        <div className="price-range relative h-4">
          <div className="absolute inset-x-0 top-1.75 h-0.5 bg-ink/15" />
          <div
            className="absolute top-1.75 h-0.5 bg-brand-gold"
            style={{
              left: `${((min - lowestPrice) / range) * 100}%`,
              right: `${((highestPrice - max) / range) * 100}%`,
            }}
          />
          <input
            type="range"
            aria-label="Minimum price"
            min={lowestPrice}
            max={highestPrice}
            value={min}
            onChange={(event) => setMin(Math.min(Number(event.target.value), max))}
          />
          <input
            type="range"
            aria-label="Maximum price"
            min={lowestPrice}
            max={highestPrice}
            value={max}
            onChange={(event) => setMax(Math.max(Number(event.target.value), min))}
          />
        </div>
        <p className="mt-4 text-right">
          Price:{" "}
          <span className="text-lg font-semibold">
            ${min} – ${max}
          </span>
        </p>
        <div className="mt-3 text-right">
          <button
            type="submit"
            className="bg-ink/10 px-6 py-3 font-(family-name:--font-montserrat) text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:bg-brand-green hover:text-brand-white"
          >
            Filter
          </button>
        </div>
      </form>
    </Widget>
  );
}

function CategoryLink({ href, isActive, children }) {
  return (
    <li>
      <Link
        href={href}
        scroll={false}
        aria-current={isActive ? "true" : undefined}
        className={`transition-colors hover:text-accent ${isActive ? "font-semibold text-accent" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
}

function CategoriesWidget({ filters }) {
  return (
    <Widget title="Categories">
      <ul className="list-disc space-y-1.5 pl-4 marker:text-brand-gold">
        <CategoryLink href={shopHref({ ...filters, category: null })} isActive={!filters.category}>
          All products
        </CategoryLink>
        {categories.map(({ name, slug }) => (
          <CategoryLink
            key={slug}
            href={shopHref({ ...filters, category: slug })}
            isActive={filters.category === slug}
          >
            {name}
          </CategoryLink>
        ))}
      </ul>
    </Widget>
  );
}

function FollowWidget() {
  return (
    <Widget title="Follow us" titleId="shop-social">
      <SocialLinks labelledBy="shop-social" />
    </Widget>
  );
}

function ViewButton({ label, isActive, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={isActive}
      className={`transition-colors hover:text-brand-gold ${isActive ? "text-brand-gold" : "text-ink/30"}`}
    >
      <svg className="size-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </button>
  );
}

function ShopListItem({ product, imageLoading }) {
  return (
    <li className="flex items-center gap-4 md:gap-8">
      <Link
        href={`/shop/${product.slug}`}
        aria-label={`View ${product.name}`}
        tabIndex={-1}
        className="group relative block aspect-4/5 w-32 shrink-0 overflow-hidden rounded-md bg-ink/5 md:w-44"
      >
        <Image
          src={`/images/products/${product.slug}.png`}
          alt=""
          fill
          sizes="(min-width: 768px) 176px, 128px"
          loading={imageLoading}
          className="object-contain p-3 transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </Link>

      <div className="min-w-0">
        <span className="block text-sm opacity-60">Ye Green Care</span>
        {/* Important overrides the serif set on all headings in globals.css. */}
        <h3 className="mt-1 font-(family-name:--font-montserrat)! text-base font-medium xl:text-lg">
          <Link href={`/shop/${product.slug}`} className="transition-colors hover:text-accent">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1">
          <span className="font-semibold">
            {product.price === undefined ? "Price coming soon" : `$${product.price}`}
          </span>
          <span className="opacity-60"> · {product.size}</span>
        </p>
        {product.rating !== undefined && <Rating value={product.rating} className="mt-2" />}
        <p className="mt-2 hidden md:block">{product.summary}</p>
        {product.price !== undefined && (
          <button
            type="button"
            onClick={() => addToCart()}
            aria-label={`Add ${product.name} to cart`}
            className="mt-3 bg-brand-green px-4 py-3 font-(family-name:--font-montserrat) text-xs font-medium tracking-[0.15em] whitespace-nowrap text-brand-white uppercase transition-colors hover:bg-brand-gold hover:text-brand-dark md:px-6"
          >
            Add to cart
          </button>
        )}
      </div>
    </li>
  );
}

function Catalog({ searchParams }) {
  const router = useRouter();
  const [view, setView] = useState("grid");
  const [areFiltersOpen, setAreFiltersOpen] = useState(false);

  const filters = readFilters(searchParams);
  const matches = findProducts(filters);
  const isList = view === "list";
  const hasFilters =
    filters.search || filters.category || filters.min !== lowestPrice || filters.max !== highestPrice;
  const clearedHref = shopHref({ sort: filters.sort, min: lowestPrice, max: highestPrice });

  function applyFilters(changes) {
    router.push(shopHref({ ...filters, ...changes }), { scroll: false });
  }

  return (
    <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:px-8 md:py-16 lg:grid-cols-[17.5rem_minmax(0,1fr)]">
      <div>
        {/* Keyed so the field follows the URL when filters are cleared or the user goes back. */}
        <SearchWidget key={filters.search} filters={filters} onApply={applyFilters} />
        <button
          type="button"
          onClick={() => setAreFiltersOpen(!areFiltersOpen)}
          aria-expanded={areFiltersOpen}
          className="mt-4 w-full border border-ink/25 py-3 font-(family-name:--font-montserrat) text-xs font-medium tracking-[0.15em] uppercase lg:hidden"
        >
          {areFiltersOpen ? "Hide filters" : "Show filters"}
        </button>
        <aside
          aria-label="Filters"
          className={`mt-4 space-y-px lg:mt-px lg:block ${areFiltersOpen ? "" : "hidden"}`}
        >
          <CartWidget />
          {/* Keyed so the slider follows the URL when filters are cleared or the user goes back. */}
          <PriceWidget key={`${filters.min}-${filters.max}`} filters={filters} onApply={applyFilters} />
          <CategoriesWidget filters={filters} />
          <FollowWidget />
        </aside>
      </div>

      <section aria-labelledby="shop-products-title">
        <h2 id="shop-products-title" className="sr-only">
          Products
        </h2>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="flex gap-2">
            <ViewButton label="Show products as a grid" isActive={!isList} onClick={() => setView("grid")}>
              <path d="M2 4h6v4H2zM9 4h6v4H9zM16 4h6v4h-6zM2 10h6v4H2zM9 10h6v4H9zM16 10h6v4h-6zM2 16h6v4H2zM9 16h6v4H9zM16 16h6v4h-6z" />
            </ViewButton>
            <ViewButton label="Show products as a list" isActive={isList} onClick={() => setView("list")}>
              <path d="M2 4h5v4H2zM8 4h14v4H8zM2 10h5v4H2zM8 10h14v4H8zM2 16h5v4H2zM8 16h14v4H8z" />
            </ViewButton>
          </div>
          <p role="status" className="opacity-70">
            {resultsLabel(matches.length)}
          </p>
          {hasFilters && (
            <Link
              href={clearedHref}
              scroll={false}
              className="text-accent underline underline-offset-2 transition-colors hover:text-ink"
            >
              Clear filters
            </Link>
          )}
          <select
            aria-label="Sort products"
            value={filters.sort}
            onChange={(event) => applyFilters({ sort: event.target.value })}
            className="w-full bg-ink/5 px-4 py-3 sm:ml-auto sm:w-auto"
          >
            {sortOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {matches.length === 0 ? (
          <p className="mt-6 border border-ink/15 p-8 text-center text-lg">
            No products match your search and filters.
          </p>
        ) : (
          <ul
            className={`mt-6 grid gap-x-4 gap-y-8 md:gap-x-6 ${isList ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"}`}
          >
            {matches.map((product, index) => {
              const imageLoading = index < 6 ? "eager" : "lazy";

              return isList ? (
                <ShopListItem key={product.slug} product={product} imageLoading={imageLoading} />
              ) : (
                <ProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                  imageLoading={imageLoading}
                />
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

function CatalogFromUrl() {
  const searchParams = useSearchParams();
  return <Catalog searchParams={searchParams} />;
}

// The query string isn't known at build time, so the prerendered page lists every product.
export default function ShopCatalog() {
  return (
    <Suspense fallback={<Catalog searchParams={noSearchParams} />}>
      <CatalogFromUrl />
    </Suspense>
  );
}
