// The active theme lives on <html data-theme>, set before first paint by the inline script in layout.js.
// A saved choice wins; with none saved, the site follows the device setting.
const storageKey = "theme";
const darkQuery = "(prefers-color-scheme: dark)";
const listeners = new Set();

function readSavedTheme() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null; // Storage can be blocked, e.g. in a private window.
  }
}

function deviceTheme() {
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

function applyTheme(theme) {
  const update = () => {
    document.documentElement.dataset.theme = theme;
    listeners.forEach((listener) => listener());
  };

  // Cross-fades the whole page where the browser supports it.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (document.startViewTransition && !reduceMotion) {
    document.startViewTransition(update);
  } else {
    update();
  }
}

function handleDeviceChange() {
  if (!readSavedTheme()) applyTheme(deviceTheme());
}

// Keeps other open tabs in step.
function handleStorage(event) {
  if (event.key === storageKey) applyTheme(event.newValue ?? deviceTheme());
}

export function subscribeToTheme(listener) {
  if (listeners.size === 0) {
    window.matchMedia(darkQuery).addEventListener("change", handleDeviceChange);
    window.addEventListener("storage", handleStorage);
  }
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.matchMedia(darkQuery).removeEventListener("change", handleDeviceChange);
      window.removeEventListener("storage", handleStorage);
    }
  };
}

export function getTheme() {
  return document.documentElement.dataset.theme;
}

export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(storageKey, next);
  } catch {
    // The choice still applies to this page view.
  }
  applyTheme(next);
}
