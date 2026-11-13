import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Green Care",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-bold text-accent" style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}>
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-md opacity-80">
        Sorry, we couldn&apos;t find the page you were looking for. It may have moved or no longer exists.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand-green px-6 py-3 font-semibold text-brand-white transition hover:opacity-90"
        >
          Back to home
        </Link>
        <Link
          href="/shop"
          className="rounded-full border border-brand-green px-6 py-3 font-semibold text-accent transition hover:opacity-80"
        >
          Visit the shop
        </Link>
      </div>
    </main>
  );
}
