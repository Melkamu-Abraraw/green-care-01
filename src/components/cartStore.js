// Item count shared by the Add to Cart buttons and the header badge. Kept in memory, so a refresh resets it.
let count = 0;
const listeners = new Set();

export function subscribeToCart(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getCartCount() {
  return count;
}

export function addToCart(quantity = 1) {
  count += quantity;
  listeners.forEach((listener) => listener());
}
