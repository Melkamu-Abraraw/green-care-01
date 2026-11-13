import AboutAwards from "@/components/AboutAwards";
import AboutIntro from"@/components/AboutIntro";
import AboutSlideshow from "@/components/AboutSlideshow";
import AboutStatement from "@/components/AboutStatement";
import AboutStats from "@/components/AboutStats";
import AboutTeam from "@/components/AboutTeam";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "About Us | Green Care",
  description:
    "Ye Green Care was founded by herbalist Gizaw Bekele Begashaw, who draws on 15 years of research into Ethiopian herbs to make our coffee bean oil.",
};

export default function AboutPage() {
  return (
    <PageTransition>
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
        <AboutStats />
        <AboutSlideshow />
        <AboutTeam />
        <AboutAwards />
        <AboutStatement />
      </main>
    </PageTransition>
  );
}
