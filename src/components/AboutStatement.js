import Image from "next/image";

function InlineBottle({ slug }) {
  return (
    <span className="relative mx-1 inline-block h-16 w-13 rounded-md bg-ink/5 align-middle md:mx-2 md:h-20 md:w-16">
      <Image
        src={`/images/products/${slug}.png`}
        alt=""
        fill
        sizes="64px"
        className="object-contain p-1.5"
      />
    </span>
  );
}

export default function AboutStatement() {
  return (
    <section className="px-4 pb-16 text-center md:px-8 md:pb-24">
      {/* The business's inspiration, as stated on ye-greencarenaturals.com. */}
      <p
        data-reveal
        className="mx-auto max-w-5xl text-2xl leading-[2.2] font-light uppercase md:text-4xl md:leading-[2.2]"
      >
        Inspired by Ethiopian traditional wisdom <InlineBottle slug="roasted-coffee" /> we make
        coffee bean oil to create an iconic image for our country <InlineBottle slug="green-coffee" />{" "}
        in the world, and the rest of our profit helps those in need{" "}
        <InlineBottle slug="black-seed" />
      </p>
      <div data-reveal className="mt-10">
        {/* The design has a handwritten signature here; swap the logo for one if it becomes available. */}
        <Image src="/logo.png" alt="" width={640} height={505} className="mx-auto h-auto w-18" />
        <p className="mt-3 font-(family-name:--font-playfair) text-xl font-bold">
          Gizaw Bekele Begashaw
        </p>
        <p className="mt-1">Founder &amp; General Manager</p>
      </div>
    </section>
  );
}
