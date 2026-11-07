"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PhotoLightbox from "@/components/PhotoLightbox";

// The camera stays level with the bottle, so dragging up or down never shows its base.
const VIEW_ANGLE = "80deg";

export default function ProductGallery({
  slug,
  model,
  photos = [],
  productName,
}) {
  const [isModelVisible, setIsModelVisible] = useState(false);
  // Index of the photo open in the pop-up, or null when it's closed. The 3D viewer never changes.
  const [openPhoto, setOpenPhoto] = useState(null);
  const modelRef = useRef(null);

  useEffect(() => {
    // Without WebGL the component still reports "loaded" but draws nothing, so the photo must stay.
    if (!document.createElement("canvas").getContext("webgl2")) return;

    const modelElement = modelRef.current;
    const handleVisibility = (event) => {
      if (event.detail.visible) setIsModelVisible(true);
    };

    // Imported here because the component needs the browser, and only this page needs its size.
    import("@google/model-viewer");
    modelElement.addEventListener("model-visibility", handleVisibility);

    const canAutoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (canAutoRotate) modelElement.setAttribute("auto-rotate", "");

    // With a mouse, the bottle turns to follow the cursor from left to right; leaving resumes the spin.
    const handlePointerMove = (event) => {
      if (event.pointerType !== "mouse" || event.buttons) return;
      const { left, width } = modelElement.getBoundingClientRect();
      const position = Math.min(Math.max((event.clientX - left) / width, 0), 1);
      modelElement.removeAttribute("auto-rotate");
      modelElement.cameraOrbit = `${-180 + position * 360}deg ${VIEW_ANGLE} auto`;
    };
    const handlePointerLeave = () => {
      if (canAutoRotate) modelElement.setAttribute("auto-rotate", "");
    };
    modelElement.addEventListener("pointermove", handlePointerMove);
    modelElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      modelElement.removeEventListener("model-visibility", handleVisibility);
      modelElement.removeEventListener("pointermove", handlePointerMove);
      modelElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border-[0.5px] border-ink/15">
        {/* The front photo stays until the model is drawn, and for good if 3D can't load. */}
        {!isModelVisible && (
          <Image
            src={`/images/products/${slug}.png`}
            alt={`${productName} bottle`}
            fill
            sizes="(min-width: 640px) 448px, 100vw"
            loading="eager"
            className="object-contain p-[4%]"
          />
        )}
        <model-viewer
          ref={modelRef}
          src={model}
          alt={`Rotating 3D model of the ${productName} bottle`}
          camera-controls
          disable-zoom
          touch-action="pan-y"
          auto-rotate-delay="0"
          rotation-per-second="60deg"
          camera-orbit={`0deg ${VIEW_ANGLE} auto`}
          min-camera-orbit={`auto ${VIEW_ANGLE} auto`}
          max-camera-orbit={`auto ${VIEW_ANGLE} auto`}
          interpolation-decay="120"
          interaction-prompt="none"
          shadow-intensity="1"
          class="absolute inset-0 size-full"
        >
          {/* Replaces the default loading bar, since the photo already fills the space. */}
          <div slot="progress-bar" />
        </model-viewer>
      </div>

      {photos.length > 0 && (
        <ul
          // One row that fills the viewer's width: 3 photos get bigger tiles than 4.
          className="mt-4 grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${photos.length}, minmax(0, 1fr))`,
          }}
          aria-label={`${productName} photos`}
        >
          {photos.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setOpenPhoto(index)}
                aria-label={`Open photo ${index + 1} of ${photos.length}`}
                className="group relative block aspect-square w-full overflow-hidden rounded-md border-[0.5px] border-ink/15 bg-brand-white transition-colors hover:border-ink/50"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 150px, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <PhotoLightbox
        photos={photos}
        index={openPhoto}
        onIndexChange={setOpenPhoto}
        onClose={() => setOpenPhoto(null)}
        title={productName}
      />
    </div>
  );
}
