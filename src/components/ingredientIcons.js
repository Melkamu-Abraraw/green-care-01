const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.75,
};

// Details cut into a filled shape. Set --icon-cut to the color behind the icon.
const cutProps = {
  fill: "none",
  stroke: "var(--icon-cut)",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.25,
};

// Drawn on a 24x24 grid; place inside an svg with viewBox="0 0 24 24" and a fill color.
export const ingredientIcons = {
  coffee: (
    <>
      <ellipse cx="12" cy="12" rx="6.5" ry="9.5" transform="rotate(35 12 12)" />
      <path {...cutProps} d="M17.4 4.2C14 7 16 10 12 12s-2 5-5.4 7.8" />
    </>
  ),
  rue: (
    <>
      <path {...strokeProps} d="M12 22V10" />
      <ellipse cx="12" cy="6" rx="2.5" ry="4" />
      <ellipse cx="7" cy="10.5" rx="2.2" ry="3.5" transform="rotate(-55 7 10.5)" />
      <ellipse cx="17" cy="10.5" rx="2.2" ry="3.5" transform="rotate(55 17 10.5)" />
      <ellipse cx="7" cy="16.5" rx="2.2" ry="3.5" transform="rotate(-55 7 16.5)" />
      <ellipse cx="17" cy="16.5" rx="2.2" ry="3.5" transform="rotate(55 17 16.5)" />
    </>
  ),
  blackSeed: (
    <>
      <ellipse cx="12" cy="7" rx="3.2" ry="5" />
      <ellipse cx="6.5" cy="16.5" rx="3.2" ry="5" transform="rotate(-65 6.5 16.5)" />
      <ellipse cx="17.5" cy="16.5" rx="3.2" ry="5" transform="rotate(65 17.5 16.5)" />
    </>
  ),
  rosemary: (
    <path
      {...strokeProps}
      d="M12 22V3M12 7 8.5 4M12 7l3.5-3M12 11 7 7.5M12 11l5-3.5M12 15 7 11.5M12 15l5-3.5M12 19l-4.5-3.5M12 19l4.5-3.5"
    />
  ),
  orangeSeed: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path {...cutProps} d="M12 5v14M5.9 8.5l12.2 7M5.9 15.5l12.2-7" />
    </>
  ),
  carrot: (
    <>
      <path d="M16 8c-2.5-2.5-6-2-7.5.5L3 21l12.5-5.5c2.5-1.5 3-5 .5-7.5Z" />
      <path {...cutProps} d="M9 12l2 2M6.5 16.5 8 18M12.5 10.5l1.5 1.5" />
      <path {...strokeProps} d="M16.5 7.5C17 5.5 16.5 3.5 15.5 2M16.5 7.5c2-.5 4 0 5.5 1M16.5 7.5l4-4" />
    </>
  ),
  ginger: (
    <>
      <ellipse cx="10" cy="15" rx="8.5" ry="4.5" transform="rotate(-20 10 15)" />
      <ellipse cx="17" cy="8" rx="3" ry="4.5" transform="rotate(35 17 8)" />
      <ellipse cx="7" cy="9" rx="2.2" ry="3" transform="rotate(-35 7 9)" />
      <ellipse cx="17" cy="17.5" rx="3" ry="2.2" transform="rotate(25 17 17.5)" />
    </>
  ),
};
