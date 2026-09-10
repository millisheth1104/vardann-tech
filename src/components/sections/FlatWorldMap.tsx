"use client";

import { useEffect, useRef, useState } from "react";
import { allPresenceCountries, originCountry, destinationCountries } from "@/lib/content";
import {
  WORLD_LAND_PATH,
  WORLD_BORDERS_PATH,
  WORLD_MAP_VIEWBOX,
  MAP_LON_MIN,
  MAP_LON_MAX,
  MAP_LAT_MIN,
  MAP_LAT_MAX,
  MAP_W as W,
  MAP_H as H,
} from "@/lib/worldMapPath";

/** Same projection the land path was generated with — bounds come from
 *  that module so markers and coastlines can never disagree. */
function project(lon: number, lat: number) {
  return {
    x: ((lon - MAP_LON_MIN) / (MAP_LON_MAX - MAP_LON_MIN)) * W,
    y: ((MAP_LAT_MAX - lat) / (MAP_LAT_MAX - MAP_LAT_MIN)) * H,
  };
}

/** Arc from origin to destination, bowed toward the nearer pole so routes
 *  don't overlap the land mass or each other. */
function arcPath(fromLon: number, fromLat: number, toLon: number, toLat: number) {
  const a = project(fromLon, fromLat);
  const b = project(toLon, toLat);
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const dir = my < H / 2 ? -1 : 1;
  const lift = Math.min(dist * 0.22, 70);
  return `M${a.x} ${a.y} Q${mx} ${my + dir * lift} ${b.x} ${b.y}`;
}

// Flat alternative to the 3D globe. A sphere can only show ~180° of
// longitude at once, and these markets span 176° (Ghana to New Zealand),
// so the globe can never display them all simultaneously — this can. It
// also ships no WebGL: pure inline SVG, painted on first render.
export default function FlatWorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // One-shot trigger so the entrance plays when the section scrolls into
  // view rather than on page load (it sits well below the fold). The
  // observer only toggles a class — all timing is CSS, and the map renders
  // fully drawn without it (see globals.css).
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setAnimate(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`relative w-full select-none ${animate ? "map-animate" : ""}`}>
      <svg viewBox={WORLD_MAP_VIEWBOX} className="h-auto w-full" role="img" aria-label="Global supply footprint map">
        <defs>
          <linearGradient id="route" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f8c028" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#f8c028" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f8c028" stopOpacity="0.45" />
          </linearGradient>

          {/* Lifts the land off the ocean plane. */}
          <filter id="land-shadow" x="-5%" y="-5%" width="110%" height="118%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0f2338" floodOpacity="0.16" />
          </filter>

          {/* Tighter, darker shadow so the pins sit above the land. */}
          <filter id="pin-shadow" x="-70%" y="-70%" width="240%" height="240%">
            <feDropShadow dx="0" dy="1.6" stdDeviation="1.6" floodColor="#0f2338" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Land mass */}
        <path
          d={WORLD_LAND_PATH}
          fill="#dbe6f0"
          stroke="#c2d4e4"
          strokeWidth="0.6"
          filter="url(#land-shadow)"
        />

        {/* Country outlines over the fill — light enough to read as detail
            rather than compete with the coastline or the routes. */}
        <path
          d={WORLD_BORDERS_PATH}
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.7"
          strokeOpacity="0.85"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Routes from HQ — drawn in on entrance, staggered */}
        {destinationCountries.map((c, i) => (
          <path
            key={c.id}
            className="map-route"
            pathLength={1}
            style={{ animationDelay: `${0.25 + i * 0.075}s` }}
            d={arcPath(originCountry.lon, originCountry.lat, c.lon, c.lat)}
            fill="none"
            stroke="url(#route)"
            strokeWidth={hovered === c.id ? 2.4 : 1.2}
            strokeLinecap="round"
          />
        ))}

        {/* Markers */}
        {allPresenceCountries.map((c, i) => {
          const p = project(c.lon, c.lat);
          const active = hovered === c.id;
          const r = c.isOrigin ? 5 : 3.4;
          // HQ first, then each destination as its route finishes drawing.
          const delay = c.isOrigin ? 0.15 : 0.9 + (i - 1) * 0.06;
          return (
            <g
              key={c.id}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-default"
            >
              {/* Generous invisible hit area — the visible dots are tiny */}
              <circle cx={p.x} cy={p.y} r={11} fill="transparent" />

              {/* Repeating ping, HQ only, so 15 of them don't buzz at once */}
              {c.isOrigin && (
                <circle
                  className="map-halo"
                  cx={p.x}
                  cy={p.y}
                  r={r + 3}
                  fill="none"
                  stroke="#f8c028"
                  strokeWidth="1.4"
                />
              )}

              <circle
                className="map-marker"
                style={{ animationDelay: `${delay}s` }}
                cx={p.x}
                cy={p.y}
                r={active ? r + 5 : r + 3}
                fill="#f8c028"
                opacity={active ? 0.34 : 0.18}
              />
              <circle
                className="map-marker"
                style={{ animationDelay: `${delay}s` }}
                cx={p.x}
                cy={p.y}
                r={r}
                fill={c.isOrigin ? "#f8c028" : "#0057a4"}
                stroke="#ffffff"
                strokeWidth="1.1"
                filter="url(#pin-shadow)"
              />
            </g>
          );
        })}

        {/* Labels — only the hovered one, plus HQ always, so 15 labels
            don't collide on a map this size. */}
        {allPresenceCountries
          .filter((c) => c.isOrigin || hovered === c.id)
          .map((c) => {
            const p = project(c.lon, c.lat);
            const label = `${c.short ?? c.name}${c.isOrigin ? " · HQ" : ""}`;
            const flip = p.x > W * 0.82; // keep labels inside the frame
            return (
              <text
                key={`l-${c.id}`}
                x={flip ? p.x - 9 : p.x + 9}
                y={p.y - 8}
                textAnchor={flip ? "end" : "start"}
                className="fill-navy"
                style={{ fontSize: 13, fontWeight: 700, paintOrder: "stroke" }}
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinejoin="round"
              >
                {label}
              </text>
            );
          })}
      </svg>
    </div>
  );
}
