"use client";

import { useEffect } from "react";

// Fades in every [data-reveal] element as it scrolls into view; globals.css holds the animation.
// Elements are only hidden once this runs, so the page stays fully visible without JavaScript.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.revealState = "shown";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      // Hiding something already on screen would make it flash.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.dataset.revealState = "pending";
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      // The footer outlives this page, so it must not stay hidden after navigating away.
      document
        .querySelectorAll("[data-reveal-state]")
        .forEach((element) => element.removeAttribute("data-reveal-state"));
    };
  }, []);

  return null;
}
