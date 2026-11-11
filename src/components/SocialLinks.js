// Profiles linked from ye-greencarenaturals.com. Also used by the homepage hero.
export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/yegreencarenaturals",
    icon: (
      <path d="M14 8.5V6.5c0-.8.5-1 1-1h2V2h-3c-2.8 0-4 1.9-4 4v2.5H7.5V12H10v10h4V12h2.6l.4-3.5z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/greencarenatural/",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.25" cy="6.75" r="0.5" />
      </g>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/Ye_GreenCareNaturals",
    icon: (
      <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.4 13.8l-4.7-1.5c-1-.3-1-1 .2-1.5L20.5 3.6c.9-.3 1.6.2 1.4.7Z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@_greencare",
    icon: (
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    ),
  },
];

export default function SocialLinks({ labelledBy, className = "" }) {
  return (
    <ul aria-labelledby={labelledBy} className={`flex gap-2 ${className}`}>
      {socialLinks.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex size-10 items-center justify-center rounded-full border border-ink/30 transition-colors hover:border-ink hover:bg-ink hover:text-surface"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              {social.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
