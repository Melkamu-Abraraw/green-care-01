// `color` tints the showcase glow. `featured` is the bottle shown larger in the showcase center.
// Width and height are the pixel size of each file in public/images/products/.
// `price` (USD) comes from the showcase design reference; confirm before launch.
// PLACEHOLDER: `rating` is not real customer data. Replace it before launch.
// A product with no `price` shows "Price coming soon" and can't be added to the cart until it has one.
// `front` is the product's front shot (the file named "front" in public/images/<folder>/): it opens
// every product card. `gallery` is the folder's other photos: the cards step through them on hover,
// and the product page shows front + gallery as thumbnails that open in a pop-up.
// `model` is the detail page's rotating 3D bottle; the file in public/images/products/ shows until it's drawn.
//
// Copy is from "Ye Green Care Naturals — Product Descriptions" (catalogue copy, 8 products):
// `fullName` is the catalogue title, `tagline` the line under it, `summary` a one-line pitch for cards
// and search results, `description` the full paragraph. `benefits` and `howToUse` fill the product
// page's Description tab, `details` its Details tab, and `ingredients` the home page ingredients section.
//
// Roasted Coffee, Green Coffee, Rosemary and Black Seed use the newer Shopify product PDFs on their product
// pages. `description` separates paragraphs with a blank line, `shortDescription` replaces `summary` on the
// product page only, and `highlight`, `sections`, `cautionTitle` and `closing` add the PDFs' extra copy.

const photo = (folder, file) => `/images/${folder}/${file}`;
const photos = (folder, files) => files.map((file) => photo(folder, file));

const coffeeBeanOil = { name: "Coffee Bean Oil", slug: "coffee-bean-oil" };
const hairCare = { name: "Hair Care", slug: "hair-care" };
const skinCare = { name: "Skin Care", slug: "skin-care" };

