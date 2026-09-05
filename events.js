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

  /* ---- ONE-TIME EVENTS: SEPTEMBER 2026 ---- */

  {
    title: "Roots and Heritage Festival",
    category: "FESTIVALS",
    startDate: "2026-09-11",
    endDate: "2026-09-13",
    time: "All weekend",
    venue: "Downtown / East End",
    description: "Lexington's long-running celebration of African American culture - parade, live music, food, and a street festival.",
    url: ""
  },
  {
    title: "Seniors Got Talent",
    category: "COMMUNITY",
    date: "2026-09-01",
    time: "7:30 PM",
    venue: "Lexington Opera House",
    description: "Talent showcase for performers 60+ competing for a $1,000 prize.",
    url: "https://lexingtonoperahouse.com/"
  },
  {
    title: "SCFA Expansive Sounds #10",
    category: "LIVE_MUSIC",
    date: "2026-09-03",
    time: "",
    venue: "Singletary Center for the Arts",
    description: "Free jazz-trio performance built on improvisation.",
    url: ""
  },
  {
    title: "Patton Oswalt",
    category: "COMEDY",
    date: "2026-09-04",
    time: "8:00 PM",
    venue: "Lexington Opera House",
    description: "Stand-up from the Emmy-winning comedian and actor.",
    url: "https://lexingtonoperahouse.com/"
  },
  {
    title: "Blue City Ball",
    category: "LIVE_MUSIC",
    date: "2026-09-04",
    time: "Doors 8:00 PM",
    venue: "The Burl",
    description: "Local showcase spanning blues, hip-hop, and rock.",
    url: "https://theburlky.com/"
  },
  {
    title: "Studio Players: \"Lucky Stiff\"",
    category: "ARTS_CULTURE",
    date: "2026-09-04",
    time: "",
    venue: "The Carriage House",
    description: "Offbeat musical comedy about an inheritance and a corpse. Runs select dates Sept 3-20.",
    url: "https://studioplayers.org/"
  },
  {
    title: "Expansion Fest",
    category: "FESTIVALS",
    date: "2026-09-05",
    time: "",
    venue: "The Burl",
    description: "Psychedelic-rock festival with garage and experimental sounds, feat. Frankie and the Witch Fingers.",
    url: "https://theburlky.com/"
  },
  {
    title: "Robert Lester Folsom",
    category: "LIVE_MUSIC",
    date: "2026-09-09",
    time: "Doors 8:00 PM",
    venue: "The Burl",
    description: "Singer-songwriter performing folk and psychedelic pop.",
    url: "https://theburlky.com/"
  },
  {
    title: "Leslie Jones: I'm Hot Tour",
    category: "COMEDY",
    date: "2026-09-11",
    time: "8:00 PM",
    venue: "Lexington Opera House",
    description: "Stand-up from the SNL alum and comedian.",
    url: "https://lexingtonoperahouse.com/"
  },
  {
    title: "The Fab Four",
    category: "LIVE_MUSIC",
    date: "2026-09-12",
    time: "7:30 PM",
    venue: "Lexington Opera House",
    description: "Emmy-winning Beatles tribute celebrating the 'Help!' album.",
    url: "https://lexingtonoperahouse.com/"
  },
  {
    title: "Lexington Humane Society Doggie Paddle",
    category: "COMMUNITY",
    date: "2026-09-12",
    time: "",
    venue: "Southland Aquatic Center",
    description: "Pool-party fundraiser for dogs and their people, benefiting the Lexington Humane Society.",
    url: "https://www.lexingtonhumanesociety.org/"
  },
  {
    title: "Leftover Salmon",
    category: "LIVE_MUSIC",
    date: "2026-09-17",
    time: "Doors 8:00 PM",
    venue: "The Burl",
    description: "Jamgrass veterans blending bluegrass with rock and funk.",
    url: "https://theburlky.com/"
  },
  {
    title: "Always Loretta",
    category: "LIVE_MUSIC",
    date: "2026-09-17",
    time: "7:30 PM",
    venue: "Lexington Opera House",
    description: "Loretta Lynn tribute featuring the country classics.",
    url: "https://lexingtonoperahouse.com/"
  },
  {
    title: "Lexington Philharmonic Opening Night",
    category: "ARTS_CULTURE",
    date: "2026-09-18",
    time: "7:30 PM",
    venue: "Singletary Center for the Arts",
    description: "LexPhil's 65th-season opener - Elgar's Cello Concerto and Dvorak's 'New World' Symphony.",
    url: "https://lexphil.org/"
  },
  {
    title: "The Emo Night Tour",
    category: "LIVE_MUSIC",
    date: "2026-09-18",
    time: "Doors 8:00 PM",
    venue: "The Burl",
    description: "Dance party of 2000s emo and pop-punk anthems.",
    url: "https://theburlky.com/"
  },
  {
    title: "Vinyl Richie presents Video Age Live!",
    category: "LIVE_MUSIC",
    date: "2026-09-19",
    time: "Doors 8:00 PM",
    venue: "The Burl",
    description: "MTV-era tribute spanning 1981-2009 music videos.",
    url: "https://theburlky.com/"
  },
  {
    title: "International Book Project: A Novel Evening",
    category: "COMMUNITY",
    date: "2026-09-19",
    time: "",
    venue: "ArtsPlace",
    description: "Fundraiser celebrating 60 years of literacy work - games, silent auction, and cocktails.",
    url: ""
  },
  {
    title: "Pallbearer",
    category: "LIVE_MUSIC",
    date: "2026-09-25",
    time: "Doors 8:00 PM",
    venue: "The Burl",
    description: "Melodic, atmospheric doom metal.",
    url: "https://theburlky.com/"
  },
  {
    title: "Brit Floyd: The Moon, The Wall & Beyond",
    category: "LIVE_MUSIC",
    date: "2026-09-26",
    time: "8:00 PM",
    venue: "Gatton Park",
    description: "Pink Floyd tribute with a full theatrical production.",
    url: "https://gattonpark.org/events/"
  },
  {
    title: "Origin Jazz Series: Charlie Hunter Trio",
    category: "LIVE_MUSIC",
    date: "2026-09-27",
    time: "",
    venue: "The Apiary",
    description: "Grammy-nominated guitarist on his innovative 7-string.",
    url: ""
  },
  {
    title: "Wynonna Judd: Kentucky Queen Tour",
    category: "LIVE_MUSIC",
    date: "2026-09-30",
    time: "8:00 PM",
    venue: "Lexington Opera House",
    description: "Career-spanning performance from the Country Music Hall of Famer.",
    url: "https://lexingtonoperahouse.com/"
  },

  /* ---- ONE-TIME EVENTS: OCTOBER 2026 ---- */

  {
    title: "Keeneland Fall Meet",
    category: "FESTIVALS",
    startDate: "2026-10-02",
    endDate: "2026-10-24",
    time: "",
    venue: "Keeneland",
    description: "Historic racetrack's fall race meet - 22 stakes worth $10.7 million, no racing Mondays/Tuesdays.",
    url: "https://www.keeneland.com/events/fall-meet"
  },
  {
    title: "Fall Stars Weekend at Keeneland",
    category: "FESTIVALS",
    startDate: "2026-10-02",
    endDate: "2026-10-04",
    time: "",
    venue: "Keeneland",
    description: "Opening weekend of the Fall Meet - 11 stakes races worth $6.35 million, including three Breeders' Cup 'Win and You're In' events.",
    url: "https://www.keeneland.com/events/fall-meet"
  },
  {
    title: "Jamie Lissow",
    category: "COMEDY",
    startDate: "2026-10-01",
    endDate: "2026-10-03",
    time: "",
    venue: "Comedy Off Broadway",
    description: "Stand-up run from the touring comedian and TV writer.",
    url: "https://www.comedyoffbroadway.com/"
  },
  {
    title: "Kenny Wayne Shepherd Band",
    category: "LIVE_MUSIC",
    date: "2026-10-09",
    time: "8:00 PM",
    venue: "Lexington Opera House",
    description: "Blues-rock guitarist and Grammy nominee bringing his full band to the Opera House.",
    url: "https://lexingtonoperahouse.com/"
  },
  {
    title: "Rappahannock County",
    category: "ARTS_CULTURE",
    startDate: "2026-10-16",
    endDate: "2026-10-18",
    time: "",
    venue: "Lexington Opera House",
    description: "UK Opera Theatre presents a song cycle by Pulitzer winner Mark Campbell and composer Ricky Ian Gordon on the Civil War's impact on Virginians.",
    url: "https://www.centralbankcenter.com/news/detail/uk-opera-theatre-presents-rappahannock-county-at-the-lexington-opera-house-october-1618-2026"
  },
  {
    title: "OVG Concert Series: Tommy James & The Shondells with Herman's Hermits",
    category: "LIVE_MUSIC",
    date: "2026-10-17",
    time: "6:00 PM",
    venue: "Gatton Park",
    description: "Double bill of 1960s pop-rock hitmakers, featuring 'Crimson & Clover' and 'Mrs. Brown You've Got a Lovely Daughter.'",
    url: "https://gattonpark.org/events/ovgconcerts/"
  },
  {
    title: "Lexington Philharmonic: Heroes & Villains - Symphonic Movie Music",
    category: "ARTS_CULTURE",
    date: "2026-10-19",
    time: "7:00 PM",
    venue: "Singletary Center for the Arts",
    description: "LexPhil performs iconic film scores; additional performances Oct. 24 and 25.",
    url: "https://lexphil.org/"
  },
  {
    title: "ScareFest Weekend",
    category: "FESTIVALS",
    startDate: "2026-10-23",
    endDate: "2026-10-25",
    time: "",
    venue: "Central Bank Center",
    description: "Kentucky's largest horror convention - celebrity guests, panels, workshops, screenings, and a dedicated film festival.",
    url: "https://scarefestweekend.com/"
  },
  {
    title: "Breeders' Cup Festival: Purple Up! Lexington",
    category: "FESTIVALS",
    startDate: "2026-10-25",
    endDate: "2026-10-31",
    time: "",
    venue: "Citywide",
    description: "Week-long celebration ahead of the Breeders' Cup World Championships - live music, hospitality, and family events across Lexington.",
    url: "https://www.breederscupfestival.com/"
  },
  {
    title: "Halloween Variety Show & Festival",
    category: "COMMUNITY",
    date: "2026-10-25",
    time: "4:30 PM",
    venue: "Robert F. Stephens Courthouse Plaza",
    description: "Free Halloween celebration with dance and band performances, a DJ, and the annual Halloween Parade - a USA Today Top 10 Halloween destination.",
    url: "https://www.lexingtonky.gov/playing/arts-events/fall-events-programs/halloween-festival-thriller-parade"
  },
  {
    title: "Purple in the Park",
    category: "COMMUNITY",
    date: "2026-10-25",
    time: "1:00 PM – 6:00 PM",
    venue: "Gatton Park",
    description: "Free, family-friendly Breeders' Cup Festival kickoff with horse meet-and-greets, jockey silk photos, face-painting, live music, and food trucks.",
    url: "https://www.breederscupfestival.com/"
  },
  {
    title: "Sunrise Trackside",
    category: "COMMUNITY",
    startDate: "2026-10-26",
    endDate: "2026-10-29",
    time: "7:00 AM – 10:00 AM",
    venue: "Keeneland",
    description: "Breeders' Cup Festival mornings - watch entrants train on the main track over breakfast.",
    url: "https://www.breederscupfestival.com/"
  },
  {
    title: "The Purple Xperience",
    category: "LIVE_MUSIC",
    date: "2026-10-29",
    time: "",
    venue: "The Burl",
    description: "Free outdoor Breeders' Cup Festival show from the acclaimed Minneapolis-based Prince tribute band.",
    url: "https://theburlky.com/"
  },
  {
    title: "Sesame Street Live! Elmo's Got the Moves",
    category: "ARTS_CULTURE",
    date: "2026-10-29",
    time: "6:00 PM",
    venue: "Lexington Opera House",
    description: "Touring stage show featuring Elmo and friends in a dance-themed family production.",
    url: "https://lexingtonoperahouse.com/"
  },
  {
    title: "Breeders' Cup World Championships",
    category: "FESTIVALS",
    startDate: "2026-10-30",
    endDate: "2026-10-31",
    time: "",
    venue: "Keeneland",
    description: "Thoroughbred racing's world championships return to Keeneland - two days of Breeders' Cup stakes racing.",
    url: "https://www.keeneland.com/events/breeders-cup-world-championships"
  },
  {
    title: "Gatton Park Watch Party",
    category: "COMMUNITY",
    startDate: "2026-10-30",
    endDate: "2026-10-31",
    time: "",
    venue: "Gatton Park",
    description: "City's biggest Breeders' Cup watch party - food trucks, live music, and equine-themed fun from the first race to the last.",
    url: "https://www.breederscupfestival.com/"
  }

];
