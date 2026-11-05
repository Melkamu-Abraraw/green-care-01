import Image from "next/image";
import Link from "next/link";

// The navbar floats over this banner (see globals.css), so the top padding keeps the title below it.
// `currentPage` adds a "Home - page" breadcrumb under the title.
// Narrow screens crop the wide photo, so `imagePosition` shifts toward its subject (the default photo's beans are on the right).
export default function PageBanner({
  titleAs: Title = "h1",
  currentPage,
  imageSrc = "/images/Roasted%20Coffee%20Beans%20on%20Green%20Texture.png",
  imagePosition = "object-[72%_center]",
  children,
}) {
  return (
    <div className="page-banner relative isolate flex h-96 flex-col items-center justify-center overflow-hidden bg-brand-dark pt-40 text-center text-brand-white md:h-130 md:pt-34">
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        className={`-z-10 object-cover lg:object-center ${imagePosition}`}
      />
      {/* Important overrides the serif set on all headings in globals.css. */}
      <Title className="font-(family-name:--font-montserrat)! text-4xl font-light tracking-[0.12em] uppercase md:text-6xl">
        {children}
      </Title>
      {currentPage && (
        <nav
          aria-label="Breadcrumb"
          className="mt-4 flex items-center gap-3 font-(family-name:--font-montserrat) text-xs font-medium tracking-[0.15em] uppercase md:text-sm"
        >
          <Link href="/" className="transition-colors hover:text-brand-gold">
            Home
          </Link>
          <span aria-hidden="true">-</span>
          <span aria-current="page" className="text-brand-gold">
            {currentPage}
          </span>
        </nav>
      )}
    </div>
  );
}
