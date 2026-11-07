import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import { mapEmbedUrl, mapQuery } from "@/components/contactInfo";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Contact Us | Green Care",
  description:
    "Get in touch with Ye Green Care about our natural oils for hair and body.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main>
        <ScrollReveal />
        <PageBanner
          currentPage="Contact Us"
          imageSrc="/images/Dewy%20Coffee%20Plant%20on%20Green%20Velvet.png"
          imagePosition="object-[18%_center]"
        >
          Contact Us
        </PageBanner>

        <div className="px-4 py-16 md:px-8 md:py-24">
          <div
            data-reveal
            className="mx-auto mb-16 max-w-7xl overflow-hidden rounded-lg border-[0.5px] border-ink/15 md:mb-24"
          >
            <iframe
              title={`Map showing ${mapQuery}`}
              src={
                mapEmbedUrl ||
                `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=17&output=embed`
              }
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-80 w-full border-0 md:h-96"
            />
          </div>
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[5fr_6fr] lg:gap-16">
            <ContactDetails />
            <div data-reveal style={{ "--reveal-order": 1 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
