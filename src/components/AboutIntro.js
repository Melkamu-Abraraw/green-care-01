import Image from "next/image";
import Link from "next/link";
import PlayVideoButton from "@/components/PlayVideoButton";

export default function AboutIntro() {
  return (
    <section aria-labelledby="about-intro-title" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Three overlapping photos: the bottom one sits over the corner of the tall one. */}
        <div data-reveal className="relative mx-auto aspect-572/686 w-full max-w-xl">
          {/* This photo is transparent, so the tile's color draws the arch. The top gap keeps the cap clear of the curve. */}
          <div className="absolute top-0 left-0 h-2/3 w-[47%] overflow-hidden rounded-[1.25rem] rounded-tl-[100%_60%] bg-brand-gold/10 dark:bg-[#fbf6ea]">
            <div className="absolute inset-x-0 top-[14%] bottom-0">
              <Image
                src="/images/our-story.png"
                alt="A bottle of Ye Green Care coffee bean oil beside coffee beans and leaves"
                fill
                sizes="(min-width: 1024px) 270px, 47vw"
                className="object-cover object-[86%_center]"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 h-[38%] w-[47%] overflow-hidden rounded-[1.25rem] rounded-tr-[100%]">
            <Image
              src="/images/Roasted%20Coffee%20Beans%20on%20Green%20Texture.png"
              alt="Roasted coffee beans on a green background"
              fill
              sizes="(min-width: 1024px) 270px, 47vw"
              className="object-cover object-right"
            />
          </div>
          <div className="absolute right-0 bottom-0 h-[57%] w-[68%] overflow-hidden rounded-[1.25rem]">
            <Image
              src="/videos/poster_2.png"
              alt="A row of Green Care oil bottles among fresh ingredients"
              fill
              sizes="(min-width: 1024px) 390px, 68vw"
              className="object-cover"
            />
          </div>
        </div>

        <div data-reveal style={{ "--reveal-order": 1 }}>
          <p className="font-(family-name:--font-montserrat) text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            About Us
          </p>
          <h2
            id="about-intro-title"
            className="mt-3 text-4xl leading-tight font-bold xl:text-5xl"
          >
            Thoughtful Care From The Ground Up
          </h2>
          {/* Facts from ye-greencarenaturals.com. */}
          <p className="mt-6 text-lg">
            Ye Green Care was founded in 2018 by Gizaw Bekele Begashaw, a well-known herbalist in
            Ethiopia and the Ethiopian Diaspora with 15 years of research into Ethiopian herbs and
            their uses. That research led to our coffee bean oil, made without infused oil or
            solvent extraction: 200 mL of oil from every 1 kg of coffee beans.
          </p>
          <div className="mt-8">
            <PlayVideoButton />
          </div>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-brand-dark px-12 py-4 font-(family-name:--font-montserrat) text-sm font-medium tracking-[0.15em] text-brand-gold uppercase transition-colors hover:bg-brand-green dark:bg-brand-gold dark:text-brand-dark hover:text-brand-white"
          >
            Shop our oils
          </Link>
        </div>
      </div>
    </section>
  );
}
