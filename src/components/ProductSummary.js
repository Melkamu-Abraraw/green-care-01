"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { addToCart } from "@/components/cartStore";
import ProductReviews from "@/components/ProductReviews";
import Rating from "@/components/Rating";

const MAX_QUANTITY = 99;
const metaLabelClass =
  "font-(family-name:--font-montserrat) text-xs tracking-[0.2em] uppercase";

function QuantityStepButton({ label, onClick, path }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex w-8 flex-1 items-center justify-center transition-colors hover:bg-ink/5"
    >
      <svg
        className="size-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </button>
  );
}

function AddToCartForm({ productName }) {
  const [quantity, setQuantity] = useState(1);
  const quantityId = useId();

  function step(change) {
    setQuantity(Math.min(MAX_QUANTITY, Math.max(1, (Number(quantity) || 1) + change)));
  }

  return (
    <form
      className="mt-8 flex flex-wrap items-stretch gap-4 md:mt-10"
      onSubmit={(event) => {
        event.preventDefault();
        addToCart(Number(quantity) || 1);
      }}
    >
      <label htmlFor={quantityId} className="sr-only">
        Quantity of {productName}
      </label>
      <div className="flex h-12 border border-ink/25">
        <input
          id={quantityId}
          type="text"
          inputMode="numeric"
          value={quantity}
          onChange={(event) => {
            const digits = event.target.value.replace(/\D/g, "");
            setQuantity(digits === "" ? "" : Math.min(MAX_QUANTITY, Number(digits)));
          }}
          onBlur={() => setQuantity(Number(quantity) || 1)}
          className="w-14 bg-transparent text-center text-lg outline-offset-2"
        />
        <div className="flex flex-col divide-y divide-ink/25 border-l border-ink/25">
          <QuantityStepButton label="Increase quantity" onClick={() => step(1)} path="M12 5v14M5 12h14" />
          <QuantityStepButton label="Decrease quantity" onClick={() => step(-1)} path="M5 12h14" />
        </div>
      </div>
      <button
        type="submit"
        className="h-12 bg-brand-green px-10 font-(family-name:--font-montserrat) text-sm font-medium tracking-[0.15em] text-brand-white uppercase transition-colors hover:bg-brand-gold hover:text-brand-dark"
      >
        Add to cart
      </button>
    </form>
  );
}

function ShareButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="transition-colors hover:text-accent"
    >
      <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </button>
  );
}

function ShareLinks({ productName }) {
  const [copyStatus, setCopyStatus] = useState("");

  function openShareWindow(baseUrl) {
    const url = `${baseUrl}${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus("Link copied");
    } catch {
      // Browsers can refuse clipboard access, and it is missing entirely on non-HTTPS pages.
      setCopyStatus("Couldn't copy the link");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <span className={metaLabelClass}>Share:</span>
      <ShareButton
        label="Share on Facebook"
        onClick={() => openShareWindow("https://www.facebook.com/sharer/sharer.php?u=")}
      >
        <path
          fill="currentColor"
          d="M14 8.5V6.5c0-.8.5-1 1-1h2V2h-3c-2.8 0-4 1.9-4 4v2.5H7.5V12H10v10h4V12h2.6l.4-3.5z"
        />
      </ShareButton>
      <ShareButton
        label="Share on X"
        onClick={() => openShareWindow("https://x.com/intent/post?url=")}
      >
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </ShareButton>
      <ShareButton
        label="Share by email"
        onClick={() => {
          const subject = encodeURIComponent(`${productName} from Ye Green Care`);
          window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(window.location.href)}`;
        }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </g>
      </ShareButton>
      <ShareButton label="Copy link" onClick={copyLink}>
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3A4.5 4.5 0 0 0 13 4.6l-1 1" />
          <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
        </g>
      </ShareButton>
      <span role="status" className="text-sm opacity-70">
        {copyStatus}
      </span>
    </div>
  );
}

function DetailsTable({ product }) {
  const rows = [["Size", product.size], ...product.details];

  return (
    <table className="text-left">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th scope="row" className={`${metaLabelClass} py-1 pr-6 font-normal opacity-60`}>
              {label}
            </th>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ProductSummary({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([]);
  const tabRefs = useRef({});
  const baseId = useId();

  const tabs = [
    { id: "description", label: "Description" },
    { id: "details", label: "Details" },
    { id: "reviews", label: `Reviews (${reviews.length})` },
  ];

  function handleTabKeyDown(event, index) {
    const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
    if (!(event.key in moves)) return;

    event.preventDefault();
    const nextTab = tabs[(moves[event.key] + tabs.length) % tabs.length];
    setActiveTab(nextTab.id);
    tabRefs.current[nextTab.id].focus();
  }

  return (
    <div>
      {/* Important overrides the serif set on all headings in globals.css. */}
      <h1 className="font-(family-name:--font-montserrat)! text-3xl leading-tight font-light tracking-[0.08em] uppercase md:text-[2.75rem]">
        {product.name}
      </h1>
      <p className="mt-3 text-2xl font-light md:text-3xl">
        {product.price === undefined ? "Price coming soon" : `$${product.price}`}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        {product.rating !== undefined && <Rating value={product.rating} />}
        <button
          type="button"
          onClick={() => {
            setActiveTab("reviews");
            tabRefs.current.reviews.focus();
          }}
          className="text-base leading-none transition-colors hover:text-accent"
        >
          ({reviews.length} customer {reviews.length === 1 ? "review" : "reviews"})
        </button>
      </div>

      <p className="mt-8 text-lg leading-relaxed md:mt-10">{product.summary}</p>

      {product.price !== undefined && <AddToCartForm productName={product.name} />}

      <div className="mt-8 space-y-2 md:mt-10">
        <p className={metaLabelClass}>
          Size: <span className="ml-1 font-medium">{product.size}</span>
        </p>
        {product.category && (
          <p className={metaLabelClass}>
            Category:{" "}
            <Link
              href={`/shop?category=${product.category.slug}`}
              className="ml-1 font-medium transition-colors hover:text-accent"
            >
              {product.category.name}
            </Link>
          </p>
        )}
        <ShareLinks productName={product.name} />
      </div>

      <div className="mt-8 md:mt-10">
        <div role="tablist" aria-label="Product information" className="flex">
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                ref={(element) => {
                  tabRefs.current[tab.id] = element;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`-ml-px grow border px-2 py-3 font-(family-name:--font-montserrat) text-xs tracking-wider uppercase transition-colors first:ml-0 sm:grow-0 sm:px-6 sm:text-sm ${isActive ? "relative border-brand-green bg-brand-green text-brand-white" : "border-ink/25 hover:text-accent"}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${activeTab}`}
          tabIndex={0}
          className="px-1 py-5 text-lg leading-relaxed sm:px-6"
        >
          {activeTab === "description" && <p>{product.description}</p>}
          {activeTab === "details" && <DetailsTable product={product} />}
          {/* Stays mounted while hidden, so switching tabs keeps a half-written review. */}
          <div hidden={activeTab !== "reviews"}>
            <ProductReviews
              reviews={reviews}
              onAddReview={(review) => setReviews([...reviews, review])}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
