"use client";

import { useState } from "react";
import { allPresenceCountries, originCountry, destinationCountries } from "@/lib/content";
import {
  WORLD_LAND_PATH,
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
  // Bow upward in the northern hemisphere, downward in the southern.
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
  const origin = project(originCountry.lon, originCountry.lat);

  return (
    <div className="relative w-full select-none">
      {/* No overflow-visible: coastlines outside the cropped window should
          be clipped by the viewBox, not spill past the frame. */}
      <svg viewBox={WORLD_MAP_VIEWBOX} className="h-auto w-full" role="img" aria-label="Global presence map">
        <defs>
          <linearGradient id="route" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f8c028" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#f8c028" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#f8c028" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Land mass */}
        <path d={WORLD_LAND_PATH} fill="#dbe6f0" stroke="#c2d4e4" strokeWidth="0.6" />

        {/* Routes from HQ */}
        {destinationCountries.map((c) => (
          <path
            key={c.id}
            d={arcPath(originCountry.lon, originCountry.lat, c.lon, c.lat)}
            fill="none"
            stroke="url(#route)"
            strokeWidth={hovered === c.id ? 2.2 : 1.1}
            strokeLinecap="round"
            className="transition-[stroke-width] duration-300"
          />
        ))}

        {/* Markers */}
        {allPresenceCountries.map((c) => {
          const p = project(c.lon, c.lat);
          const active = hovered === c.id;
          const r = c.isOrigin ? 5 : 3.4;
          return (
            <g
              key={c.id}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-default"
            >
              {/* Generous invisible hit area — the visible dots are tiny */}
              <circle cx={p.x} cy={p.y} r={11} fill="transparent" />
              <circle
                cx={p.x}
                cy={p.y}
                r={active ? r + 5 : r + 3}
                fill="#f8c028"
                opacity={active ? 0.34 : 0.18}
                className="transition-all duration-300"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r={r}
                fill={c.isOrigin ? "#f8c028" : "#0057a4"}
                stroke="#ffffff"
                strokeWidth="1.1"
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
