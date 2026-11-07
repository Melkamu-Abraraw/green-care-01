import Link from "next/link";
import { productIcons } from "@/components/ingredientIcons";
import { products } from "@/components/products";

export default function ProductIngredients() {
  return (
    <section
      aria-labelledby="product-ingredients-title"
      className="product-ingredients px-4 pt-16 pb-6 md:px-8 md:pt-24 md:pb-8"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="text-center">
          <p className="font-(family-name:--font-montserrat) text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            What&apos;s Inside
          </p>
          <h2
            id="product-ingredients-title"
            className="mt-3 text-4xl leading-tight font-bold xl:text-5xl"
          >
            Ingredients In Every Bottle
          </h2>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-12 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <li
              key={product.slug}
              data-reveal
              style={{ "--reveal-order": index % 4 }}
              className="ingredient-item group flex items-start gap-5"
            >
              {/* The icon's cut-out details are drawn in the circle's color, so it's set on both. */}
              <span className="ingredient-icon flex size-18 shrink-0 items-center justify-center rounded-full bg-(--ingredient-circle) text-logo-green [--icon-cut:var(--ingredient-circle)] [--ingredient-circle:#eeede8] md:size-20 dark:text-accent dark:[--ingredient-circle:#16241c]">
                <svg className="ingredient-glyph size-8 fill-current md:size-9" viewBox="0 0 24 24" aria-hidden="true">
                  {productIcons[product.slug]}
                </svg>
              </span>
              <div className="min-w-0 pt-2">
                <h3 className="text-xl leading-snug font-bold md:text-2xl">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="transition-colors hover:text-logo-green dark:hover:text-accent"
                  >
                    {product.name}
                  </Link>
                </h3>
                <span className="ingredient-rule mt-3 block h-0.5 w-8 bg-ink/70" aria-hidden="true" />
                <p className="mt-3 leading-relaxed text-ink/60">{product.ingredients}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
