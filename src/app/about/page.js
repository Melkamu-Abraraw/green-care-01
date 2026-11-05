import AboutCollection from "@/components/AboutCollection";
import AboutIntro from "@/components/AboutIntro";
import AboutSlideshow from "@/components/AboutSlideshow";
import AboutStatement from "@/components/AboutStatement";
import AboutStats from "@/components/AboutStats";
import CategoryStrip from "@/components/CategoryStrip";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Us | Green Care",
  description:
    "Ye Green Care makes a small collection of natural oils for beautiful hair and body.",
};

export default function AboutPage() {
  return (
    <main>
      <ScrollReveal />
      <PageBanner
        currentPage="About Us"
        imageSrc="/images/Dewy%20Coffee%20Plant%20on%20Green%20Velvet.png"
        imagePosition="object-[18%_center]"
      >
        About Us
      </PageBanner>
      <AboutIntro />
      <AboutStatement />
      <AboutSlideshow />
      <AboutStats />
    </main>
  );
}
