// `color` tints the showcase glow. `featured` is the bottle shown larger in the showcase center.
// Width and height are the pixel size of each file in public/images/products/.
// `price` (USD) and `size` come from the showcase design reference; confirm before launch.
// PLACEHOLDER: `rating` is not real customer data. Replace it before launch.
// A product with no `price` shows "Price coming soon" and can't be added to the cart until it has one.
// PLACEHOLDER: `summary` and `description` are drafted from the bottle labels. Replace with final copy.
// `model` is the detail page's rotating 3D bottle; `photo` shows until it loads.
// `hasMargin` marks a photo with empty space around the bottle, which the gallery zooms past.

const coffeeBeanOil = { name: "Coffee Bean Oil", slug: "coffee-bean-oil" };
const hairCare = { name: "Hair Care", slug: "hair-care" };
const skinCare = { name: "Skin Care", slug: "skin-care" };

const collectionDescription =
  "Part of our small collection of natural oils for beautiful hair and body.";

export const products = [
  {
    name: "Roasted Coffee",
    slug: "roasted-coffee",
    model: "/products/01_Ethiopian_Coffee_Beans_Oil/Ethiopian_Coffee_Beans_Oil.glb",
    price: 38,
    size: "30 mL",
    rating: 5,
    color: "#c8923a",
    width: 192,
    height: 635,
    category: coffeeBeanOil,
    photo: { src: "/products/01_Ethiopian_Coffee_Beans_Oil/renders/transparent/ECO_front.png", hasMargin: true },
    summary: "100% organic Ethiopian coffee beans oil, made only in Ethiopia.",
    description: collectionDescription,
    details: [["Made in", "Ethiopia"]],
  },
  {
    name: "Green Coffee",
    slug: "green-coffee",
    model: "/products/03_Green_Coffee_Beans_Oil/Green_Coffee_Beans_Oil.glb",
    price: 38,
    size: "30 mL",
    rating: 5,
    color: "#c5d86d",
    width: 159,
    height: 533,
    category: coffeeBeanOil,
    photo: { src: "/images/products/green-coffee.png" },
    summary: "Natural oil from green coffee beans.",
    description: collectionDescription,
    details: [["Made in", "Ethiopia"]],
  },
  {
    name: "Rosemary",
    slug: "rosemary",
    model: "/products/08_Rosemary_Oil/Rosemary_Oil.glb",
    price: 28,
    size: "150 mL",
    rating: 5,
    color: "#8fb573",
    width: 288,
    height: 1038,
    featured: true,
    category: hairCare,
    photo: { src: "/products/08_Rosemary_Oil/Rosemary_Oil_transparent_front.png", hasMargin: true },
    summary: "Rosemary oil for your hair care routine. Not an essential oil.",
    description: collectionDescription,
    details: [
      ["Bottled in", "Canada"],
      ["Use", "External use only"],
    ],
  },
  {
    name: "Orange Seed",
    slug: "orange-seed",
    model: "/products/02_Orange_Seed_Oil/Orange_Seed_Oil.glb",
    price: 34,
    size: "30 mL",
    rating: 5,
    color: "#e8953a",
    width: 283,
    height: 762,
    photo: { src: "/products/02_Orange_Seed_Oil/Orange_Seed_Oil_transparent_front.png", hasMargin: true },
    summary: "100% pure, cold-pressed orange seed oil with no additives.",
    description: collectionDescription,
    details: [
      ["Made in", "Ethiopia"],
      ["Non-GMO", "Yes"],
      ["Use", "External use only"],
    ],
  },
  {
    name: "Black Seed",
    slug: "black-seed",
    model: "/products/05_Black_Seed_Oil/Black_Seed_Oil.glb",
    price: 32,
    size: "30 mL",
    rating: 5,
    color: "#4fbcc8",
    width: 265,
    height: 881,
    category: skinCare,
    photo: { src: "/products/05_Black_Seed_Oil/Black_Seed_Oil_transparent_front.png", hasMargin: true },
    summary: "Black seed oil, made in Ethiopia.",
    description: collectionDescription,
    details: [["Made in", "Ethiopia"]],
  },
  {
    name: "Rue Plant",
    slug: "rue-plant",
    model: "/products/06_Rue_Plant_Oil/Rue_Plant_Oil.glb",
    size: "100 mL",
    color: "#7f9a4a",
    photo: { src: "/products/06_Rue_Plant_Oil/Rue_Plant_Oil_transparent_front.png", hasMargin: true },
    summary: "100% pure rue plant oil with no additives.",
    description: collectionDescription,
    details: [
      ["Ingredients", "Ruta graveolens plant seeds"],
      ["Made in", "Ethiopia"],
      ["Non-GMO", "Yes"],
      ["How to use", "Apply to the affected area twice a day."],
      [
        "Caution",
        "For external use only. Avoid eye contact. Keep out of reach of children. Consult a physician if needed. Do not use if pregnant. Do not use if you are taking any blood-thinning medication.",
      ],
    ],
  },
  {
    name: "Complete Green",
    slug: "complete-green",
    model: "/products/07_Complete_Green_Hair_Oil/Complete_Green_Hair_Oil.glb",
    size: "150 mL",
    color: "#a6c34a",
    category: hairCare,
    photo: {
      src: "/products/07_Complete_Green_Hair_Oil/Complete_Green_Hair_Oil_transparent_front.png",
      hasMargin: true,
    },
    summary: "Complete Green hair oil to strengthen hair, soothe a dry scalp and deeply nourish.",
    description: collectionDescription,
    details: [
      ["Ingredients", "Olive oil, avocado oil, soursop, moringa, ginseng, mango leaf, papaya"],
      ["Made in", "Ethiopia"],
      ["Bottled in", "Canada"],
      ["Non-GMO", "Yes"],
      [
        "How to use",
        "Apply a few drops to the scalp. Massage gently 2-3 times per week. Leave overnight or before a shower.",
      ],
      [
        "Caution",
        "For external use only. Avoid eyes. Keep out of children's reach. Stop if irritation occurs. Consult a doctor if needed.",
      ],
    ],
  },
  {
    name: "Re-Black Hair",
    slug: "re-black-hair",
    model: "/products/04_Re_Black_Hair_Oil/Re_Black_Hair_Oil.glb",
    size: "150 mL",
    color: "#d7a229",
    category: hairCare,
    photo: { src: "/images/products/re-black-hair.png" },
    summary: "100% pure hair oil with no additives, to nourish, strengthen and revitalize.",
    description: collectionDescription,
    details: [
      ["Ingredients", "Anti-aging roots, false yam"],
      ["Made in", "Ethiopia"],
      ["Non-GMO", "Yes"],
      [
        "How to use",
        "Apply to the affected area of the scalp once a day while washing every three days. Use twice a week as a hair treatment.",
      ],
      ["Caution", "For external use only. Avoid eye contact. Keep out of reach of children."],
    ],
  },
];
