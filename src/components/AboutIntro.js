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
              src="/images/story_image.png"
              alt="The Ye Green Care oil collection among leaves, coffee beans, rosemary and fruit"
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
          {/* From ye-greencarenaturals.com/about-us. */}
          <p className="mt-6 text-lg">
            Our founder, Gizaw Bekele Begashaw, is a well-known herbalist in Ethiopia and the
            Ethiopian diaspora. He holds a diploma in herbal science and has spent the last 15
            years researching Ethiopian herbs and their uses, bringing his healing service to tens
            of thousands of Ethiopians.
          </p>
          <p className="mt-4 text-lg">
            His research now focuses on Ethiopian coffee oil. With his own method, using no
            infused oil and no solvent extraction, he draws 200 mL of potent, edible-grade coffee
            oil from every 1 kg of coffee beans.
          </p>
          <div className="mt-8">
            <PlayVideoButton />
          </div>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-brand-gold px-12 py-4 font-(family-name:--font-montserrat) text-sm font-medium tracking-[0.15em] text-brand-dark uppercase transition-colors hover:bg-[#bf8c1c]"
          >
            Go to shop
          </Link>
        </div>
      </div>
    </section>
  );
}
