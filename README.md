# Lexington Events

A free, public, monthly guide to events around Lexington, Kentucky — live music,
festivals, comedy, community gatherings, arts, and worship. Built as a simple,
fast static website with **no accounts, no database, and no build step**.

Just four files:

| File | What it is | Do you edit it? |
|------|------------|-----------------|
| `events.js`  | **Your event list** — the data | ✅ **Yes, every month** |
| `index.html` | Page structure | Rarely |
| `styles.css` | Colors, fonts, layout | Only for design tweaks |
| `app.js`     | The calendar/list logic | No |

---

## ✍️ How to update it each month

Open **`events.js`** in any text editor. Copy an existing event block, paste it,
and change the details. That's the whole job.

**A one-time event** (specific date):

```js
{
  title: "Summer Jazz on the Lawn",
  category: "LIVE_MUSIC",
  date: "2026-08-15",          // YYYY-MM-DD
  time: "7:00 PM",
  venue: "Ecton Park",
  description: "An evening of live jazz. Bring a blanket.",
  url: "https://example.com/tickets"
},
```

**A recurring weekly event** (add once, shows every month automatically):

```js
{
  title: "Trivia Night",
  category: "COMMUNITY",
  recurring: "Thursday",       // repeats every Thursday
  time: "7:00 PM",
  venue: "Mirror Twin Brewing",
  description: "Weekly trivia. Teams welcome.",
  url: ""
},
```

**Category** must be one of (this sets the color):
`LIVE_MUSIC`, `FESTIVALS`, `ARTS_CULTURE`, `COMMUNITY`, `COMEDY`, `WORSHIP`

Rules of thumb:
- Keep the quotes `"` and the trailing comma `,` on each line.
- `url` and `description` are optional — leave them as `""` if you don't have them.
- To remove an event, delete its whole `{ ... },` block.

> Tip: Each month, you mainly add new **one-time** events. Recurring weekly events
> only need to be added once — they roll forward to every future month on their own.

---

## 👀 Preview it on your own computer

You need nothing installed except Python (already on every Mac). In Terminal:

```bash
cd ~/Downloads/lexington-events
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser. Press `Ctrl + C` in Terminal to stop.

---

## 🚀 Publishing & updates (GitHub → Netlify)

This site is set up for **continuous deployment**:

- **Repository:** https://github.com/louigene-cpu/lexington-events
- **Live site:** https://lexevents.netlify.app/
- Netlify is linked to the `main` branch. **Any push to `main` deploys automatically** — no build step, no manual upload.

### The update workflow

```bash
cd ~/Downloads/lexington-events
# 1. edit events.js (add next month's events)
git add events.js
git commit -m "Add September 2026 events"
git push
# ...Netlify publishes the update in ~30 seconds.
```

That's the whole loop: **edit → commit → push → live.** (Claude can do these steps for you — just ask.)

> The old manual method — dragging the folder onto Netlify's Deploys tab — still
> works as a fallback, but with Git linked you shouldn't need it.

A custom domain (e.g. `lexingtonevents.com`) can be added in Netlify under
**Domain management** and will serve the same auto-deployed site.

---

## Features

- 📅 **Calendar view** and 🗓️ **List (agenda) view** — toggle any time
- 🔁 **Recurring events** expand automatically onto the right weekdays
- 🎨 **Category color-coding** with click-to-filter chips
- 🌗 **Light / dark mode** (remembers your choice)
- ⬇️ **Add to calendar** (`.ics`) — per event or the whole month
- ◀▶ **Month navigation** — browse past and future months
- 📱 Fully **responsive** (looks good on phones)

No tracking, no cookies, no sign-in. It's just a helpful public resource.
