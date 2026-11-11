// Every badge repeats a claim printed on a bottle label, and names the product it applies to.
const badges = [
  { top: "100%", main: "ORGANIC", bottom: "Roasted coffee oil", shape: "circle" },
  { top: "100%", main: "PURE", bottom: "Orange seed oil", shape: "hexagon" },
  { top: "Extraction", main: "COLD PRESSED", bottom: "Orange seed oil", shape: "octagon" },
  { top: "Ingredients", main: "NON GMO", bottom: "Orange seed oil", shape: "circle" },
];

// pathLength="1" lets CSS draw the outline in, whatever the shape's real length.
const shapes = {
  circle: (scale) => <circle cx="80" cy="80" r={72 * scale} pathLength="1" />,
  hexagon: (scale) => (
    <polygon
      transform={`translate(80 80) scale(${scale}) translate(-80 -80)`}
      points="80,4 146,42 146,118 80,156 14,118 14,42"
      pathLength="1"
    />
  ),
  octagon: (scale) => (
    <polygon
      transform={`translate(80 80) scale(${scale}) translate(-80 -80)`}
      points="50,6 110,6 154,50 154,110 110,154 50,154 6,110 6,50"
      pathLength="1"
    />
  ),
};

function Badge({ top, main, bottom, shape }) {
  const drawShape = shapes[shape];

  return (
    <svg
      viewBox="0 0 160 160"
      className="award-badge mx-auto w-full max-w-40 font-(family-name:--font-montserrat)"
      role="img"
      aria-label={`${main}, ${bottom}`}
    >
      <g fill="none" className="stroke-brand-gold">
        <g className="award-ring" strokeWidth="2">
          {drawShape(1)}
        </g>
        <g className="award-dashes" strokeWidth="1" strokeDasharray="2 3">
          {drawShape(0.88)}
        </g>
      </g>
      <text x="80" y="54" textAnchor="middle" className="fill-ink text-[10px]">
        {top}
      </text>
      <rect x="4" y="64" width="152" height="30" className="award-ribbon fill-brand-gold" />
      <text x="80" y="84" textAnchor="middle" className="fill-brand-dark text-[14px] font-bold tracking-wider">
        {main}
      </text>
      <text x="80" y="112" textAnchor="middle" className="fill-ink text-[9px]">
        {bottom}
      </text>
    </svg>
  );
}

// One laurel branch: a stem arcing from the bottom up the left side, with a pair of leaves at each step.
const laurelCenter = 60;
const laurelRadius = 44;
const laurelStart = 100;
const laurelEnd = 245;
const laurelAngles = Array.from({ length: 9 }, (_, i) => laurelStart + i * 18);

function laurelPoint(angle) {
  const radians = (angle * Math.PI) / 180;
  return [
    laurelCenter + laurelRadius * Math.cos(radians),
    laurelCenter + laurelRadius * Math.sin(radians),
  ].map((value) => value.toFixed(2));
}

function LaurelBranch() {
  const [startX, startY] = laurelPoint(laurelStart - 8);
  const [endX, endY] = laurelPoint(laurelEnd);

  return (
    <>
      <path
        d={`M${startX} ${startY}A${laurelRadius} ${laurelRadius} 0 0 1 ${endX} ${endY}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {laurelAngles.flatMap((angle) => {
        const [x, y] = laurelPoint(angle);
        // Leaves lean off the stem's direction of travel (angle + 90): one outward, one inward.
        return [angle + 55, angle + 125].map((rotation) => (
          <path
            key={rotation}
            d="M0 0Q7-5 16 0Q7 5 0 0"
            fill="currentColor"
            transform={`translate(${x} ${y}) rotate(${rotation})`}
          />
        ));
      })}
    </>
  );
}

export default function Standards() {
  return (
    <section aria-labelledby="awards-title" className="px-4 pt-6 pb-16 md:px-8 md:pt-10 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="awards-heading relative flex h-32 items-center justify-center xl:h-40">
          <svg
            viewBox="0 0 120 120"
            className="absolute size-32 text-brand-gold opacity-40 xl:size-40"
            aria-hidden="true"
          >
            <g className="laurel laurel-left">
              <LaurelBranch />
            </g>
            <g transform="translate(120 0) scale(-1 1)">
              <g className="laurel laurel-right">
                <LaurelBranch />
              </g>
            </g>
          </svg>
          <h2 id="awards-title" className="relative text-2xl leading-tight font-bold xl:text-3xl">
            Awards
          </h2>
        </div>
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-8 md:mt-14 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <li key={badge.main} data-reveal style={{ "--reveal-order": index }} className="award-item">
              <Badge {...badge} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
