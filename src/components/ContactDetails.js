import { contactInfo } from "@/components/contactInfo";
import SocialLinks from "@/components/SocialLinks";

const linkClass = "transition-colors hover:text-accent";

const columns = [
  { title: "Locations", lines: contactInfo.locations, numbered: true },
  {
    title: "Phone",
    lines: contactInfo.phones.map((phone) => (
      <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`} className={linkClass}>
        {phone}
      </a>
    )),
  },
  {
    title: "Email",
    lines: [
      // The long address has no spaces, so it may break anywhere to fit its column.
      <a key="email" href={`mailto:${contactInfo.email}`} className={`${linkClass} break-all`}>
        {contactInfo.email}
      </a>,
    ],
  },
];

export default function ContactDetails() {
  return (
    <section aria-label="Contact details" className="px-4 py-16 md:px-8 md:py-24">
      <ul className="mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {columns.map(({ title, lines, numbered }, index) => {
          const List = numbered ? "ol" : "ul";

          return (
            <li key={title} data-reveal style={{ "--reveal-order": index }}>
              <h2 className="text-2xl font-bold">{title}</h2>
              <List className={`mt-3 flex flex-col gap-2 text-lg ${numbered ? "mx-auto w-fit list-outside list-decimal pl-5 text-left" : ""}`}>
                {lines.map((line, lineIndex) => (
                  <li key={lineIndex}>{line}</li>
                ))}
              </List>
            </li>
          );
        })}
        <li data-reveal style={{ "--reveal-order": columns.length }}>
          <h2 id="contact-follow-title" className="text-2xl font-bold">
            Follow Us
          </h2>
          <SocialLinks labelledBy="contact-follow-title" className="mt-3 justify-center" />
        </li>
      </ul>
    </section>
  );
}
