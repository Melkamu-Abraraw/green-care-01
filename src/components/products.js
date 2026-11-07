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

const photo = (folder, file) => `/images/${folder}/${file}`;
const photos = (folder, files) => files.map((file) => photo(folder, file));

const coffeeBeanOil = { name: "Coffee Bean Oil", slug: "coffee-bean-oil" };
const hairCare = { name: "Hair Care", slug: "hair-care" };
const skinCare = { name: "Skin Care", slug: "skin-care" };

export const products = [
  {
    name: "Roasted Coffee",
    fullName: "Ethiopian Coffee Beans Oil",
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
    tagline: "Pure Ethiopian Coffee Oil | Natural Hair & Body Care",
    summary:
      "100% organic Ethiopian coffee beans oil, rich in naturally occurring antioxidants.",
    description:
      "Discover the richness of Ethiopian coffee in every drop. Our 100% Organic Ethiopian Coffee Beans Oil is made in Ethiopia using coffee beans and a unique oil extraction process. Rich in naturally occurring antioxidants, this versatile oil is designed to complement your daily skin and body care routine, helping your skin feel soft, nourished, and moisturized.",
    ingredients: "100% organic Ethiopian coffee beans, made in Ethiopia.",
    benefits: [
      ["Moisturizing Care", "Helps soften skin and maintain moisture."],
      [
        "Antioxidant-Rich",
        "Contains naturally occurring coffee-derived antioxidants.",
      ],
      [
        "Multipurpose Beauty Oil",
        "Suitable for use in body oils, lotions, scrubs, and other cosmetic formulations.",
      ],
      [
        "Natural Coffee Aroma",
        "Adds a distinctive coffee scent to your self-care routine.",
      ],
      ["Made in Ethiopia", "Celebrates the heritage of Ethiopian coffee."],
    ],
    howToUse: [
      "Apply a few drops to clean skin and gently massage until absorbed. You can also blend a small amount into your favorite body lotion or body oil.",
    ],
    caution:
      "For external use only. Patch test before use and avoid contact with eyes.",
    details: [
      ["Brand", "Ye Green Care"],
      ["Origin", "Ethiopia"],
      ["Form", "Liquid oil"],
      ["Packaging", "Black glass dropper bottle"],
    ],
  },
  {
    name: "Green Coffee",
    fullName: "Green Coffee Beans Oil",
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
    tagline: "Natural Skin & Hair Care | Antioxidant-Rich | Made in Ethiopia",
    summary:
      "A multipurpose skin and hair oil made from Ethiopian green coffee beans.",
    description:
      "Discover the natural goodness of Ethiopian Green Coffee Beans Oil. Made from green coffee beans, this versatile beauty oil is designed to nourish your skin, support moisture retention, and help maintain a healthy-looking complexion. Naturally rich in coffee-derived antioxidants, it makes a wonderful addition to your daily skincare and haircare routine. Whether applied directly to the skin or added to your favorite haircare products, Green Coffee Beans Oil offers a simple way to enjoy the benefits of Ethiopian coffee.",
    ingredients: "Green coffee bean oil, made in Ethiopia.",
    benefits: [
      ["Skin Nourishment", "Helps moisturize and soften dry skin."],
      [
        "Antioxidant Care",
        "Contains naturally occurring antioxidants that help support skin care.",
      ],
      [
        "Healthy-Looking Complexion",
        "Helps maintain smooth, supple, radiant-looking skin.",
      ],
      ["Hair Conditioning", "Helps soften hair and improve manageability."],
      [
        "Scalp Care",
        "Can be incorporated into a regular scalp massage routine.",
      ],
      [
        "Multipurpose Oil",
        "Suitable for facial care, body care, and hair conditioning.",
      ],
    ],
    howToUse: [
      "For skin: Apply a few drops to clean skin on your face or body. Gently massage until absorbed. Use as part of your daily skincare routine.",
      "For hair: Add a small amount to your shampoo or conditioner, or use as a leave-in treatment by applying a little oil to damp hair. Distribute evenly, focusing on dry areas.",
      "With your moisturizer: Mix a few drops with your daily moisturizer for additional moisturizing care.",
    ],
    caution:
      "For external use only. Perform a patch test before first use. Avoid direct contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children.",
    details: [
      ["Brand", "Ye Green Care"],
      ["Main ingredient", "Green Coffee Bean Oil"],
      ["Origin", "Made in Ethiopia"],
      ["Product type", "Multipurpose Skin & Hair Oil"],
      ["Non-GMO", "As stated on the product label"],
      ["Packaging", "Black glass bottle with dropper"],
    ],
  },
  {
    name: "Rosemary",
    fullName: "Rosemary Oil",
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
    tagline: "100% Pure & Natural | Hair & Scalp Care | Bottled in Canada",
    summary:
      "A hair and scalp oil to nourish the scalp and leave hair soft and smooth.",
    description:
      "Give your hair the natural care it deserves with Green Care Naturals Rosemary Oil. Made for regular hair and scalp care, this versatile oil helps nourish the scalp, moisturize the hair, and leave it feeling soft, smooth, and well-conditioned. Perfect for incorporating into your weekly hair care routine, whether you prefer a pre-shower scalp massage or a leave-in treatment.",
    ingredients: "Rosemary oil (Huile de Romarin). Not an essential oil.",
    benefits: [
      ["Scalp Nourishment", "Helps moisturize and condition the scalp."],
      ["Hair Moisture", "Helps soften dry hair and improve manageability."],
      [
        "Hair Care Routine",
        "Ideal for regular scalp massages and conditioning.",
      ],
      [
        "Versatile Application",
        "Can be applied before showering or left in the hair.",
      ],
      ["100% Pure & Natural", "As stated on the product label."],
    ],
    howToUse: [
      "Apply an appropriate amount of rosemary oil directly to your scalp.",
      "Gently massage with your fingertips to distribute the oil.",
      "Use 3–4 times per week.",
      "Apply before showering or leave in your hair as part of your regular hair care routine.",
    ],
    caution:
      "For external use only. Avoid contact with eyes. Keep out of reach of children. Discontinue use if irritation occurs. Patch test before first use.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Product name", "Rosemary Oil (Huile de Romarin)"],
      ["Product type", "Hair & Scalp Oil"],
      ["Purity", "100% Pure & Natural (label claim)"],
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
    fullName: "Ethiopian Black Seed Oil",
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
    tagline: "Organic Black Seed Oil | Non-GMO | Made in Ethiopia",
    summary: "Organic black seed (Nigella sativa) oil, made in Ethiopia.",
    description:
      "Discover the natural goodness of Ethiopian Black Seed Oil, made from black seeds (Nigella sativa), also known as black cumin seeds. Black seed oil has a long history of traditional use and is valued for its naturally occurring plant compounds, including thymoquinone. Made in Ethiopia, this 30 mL oil is a convenient addition to your daily wellness routine.",
    ingredients: "Organic black seed (Nigella sativa), made in Ethiopia.",
    benefitsTitle: "Key Features",
    benefits: [
      [
        "Organic Black Seed",
        "Made from black seeds, as stated on the product label.",
      ],
      [
        "Naturally Occurring Compounds",
        "Contains plant compounds such as thymoquinone.",
      ],
      [
        "Traditional Heritage",
        "Black seed oil has been used in traditional wellness practices for generations.",
      ],
      ["Non-GMO", "As stated on the product packaging."],
      [
        "Made in Ethiopia",
        "Sourced from Ethiopia's rich agricultural heritage.",
      ],
      ["Convenient Dropper Bottle", "Designed for controlled dispensing."],
    ],
    howToUseTitle: "Directions on Product Label",
    howToUse: [
      "Adults: Take 1 teaspoon (5 mL) daily with a meal.",
      "Children over 5 years: The label states ½ teaspoon (2.5 mL) daily with a meal. Consult a pediatric healthcare professional before giving black seed oil to children.",
    ],
    caution:
      "Consult a healthcare provider before using black seed oil as a dietary supplement, particularly if you are pregnant, breastfeeding, taking medications, or have an existing medical condition. Keep out of reach of children. Store according to the manufacturer's instructions.",
    details: [
      ["Brand", "Green Care Naturals"],
      ["Ingredient", "Organic Black Seed (Nigella sativa)"],
      ["Origin", "Made in Ethiopia"],
      ["Non-GMO", "Label claim"],
      ["Packaging", "Black dropper bottle"],
      ["Shelf life", "24 months after opening, as indicated on the label"],
    ],
  },
  {
    name: "Rue Plant",
    fullName: "Rue Plant Oil",
    slug: "rue-plant",
    front: photo(
      "rue_plant_oil_flatlay",
      "Rue Plant Oil Premium Bottle_front.png",
    ),
    gallery: photos("rue_plant_oil_flatlay", [
      "Rue Plant Oil Botanical Still Life-2.png",
      "rue_plant_oil_botanical.png",
      "rue_plant_oil_flatlay.png",
    ]),
    model: "/products/06_Rue_Plant_Oil/Rue_Plant_Oil.glb",
    size: "100 mL",
    color: "#7f9a4a",
    category: skinCare,
    tagline: "Natural Botanical Body Oil | Soothe • Nourish • Care",
    summary:
      "A botanical body oil made from Ruta graveolens (rue) plant seeds.",
    description:
      "Discover Ye-Green Care Naturals Rue Plant Oil, a botanical oil made from Ruta graveolens, commonly known as rue. Made in Ethiopia, this plant-based oil is designed for external body care. It can be incorporated into a gentle massage routine to help condition the skin and leave it feeling soft and moisturized. Traditionally associated with herbal wellness practices, rue is a distinctive botanical ingredient valued for its long history of use.",
    ingredients: "Rue plant seeds (Ruta graveolens), with no additives.",
    benefits: [
      ["Botanical Skin Care", "Made with rue plant seed oil."],
      ["Skin Conditioning", "Helps soften and moisturize the skin."],
      [
        "Massage Care",
        "Suitable for gentle topical massage when used as directed.",
      ],
      ["Natural Botanical Ingredient", "Features Ruta graveolens plant seeds."],
      ["No Additives", "As stated on the product label."],
      ["Made in Ethiopia", "Inspired by Ethiopia's botanical traditions."],
    ],
    howToUse: [
      "Apply a small amount to the intended area of skin.",
      "Gently massage to distribute the oil.",
      "The product label recommends application twice daily.",
      "Wash your hands after application and avoid contact with eyes.",
    ],
    caution:
      "For external use only. Avoid contact with eyes. Keep out of reach of children. Do not use during pregnancy or while taking blood-thinning medication. Rue oil may cause skin irritation and increased sensitivity to sunlight. Consult a healthcare professional before use, especially if you have a medical condition or take medication. Discontinue use if irritation occurs.",
    storage: "Store in a cool, dry place away from direct sunlight.",
    details: [
      ["Brand", "Ye-Green Care Naturals"],
      ["Botanical name", "Ruta graveolens"],
      ["Ingredient", "Rue Plant Seeds"],
      ["Product type", "Topical Botanical Body Oil"],
      ["Purity", "100% Pure (label claim)"],
      ["Additives", "No Additives (label claim)"],
      ["Non-GMO", "As stated on the packaging"],
      ["Origin", "Made in Ethiopia"],
      ["Packaging", "Amber bottle with precision applicator nozzle"],
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
