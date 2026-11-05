"use client";

import { useState } from "react";
import { contactInfo } from "@/components/contactInfo";

const fieldClass =
  "w-full border border-ink/30 bg-surface px-4 py-3 outline-none placeholder:text-ink/70 focus-visible:border-ink focus-visible:outline-1 focus-visible:outline-ink";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Nothing is sent from the site itself, so never tell the visitor their message went through.
    const form = new FormData(event.currentTarget);
    const subject = `Message from ${form.get("name")}`;
    const body = `${form.get("message")}\n\nFrom: ${form.get("name")} (${form.get("email")})`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should now open with your message. Press send there to finish.");
  }

  return (
    <section
      aria-labelledby="contact-form-title"
      className="bg-ink/5 px-4 py-16 md:px-16 md:py-20 xl:px-20"
    >
      {/* Same type as the product grid; important overrides the serif set on all headings in globals.css. */}
      <h2
        id="contact-form-title"
        className="font-(family-name:--font-montserrat)! text-3xl leading-tight font-semibold xl:text-4xl"
      >
        Get In Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex max-w-xl flex-col gap-5 font-(family-name:--font-montserrat) text-sm"
      >
        <label>
          <span className="sr-only">Name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Name" className={fieldClass} />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input name="email" type="email" autoComplete="email" required placeholder="Email" className={fieldClass} />
        </label>
        <label>
          <span className="sr-only">Message</span>
          <textarea name="message" rows={4} required placeholder="Message" className={`${fieldClass} block resize-y`} />
        </label>
        <div>
          <button
            type="submit"
            className="bg-brand-dark px-10 py-3 font-(family-name:--font-montserrat) text-sm font-medium tracking-[0.15em] text-brand-gold uppercase transition-colors hover:bg-brand-green dark:bg-brand-gold dark:text-brand-dark hover:text-brand-white"
          >
            Send message
          </button>
        </div>
        <p role="status" className="min-h-6">
          {status}
        </p>
      </form>
    </section>
  );
}
