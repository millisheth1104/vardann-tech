# Build Log

## 2026-09-10 — Correction.docx applied (§1–§11, §14)

**Result:** `npm run build` passes. 14 static pages, 12 routes, no TypeScript
errors, no console errors, no broken images on `/`, `/about`, `/products`,
`/services` or any service page.

### Services restructured 5 → 6
| # | Slug | Title |
|---|------|-------|
| 01 | `advanced-ndt` | Advanced NDT |
| 02 | `conventional-ndt` | Conventional NDT |
| 03 | `specialized-inspection` | Specialized & Third-Party Inspection *(new)* |
| 04 | `metallography-material-analysis` | Metallography and Material Analysis *(renamed from `destructive-testing`)* |
| 05 | `training-certification` | Training & Certification |
| 06 | `manufacturing` | Manufacturing & Products |

- `capabilities[].id` now equals the service slug — this fixed §1, where two
  homepage cards both linked to Destructive Testing.
- `SERVICE_HREFS` lookup removed from `ServiceDeck.tsx`; hrefs derive from the id.
- `ServiceGallery` `LAYOUT` extended to 6 panels (5×2 + 4 + 3 / 3 + 4 / 12).
  Verified in-browser: row 1 = 437+347+256px, row 2 = 256+347px, row 3 = 1072px.
- `ServicePattern` motif keys and the `IconKey` union updated; new
  `inspection` glyph added to `TechIcon`.
- Permanent redirect added in `next.config.ts` for the old URL.

### Content corrections
- **§5 Advanced NDT** — RFT's unverified "up to 12 mm" claim removed; IRIS and
  PECT descriptions replaced with the approved wording.
- **§6 Conventional NDT** — now 9 methods: `UT / UTG` split into two entries,
  **HTTG** (High-Temperature Thickness Gauging) added, `MT`→`MPT`, `PT`→`LPT`
  site-wide.
- **§3/§4** — `specializedInspectionGroups` created (QA/QC, vendor surveillance,
  PMI, OES, ISM, PWHT); `destructiveTestingGroups` renamed
  `metallographyGroups` with Microstructure Analysis added.
- **§7 Training** — "as per ASNT standards" → "aligned with applicable ASNT
  recommended practices", certification described as in-house.
- **§8 Manufacturing** — Nickel Alloys and "Other Customer-Specified Materials"
  added to the materials list; batch-production wording updated to include samples.
- **§9 Products** — 15 products added (24 → 39) covering the required
  categories: calibration tubes, customised UT probes, AOD & COD wedges, probe
  cables & connectors, ASTM E127 FBH set, NAVSHIPS, DC and DSC blocks, MPI test
  block / field indicator / blower, in-situ metallography camera, electrolytic
  polisher-etcher, PWHT control panel and heating accessories. New
  "Metallography" category added to the product grid order. "Our Product" →
  "Our Products". Cards deep-link to `/products#<id>` and each modal carries a
  per-product `mailto:` enquiry link.
- **§10 Standards** — every NABL/NPL manufacturing claim replaced with the
  approved ASME/ASTM/ISO wording; About stat card label is now
  "ASME — Compliant Products"; manufacturing hero badge is
  "ASME · ASTM · ISO Compliant".
- **§11** — "Global Presence" → "Global Supply Footprint", heading and
  supporting copy reworded to describe supply rather than establishment.
- **§14** — short footer description wired through `company.footerDescription`.

### Assets
15 images copied from the client-supplied `IMAGES-20260831T183334Z-1-001/IMAGES/`
set into `public/products/`. Every one was visually inspected before wiring, so
the filename never decided the mapping.

### Not done — deliberately
- **§12 (contact details)** and **§13 (contact form)** — excluded on the user's
  instruction: *"please just dont do anything for contact page"*. The approved
  address, phone numbers, emails and the form requirements (labels, required
  fields, `type=email`, working recipient, validation messages, spam protection,
  privacy consent) are all still outstanding.
- Owner names on the About page remain flagged placeholders in `content.ts`.
- The fal.ai key pasted into chat earlier still needs rotating.
