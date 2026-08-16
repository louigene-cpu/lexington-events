/* ============================================================================
   LEXINGTON RESTAURANTS — RECOMMENDATIONS DATA
   ============================================================================

   Add your own favorites here! Copy a block, change the details, done.
   Restaurants are automatically grouped on the site by their "cuisine" type.

        {
          name: "Some Great Spot",
          cuisine: "ITALIAN",              // must match a key below
          area: "Downtown",                // neighborhood (optional)
          price: "$$",                     // $ = cheap … $$$$ = splurge
          description: "One line on what it's known for.",
          url: ""                          // official site (optional).
        },                                 // If blank, the site links to
                                           // Google Maps (hours + directions).

   ---------------------------------------------------------------------------
   CUISINE must be one of these exact keys (sets the group + color):
     SOUTHERN  FINE_DINING  STEAKHOUSE  ITALIAN  ASIAN  LATIN
     MEDITERRANEAN  SEAFOOD  BOURBON  BREAKFAST  CAFE
   To add a whole new food type, add an entry to LEX_CUISINES below.
   ============================================================================ */

const LEX_CUISINES = {
  SOUTHERN:      { label: "Southern & Comfort",         emoji: "🍗", color: "#e07a5f" },
  FINE_DINING:   { label: "Contemporary & Fine Dining", emoji: "🍽️", color: "#8b5cf6" },
  STEAKHOUSE:    { label: "Steakhouse",                 emoji: "🥩", color: "#c0392b" },
  ITALIAN:       { label: "Italian & Pizza",            emoji: "🍝", color: "#2e9e5b" },
  ASIAN:         { label: "Asian",                      emoji: "🍜", color: "#e84393" },
  LATIN:         { label: "Latin American",             emoji: "🌮", color: "#f0932b" },
  MEDITERRANEAN: { label: "Mediterranean & Global",     emoji: "🥙", color: "#00a884" },
  SEAFOOD:       { label: "Seafood & Wings",            emoji: "🦞", color: "#2b8fd6" },
  BOURBON:       { label: "Bars, Bourbon & Cider",      emoji: "🥃", color: "#b7791f" },
  BREAKFAST:     { label: "Breakfast & Coffee",         emoji: "🍳", color: "#f5a623" },
  CAFE:          { label: "Cafés, Bakeries & Sweets",   emoji: "🍰", color: "#0aa3a3" },
};

