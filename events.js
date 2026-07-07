/* ============================================================================
   LEXINGTON EVENTS — YOUR MONTHLY EVENT DATA
   ============================================================================

   This is the ONLY file you need to edit each month. No coding required —
   just copy an existing event block and change the details.

   ---------------------------------------------------------------------------
   TWO KINDS OF EVENTS
   ---------------------------------------------------------------------------

   1) A ONE-TIME event — happens on a specific date. Use "date":

        {
          title: "Get The Led Out at Gatton Park",
          category: "LIVE_MUSIC",
          date: "2026-07-09",          // YYYY-MM-DD
          time: "8:00 PM",
          venue: "Gatton Park",
          description: "Led Zeppelin tribute band, OVG Concert Series.",
          url: "https://gattonpark.org/events/ovgconcerts/"
        },

   2) A RECURRING event — happens every week on the same weekday. Use
      "recurring" instead of "date" (leave "date" out entirely):

        {
          title: "White Lotus Trivia Night",
          category: "COMMUNITY",
          recurring: "Thursday",       // repeats every Thursday, every month
          time: "7:00 PM",
          venue: "Mirror Twin Brewing",
          description: "Weekly trivia night. Teams welcome.",
          url: "https://mirrortwinbrewing.com/"
        },

   ---------------------------------------------------------------------------
   CATEGORY must be one of these exact words (controls the color):
     LIVE_MUSIC   FESTIVALS   ARTS_CULTURE   COMMUNITY   COMEDY   WORSHIP
   ---------------------------------------------------------------------------

   TIPS
   • Keep the quotes and the comma at the end of each event block.
   • "url" and "description" are optional — you can leave them as "".
   • To remove an event, delete its whole { ... }, block.
   • Recurring events automatically show up in every future month, so you
     only add those once.
   • NOTE: Summer concert SERIES (e.g. Southland Jamboree, Summer Nights) run
     only on specific summer dates, so they are entered as individual one-time
     events — not as "recurring" — so they don't wrongly appear in winter.
   ============================================================================ */

const LEX_CATEGORIES = {
  LIVE_MUSIC:   { label: "Live Music",     color: "#6366f1" }, // indigo
  FESTIVALS:    { label: "Festivals",      color: "#f59e0b" }, // amber
  ARTS_CULTURE: { label: "Arts & Culture", color: "#a855f7" }, // purple
  COMMUNITY:    { label: "Community",      color: "#10b981" }, // emerald
  COMEDY:       { label: "Comedy",         color: "#ec4899" }, // pink
  WORSHIP:      { label: "Worship",        color: "#ef4444" }, // red
};

