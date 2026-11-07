import PageBanner from "@/components/PageBanner";
import ShopCatalog from "@/components/ShopCatalog";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Shop | Green Care",
  description:
    "A small collection of natural oils for beautiful hair and body.",
};

export default function ShopPage() {
  return (
    <PageTransition>
      <main>
        <PageBanner currentPage="Shop">Shop</PageBanner>
        <ShopCatalog />
      </main>
    </PageTransition>
  );
}
