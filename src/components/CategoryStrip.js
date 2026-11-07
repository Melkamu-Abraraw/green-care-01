import { productIcons } from "@/components/ingredientIcons";
import { products } from "@/components/products";

// The list follows the shop's products, in the same order.
const categories = products.map(({ name, slug }) => ({ name, icon: productIcons[slug] }));

// The track slides by half its width, so each half must be wider than the screen.
const copies = [0, 1, 2, 3, 4, 5, 6, 7];

export default function CategoryStrip() {
  return (
    <section
      aria-label="Our botanicals"
      className="category-strip overflow-hidden py-6 text-ink md:py-8"
    >
      <div className="category-strip-viewport">
        <div className="category-strip-track flex w-max">
          {copies.map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy > 0 ? "true" : undefined}
              className="category-strip-list flex"
            >
              {categories.map(({ name, icon }) => (
                <li
                  key={name}
                  className="category-strip-item flex items-center gap-2 font-(family-name:--font-playfair) text-sm italic whitespace-nowrap md:gap-2.5 md:text-base"
                >
                  <svg
                    className="size-5 shrink-0 fill-current text-[#b38a24] dark:text-[#c69a30] [--icon-cut:var(--color-surface)] md:size-6"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                  <span className="category-strip-name">{name}</span>
                  <span
                    className="mx-8 size-1 shrink-0 rounded-full bg-brand-gold/50 md:mx-12"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
