import Benefits from "@/components/Benefits";
import CategoryStrip from "@/components/CategoryStrip";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import OurStory from "@/components/OurStory";
import ProductGrid from "@/components/ProductGrid";
import ProductIngredients from "@/components/ProductIngredients";
import ProductShowcase from "@/components/ProductShowcase";
import ScrollReveal from "@/components/ScrollReveal";
import Standards from "@/components/Standards";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <ScrollReveal />
        <Hero />
        <CategoryStrip />
        <div className="flex flex-col gap-6 md:gap-8">
          <ProductShowcase />
          <Benefits />
          <ProductGrid />
          <OurStory />
          <HowToOrder />
          <ProductIngredients />
          <Standards />
        </div>
      </main>
    </PageTransition>
  );
}
