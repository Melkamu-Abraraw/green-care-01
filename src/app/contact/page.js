import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import { mapQuery } from "@/components/contactInfo";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact Us | Green Care",
  description:
    "Get in touch with Ye Green Care about our natural oils for hair and body.",
};

export default function ContactPage() {
  return (
    <main>
      <ScrollReveal />
      <PageBanner
        currentPage="Contact Us"
        imageSrc="/images/Dewy%20Coffee%20Plant%20on%20Green%20Velvet.png"
        imagePosition="object-[18%_center]"
      >
        Contact Us
      </PageBanner>

      <ContactDetails />
      <div className="mt-16 mb-24 px-4 md:mt-24 md:mb-40 md:px-8">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <iframe
            title={`Map showing ${mapQuery}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 lg:h-full"
          />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
