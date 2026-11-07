import { notFound } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import ProductSummary from "@/components/ProductSummary";
import { products } from "@/components/products";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

const productLayoutClass =
  "mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[55fr_45fr] lg:gap-14";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

function findProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};

  return {
    title: `${product.fullName ?? product.name} | Green Care`,
    description: product.summary,
  };
}

async function ProductContent({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((other) => other.slug !== slug)
    .slice(0, 4);

  return (
    <>
      {/* Inside the boundary, so it can't mark up these elements before they hydrate. */}
      <ScrollReveal />

      <div className={productLayoutClass}>
        {/* Keyed so moving between products starts on the first image, quantity, and tab. */}
        <ProductGallery
          key={`gallery-${slug}`}
          slug={slug}
          model={product.model}
          photos={[product.front, ...product.gallery].filter(Boolean)}
          productName={product.name}
        />
        <ProductSummary key={`summary-${slug}`} product={product} />
      </div>

      <section
        aria-labelledby="related-products-title"
        className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24"
      >
        <h2
          data-reveal
          id="related-products-title"
          className="font-(family-name:--font-montserrat)! text-2xl font-light tracking-[0.08em] uppercase md:text-3xl"
        >
          Related products
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-5 lg:grid-cols-4">
          {relatedProducts.map((relatedProduct, index) => (
            <ProductCard
              key={relatedProduct.slug}
              product={relatedProduct}
              index={index}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

function ProductContentFallback() {
  return (
    <div className={productLayoutClass} aria-hidden="true">
      <div className="skeleton mx-auto aspect-square w-full max-w-md rounded-lg" />
      <div className="space-y-4">
        <div className="skeleton h-12 w-3/4 rounded-md" />
        <div className="skeleton h-8 w-20 rounded-md" />
        <div className="skeleton h-24 rounded-md" />
      </div>
    </div>
  );
}

export default function ProductPage({ params }) {
  return (
    <PageTransition>
      <main>
        {/* A paragraph here, because the product name is this page's main heading. */}
        <PageBanner titleAs="p">Shop</PageBanner>

        {/* The slug belongs to one URL, so it stays behind Suspense for instant navigation. */}
        {/* The skeleton slides down and out, then the product slides up into its place. */}
        <Suspense
          fallback={
            <ViewTransition exit="skeleton-exit" default="none">
              <ProductContentFallback />
            </ViewTransition>
          }
        >
          <ViewTransition enter="content-enter" default="none">
            <ProductContent params={params} />
          </ViewTransition>
        </Suspense>
      </main>
    </PageTransition>
  );
}
