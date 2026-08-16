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
     SOUTHERN  FINE_DINING  STEAKHOUSE  ITALIAN  ASIAN  LATIN  BOURBON  CAFE
   To add a whole new food type, add an entry to LEX_CUISINES below.
   ============================================================================ */

const LEX_CUISINES = {
  SOUTHERN:    { label: "Southern & Comfort",           emoji: "🍗", color: "#e07a5f" },
  FINE_DINING: { label: "Contemporary & Fine Dining",   emoji: "🍽️", color: "#8b5cf6" },
  STEAKHOUSE:  { label: "Steakhouse",                   emoji: "🥩", color: "#c0392b" },
  ITALIAN:     { label: "Italian",                      emoji: "🍝", color: "#2e9e5b" },
  ASIAN:       { label: "Asian",                        emoji: "🍜", color: "#e84393" },
  LATIN:       { label: "Latin American",               emoji: "🌮", color: "#f0932b" },
  BOURBON:     { label: "Bars, Bourbon & Cider",        emoji: "🥃", color: "#b7791f" },
  CAFE:        { label: "Cafés, Bakeries & Sweets",     emoji: "🍰", color: "#0aa3a3" },
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

];
