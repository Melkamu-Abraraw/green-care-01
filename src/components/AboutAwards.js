import Image from "next/image";

// Photos live in public/images/awards/. Give each a real description in `alt` when you know what it shows.
const photos = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/awards/bikila-award-photo-${n}.jpg`,
  alt: `Bikila Award ceremony, photo ${n} of 6`,
}));

// Mosaic layout on a 3x3 grid: the first photo is large, the rest fill around it.
const spans = ["col-span-2 row-span-2", "", "", "", "", ""];

export default function AboutAwards() {
  return (
    <section aria-labelledby="awards-heading" className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div data-reveal className="md:order-2">
          <p className="text-lg font-extralight text-accent md:text-2xl">Bikila Award</p>
          <h2 id="awards-heading" className="mt-2 text-3xl font-bold md:text-5xl">
            Business Excellence
          </h2>
          <p className="mt-4 max-w-md opacity-80">
            The Bikila Awards honour outstanding individuals whose achievements, leadership, and dedication make a
            lasting impact on the community. A celebration of excellence, cultural pride, and the people shaping a
            brighter future.
          </p>
          <p className="mt-6 font-semibold">Gizaw Bekele Begashaw</p>
          <p className="text-sm text-accent">Founder &amp; CEO of Green Care Essentials</p>
          <p className="mt-2 max-w-md opacity-80">
            Awarded for promoting value-added manufacturing and elevating Ethiopian holistic natural medicine.
          </p>
        </div>

        <div className="grid aspect-square grid-cols-3 grid-rows-3 gap-2 md:order-1 md:gap-3">
          {photos.map(({ src, alt }, i) => (
            <div
              key={src}
              data-reveal
              style={{ "--reveal-order": i }}
              className={`group relative overflow-hidden bg-brand-dark ${spans[i]}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 384px, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
