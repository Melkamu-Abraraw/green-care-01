import Image from "next/image";
import Link from "next/link";
import ShopCatalog from "@/components/ShopCatalog";

export const metadata = {
  title: "Shop | Green Care",
  description:
    "A small collection of natural oils for beautiful hair and body.",
};

export default function ShopPage() {
  return (
    <main>
      <div className="relative isolate flex h-56 flex-col items-center justify-center overflow-hidden bg-brand-dark text-center text-brand-white md:h-96">
        <Image
          src="/videos/poster_2.png"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="-z-20 scale-105 object-cover blur-[3px]"
        />
        {/* The photo is full of label text, so it's softened to keep the title readable. */}
        <div className="absolute inset-0 -z-10 bg-brand-dark/70" />
        {/* Important overrides the serif set on all headings in globals.css. */}
        <h1 className="font-(family-name:--font-montserrat)! text-4xl font-light tracking-[0.12em] uppercase md:text-6xl">
          Shop
        </h1>
      </div>

      <ShopCatalog />
    </main>
  );
}
