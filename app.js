/* ============================================================================
   LEXINGTON EVENTS — APP LOGIC  (no build step, plain JavaScript)
   Reads data from events.js (LEX_EVENTS, LEX_CATEGORIES).
   ============================================================================ */

(function () {
  "use strict";

  const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const WEEKDAY_ABBR = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const MONTHS = ["January","February","March","April","May","June","July",
                  "August","September","October","November","December"];

  // ---- Icons (inline SVG) ------------------------------------------------
  const I = {
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>',
  };

  // ---- State -------------------------------------------------------------
  const today = new Date();
  const state = {
    year: today.getFullYear(),
    month: today.getMonth(),          // 0-indexed
    view: "calendar",                 // "calendar" | "list"
    active: new Set(Object.keys(LEX_CATEGORIES)),  // active category filters
  };
  // If the current month has no events but July 2026 does, open there on first load.
  (function seedInitialMonth() {
    const hasThisMonth = occurrencesFor(state.year, state.month).length > 0;
    if (!hasThisMonth) {
      const anchor = firstEventDate();
      if (anchor) { state.year = anchor.y; state.month = anchor.m; }
    }
  })();

  // ---- Data helpers ------------------------------------------------------
  function parseISO(s) { const [y,m,d] = s.split("-").map(Number); return { y, m: m-1, d }; }

  function firstEventDate() {
    const dated = LEX_EVENTS.filter(e => e.date).map(e => parseISO(e.date))
      .sort((a,b) => (a.y-b.y) || (a.m-b.m) || (a.d-b.d));
    return dated[0] || null;
  }

  /* Return all event OCCURRENCES in a given month as
     { day, event, isRecurring }, expanding recurring weekly events. */
  function occurrencesFor(year, month) {
    const out = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (const ev of LEX_EVENTS) {
      if (ev.date) {
        const p = parseISO(ev.date);
        if (p.y === year && p.m === month) out.push({ day: p.d, event: ev, isRecurring: false, isMulti: false });
      } else if (ev.startDate && ev.endDate) {
        // Multi-day / week-long: emit one occurrence per in-month day it spans.
        const s = parseISO(ev.startDate), e = parseISO(ev.endDate);
        const sD = new Date(s.y, s.m, s.d), eD = new Date(e.y, e.m, e.d);
        for (let d = 1; d <= daysInMonth; d++) {
          const cur = new Date(year, month, d);
          if (cur >= sD && cur <= eD) out.push({ day: d, event: ev, isRecurring: false, isMulti: true });
        }
      } else if (ev.recurring) {
        const wd = WEEKDAYS.indexOf(ev.recurring);
        if (wd < 0) continue;
        for (let d = 1; d <= daysInMonth; d++) {
          if (new Date(year, month, d).getDay() === wd) out.push({ day: d, event: ev, isRecurring: true, isMulti: false });
        }
      }
    }
    return out;
  }

  // Distinct multi-day events overlapping this month (for the banner), respecting filters.
  function multiDayForMonth(year, month) {
    const seen = new Map();
    for (const occ of occurrencesFor(year, month)) {
      if (!occ.isMulti || !state.active.has(occ.event.category)) continue;
      if (!seen.has(occ.event.title)) seen.set(occ.event.title, occ);
    }
    return [...seen.values()];
  }

  function catOf(key) { return LEX_CATEGORIES[key] || { label: key, color: "#888" }; }

  // Date-range formatting helpers for multi-day events.
  function longRange(sIso, eIso) {
    const s = parseISO(sIso), e = parseISO(eIso);
    const head = `${MONTHS[s.m]} ${s.d}`;
    const tail = s.m === e.m ? `${e.d}, ${e.y}` : `${MONTHS[e.m]} ${e.d}, ${e.y}`;
    return `${head} – ${tail}`;
  }
  function shortRange(sIso, eIso) {
    const s = parseISO(sIso), e = parseISO(eIso);
    const head = `${MONTHS[s.m].slice(0, 3)} ${s.d}`;
    const tail = s.m === e.m ? `${e.d}` : `${MONTHS[e.m].slice(0, 3)} ${e.d}`;
    return `${head}–${tail}`;
  }

  function filteredByDay(year, month, collapseMulti) {
    const map = new Map();  // day -> [occ]
    const multiSeen = new Set();
    for (const occ of occurrencesFor(year, month)) {
      if (!state.active.has(occ.event.category)) continue;
      // In list view, show a week-long event once (on its first in-month day), not every day.
      if (occ.isMulti && collapseMulti) {
        if (multiSeen.has(occ.event.title)) continue;
        multiSeen.add(occ.event.title);
      }
      if (!map.has(occ.day)) map.set(occ.day, []);
      map.get(occ.day).push(occ);
    }
    // multi-day events first, then alphabetical by title
    for (const arr of map.values()) {
      arr.sort((a,b) => (b.isMulti - a.isMulti) || a.event.title.localeCompare(b.event.title));
    }
    return map;
  }

  function totalVisible(year, month) {
    let n = 0; const seenMulti = new Set();
    for (const occ of occurrencesFor(year, month)) {
      if (!state.active.has(occ.event.category)) continue;
      if (occ.isMulti) { if (!seenMulti.has(occ.event.title)) { seenMulti.add(occ.event.title); n++; } }
      else n++;
    }
    return n;
  }

  // ---- Rendering ---------------------------------------------------------
  const el = (sel) => document.querySelector(sel);

  function render() {
    el("#monthTitle").textContent = `${MONTHS[state.month]} ${state.year}`;
    el("#brandTag").textContent = `${MONTHS[state.month]} ${state.year} • Discover Local Culture`;
    const total = totalVisible(state.year, state.month);
    el("#countPill").textContent = `${total} event${total === 1 ? "" : "s"}`;

    el("#btnCal").classList.toggle("active", state.view === "calendar");
    el("#btnList").classList.toggle("active", state.view === "list");

    renderMultiBanner();

    const host = el("#viewHost");
    if (total === 0) { host.innerHTML = emptyState(); return; }
    host.innerHTML = state.view === "calendar" ? renderCalendar() : renderAgenda();
    wireEventClicks();
  }

  // A prominent strip of week-long events happening this month.
  function renderMultiBanner() {
    const host = el("#multiBanner");
    if (!host) return;
    const multi = multiDayForMonth(state.year, state.month);
    if (!multi.length) { host.innerHTML = ""; return; }
    const pills = multi.map(occ => {
      const ev = occ.event, c = catOf(ev.category);
      return `<button class="mb-pill js-multi" style="--cat:${c.color}" data-title="${esc(ev.title)}">
        <span class="mb-dot"></span>
        <span class="mb-name">${esc(ev.title)}</span>
        <span class="mb-range">${esc(shortRange(ev.startDate, ev.endDate))}</span>
      </button>`;
    }).join("");
    host.innerHTML = `<div class="multi-banner">
      <span class="mb-label">${I.cal}<span>This month&rsquo;s week-long events</span></span>
      <div class="mb-pills">${pills}</div>
    </div>`;
    host.querySelectorAll(".js-multi").forEach(b => b.addEventListener("click", () => {
      const ev = LEX_EVENTS.find(e => e.title === b.dataset.title);
      if (ev) openEventModal({ event: ev, isMulti: true, isRecurring: false, day: null });
    }));
  }

  function emptyState() {
    return `<div class="empty-state">
      <div class="big">No events match your filters</div>
      <p>Try turning categories back on, or check another month.</p>
    </div>`;
  }

  function renderCalendar() {
    const byDay = filteredByDay(state.year, state.month);
    const firstDow = new Date(state.year, state.month, 1).getDay();
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const isCurMonth = state.year === today.getFullYear() && state.month === today.getMonth();

    let head = `<div class="cal-head">${WEEKDAY_ABBR.map(d => `<div>${d}</div>`).join("")}</div>`;
    let cells = "";
    for (let i = 0; i < firstDow; i++) cells += `<div class="cell empty"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const list = byDay.get(d) || [];
      const isToday = isCurMonth && d === today.getDate();
      let inner = `<span class="num">${d}</span>`;
      if (list.length) {
        inner += `<div class="evt-list">`;
        // Cap at 4 rows total so every cell stays the same height.
        const MAX_ROWS = 4;
        const overflow = list.length > MAX_ROWS;
        const shown = overflow ? list.slice(0, MAX_ROWS - 1) : list;
        for (const occ of shown) {
          const c = catOf(occ.event.category);
          inner += `<button class="evt js-evt${occ.isMulti ? " evt-multi" : ""}" style="--cat:${c.color}" data-key="${occKey(occ)}" title="${esc(occ.event.title)}">
            <span class="evt-title">${esc(occ.event.title)}</span></button>`;
        }
        if (overflow) {
          inner += `<button class="more js-day" data-day="${d}">+${list.length - shown.length} more</button>`;
        }
        inner += `</div>`;
      }
      cells += `<div class="cell ${isToday ? "today" : ""}">${inner}</div>`;
    }
    return `<div class="calendar">${head}<div class="cal-grid">${cells}</div></div>`;
  }

  function renderAgenda() {
    const byDay = filteredByDay(state.year, state.month, true);
    const days = [...byDay.keys()].sort((a,b) => a - b);
    const isCurMonth = state.year === today.getFullYear() && state.month === today.getMonth();
    let html = `<div class="agenda">`;
    for (const d of days) {
      const dow = WEEKDAYS[new Date(state.year, state.month, d).getDay()];
      const isToday = isCurMonth && d === today.getDate();
      html += `<div class="agenda-day">
        <div class="agenda-date ${isToday ? "is-today" : ""}">
          <div class="dow">${dow.slice(0,3)}</div><div class="dnum">${d}</div>
        </div>
        <div class="agenda-cards">`;
      for (const occ of byDay.get(d)) {
        const c = catOf(occ.event.category);
        const badge = occ.isMulti ? `<span class="badge-multi">Week-long</span>`
                    : occ.isRecurring ? `<span class="badge-recurring">Weekly</span>` : "";
        const meta = occ.isMulti
          ? `<span>${I.cal}${esc(longRange(occ.event.startDate, occ.event.endDate))}</span>
             ${occ.event.venue ? `<span>${I.pin}${esc(occ.event.venue)}</span>` : ""}`
          : `${occ.event.time ? `<span>${I.clock}${esc(occ.event.time)}</span>` : ""}
             ${occ.event.venue ? `<span>${I.pin}${esc(occ.event.venue)}</span>` : ""}`;
        html += `<button class="acard js-evt" style="--cat:${c.color}" data-key="${occKey(occ)}">
          <div class="a-main">
            <div class="a-title">${esc(occ.event.title)}${badge}</div>
            <div class="a-meta">${meta}</div>
          </div>
          <span class="a-cat" style="--cat:${c.color}">${esc(c.label)}</span>
        </button>`;
      }
      html += `</div></div>`;
    }
    return html + `</div>`;
  }

  // ---- Modal -------------------------------------------------------------
  function occKey(occ) { return `${occ.day}::${occ.event.title}`; }

  function findOcc(key) {
    const [dayStr, ...rest] = key.split("::");
    const day = Number(dayStr), title = rest.join("::");
    return occurrencesFor(state.year, state.month).find(o => o.day === day && o.event.title === title);
  }

  function openEventModal(occ) {
    const ev = occ.event, c = catOf(ev.category);
    const isMulti = occ.isMulti && ev.startDate && ev.endDate;
    const dateStr = isMulti
      ? longRange(ev.startDate, ev.endDate)
      : new Date(state.year, state.month, occ.day)
          .toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric", year:"numeric" });
    const dateLbl = isMulti ? "Dates" : "Date";
    const suffix = isMulti ? " • Week-long" : (occ.isRecurring ? " • Weekly" : "");
    const body = `
      <div class="modal-header-wrap">
        <button class="btn icon modal-close js-close">${I.x}</button>
        <div class="modal-top">
          <div class="m-cat" style="--cat:${c.color}; color:${c.color}">${esc(c.label)}${suffix}</div>
          <h3>${esc(ev.title)}</h3>
        </div>
      </div>
      <div class="m-body">
        <div class="m-row">${I.cal}<div><div class="lbl">${dateLbl}</div>${esc(dateStr)}</div></div>
        ${ev.time ? `<div class="m-row">${I.clock}<div><div class="lbl">Time</div>${esc(ev.time)}</div></div>` : ""}
        ${ev.venue ? `<div class="m-row">${I.pin}<div><div class="lbl">Venue</div>${esc(ev.venue)}</div></div>` : ""}
        ${ev.description ? `<div class="m-row">${I.info}<div><div class="lbl">About</div><div class="m-desc">${esc(ev.description)}</div></div></div>` : ""}
        <div class="m-actions">
          <button class="btn primary js-addcal">${I.download} Add to calendar</button>
          ${ev.url ? `<a class="btn" href="${esc(ev.url)}" target="_blank" rel="noopener">${I.link} Event page</a>` : ""}
        </div>
      </div>`;
    showModal(body);
    el(".js-addcal").addEventListener("click", () => downloadICS([occ]));
  }

  function openDayModal(day) {
    const list = (filteredByDay(state.year, state.month).get(day)) || [];
    const dateStr = new Date(state.year, state.month, day)
      .toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric" });
    let cards = `<div class="day-events-list">`;
    for (const occ of list) {
      const c = catOf(occ.event.category);
      cards += `<button class="acard js-evt2" style="--cat:${c.color}" data-key="${occKey(occ)}">
        <div class="a-main">
          <div class="a-title">${esc(occ.event.title)}</div>
          <div class="a-meta">
            ${occ.event.time ? `<span>${I.clock}${esc(occ.event.time)}</span>` : ""}
            ${occ.event.venue ? `<span>${I.pin}${esc(occ.event.venue)}</span>` : ""}
          </div>
        </div>
        <span class="a-cat" style="--cat:${c.color}">${esc(c.label)}</span>
      </button>`;
    }
    cards += `</div>`;
    const body = `
      <div class="modal-header-wrap">
        <button class="btn icon modal-close js-close">${I.x}</button>
        <div class="modal-top">
          <div class="m-cat">${list.length} events</div>
          <h3>${esc(dateStr)}</h3>
        </div>
      </div>
      <div class="m-body">${cards}</div>`;
    showModal(body);
    document.querySelectorAll(".js-evt2").forEach(b =>
      b.addEventListener("click", () => { const o = findOcc(b.dataset.key); if (o) openEventModal(o); }));
  }

  function showModal(html) {
    const ov = el("#overlay");
    el("#modal").innerHTML = html;
    ov.classList.add("open");
    document.body.style.overflow = "hidden";
    el(".js-close").addEventListener("click", closeModal);
  }
  function closeModal() {
    el("#overlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  function wireEventClicks() {
    document.querySelectorAll(".js-evt").forEach(b =>
      b.addEventListener("click", () => { const o = findOcc(b.dataset.key); if (o) openEventModal(o); }));
    document.querySelectorAll(".js-day").forEach(b =>
      b.addEventListener("click", () => openDayModal(Number(b.dataset.day))));
  }

  // ---- iCal export -------------------------------------------------------
  function toICSDate(y, m, d, timeStr) {
    // Parse a start hour from a "6:00 PM" style string; default 12:00.
    let h = 12, min = 0;
    if (timeStr) {
      const mt = timeStr.match(/(\d{1,2}):?(\d{2})?\s*(AM|PM)?/i);
      if (mt) {
        h = Number(mt[1]); min = Number(mt[2] || 0);
        const ap = (mt[3] || "").toUpperCase();
        if (ap === "PM" && h < 12) h += 12;
        if (ap === "AM" && h === 12) h = 0;
      }
    }
    const pad = (n) => String(n).padStart(2, "0");
    return `${y}${pad(m+1)}${pad(d)}T${pad(h)}${pad(min)}00`;
  }

  function downloadICS(occs) {
    const lines = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Lexington Events//EN","CALSCALE:GREGORIAN"];
    const pad = (n) => String(n).padStart(2, "0");
    const seenMulti = new Set();
    for (const occ of occs) {
      const ev = occ.event;
      const isMulti = occ.isMulti && ev.startDate && ev.endDate;
      if (isMulti) {
        if (seenMulti.has(ev.title)) continue;   // one all-day span, not one per day
        seenMulti.add(ev.title);
      }
      lines.push("BEGIN:VEVENT");
      lines.push(`UID:${Math.random().toString(36).slice(2)}@lexevents`);
      if (isMulti) {
        const e = parseISO(ev.endDate);
        const endEx = new Date(e.y, e.m, e.d + 1);  // DTEND is exclusive for all-day events
        lines.push(`DTSTART;VALUE=DATE:${ev.startDate.replace(/-/g, "")}`);
        lines.push(`DTEND;VALUE=DATE:${endEx.getFullYear()}${pad(endEx.getMonth()+1)}${pad(endEx.getDate())}`);
      } else {
        lines.push(`DTSTART:${toICSDate(state.year, state.month, occ.day, ev.time)}`);
      }
      lines.push(`SUMMARY:${icsEsc(ev.title)}`);
      if (ev.venue) lines.push(`LOCATION:${icsEsc(ev.venue)}`);
      const desc = [ev.description, ev.url].filter(Boolean).join(" ");
      if (desc) lines.push(`DESCRIPTION:${icsEsc(desc)}`);
      lines.push("END:VEVENT");
    }
    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = occs.length === 1
      ? `${occs[0].event.title.replace(/[^a-z0-9]+/gi,"-").toLowerCase()}.ics`
      : `lexington-events-${MONTHS[state.month].toLowerCase()}-${state.year}.ics`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function exportMonth() {
    const occs = occurrencesFor(state.year, state.month).filter(o => state.active.has(o.event.category));
    if (occs.length) downloadICS(occs);
  }

  // ---- Filters UI --------------------------------------------------------
  function renderFilters() {
    const host = el("#filters");
    host.innerHTML = Object.entries(LEX_CATEGORIES).map(([key, c]) =>
      `<button class="chip ${state.active.has(key) ? "on" : ""}" style="--cat:${c.color}" data-cat="${key}">
        <span class="dot"></span>${esc(c.label)}</button>`).join("")
      + `<span class="filter-actions"><button data-act="all">All</button><button data-act="none">Clear</button></span>`;
    host.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
      const k = ch.dataset.cat;
      state.active.has(k) ? state.active.delete(k) : state.active.add(k);
      renderFilters(); render();
    }));
    host.querySelectorAll("[data-act]").forEach(b => b.addEventListener("click", () => {
      if (b.dataset.act === "all") state.active = new Set(Object.keys(LEX_CATEGORIES));
      else state.active = new Set();
      renderFilters(); render();
    }));
  }

  // ---- Theme -------------------------------------------------------------
  function initTheme() {
    const saved = localStorage.getItem("lex-theme");
    const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
    updateThemeBtn();
  }
  function toggleTheme() {
    const dark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lex-theme", dark ? "dark" : "light");
    updateThemeBtn();
  }
  function updateThemeBtn() {
    const dark = document.documentElement.classList.contains("dark");
    el("#btnTheme").innerHTML = dark ? I.sun : I.moon;
  }

  // ---- Utils -------------------------------------------------------------
  function esc(s) { return String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }
  function icsEsc(s) { return String(s).replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n"); }

  // ---- Nav / wiring ------------------------------------------------------
  function changeMonth(delta) {
    let m = state.month + delta, y = state.year;
    if (m < 0) { m = 11; y--; } else if (m > 11) { m = 0; y++; }
    state.month = m; state.year = y;
    render();
  }

  function init() {
    // header buttons
    el("#btnTheme").addEventListener("click", toggleTheme);
    el("#btnExport").addEventListener("click", exportMonth);
    el("#btnPrev").addEventListener("click", () => changeMonth(-1));
    el("#btnNext").addEventListener("click", () => changeMonth(1));
    el("#btnToday").addEventListener("click", () => { state.year = today.getFullYear(); state.month = today.getMonth(); render(); });
    el("#btnCal").addEventListener("click", () => { state.view = "calendar"; render(); });
    el("#btnList").addEventListener("click", () => { state.view = "list"; render(); });
    el("#overlay").addEventListener("click", (e) => { if (e.target.id === "overlay") closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    // static icon injection
    el("#btnPrev").innerHTML = I.prev;
    el("#btnNext").innerHTML = I.next;
    el("#btnExport").innerHTML = I.download + `<span>Export month</span>`;
    el("#btnCal").innerHTML = I.grid + `Calendar`;
    el("#btnList").innerHTML = I.list + `List`;
    el("#btnToday").textContent = "Today";

    initTheme();
    renderFilters();
    render();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