const LEX_RESTAURANTS = [

  // ---- SOUTHERN & COMFORT ----
  {
    name: "Ramsey's Diner",
    cuisine: "SOUTHERN",
    area: "Multiple locations",
    price: "$",
    description: "Beloved local diner for Southern comfort — the Hot Brown, fried bologna, hearty sides, and famous pie.",
    url: ""
  },

  // ---- CONTEMPORARY & FINE DINING ----
  {
    name: "Dudley's on Short",
    cuisine: "FINE_DINING",
    area: "Downtown",
    price: "$$$",
    description: "A Lexington institution in a historic building — inventive contemporary American plates and polished service.",
    url: ""
  },
  {
    name: "Cole's 735 Main",
    cuisine: "FINE_DINING",
    area: "Downtown / East End",
    price: "$$$",
    description: "Contemporary Southern in a garden-party setting, known for duck confit and legendary crispy potatoes.",
    url: ""
  },
  {
    name: "Favor Kitchen",
    cuisine: "FINE_DINING",
    area: "Warehouse Block",
    price: "$$$",
    description: "Chef-driven small plates with thoughtful technique and locally sourced ingredients.",
    url: ""
  },

  // ---- STEAKHOUSE ----
  {
    name: "Malone's",
    cuisine: "STEAKHOUSE",
    area: "Multiple locations",
    price: "$$$",
    description: "Lexington's classic steakhouse since 1998 — hand-cut USDA Prime steaks, fresh seafood, and a great bar.",
    url: "https://bluegrasshospitality.com/malones/lexington/"
  },

  // ---- ITALIAN ----
  {
    name: "Giuseppe's Ristorante Italiano",
    cuisine: "ITALIAN",
    area: "Regency Road",
    price: "$$",
    description: "Long-running family Italian spot for classic pastas, veal, and old-school hospitality.",
    url: ""
  },

  // ---- ASIAN ----
  {
    name: "Zen Sushi & Sake",
    cuisine: "ASIAN",
    area: "Chinoe / Downtown",
    price: "$$",
    description: "Widely called the best sushi in Kentucky — pristine fish and creative rolls from a talented chef.",
    url: ""
  },
  {
    name: "Standing Room Only",
    cuisine: "ASIAN",
    area: "Downtown",
    price: "$$",
    description: "Japanese-style standing bar pouring sake, shochu and beer alongside crab dumplings and small plates.",
    url: ""
  },
  {
    name: "Everest Cuisine",
    cuisine: "ASIAN",
    area: "Palomar / Man o' War",
    price: "$$",
    description: "Warmly recommended Nepalese and Indian kitchen — momos, curries, and tandoori done right.",
    url: ""
  },

  // ---- LATIN AMERICAN ----
  {
    name: "Corto Lima",
    cuisine: "LATIN",
    area: "Downtown",
    price: "$$",
    description: "Vibrant modern Latin spot for bold ceviches, tacos, and house-made corn tortillas. No reservations.",
    url: ""
  },
  {
    name: "Lost Palm",
    cuisine: "LATIN",
    area: "Distillery District (rooftop)",
    price: "$$$",
    description: "Tropical rooftop hideaway atop the Manchester Hotel with tiki cocktails and Latin share plates.",
    url: ""
  },

  // ---- BARS, BOURBON & CIDER ----
  {
    name: "OBC Kitchen",
    cuisine: "BOURBON",
    area: "The Summit",
    price: "$$$",
    description: "Bourbon-lover's haven with one of the deepest whiskey lists in town and elevated bar food.",
    url: ""
  },
  {
    name: "The Obstinate Sons",
    cuisine: "BOURBON",
    area: "Distillery District",
    price: "$$",
    description: "New American plates and an incredible vintage-whiskey selection from friendly, knowledgeable staff.",
    url: ""
  },
  {
    name: "Justin's House of Bourbon",
    cuisine: "BOURBON",
    area: "Downtown",
    price: "$$",
    description: "Intimate tasting room and shop specializing in rare and vintage bottles plus curated flights.",
    url: "https://www.houseofbourbon.com/"
  },
  {
    name: "Wise Bird Cider Co.",
    cuisine: "BOURBON",
    area: "Distillery District",
    price: "$$",
    description: "Family-run cidery pouring small-batch, heritage-style ciders, with a rotating food truck on site.",
    url: ""
  },

  // ---- CAFÉS, BAKERIES & SWEETS ----
  {
    name: "Wallace Station Deli & Bakery",
    cuisine: "CAFE",
    area: "Midway backroad (near Lexington)",
    price: "$$",
    description: "A scenic drive rewards you with legendary sandwiches and fresh-baked goods from Ouita Michel's kitchen.",
    url: ""
  },
  {
    name: "Kentucky Native Café",
    cuisine: "CAFE",
    area: "Downtown",
    price: "$$",
    description: "Greenhouse café serving rotating seasonal, plant-forward plates — with live bluegrass on Sundays.",
    url: ""
  },
  {
    name: "Crank & Boom Craft Ice Cream",
    cuisine: "CAFE",
    area: "Distillery District",
    price: "$",
    description: "Bold small-batch ice cream made with local ingredients — try the bourbon & honey.",
    url: "https://www.crankandboom.com/"
  },
  {
    name: "Sorella Gelateria",
    cuisine: "CAFE",
    area: "Downtown",
    price: "$",
    description: "Handcrafted, small-batch Italian gelato with daily-rotating flavors.",
    url: ""
  },

  /* ===== PAUL'S PICKS (added Aug 2026) ===== */

  // ---- SOUTHERN & COMFORT ----
  {
    name: "Ford's Garage Lexington",
    cuisine: "SOUTHERN",
    area: "The Summit at Fritz Farm",
    price: "$$",
    description: "Gourmet burgers and American comfort food in a vintage service-station setting, with a full bar.",
    url: ""
  },

  // ---- ITALIAN & PIZZA ----
  {
    name: "Apollo Pizza",
    cuisine: "ITALIAN",
    area: "Near UK campus",
    price: "$",
    description: "Longtime local pizzeria known for big New York–style slices and specialty pies.",
    url: ""
  },
  {
    name: "Frank & Dino's",
    cuisine: "ITALIAN",
    area: "",
    price: "$$",
    description: "Cozy Italian-American spot for red-sauce classics, pasta, and cocktails.",
    url: ""
  },

  // ---- ASIAN ----
  {
    name: "Arirang",
    cuisine: "ASIAN",
    area: "",
    price: "$$",
    description: "Korean barbecue and comfort classics — tabletop bulgogi, bibimbap, and hot stone bowls.",
    url: ""
  },
  {
    name: "Umami Ramen & Grill",
    cuisine: "ASIAN",
    area: "",
    price: "$$",
    description: "Rich, slurp-worthy ramen bowls alongside Japanese grill plates and small bites.",
    url: ""
  },
  {
    name: "Toku Revolving Sushi",
    cuisine: "ASIAN",
    area: "",
    price: "$$",
    description: "Conveyor-belt sushi — plates glide by and you grab what looks good. A fun, unique dinner out.",
    url: ""
  },

  // ---- LATIN AMERICAN ----
  {
    name: "El Toro",
    cuisine: "LATIN",
    area: "Multiple locations",
    price: "$$",
    description: "Crowd-pleasing Mexican menu — sizzling fajitas, enchiladas, and margaritas.",
    url: ""
  },
  {
    name: "Mazunte Bodega",
    cuisine: "LATIN",
    area: "Tates Creek",
    price: "$$",
    description: "Counter-service sibling of the beloved Mazunte — Oaxacan-inspired Mexican to grab and go.",
    url: ""
  },

  // ---- MEDITERRANEAN & GLOBAL ----
  {
    name: "Nefertiti",
    cuisine: "MEDITERRANEAN",
    area: "",
    price: "$$",
    description: "Mediterranean and Middle Eastern plates — shawarma, kebabs, hummus, and falafel.",
    url: ""
  },
  {
    name: "Le Gourmet",
    cuisine: "MEDITERRANEAN",
    area: "",
    price: "$$",
    description: "Authentic Haitian home cooking — griot, rice and beans, and bold Caribbean flavors.",
    url: ""
  },

  // ---- SEAFOOD & WINGS ----
  {
    name: "Smithtown Seafood",
    cuisine: "SEAFOOD",
    area: "National Avenue",
    price: "$$",
    description: "Fast-casual seafood from the Ouita Michel family — fish sandwiches, po'boys, and chowder.",
    url: ""
  },
  {
    name: "The Ketch",
    cuisine: "SEAFOOD",
    area: "",
    price: "$$",
    description: "Fresh fish, oysters, and seafood done simply at this local seafood market and grill.",
    url: ""
  },
  {
    name: "Shaking Seafood & Wings",
    cuisine: "SEAFOOD",
    area: "",
    price: "$$",
    description: "Cajun-style seafood boils served by the bag, plus a big wing lineup.",
    url: ""
  },
  {
    name: "Storming Crab",
    cuisine: "SEAFOOD",
    area: "",
    price: "$$$",
    description: "Louisiana-style seafood boils — crab, crawfish, and shrimp by the bag with Cajun sauces.",
    url: ""
  },
  {
    name: "Wyng King",
    cuisine: "SEAFOOD",
    area: "",
    price: "$$",
    description: "Wings every which way with a deep bench of sauces and comfort sides.",
    url: ""
  },

  // ---- BREAKFAST & COFFEE ----
  {
    name: "Wild Eggs",
    cuisine: "BREAKFAST",
    area: "Hamburg",
    price: "$$",
    description: "Creative breakfast and brunch — inventive egg dishes, skillets, and pancakes.",
    url: ""
  },
  {
    name: "Grounded All-Day Cafe",
    cuisine: "BREAKFAST",
    area: "",
    price: "$",
    description: "Easygoing all-day café for coffee, breakfast, and fresh, healthy-leaning lunch.",
    url: ""
  },
  {
    name: "Brevedé Coffee",
    cuisine: "BREAKFAST",
    area: "",
    price: "$",
    description: "Specialty coffee and espresso drinks from a local roaster.",
    url: ""
  },
  {
    name: "North Lime Coffee & Donuts",
    cuisine: "BREAKFAST",
    area: "North Limestone",
    price: "$",
    description: "Cult-favorite made-to-order donuts and strong coffee. Expect a line — it's worth it.",
    url: ""
  },

];
