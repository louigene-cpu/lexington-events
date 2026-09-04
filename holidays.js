/* ============================================================================
   MAJOR HOLIDAYS
   ============================================================================

   These appear as small labels on the calendar (not clickable events) and
   recur automatically every year — no need to update them each year.

   Three kinds of rule:
     • Fixed date:   { name, emoji, month, day }            e.g. Jul 4
     • Floating:     { name, emoji, month, weekday, nth }   e.g. 4th Thursday
                       weekday: 0=Sun … 6=Sat;  nth: 1..4, or -1 for "last"
     • Easter:       { name, emoji, easter: true }          (computed each year)

   month is 1-indexed (1 = January). To add one, copy a line and edit it.
   ============================================================================ */

const LEX_HOLIDAYS = [

  // ---- Fixed-date holidays ----
  { name: "New Year's Day",    emoji: "🎉", month: 1,  day: 1 },
  { name: "Valentine's Day",   emoji: "❤️", month: 2,  day: 14 },
  { name: "St. Patrick's Day", emoji: "☘️", month: 3,  day: 17 },
  { name: "Juneteenth",        emoji: "✊", month: 6,  day: 19 },
  { name: "Independence Day",  emoji: "🎆", month: 7,  day: 4 },
  { name: "Halloween",         emoji: "🎃", month: 10, day: 31 },
  { name: "Veterans Day",      emoji: "🎖️", month: 11, day: 11 },
  { name: "Christmas Eve",     emoji: "🎄", month: 12, day: 24 },
  { name: "Christmas Day",     emoji: "🎁", month: 12, day: 25 },
  { name: "New Year's Eve",    emoji: "🥂", month: 12, day: 31 },

  // ---- Floating holidays (nth weekday of the month) ----
  { name: "Martin Luther King Jr. Day", emoji: "🕊️", month: 1,  weekday: 1, nth: 3 },  // 3rd Mon
  { name: "Presidents' Day",   emoji: "🏛️", month: 2,  weekday: 1, nth: 3 },            // 3rd Mon
  { name: "Mother's Day",      emoji: "💐", month: 5,  weekday: 0, nth: 2 },            // 2nd Sun
  { name: "Memorial Day",      emoji: "🇺🇸", month: 5,  weekday: 1, nth: -1 },           // last Mon
  { name: "Father's Day",      emoji: "👔", month: 6,  weekday: 0, nth: 3 },            // 3rd Sun
  { name: "Labor Day",         emoji: "🛠️", month: 9,  weekday: 1, nth: 1 },            // 1st Mon
  { name: "Thanksgiving",      emoji: "🦃", month: 11, weekday: 4, nth: 4 },            // 4th Thu

  // ---- Easter (date computed automatically each year) ----
  { name: "Easter Sunday",     emoji: "🐣", easter: true },

];
