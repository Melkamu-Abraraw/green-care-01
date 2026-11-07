"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function Icon({ path }) {
  return (
    <svg
      className="size-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const controlClass =
  "flex size-10 items-center justify-center text-brand-white drop-shadow-[0_1px_3px_rgb(0_0_0/0.7)] transition-[color,scale] hover:scale-110 hover:text-logo-lime";

// Product photo pop-up: just the photo, unframed, over a dimmed page. Built on <dialog>
// for focus trapping, Esc to close and the backdrop. Arrow keys and the side buttons move between
// photos; clicking outside the photo closes it.
export default function PhotoLightbox({ photos, index, onIndexChange, onClose, title }) {
  const dialogRef = useRef(null);
  const isOpen = index !== null;
  const count = photos.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const step = (change) => onIndexChange((index + change + count) % count);

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${title} photos`}
      onClose={onClose}
      onKeyDown={isOpen ? handleKeyDown : undefined}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      className="lightbox m-auto overflow-visible bg-transparent p-0 backdrop:bg-black/75"
    >
      {isOpen && (
        <div className="relative">
          {/* Keyed so each photo replays the fade-in. */}
          <div
            key={photos[index]}
            className="lightbox-photo relative size-[min(36rem,calc(100vw-3rem),calc(100dvh-6rem))]"
          >
            <Image
              src={photos[index]}
              alt={`${title}, photo ${index + 1} of ${count}`}
              fill
              sizes="(min-width: 640px) 576px, 100vw"
              quality={90}
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close photos"
            className={`${controlClass} absolute top-2 right-2`}
          >
            <Icon path="M6 6l12 12M18 6 6 18" />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className={`${controlClass} absolute top-1/2 left-2 -translate-y-1/2`}
              >
                <Icon path="M15 6l-6 6 6 6" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className={`${controlClass} absolute top-1/2 right-2 -translate-y-1/2`}
              >
                <Icon path="M9 6l6 6-6 6" />
              </button>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-brand-white tabular-nums drop-shadow-[0_1px_3px_rgb(0_0_0/0.7)]">
                {index + 1} / {count}
              </p>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
