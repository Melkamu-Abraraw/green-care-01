export const starPath =
  "M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7-6-3.4-6 3.4 1.3-6.7-5-4.7 6.8-.8L12 2.5Z";

function Stars({ className }) {
  return (
    <span className={`flex gap-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((star) => (
        <svg key={star} className="size-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d={starPath} />
        </svg>
      ))}
    </span>
  );
}

// A gold row clipped to the rating's width sits over a faint row, so part-stars also work.
export default function Rating({ value, className = "" }) {
  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className={`relative inline-block align-top ${className}`}
    >
      <Stars className="text-brand-dark/15" />
      <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${(value / 5) * 100}%` }}>
        <Stars className="text-brand-gold" />
      </span>
    </span>
  );
}
