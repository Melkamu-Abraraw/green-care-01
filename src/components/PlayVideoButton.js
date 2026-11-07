"use client";

import { useRef } from "react";

export default function PlayVideoButton() {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  function open() {
    dialogRef.current.showModal();
    // Rejects if the browser blocks playback or the dialog closes first; the video's own controls still work.
    videoRef.current.play().catch(() => {});
  }

  function close() {
    dialogRef.current.close();
  }

  return (
    <>
      <button type="button" onClick={open} className="group flex items-center gap-5">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-dark text-brand-white transition-colors group-hover:bg-brand-green dark:bg-brand-gold dark:text-brand-dark">
          <svg className="ml-0.5 size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 6 3.5Z" />
          </svg>
        </span>
        <span className="font-(family-name:--font-montserrat) text-sm font-medium">Play Video</span>
      </button>

      {/* Clicking the backdrop lands on the dialog itself. It's the home page hero video (63 MB), so nothing loads until it's opened. */}
      <dialog
        ref={dialogRef}
        aria-label="Ye Green Care video"
        onClick={(event) => event.target === dialogRef.current && close()}
        onClose={() => videoRef.current.pause()}
        className="m-auto w-[min(90vw,64rem)] overflow-visible bg-transparent backdrop:bg-black/75"
      >
        <button
          type="button"
          onClick={close}
          className="mb-3 ml-auto block font-(family-name:--font-montserrat) text-sm font-medium text-brand-white transition-colors hover:text-brand-gold"
        >
          Close
        </button>
        <video
          ref={videoRef}
          className="aspect-video w-full bg-brand-dark"
          poster="/videos/poster_new.png"
          preload="none"
          controls
          playsInline
        >
          <source src="/videos/green%20new%20%20.mp4" type="video/mp4" />
        </video>
      </dialog>
    </>
  );
}