export const products = [
  {
    name: "Roasted Coffee",
    fullName: "100% Pure Ethiopian Roasted Coffee Bean Oil",
    slug: "roasted-coffee",
    front: photo("Ethiopian coffee beans oils", "rosted _03_front_nobg.png"),
    gallery: photos("Ethiopian coffee beans oils", [
      "rosted _02.png",
      "rosted _01.png",
    ]),
    model:
      "/products/01_Ethiopian_Coffee_Beans_Oil/Ethiopian_Coffee_Beans_Oil.glb",
    price: 38,
    size: "30 mL",
    rating: 5,
    color: "#c8923a",
    width: 192,
    height: 635,
    category: coffeeBeanOil,
    tagline: "One Ingredient. Nothing Added. Nothing Diluted.",
    summary:
      "100% organic Ethiopian coffee beans oil, rich in naturally occurring antioxidants.",
    shortDescription:
      "Treat your skin to a rich coffee-inspired ritual. Our single-ingredient roasted coffee bean oil helps soften and moisturize skin, while bringing the unmistakable aroma of Ethiopian roasted coffee to your daily routine. Nothing added. Nothing diluted.",
    description:
      "A rich Ethiopian coffee ritual for soft, nourished, radiant-looking skin.\n\nExperience the distinctive aroma of roasted Ethiopian coffee in a pure, single-ingredient beauty oil. No added preservatives, fragrance, fillers, or carrier oils.",
    highlight: "30 mL | For external use only",
    ingredients: "100% organic Ethiopian coffee beans, made in Ethiopia.",
    benefitsTitle: "Why Your Skin Will Love It",
    benefits: [
      ["Nourishing Moisture", "Helps soften and moisturize dry or rough-feeling skin."],
      [
        "Healthy-Looking Radiance",
        "Leaves skin feeling supple, smooth, and cared for.",
      ],
      [
        "Authentic Roasted Coffee Aroma",
        "Enjoy its naturally characteristic coffee scent, without added perfume.",
      ],
      [
        "Versatile Care",
        "Suitable for facial and body moisturizing and sparing use on dry hair ends.",
      ],
    ],
    sections: [
      {
        title: "The Difference Is in the Oil",
        text: "Made from Ethiopian roasted coffee beans—not coffee-infused carrier oil. One ingredient, with no added preservatives, fragrance, fillers, or dilution.",
      },
      {
        title: "A Little Coffee. A Beautiful Daily Ritual.",
        text: "Let the warmth of Ethiopian roasted coffee become part of your everyday self-care. A few drops bring a comforting, naturally coffee-scented touch to your skincare routine.",
      },
      {
        title: "Why Choose Green Care Naturals?",
        text: "100% pure roasted coffee bean oil. Ethiopian origin. No added preservatives. No added fragrance. No dilution. Just the natural character of roasted coffee beans.",
      },
    ],
    howToUse: [
      ["Face", "Apply 2–4 drops to clean, slightly damp skin and gently massage. Begin with a small amount."],
      ["Body", "Massage a few drops into dry areas as needed."],
      ["Hair", "Smooth a tiny amount over dry hair ends. Avoid over-applying."],
      ["With moisturizer", "Blend 1–2 drops into a single application just before use."],
    ],
    caution:
      "For external use only. Patch test before first use. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children. Store away from heat and direct sunlight.",
    closing: "Green Care Naturals — Purity in Every Drop.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Ingredient", "Roasted Coffee Bean Oil"],
      ["Origin", "Ethiopia"],
      ["Formulation", "Single ingredient; no added preservatives, fragrance, fillers or dilution"],
      ["Form", "Liquid oil"],
      ["Packaging", "Black glass dropper bottle"],
    ],
  },
  {
    name: "Green Coffee",
    fullName: "100% Pure Ethiopian Green Coffee Bean Oil",
    slug: "green-coffee",
    front: photo("Green Coffee Beans Oil", "green coffee_front_2.jpg"),
    gallery: photos("Green Coffee Beans Oil", [
      "Green Coffee Beans Oil Still Life-3.png",
      "Green Coffee Oil Skincare Ritual.png",
      "Green Coffee Beans Oil Beauty Ad (2).png",
    ]),
    model: "/products/03_Green_Coffee_Beans_Oil/Green_Coffee_Beans_Oil.glb",
    price: 38,
    size: "30 mL",
    rating: 5,
    color: "#c5d86d",
    width: 159,
    height: 533,
    category: coffeeBeanOil,
    tagline: "One Ingredient. Nothing Added. Nothing Diluted.",
    summary:
      "A multipurpose skin and hair oil made from Ethiopian green coffee beans.",
    shortDescription:
      "Pure Ethiopian coffee beauty, one drop at a time. Meet 100% pure Green Coffee Bean Oil - a single-ingredient facial beauty oil with no additives, no preservatives, and no dilution. Helps soften and moisturize dry skin for a smoother, radiant-looking complexion. 30 mL.",
    description:
      "Discover the beauty hidden inside a little green coffee bean.\n\nFrom Ethiopia’s coffee-growing heritage comes a beautifully simple skincare ritual. Green Care Naturals Green Coffee Bean Oil is made from a single ingredient: pure green coffee bean oil, with no additives, no preservatives, and no dilution.\n\nJust a few drops help leave dry skin feeling nourished, soft and supple, with a naturally radiant-looking finish.",
    highlight: "100% pure • Single ingredient • No added preservatives • No dilution",
    ingredients: "Green coffee bean oil, made in Ethiopia.",
    benefitsTitle: "Why Your Skin Will Love It",
    benefits: [
      ["Nourishing moisture", "Helps moisturize and soften dry skin for a comfortable, conditioned feel."],
      [
        "Naturally occurring coffee compounds",
        "Contains coffee-derived compounds, including antioxidants, as part of its natural composition.",
      ],
      [
        "Healthy-looking radiance",
        "Helps dry, dull-looking skin appear smoother, fresher and more supple.",
      ],
      [
        "Simple, versatile care",
        "Ideal for a facial-care ritual and suitable for conditioning dry areas of the body and hair.",
      ],
    ],
    sections: [
      {
        title: "The Green Care Naturals Difference",
        text: "Pure coffee bean oil - not a coffee-infused carrier oil. Made from Ethiopian green coffee beans with no added fragrance, preservatives, fillers, or other oils. The ingredient story is as straightforward as the bottle: one ingredient, carefully prepared.",
      },
      {
        title: "A Little Bean. A Beautiful Daily Ritual.",
        text: "Thoughtful skincare does not need a long ingredient list. Discover how pure Ethiopian green coffee bean oil can become a simple, enjoyable part of your everyday routine.",
      },
    ],
    howToUse: [
      ["Face", "After cleansing, gently massage 3–5 drops onto the face and neck. Use morning or evening; apply sunscreen as the final step of your morning routine."],
      ["Body", "Massage a small amount onto dry areas as needed."],
      ["Hair", "Smooth a small amount over damp hair or dry ends to help condition and improve manageability."],
      ["Moisturizer", "Blend 1–2 drops into a single application of your moisturizer immediately before use."],
    ],
    caution:
      "For external use only. Patch test before first use. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children. Store in a cool, dry place away from direct sunlight.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Ingredient", "Green Coffee Bean Oil"],
      ["Origin", "Ethiopia"],
      ["Formulation", "Single ingredient; no added preservatives, fragrance, fillers or dilution"],
      ["Non-GMO", "As stated on the product label"],
      ["Packaging", "Black glass bottle with dropper"],
    ],
  },
  {
    name: "Rosemary",
    fullName: "8-Month Slow-Crafted Rosemary Hair Oil",
    slug: "rosemary",
    front: photo("rosemary", "rosemary_front.jpg"),
    gallery: photos("rosemary", [
      "rosemary_promo.png",
      "rosemary_action (1).png",
      "rosemary_clean.png",
    ]),
    model: "/products/08_Rosemary_Oil/Rosemary_Oil.glb",
    price: 28,
    size: "150 mL",
    rating: 5,
    color: "#8fb573",
    width: 288,
    height: 1038,
    featured: true,
    category: hairCare,
    tagline: "Eight Months of Patience. A Beautiful Hair Ritual.",
    summary:
      "A hair and scalp oil to nourish the scalp and leave hair soft and smooth.",
    shortDescription:
      "Eight months in the making. A beautiful ritual in every drop. Discover Green Care Naturals Rosemary Hair Oil, an eight-month slow-crafted botanical infusion designed to soften hair, enhance shine, and bring a little extra care to your scalp-massage routine. Not an essential oil — a versatile leave-in hair treatment.",
    description:
      "Not an essential oil. A leave-in botanical hair treatment created for a thoughtful, nourishing haircare ritual.\n\nSome things are worth waiting for. Our rosemary hair oil is prepared through an extended eight-month rosemary infusion process — a slow, deliberate approach that reflects our commitment to botanical care.\n\nMade to complement your everyday routine, this leave-in oil helps soften dry-feeling strands, add a natural-looking sheen, and make hair easier to manage.",
    highlight: "Slow-crafted with care. Made for the hair you love.",
    ingredients: "Rosemary oil (Huile de Romarin). Not an essential oil.",
    benefitsTitle: "Why Your Hair Will Love It",
    benefits: [
      ["Softness & manageability", "Helps soften dry hair and make strands easier to comb and style."],
      ["Beautiful-looking shine", "Adds a polished, healthy-looking sheen to dull or dry ends."],
      [
        "Scalp massage ritual",
        "An easy way to incorporate a gentle, relaxing scalp massage into your routine.",
      ],
      [
        "Leave-in versatility",
        "Use sparingly on hair ends or as a pre-wash scalp and hair treatment.",
      ],
    ],
    sections: [
      {
        title: "A Little Rosemary. A Lot of Care.",
        subtitle: "What Makes Our Rosemary Oil Different",
        items: [
          ["Eight-month preparation", "A patiently prepared rosemary infusion, rather than a quickly blended rosemary-scented product."],
          ["Not a concentrated essential oil", "This is a rosemary hair oil intended for use as a leave-in treatment, not a pure rosemary essential oil."],
          ["Everyday botanical care", "Designed to fit naturally into a simple hair and scalp routine."],
        ],
      },
    ],
    howToUse: [
      ["Leave-in care", "Start with a few drops in your palms. Smooth through damp or dry hair, focusing on mid-lengths and ends. Use only as much as your hair needs."],
      ["Scalp massage", "Apply a small amount to the scalp and massage gently with fingertips. If desired, wash out after your preferred treatment time."],
      ["Styling finish", "Apply a tiny amount to dry ends to help tame the look of frizz and add shine."],
    ],
    cautionTitle: "Important Product Information",
    caution:
      "For external use only. Patch test before first use. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children. Store away from direct sunlight and excessive heat.",
    closing: "Green Care Naturals — Purity in Every Drop.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Product name", "Rosemary Hair Oil (Huile de Romarin)"],
      ["Product type", "Leave-in botanical hair treatment"],
      ["Preparation", "Eight-month rosemary infusion"],
      ["Packaging", "Dark bottle with precision applicator nozzle"],
      ["Bottled in", "Canada"],
      ["Important", "This product is not an essential oil."],
    ],
  },
  {
    name: "Orange Seed",
    fullName: "Orange Seed Oil",
    slug: "orange-seed",
    front: photo("Orange seed oil", "photo_2026-11-02_02-32-03_front_crop.jpg"),
    gallery: photos("Orange seed oil", [
      "Orange Seed Oil Product Display.png",
      "orange_seed_action.png",
      "orange_seed_clean.png",
    ]),
    model: "/products/02_Orange_Seed_Oil/Orange_Seed_Oil.glb",
    price: 34,
    size: "30 mL",
    rating: 5,
    color: "#e8953a",
    width: 283,
    height: 762,
    category: skinCare,
    tagline: "100% Pure | Cold-Pressed | Natural Skin Care",
    summary:
      "100% pure, cold-pressed orange seed oil to nourish, brighten and soothe skin.",
    description:
      "Experience the natural goodness of Orange Seed Oil, carefully cold-pressed and made in Ethiopia. This versatile beauty oil helps nourish, brighten, and soothe your skin, making it a simple addition to your daily skincare routine.",
    ingredients:
      "100% pure, cold-pressed orange seed oil with no added ingredients.",
    benefits: [
      ["Nourishes", "Helps keep skin feeling soft and cared for."],
      ["Brightens", "Supports a fresh, radiant-looking complexion."],
      ["Soothes", "Helps skin feel comfortable and smooth."],
      ["100% Pure", "Made with orange seed oil and no added ingredients."],
      ["Cold-Pressed", "Extracted using a cold-pressing process."],
    ],
    howToUse: [
      "Apply a small amount to clean skin on your face or body once or twice daily. Gently massage until absorbed.",
    ],
    caution:
      "For external use only. Keep out of reach of children. Patch test before first use and avoid contact with eyes.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Ingredient", "Orange Seed Oil"],
      ["Extraction", "Cold-Pressed"],
      ["Non-GMO", "As stated on the product label"],
      ["Origin", "Made in Ethiopia"],
      ["Use", "External use only"],
    ],
  },
  {
    name: "Black Seed",
    fullName: "100% Pure Washed & Cold-Pressed Black Seed Oil",
    slug: "black-seed",
    front: photo("Black Seed Oil Botanical ", "balck seed_front.jpg"),
    gallery: photos("Black Seed Oil Botanical ", [
      "Green Care Black Seed Oil Botanical Display-2.png",
      "Black Seed Oil with Nigella Flowers.png",
      "Black Seed Oil Botanical Still Life-3.png",
    ]),
    model: "/products/05_Black_Seed_Oil/Black_Seed_Oil.glb",
    price: 32,
    size: "30 mL",
    rating: 5,
    color: "#4fbcc8",
    width: 265,
    height: 881,
    category: skinCare,
    tagline: "Preserving Nature’s Goodness for Maximum Natural Care",
    summary: "Organic black seed (Nigella sativa) oil, made in Ethiopia.",
    shortDescription:
      "Pure black seed oil. Nothing added. Nothing diluted. Carefully washed and cold-pressed from Nigella sativa seeds, our 100% pure oil helps nourish dry skin, condition hair, and elevate your daily self-care ritual.",
    description:
      "One seed. One ingredient. Pure natural care.\n\nCarefully washed and cold-pressed from Nigella sativa seeds, our undiluted black seed oil brings the richness of nature to your skin and hair care routine.",
    highlight: "No added fragrance. No fillers. No blending with other oils.",
    ingredients: "Organic black seed (Nigella sativa), made in Ethiopia.",
    benefitsTitle: "Why You’ll Love It",
    benefits: [
      ["Skin nourishment", "Helps moisturize and soften dry-feeling skin for a smooth, supple feel."],
      ["Hair conditioning", "Helps soften dry hair and improve manageability."],
      ["Scalp massage", "Complements a gentle scalp-care ritual."],
      ["Pure by design", "Washed seeds, cold-pressed extraction, and no added carrier oils."],
    ],
    sections: [
      {
        title: "What Makes Our Oil Different",
        text: "We put the seed first. Careful washing prepares the seeds for pressing, while cold extraction avoids the high heat used in some production methods. The result is a naturally aromatic, undiluted oil with the distinctive character of black seed.",
      },
      {
        title: "A Simple, Natural Beauty Ritual",
        text: "Discover a versatile oil that fits beautifully into your daily skin and hair care routine.",
      },
      {
        title: "Your Daily Ritual, Naturally",
        text: "Make room for a little simplicity. Experience the rich feel of pure black seed oil and discover a nourishing addition to your everyday beauty routine.",
      },
    ],
    howToUse: [
      ["For skin", "After cleansing, apply 1–2 drops to a small area of slightly damp skin. Massage gently and increase sparingly as desired. Avoid the eye area."],
      ["For hair", "Rub a drop or two between your palms and smooth over dry ends or damp hair. Start with a small amount."],
      ["For scalp", "Gently massage a few drops into the scalp as part of your routine. Wash out if preferred."],
    ],
    caution:
      "For external use only. Patch test before first use. Avoid contact with eyes and broken or irritated skin. Discontinue use if irritation occurs. Keep out of reach of children. Store tightly closed away from heat and direct sunlight.",
    closing: "Green Care Naturals — Purity in Every Drop.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Ingredient", "Black Seed Oil (Nigella sativa)"],
      ["Extraction", "Washed seeds, cold-pressed"],
      ["Formulation", "No added fragrance, fillers or carrier oils"],
      ["Origin", "Made in Ethiopia"],
      ["Non-GMO", "Label claim"],
      ["Packaging", "Black dropper bottle"],
      ["Shelf life", "24 months after opening, as indicated on the label"],
    ],
  },
  {
    name: "Complete Green",
    fullName: "Complete Green Hair Oil",
    slug: "complete-green",
    front: photo(
      "Complete Green Soursop Oil ",
      "Complete Green Botanical Bottle front.png",
    ),
    gallery: photos("Complete Green Soursop Oil ", [
      "Complete Green Soursop Oil Spa Still Life.png",
      "ChatGPT Image Nov 7, 2026, 12_10_24 PM-2.png",
      "ChatGPT Image Nov 7, 2026, 12_10_23 PM-1.png",
    ]),
    model: "/products/07_Complete_Green_Hair_Oil/Complete_Green_Hair_Oil.glb",
    size: "150 mL",
    color: "#a6c34a",
    category: hairCare,
    tagline: "Natural Hair & Scalp Care | Strengthen • Soothe • Nourish",
    summary:
      "A botanical hair oil blend to nourish hair and soothe a dry scalp.",
    description:
      "Transform your hair care routine with Green Care Naturals Complete Green Hair Oil, a botanical blend made with olive oil, avocado oil, soursop, moringa, ginseng, mango leaf, and papaya. Designed to deeply nourish hair, condition dry strands, and soothe the feeling of a dry scalp, this versatile hair oil is an excellent addition to your weekly hair care routine. Whether used as an overnight treatment or applied before showering, Complete Green Hair Oil helps leave your hair feeling softer, smoother, and more manageable.",
    ingredients:
      "Olive oil, avocado oil, soursop, moringa, ginseng, mango leaf, papaya.",
    benefits: [
      ["Nourishes Hair", "Helps moisturize and condition dry hair."],
      [
        "Strengthens Hair Appearance",
        "Helps hair feel smoother and healthier.",
      ],
      ["Soothes Dry Scalp", "Provides conditioning care for a dry scalp."],
      ["Deep Conditioning", "Helps soften hair and improve manageability."],
      [
        "Botanical Ingredients",
        "Formulated with a blend of plant-derived oils and botanical ingredients.",
      ],
      [
        "Versatile Treatment",
        "Suitable for overnight or pre-shower hair care.",
      ],
    ],
    keyIngredients: [
      ["Olive Oil", "Helps soften and condition hair."],
      ["Avocado Oil", "Provides moisturizing care for dry hair."],
      ["Soursop", "A botanical ingredient included in the formula."],
      ["Moringa", "A plant-derived ingredient commonly used in hair care."],
      [
        "Ginseng",
        "A botanical ingredient used in traditional beauty formulations.",
      ],
      ["Mango Leaf", "Included in the natural botanical blend."],
      ["Papaya", "Adds to the product's plant-based formulation."],
    ],
    howToUse: [
      "Apply a few drops directly to your scalp.",
      "Gently massage to distribute the oil.",
      "Use 2–3 times per week.",
      "Leave overnight for deeper conditioning or apply before showering.",
      "Wash and style your hair as usual.",
    ],
    caution:
      "For external use only. Avoid contact with eyes. Keep out of reach of children. Discontinue use if irritation occurs. Consult a healthcare professional if needed.",
    storage:
      "Close the cap tightly after use. Store in a cool, dry place away from direct sunlight.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Product name", "Complete Green Hair Oil (Vert Complet)"],
      ["Product type", "Hair & Scalp Treatment Oil"],
      [
        "Key ingredients",
        "Olive Oil, Avocado Oil, Soursop, Moringa, Ginseng, Mango Leaf, Papaya",
      ],
      ["Origin", "Made in Ethiopia"],
      ["Bottled in", "Canada"],
      ["Non-GMO", "As stated on the label"],
      ["Packaging", "Amber bottle with precision applicator nozzle"],
    ],
  },
  {
    name: "Re-Black Hair",
    fullName: "RE-BLACK Hair Oil",
    slug: "re-black-hair",
    front: photo(
      "Re-Black Hair Oil",
      "Luxury Re-Black Hair Oil Bottle_front.png",
    ),
    gallery: photos("Re-Black Hair Oil", [
      "Re-Black Hair Oil Natural Care-1.png",
      "Ye-Green Re-Black Hair Oil Bottle.png",
    ]),
    model: "/products/04_Re_Black_Hair_Oil/Re_Black_Hair_Oil.glb",
    size: "150 mL",
    color: "#d7a229",
    category: hairCare,
    tagline: "Natural Hair & Scalp Care | Nourish • Strengthen • Revitalize",
    summary:
      "A hair and scalp oil with anti-aging roots and false yam for darker-looking hair.",
    description:
      "Give your hair the care it deserves with Ye-Green Care Naturals RE-BLACK Hair Oil. Made in Ethiopia with anti-aging roots and false yam, this specially formulated hair oil is designed to nourish the scalp, condition the hair, and support the appearance of naturally healthy, darker-looking hair. Ideal for regular scalp massages and hair treatments, RE-BLACK Hair Oil helps maintain soft, manageable hair while supporting your natural hair care routine.",
    ingredients: "Anti-aging roots and false yam, 100% pure with no additives.",
    benefits: [
      [
        "Supports Darker-Looking Hair",
        "Helps maintain the appearance of your natural hair colour.",
      ],
      [
        "Nourishes Hair & Scalp",
        "Helps moisturize the scalp and condition dry hair.",
      ],
      [
        "Strengthens Hair Appearance",
        "Helps hair feel smoother and more manageable.",
      ],
      [
        "Supports Hair Depth",
        "Helps maintain a rich, healthy-looking appearance.",
      ],
      ["Scalp Conditioning", "Suitable for regular scalp massages."],
      ["Revitalizing Care", "Helps leave hair feeling soft and refreshed."],
    ],
    howToUse: [
      "Apply a small amount directly to the affected areas of your scalp.",
      "Gently massage to distribute the oil evenly.",
      "The label recommends daily application to affected areas, with hair washing every three days.",
      "Use twice a week as a dedicated hair treatment.",
    ],
    caution:
      "For external use only. Avoid contact with eyes. Keep out of reach of children. Perform a patch test before first use and discontinue use if irritation occurs.",
    storage: "Store in a cool, dry place away from direct sunlight.",
    details: [
      ["Brand", "Ye-Green Care Naturals"],
      ["Ingredients listed", "Anti-aging roots and false yam"],
      ["Purity", "100% Pure (label claim)"],
      ["Additives", "No additives (label claim)"],
      ["Non-GMO", "As stated on the packaging"],
      ["Origin", "Made in Ethiopia"],
      ["Product type", "Hair & Scalp Oil"],
      ["Packaging", "Amber bottle with precision applicator nozzle"],
      ["Shelf life", "24 months after opening, as indicated on the label"],
    ],
  },
];
