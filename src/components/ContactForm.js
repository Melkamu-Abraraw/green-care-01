"use client";

import { useState } from "react";
import { contactInfo } from "@/components/contactInfo";

const fieldClass =
  "mt-1.5 w-full rounded-md border-[0.5px] border-ink/25 bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:text-ink/35 focus-visible:border-ink focus-visible:ring-[0.5px] focus-visible:ring-ink";
const labelClass = "text-sm text-ink/60";

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
      className="rounded-lg border-[0.5px] border-ink/15 p-6 md:p-10"
    >
      <h2 id="contact-form-title" className="text-2xl leading-tight font-medium md:text-3xl">
        Send us a message
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>Message</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="How can we help?"
            className={`${fieldClass} block resize-y`}
          />
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-8 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-brand-green hover:text-brand-white sm:w-auto"
          >
            Send message
            <svg
              className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <p role="status" className="mt-3 text-sm text-ink/70 empty:hidden">
            {status}
          </p>
        </div>
      </form>
    </section>
  );
}
