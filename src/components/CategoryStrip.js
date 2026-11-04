import { ingredientIcons } from "@/components/ingredientIcons";

const categories = [
  { name: "Coffee Beans", icon: ingredientIcons.coffee },
  { name: "Pure Extracted Rue", icon: ingredientIcons.rue },
  { name: "Black Seed", icon: ingredientIcons.blackSeed },
  { name: "Rosemary", icon: ingredientIcons.rosemary },
  { name: "Orange Seed", icon: ingredientIcons.orangeSeed },
  { name: "Carrot", icon: ingredientIcons.carrot },
  { name: "Ginger", icon: ingredientIcons.ginger },
];

// The track slides by half its width, so each half must be wider than the screen.
const copies = [0, 1, 2, 3, 4, 5, 6, 7];

export default function CategoryStrip() {
  return (
    <section
      aria-label="Product range"
      className="category-strip overflow-hidden bg-brand-gold py-5 text-brand-white md:py-6"
    >
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
                className="flex items-center gap-2.5 pr-12 font-(family-name:--font-montserrat) text-sm font-medium tracking-wide whitespace-nowrap md:gap-3 md:pr-16 md:text-base"
              >
                <svg
                  className="size-6 shrink-0 fill-current text-brand-dark [--icon-cut:var(--color-brand-gold)]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