const LEX_EVENTS = [

  /* ---- RECURRING WEEKLY EVENTS (added once, show every month) ---- */

  {
    title: "White Lotus Trivia Night",
    category: "COMMUNITY",
    recurring: "Thursday",
    time: "7:00 PM",
    venue: "Mirror Twin Brewing",
    description: "Weekly themed trivia night. Gather a team, grab a craft beer, and play for prizes.",
    url: "https://mirrortwinbrewing.com/"
  },
  {
    title: "Comedy Open Mic Night",
    category: "COMEDY",
    recurring: "Thursday",
    time: "7:00 PM – 10:00 PM",
    venue: "The Laughing Skull Comedy Club",
    description: "Weekly open mic. Watch local comedians try new material — or sign up and take the stage yourself.",
    url: ""
  },
  {
    title: "Open Jam",
    category: "LIVE_MUSIC",
    recurring: "Thursday",
    time: "7:00 PM",
    venue: "American Legion Post 8",
    description: "Weekly open jam session. Bring an instrument or just come listen.",
    url: ""
  },
  {
    title: "Open Mic Night",
    category: "LIVE_MUSIC",
    recurring: "Thursday",
    time: "7:00 PM",
    venue: "The Twisted Cork",
    description: "Weekly open mic for musicians and songwriters in a relaxed wine-bar setting.",
    url: ""
  },
  {
    title: "Open Mic Night at Comedy Off Broadway",
    category: "COMEDY",
    recurring: "Tuesday",
    time: "8:00 PM",
    venue: "Comedy Off Broadway",
    description: "Weekly comedy open mic. A great atmosphere for comedy fans and first-time performers.",
    url: "https://www.comedyoffbroadway.com/"
  },

  /* ---- MULTI-DAY / WEEK-LONG EVENTS ----
     These span a range of days. Use "startDate" and "endDate" (YYYY-MM-DD)
     instead of "date". They show on every day they run, plus in the
     "This month's week-long happenings" banner at the top. ---- */

  {
    title: "Lexington Burger Week",
    category: "FESTIVALS",
    startDate: "2026-07-06",
    endDate: "2026-07-12",
    time: "All week",
    venue: "Participating restaurants citywide",
    description: "Lexington's best spots serve exclusive, off-menu burgers for just $7 and $8 all week. Presented by the Kentucky Beef Council.",
    url: "https://www.lexingtonburgerweek.com/"
  },
  {
    title: "Lexington Restaurant Week",
    category: "FESTIVALS",
    startDate: "2026-07-23",
    endDate: "2026-08-02",
    time: "All week",
    venue: "Participating restaurants citywide",
    description: "Once a year, the best restaurants in the Bluegrass offer decadent multi-course dinners at a special fixed price.",
    url: "https://lexingtonrestaurantweek.com/"
  },

  /* ---- ONE-TIME EVENTS: JULY 2026 ---- */

  {
    title: "Southland Jamboree: Six String Soldiers (U.S. Army Band)",
    category: "LIVE_MUSIC",
    date: "2026-07-02",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: Rewind Band",
    category: "LIVE_MUSIC",
    date: "2026-07-02",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Randy Kaplan at Talon Winery",
    category: "LIVE_MUSIC",
    date: "2026-07-03",
    time: "6:00 PM – 9:00 PM",
    venue: "Talon Winery Lexington",
    description: "Live music performance. Free, family-friendly event — pack your favorite snacks and enjoy Talon wine.",
    url: "https://www.talonwine.com/events/"
  },
  {
    title: "Tina Taylor at Talon Winery",
    category: "LIVE_MUSIC",
    date: "2026-07-04",
    time: "4:00 PM – 7:00 PM",
    venue: "Talon Winery Lexington",
    description: "Live music performance. Free, family-friendly event — pack your favorite snacks and enjoy Talon wine.",
    url: "https://www.talonwine.com/events/"
  },
  {
    title: "Big Band & Jazz: DOJO – DiMartino/Osland Jazz Orchestra",
    category: "LIVE_MUSIC",
    date: "2026-07-07",
    time: "7:00 PM – 8:30 PM",
    venue: "Ecton Park",
    description: "Free outdoor jazz in the Big Band & Jazz at Ecton Park series. Bring a lawn chair or blanket.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Brian Bates at Comedy Off Broadway",
    category: "COMEDY",
    date: "2026-07-09",
    time: "8:00 PM",
    venue: "Comedy Off Broadway",
    description: "Stand-up headliner performance at Lexington's longtime comedy club.",
    url: "https://www.comedyoffbroadway.com/"
  },
  {
    title: "Get The Led Out",
    category: "LIVE_MUSIC",
    date: "2026-07-09",
    time: "8:00 PM",
    venue: "Gatton Park",
    description: "The American Led Zeppelin — a note-for-note tribute — performs as part of the OVG Concert Series.",
    url: "https://gattonpark.org/events/"
  },
  {
    title: "Southland Jamboree: Dale Ann Bradley",
    category: "LIVE_MUSIC",
    date: "2026-07-09",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: Vanguard Band",
    category: "LIVE_MUSIC",
    date: "2026-07-09",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Bryce Taylor at Talon Winery",
    category: "LIVE_MUSIC",
    date: "2026-07-10",
    time: "6:00 PM – 9:00 PM",
    venue: "Talon Winery Lexington",
    description: "Live music performance. Free, family-friendly event — pack your favorite snacks and enjoy Talon wine.",
    url: "https://www.talonwine.com/events/"
  },
  {
    title: "Summer Nights in Suburbia: 64 West",
    category: "LIVE_MUSIC",
    date: "2026-07-10",
    time: "7:00 PM – 9:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free Friday concert; gates 5:30 PM. Part of the city's Summer Nights in Suburbia series.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts/summer-nights-suburbia"
  },
  {
    title: "Nicholas Lozano at Talon Winery",
    category: "LIVE_MUSIC",
    date: "2026-07-11",
    time: "4:00 PM – 7:00 PM",
    venue: "Talon Winery Lexington",
    description: "Live music performance. Free, family-friendly event — pack your favorite snacks and enjoy Talon wine.",
    url: "https://www.talonwine.com/events/"
  },
  {
    title: "Big Band & Jazz: Brett Evans Trombone Orchestra",
    category: "LIVE_MUSIC",
    date: "2026-07-14",
    time: "7:00 PM – 8:30 PM",
    venue: "Ecton Park",
    description: "Free outdoor jazz in the Big Band & Jazz at Ecton Park series. Bring a lawn chair or blanket.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Southland Jamboree: Timberline Road",
    category: "LIVE_MUSIC",
    date: "2026-07-16",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: Superfecta",
    category: "LIVE_MUSIC",
    date: "2026-07-16",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Chris Carpenter at Talon Winery",
    category: "LIVE_MUSIC",
    date: "2026-07-17",
    time: "6:00 PM – 9:00 PM",
    venue: "Talon Winery Lexington",
    description: "Live music performance. Free, family-friendly event — pack your favorite snacks and enjoy Talon wine.",
    url: "https://www.talonwine.com/events/"
  },
  {
    title: "Eastside Evenings: Boogie G & the Titanics",
    category: "LIVE_MUSIC",
    date: "2026-07-17",
    time: "6:00 PM – 8:00 PM",
    venue: "Charles Young Park",
    description: "Free neighborhood concert in the Eastside Evenings series at Charles Young Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Buckwheat Husk at Talon Winery",
    category: "LIVE_MUSIC",
    date: "2026-07-18",
    time: "4:00 PM – 7:00 PM",
    venue: "Talon Winery Lexington",
    description: "Live music performance. Free, family-friendly event — pack your favorite snacks and enjoy Talon wine.",
    url: "https://www.talonwine.com/events/"
  },
  {
    title: "Tommy James & The Shondells with Herman's Hermits",
    category: "LIVE_MUSIC",
    date: "2026-07-18",
    time: "8:00 PM",
    venue: "Gatton Park",
    description: "A double bill of 1960s hitmakers at Gatton Park's outdoor stage.",
    url: "https://gattonpark.org/events/"
  },
  {
    title: "Big Band & Jazz: Bryson Dunsmore Trio with Kirby Davis",
    category: "LIVE_MUSIC",
    date: "2026-07-21",
    time: "7:00 PM – 8:30 PM",
    venue: "Ecton Park",
    description: "Free outdoor jazz in the Big Band & Jazz at Ecton Park series. Bring a lawn chair or blanket.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Southland Jamboree: Mash Grass & Kids Camp Performers",
    category: "LIVE_MUSIC",
    date: "2026-07-23",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: Tahlsound Reggae Night",
    category: "LIVE_MUSIC",
    date: "2026-07-23",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Summer Nights in Suburbia: Boogie G and the Titanics",
    category: "LIVE_MUSIC",
    date: "2026-07-24",
    time: "7:00 PM – 9:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free Friday concert; gates 5:30 PM. Part of the city's Summer Nights in Suburbia series.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts/summer-nights-suburbia"
  },
  {
    title: "The Twigginburys",
    category: "LIVE_MUSIC",
    date: "2026-07-25",
    time: "6:00 PM",
    venue: "Equus Run Vineyards",
    description: "Live concert on the lawn at Equus Run Vineyards. Bring a chair and enjoy Kentucky wine.",
    url: "https://equusrunvineyards.com/"
  },
  {
    title: "Big Band & Jazz: RPM Quintet",
    category: "LIVE_MUSIC",
    date: "2026-07-28",
    time: "7:00 PM – 8:30 PM",
    venue: "Ecton Park",
    description: "Free outdoor jazz in the Big Band & Jazz at Ecton Park series. Bring a lawn chair or blanket.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Southland Jamboree: West Liberty Mountain Boys",
    category: "LIVE_MUSIC",
    date: "2026-07-30",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: Dead Air Dennis & Bryan Himes Experience",
    category: "LIVE_MUSIC",
    date: "2026-07-30",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "CRAVE Food + Music Festival (Day 1)",
    category: "FESTIVALS",
    date: "2026-07-31",
    time: "4:00 PM – 11:00 PM",
    venue: "Gatton Park on the Town Branch",
    description: "50+ restaurants and food trucks, craft beer & cocktails, a car show, kids' activities, and 13 musical acts over two days. $10 admission; kids under 10 free.",
    url: "https://www.visitlex.com/things-to-do/calendar-of-events/"
  },
  {
    title: "Eastside Evenings: VSP Band",
    category: "LIVE_MUSIC",
    date: "2026-07-31",
    time: "6:00 PM – 8:00 PM",
    venue: "Charles Young Park",
    description: "Free neighborhood concert in the Eastside Evenings series at Charles Young Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },

  /* ---- ONE-TIME EVENTS: AUGUST 2026 ---- */

  {
    title: "CRAVE Food + Music Festival (Day 2)",
    category: "FESTIVALS",
    date: "2026-08-01",
    time: "12:00 PM – 11:00 PM",
    venue: "Gatton Park on the Town Branch",
    description: "Day two of CRAVE: food, drinks, a car show, kids' activities, and live music in downtown Lexington. $10 admission; kids under 10 free.",
    url: "https://www.visitlex.com/things-to-do/calendar-of-events/"
  },
  {
    title: "Shaker Village Craft Fair (Day 1)",
    category: "ARTS_CULTURE",
    date: "2026-08-01",
    time: "10:00 AM – 5:00 PM",
    venue: "Shaker Village of Pleasant Hill",
    description: "Juried craft fair: pottery, jewelry, glassware, woven rugs, basketry, leather goods, needlecraft, and floral design.",
    url: "https://shakervillageky.org/"
  },
  {
    title: "Shaker Village Craft Fair (Day 2)",
    category: "ARTS_CULTURE",
    date: "2026-08-02",
    time: "10:00 AM – 5:00 PM",
    venue: "Shaker Village of Pleasant Hill",
    description: "Day two of the Shaker Village Craft Fair — a wide assortment of handmade crafts at Pleasant Hill.",
    url: "https://shakervillageky.org/"
  },
  {
    title: "Big Band & Jazz: Miles Osland Little Big Band",
    category: "LIVE_MUSIC",
    date: "2026-08-04",
    time: "7:00 PM – 8:30 PM",
    venue: "Ecton Park",
    description: "Free outdoor jazz in the Big Band & Jazz at Ecton Park series. Bring a lawn chair or blanket.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Southland Jamboree: Blue Debut",
    category: "LIVE_MUSIC",
    date: "2026-08-06",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Summer Nights in Suburbia: NVRMND",
    category: "LIVE_MUSIC",
    date: "2026-08-07",
    time: "7:00 PM – 9:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free Friday concert; gates 5:30 PM. Part of the city's Summer Nights in Suburbia series.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts/summer-nights-suburbia"
  },
  {
    title: "Big Band & Jazz: Walnut Street Ramblers",
    category: "LIVE_MUSIC",
    date: "2026-08-11",
    time: "7:00 PM – 8:30 PM",
    venue: "Ecton Park",
    description: "Free outdoor jazz in the Big Band & Jazz at Ecton Park series. Bring a lawn chair or blanket.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Southland Jamboree: Lincoln Mash & Heather Alley",
    category: "LIVE_MUSIC",
    date: "2026-08-13",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: One More Round",
    category: "LIVE_MUSIC",
    date: "2026-08-13",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Eastside Evenings: Benny J & Friends",
    category: "LIVE_MUSIC",
    date: "2026-08-14",
    time: "6:00 PM – 8:00 PM",
    venue: "Charles Young Park",
    description: "Free neighborhood concert in the Eastside Evenings series at Charles Young Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Southland Jamboree: Open Highway Band",
    category: "LIVE_MUSIC",
    date: "2026-08-20",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: Mercy Men",
    category: "LIVE_MUSIC",
    date: "2026-08-20",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Summer Nights in Suburbia: Magnolia Boulevard",
    category: "LIVE_MUSIC",
    date: "2026-08-21",
    time: "7:00 PM – 9:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free Friday concert; gates 5:30 PM. Part of the city's Summer Nights in Suburbia series.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts/summer-nights-suburbia"
  },
  {
    title: "Southland Jamboree: CornMaiz String Band",
    category: "LIVE_MUSIC",
    date: "2026-08-27",
    time: "7:00 PM",
    venue: "Moondance Amphitheater",
    description: "Free bluegrass & Americana in the Southland Jamboree series at Moondance Amphitheater (Beaumont Center).",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Thursday Night Live: Kenny Owens & Group Therapy",
    category: "LIVE_MUSIC",
    date: "2026-08-27",
    time: "5:00 PM – 8:00 PM",
    venue: "Tandy Park",
    description: "Free live music at the Thursday Night Live series, Fifth Third Bank Pavilion at Tandy Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
  {
    title: "Eastside Evenings: Honeychild",
    category: "LIVE_MUSIC",
    date: "2026-08-28",
    time: "6:00 PM – 8:00 PM",
    venue: "Charles Young Park",
    description: "Free neighborhood concert in the Eastside Evenings series at Charles Young Park.",
    url: "https://www.lexingtonky.gov/playing/arts-events/concerts"
  },
];
