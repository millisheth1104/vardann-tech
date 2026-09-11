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


## 2026-09-11 - Advanced NDT wording, Conventional NDT UT/UTG, contact page

- **Advanced NDT** - the approved RFT wording had been applied to
  `content.ts` but landed in fragments: "carbon-steel and ferritic-alloy
  tubes" was in `advantages`, which `MethodSection` renders as gold benefit
  pills, so a material scope read as a claim. Moved into the description.
  IRIS and PECT reworded to the approved sentences. The hero code strip and
  homepage capability tags listed 7 of the 9 documented methods - PECT and
  RVI added.
- **Conventional NDT** - the page intro still described UT and UTG as one
  method. Split per the approved text; UT and UTG method rows reworded to
  match.
- **§12 Contact details** - address, both emails, all three numbers, website
  and both social handles added to `content.ts` as `contactDetails`, every
  one rendered as a link (`tel:` in E.164, `mailto:`, Maps, real profile
  URLs). Verified all 9 links in-browser.
- **§13 Contact form** - visible label per field, name/email/message
  required, `type=email`, real `name` attributes, inline validation, success
  state, consent checkbox with the client's wording enforced client- and
  server-side. Spam protection is an off-screen honeypot + 2.5s minimum fill
  time + 5-per-10-minute per-IP throttle.
- **`POST /api/contact`** delivers to info@ and admin@ through Resend over
  plain `fetch` (no new dependency). Set `RESEND_API_KEY` and
  `CONTACT_FROM_EMAIL` to switch delivery on - see `.env.example`. Until
  then the route returns 503 and the form shows the visitor a prefilled
  `mailto:` rather than pretending to have sent.

**Verified in-browser:** empty submit surfaces all four required-field
errors; a complete submit POSTs and returns 503 with the mailto fallback
(expected without a key); honeypot returns 200 and sends nothing; bad input
returns 422 with per-field messages. `npm run build` clean.

**Still outstanding:** the Privacy Policy page. The consent sentence is on
the form, but it is not yet linked - the policy text has to come from the
client rather than be invented for them.

## 2026-09-11 (later) - Products audited against both §9 lists

42 products (was 39). Audited card by card against the required categories
and the calibration block range.

**Three real gaps, now filled:** ECT/RFET/NFT Probes, Custom Pipe Blocks,
30 FBH Resolution Block.

**Three mislabels, now corrected:**
- "ECT / RFT Probes" was showing AWS angle beam ultrasonic probes → renamed
  "Angle Beam Probes" and moved to Probe Accessories; the tube-probe range
  got its own card with the catalogue's own probe photo.
- "V1 Calibration Block" → "V1/5 (A2) Test Block"
- "V2 Calibration Block" → "V2 / IIW Type 2 Test Block" (V2 *is* the IIW
  Type 2 block — one card covers both bullets rather than inventing a second
  product and photo for the same object)
- "Probe Wedges & Membranes" → "Membranes & Probe Shoes"

**Specs upgraded** from bare material to the standards printed in the
catalogue: ISO 2400 · BS 2704 / ISO 2400-1972E · ASTM E164 / BS 2704 · ISO
7963 / ASTM E164 · BRR-AWS X-1 / ASTM E164 · AWS 6.16.1B, each with CS ·
MS · SS · AL material options.

Coverage now: all 12 required categories and all 9 calibration blocks.
