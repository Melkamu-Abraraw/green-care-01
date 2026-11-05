"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProductGallery({ photo, model, productName }) {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const modelRef = useRef(null);

  useEffect(() => {
    // Without WebGL the component still reports "loaded" but draws nothing, so the photo must stay.
    if (!document.createElement("canvas").getContext("webgl2")) return;

    const modelElement = modelRef.current;
    const handleLoad = () => setIsModelLoaded(true);

    // Imported here because the component needs the browser, and only this page needs its size.
    import("@google/model-viewer");
    modelElement.addEventListener("load", handleLoad);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      modelElement.setAttribute("auto-rotate", "");
    }

    return () => modelElement.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="relative aspect-square overflow-hidden bg-brand-dark/5">
      {/* The photo holds the space until the model loads, and stays if 3D can't load. */}
      {!isModelLoaded && (
        <Image
          src={photo.src}
          alt={`${productName} bottle`}
          fill
          sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
          loading="eager"
          className={`object-contain ${photo.hasMargin ? "scale-115" : "p-6"}`}
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
      />
    </div>
  );
}
