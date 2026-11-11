const fieldClass =
  "mt-1.5 w-full rounded-md border-[0.5px] border-ink/25 bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:text-ink/35 focus-visible:border-ink focus-visible:ring-[0.5px] focus-visible:ring-ink";
const labelClass = "text-sm text-ink/60";

export default function ContactForm() {
  return (
    <section
      aria-labelledby="contact-form-title"
      className="rounded-lg border-[0.5px] border-ink/15 p-6 md:p-10"
    >
      <h2 id="contact-form-title" className="text-2xl leading-tight font-medium md:text-3xl">
        Send us a message
      </h2>

      <form className="mt-8 grid gap-5 sm:grid-cols-2">
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
          {/* Disabled until the form sends through an API. This also stops Enter from submitting the form. */}
          <button
            type="submit"
            disabled
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-8 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-brand-green hover:text-brand-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-ink disabled:hover:text-surface sm:w-auto"
          >
            Send message
            <svg
              className="size-4 transition-transform duration-300 motion-safe:group-enabled:group-hover:translate-x-1"
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
        </div>
      </form>
    </section>
  );
}
