// Item count shared by the Add to Cart buttons and the header badge. Saved in the browser, so it survives a refresh.
const storageKey = "cart-count";
const listeners = new Set();
let count = null; // Read on first use, because this module also loads on the server.

function readSavedCount() {
  try {
    const saved = Number(localStorage.getItem(storageKey));
    return Number.isInteger(saved) && saved > 0 ? saved : 0;
  } catch {
    return 0; // Storage can be blocked, e.g. in a private window.
  }
}

function notify() {
  listeners.forEach((listener) => listener());
}

// Keeps other open tabs in step. A null key means storage was cleared.
function handleStorage(event) {
  if (event.key === storageKey || event.key === null) {
    count = readSavedCount();
    notify();
  }
}

export function subscribeToCart(listener) {
  if (listeners.size === 0) window.addEventListener("storage", handleStorage);
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", handleStorage);
  };
}

export function getCartCount() {
  count ??= readSavedCount();
  return count;
}

export function addToCart(quantity = 1) {
  count = getCartCount() + quantity;
  try {
    localStorage.setItem(storageKey, String(count));
  } catch {
    // The count still applies to this page view.
  }
  notify();
}

export function clearCart() {
  count = 0;
  try {
    localStorage.removeItem(storageKey);
  } catch {
    // The count still resets for this page view.
  }
  notify();
}
