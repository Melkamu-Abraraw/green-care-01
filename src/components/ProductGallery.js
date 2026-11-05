"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProductGallery({ slug, model, productName }) {
  const [isModelVisible, setIsModelVisible] = useState(false);
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

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      modelElement.setAttribute("auto-rotate", "");
    }

    return () => modelElement.removeEventListener("model-visibility", handleVisibility);
  }, []);

  return (
    <div className="relative aspect-square overflow-hidden bg-ink/5">
      {/* The front photo stays until the model is drawn, and for good if 3D can't load. */}
      {!isModelVisible && (
        <Image
          src={`/images/products/${slug}.png`}
          alt={`${productName} bottle`}
          fill
          sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
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
        interaction-prompt="none"
        shadow-intensity="1"
        class="absolute inset-0 size-full"
      >
        {/* Replaces the default loading bar, since the photo already fills the space. */}
        <div slot="progress-bar" />
      </model-viewer>
    </div>
  );
}
