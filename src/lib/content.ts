// All copy below is sourced from the Vardann Tech and Engg LLP company
// profile brochure. Keep this the single source of truth for site content.

export const company = {
  name: "Vardann Tech and Engg LLP",
  formerlyKnownAs: "Advanced NDT Services LLP",
  tagline: "Powering Precision Globally",
  established: 2019,
  website: "www.vardanntech.com",
  websiteUrl: "https://www.vardanntech.com",
  /** Used by the per-product enquiry links on the Products page. */
  email: "info@vardanntech.com",
  social: "@vardanntech",
  quote: "Quality means doing it right when no one is looking.",
  about:
    "VARDANN TECH AND ENGG LLP is an independently owned, globally recognized manufacturer and engineering solutions provider specializing in Non-Destructive Testing (NDT), Inspection Services, Metallography, Precision Manufacturing, and Engineering Solutions.",
  /** Homepage intro — the approved profile-aligned copy, which already
   *  carries its own "Established in 2019 … trusted by clients across …"
   *  sentence, so the hero must not append its own region line. */
  homeIntro:
    "VARDANN TECH AND ENGG LLP is an independently owned, globally recognized manufacturer and engineering solutions provider specializing in Non-Destructive Testing (NDT), Inspection Services, Metallography, Precision Manufacturing, and Engineering Solutions. Established in 2019, our products and services are trusted by clients across India, the Middle East, Africa, and the Asia-Pacific region.",
  history:
    "Established in 2019, we are committed to delivering engineering excellence through innovative manufacturing, precision inspection, and ethical engineering practices. Our products and services are trusted by clients across India, the Middle East, Africa, and the Asia-Pacific region.",
  /** About-page rebranding statement, approved wording. */
  rebranding:
    "Formerly known as ADVANCED NDT SERVICES LLP, we rebranded as VARDANN TECH AND ENGG LLP to reflect our broader vision and global commitment to engineering excellence.",
  /** Shorter description for the footer, per the correction doc. */
  footerDescription:
    "VARDANN TECH AND ENGG LLP provides NDT inspection services, metallography, specialized inspection, precision manufacturing and engineered NDT products for clients worldwide.",
  vision:
    "To establish VARDANN TECH as a global symbol of precision, innovation, integrity, and trust in NDT and metallurgical engineering.",
  mission:
    "To innovate with purpose, engineer with precision, and deliver with uncompromising integrity while creating reliable solutions that exceed customer expectations.",
};

/** Approved contact details, taken verbatim from the company profile.
 *  Every entry carries the href the UI should link to — the correction list
 *  asks for all numbers, addresses, URLs and handles to be clickable. */
export const contactDetails = {
  address: {
    lines: [
      "G-32, Saidham Shopping Plaza, P.K. Road,",
      "Saidham, Mulund West,",
      "Mumbai – 400080, Maharashtra, India.",
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "G-32, Saidham Shopping Plaza, P.K. Road, Saidham, Mulund West, Mumbai 400080, Maharashtra, India",
      ),
  },
  emails: [
    { display: "info@vardanntech.com", href: "mailto:info@vardanntech.com" },
    { display: "admin@vardanntech.com", href: "mailto:admin@vardanntech.com" },
  ],
  phones: [
    { label: "Mobile", display: "+91 96640 50993", href: "tel:+919664050993" },
    { label: "Telephone", display: "+91 22 3572 4058", href: "tel:+912235724058" },
    { label: "Office Mobile", display: "+91 96196 36917", href: "tel:+919619636917" },
  ],
  social: [
    { label: "Instagram", display: "@vardanntech", href: "https://www.instagram.com/vardanntech" },
    { label: "YouTube", display: "@vardanntech", href: "https://www.youtube.com/@vardanntech" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export type IconKey =
  | "eddyCurrent"
  | "ultrasonic"
  | "magneticParticle"
  | "radiography"
  | "metallography"
  | "welding"
  | "calibrationTube"
  | "probe"
  | "testBlock"
  | "weldedSpecimen"
  | "transducer"
  | "wedge"
  | "manufacturing"
  | "training"
  | "borescope"
  | "penetrant"
  | "hardness"
  | "spectroscopy"
  | "inspection"
  | "pipeline";

export type ServiceGroup = {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: IconKey;
  items: string[];
};

export const advancedNdt: ServiceGroup = {
  id: "advanced-ndt",
  number: "01",
  title: "Advanced NDT",
  summary:
    "Advanced non-destructive testing methods designed for accurate inspection, defect detection and condition assessment.",
  icon: "eddyCurrent",
  items: [
    "Eddy Current Testing (ECT)",
    "Remote Field Testing (RFT)",
    "Internal Rotary Inspection System (IRIS)",
    "Phased Array Ultrasonic Testing (PAUT)",
    "Time of Flight Diffraction (TOFD)",
    "Remote Visual Inspection / Boroscope",
    "Long Range Ultrasonic Testing (LRUT)",
  ],
};

export const conventionalNdt: ServiceGroup = {
  id: "conventional-ndt",
  number: "02",
  title: "Conventional NDT",
  summary:
    "Proven, field-tested inspection methods for flaw detection, thickness gauging and material verification.",
  icon: "ultrasonic",
  items: [
    "Ultrasonic Flaw Detection",
    "Ultrasonic Thickness Gauging / High Temperature Thickness Gauge",
    "Magnetic Particle Testing",
    "Dye Penetrant Testing",
    "Hardness Testing",
    "Radiography Testing",
    "Coating Thickness Measurement",
  ],
};

export const specializedInspection: ServiceGroup = {
  id: "specialized-inspection",
  number: "03",
  title: "Specialized & Third-Party Inspection",
  summary:
    "QA/QC, vendor surveillance and material verification for critical projects and supply chains.",
  icon: "welding",
  items: [
    "QA/QC Supervision and Welding Inspection",
    "Vendor Surveillance and Commodity Inspection",
    "Positive Material Identification (PMI)",
    "Optical Emission Spectroscopy (OES)",
    "In-Situ Metallography and Microstructure Analysis",
    "Post Weld Heat Treatment",
  ],
};

export const serviceGroups: ServiceGroup[] = [
  advancedNdt,
  conventionalNdt,
  specializedInspection,
];

// Capability categories for the homepage "Explore Our Capabilities"
// stacked-card showcase (Products section 2).
export type Capability = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconKey;
};

// Homepage service deck. `id` is deliberately the service slug so the deck
// links straight to `/services/{id}` — previously these were a separate
// taxonomy ("Inspection Services", "Metallography", "Precision
// Manufacturing") that no longer matched the real service pages, which is
// how two different cards both ended up pointing at Destructive Testing.
export const capabilities: Capability[] = [
  {
    id: "advanced-ndt",
    number: "01",
    title: "Advanced NDT",
    subtitle: "ECT / RFT / IRIS / NFT / PAUT / TOFD / LRUT / PECT / RVI",
    description:
      "Advanced non-destructive testing methods designed for accurate inspection, defect detection and condition assessment.",
    icon: "eddyCurrent",
  },
  {
    id: "conventional-ndt",
    number: "02",
    title: "Conventional NDT",
    subtitle: "UT / UTG / RT / MPT / LPT / Hardness",
    description:
      "Field-proven inspection techniques for flaw detection, thickness gauging and coating verification.",
    icon: "ultrasonic",
  },
  {
    id: "specialized-inspection",
    number: "03",
    title: "Specialized & Third-Party Inspection",
    subtitle: "QA/QC / Vendor Surveillance / PMI / OES / PWHT",
    description:
      "Independent QA/QC supervision, welding inspection and vendor surveillance, with on-site material verification.",
    icon: "inspection",
  },
  {
    id: "metallography-material-analysis",
    number: "04",
    title: "Metallography and Material Analysis",
    subtitle: "PMI / OES / In-Situ Metallography / Microstructure",
    description:
      "Chemical analysis, material verification and metallurgical evaluation, performed on site without damaging the component.",
    icon: "metallography",
  },
  {
    id: "training-certification",
    number: "05",
    title: "Training & Certification",
    subtitle: "NDT Level I, II & III Training",
    description:
      "Professional NDT training aligned with applicable ASNT recommended practices, combining theory with hands-on practicals.",
    icon: "training",
  },
  {
    id: "manufacturing",
    number: "06",
    title: "Manufacturing & Products",
    subtitle: "Calibration Blocks / Tubes / Probes / Welded Specimens",
    description:
      "Precision manufacturing of calibration standards, probes, wedges, welded specimens and engineered NDT products.",
    icon: "manufacturing",
  },
];

// Product catalogue for the "Bestsellers" carousel (Products section 1).
// Images are real product photography supplied by the client
// (public/products/*.png) — every entry below has a matching photo.
export type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  spec: string;
  icon: IconKey;
  image: string;
};

export type CountryData = {
  id: string;
  name: string;
  /** Short label for the on-globe tag chip — falls back to `name`. */
  short?: string;
  /** ISO alpha-2 code, shown as a small badge on the tag chip instead of a
   *  flag emoji — regional-indicator flag glyphs don't render as flags on
   *  Windows/Chrome (they show as bare letters, e.g. "IQ"). */
  code: string;
  flag: string;
  lat: number;
  lon: number;
  capital: string;
  isOrigin?: boolean;
};

// Single source of truth for the served-markets list. Lives here rather
// than inside a globe component because three separate copies had drifted
// apart (GlobalGlobe / DottedWorldMap / HalfGlobe each had their own), so
// the globe and the region pills beside it disagreed about which countries
// the company actually serves.
export const originCountry: CountryData = {
  id: "india",
  name: "India",
  code: "IN",
  flag: "🇮🇳",
  lat: 20.5937,
  lon: 78.9629,
  capital: "New Delhi",
  isOrigin: true,
};

export const destinationCountries: CountryData[] = [
  { id: "kuwait", name: "Kuwait", code: "KW", flag: "🇰🇼", lat: 29.3759, lon: 47.9774, capital: "Kuwait City" },
  { id: "saudi_arabia", name: "Saudi Arabia", code: "SA", flag: "🇸🇦", lat: 23.8859, lon: 45.0792, capital: "Riyadh" },
  { id: "qatar", name: "Qatar", code: "QA", flag: "🇶🇦", lat: 25.3548, lon: 51.1839, capital: "Doha" },
  { id: "iran", name: "Iran", code: "IR", flag: "🇮🇷", lat: 32.4279, lon: 53.688, capital: "Tehran" },
  { id: "iraq", name: "Iraq", code: "IQ", flag: "🇮🇶", lat: 33.2232, lon: 43.6793, capital: "Baghdad" },
  { id: "uae", name: "United Arab Emirates", short: "UAE", code: "AE", flag: "🇦🇪", lat: 23.4241, lon: 53.8478, capital: "Abu Dhabi" },
  { id: "thailand", name: "Thailand", code: "TH", flag: "🇹🇭", lat: 15.87, lon: 100.9925, capital: "Bangkok" },
  { id: "indonesia", name: "Indonesia", code: "ID", flag: "🇮🇩", lat: -0.7893, lon: 113.9213, capital: "Jakarta" },
  { id: "vietnam", name: "Vietnam", code: "VN", flag: "🇻🇳", lat: 14.0583, lon: 108.2772, capital: "Hanoi" },
  { id: "australia", name: "Australia", code: "AU", flag: "🇦🇺", lat: -25.2744, lon: 133.7751, capital: "Canberra" },
  { id: "new_zealand", name: "New Zealand", short: "NZ", code: "NZ", flag: "🇳🇿", lat: -40.9006, lon: 174.886, capital: "Wellington" },
  { id: "ghana", name: "Ghana", code: "GH", flag: "🇬🇭", lat: 7.9465, lon: -1.0232, capital: "Accra" },
  { id: "uganda", name: "Uganda", code: "UG", flag: "🇺🇬", lat: 1.3733, lon: 32.2903, capital: "Kampala" },
  { id: "kenya", name: "Kenya", code: "KE", flag: "🇰🇪", lat: -1.2921, lon: 36.8219, capital: "Nairobi" },
];

export const allPresenceCountries: CountryData[] = [originCountry, ...destinationCountries];

export type Owner = {
  name: string;
  role: string;
  bio: string;
  /** Optional headshot in /public. Falls back to an initials avatar. */
  image?: string;
};

// ⚠️ PLACEHOLDER DATA — REPLACE BEFORE LAUNCH.
// Deliberately written as obvious placeholders rather than realistic
// invented names: this is a real company's public About page, and fake
// leadership names would misrepresent it if they ever went live. Swap in
// the real designated partners (name, role, one-line bio, optional
// headshot path) and this comment can go.
export const owners: Owner[] = [
  {
    name: "Partner Name One",
    role: "Designated Partner",
    bio: "Placeholder bio — a short line on this partner's background, discipline and years in NDT engineering.",
  },
  {
    name: "Partner Name Two",
    role: "Designated Partner",
    bio: "Placeholder bio — a short line on this partner's background, discipline and years in NDT engineering.",
  },
];

export const bestsellerProducts: Product[] = [
  {
    // §9 of the client's correction list: the catalogue's required product
    // categories that the site was missing. Images are the client's own
    // product photography from the supplied IMAGES set.
    id: "calibration-tubes",
    category: "Tube Inspection",
    name: "Calibration Tubes",
    description:
      "Precision-machined tubular reference standards with machined defects for probe and procedure qualification across ECT, RFT, NFT, IRIS, ECA and MFL. Mock-up exchangers and tube bundles are built to order for training and technique validation.",
    spec: "30+ materials · milled, turned or EDM machined · custom orders typically ship in 3–6 days",
    icon: "calibrationTube",
    image: "/products/calibration-tubes.png",
  },
  {
    // The catalogue's "ECT & RFET PROBES" page: straight and flexible tube
    // probes. The card that used to be called "ECT / RFT Probes" was showing
    // AWS angle beam probes, so this is the first time the site actually
    // pictures the tube-probe range.
    id: "ect-rfet-nft-probes",
    category: "Tube Inspection",
    name: "ECT / RFET / NFT Probes",
    description:
      "Straight and flexible ECT, RFT and NFT tube probes supplied with TUD cables, compatible with the leading NDT instruments for field and laboratory tube inspection.",
    spec: "Straight and flexible bodies · TUD cables",
    icon: "probe",
    image: "/products/ect-rfet-nft-probes.png",
  },
  {
    id: "customised-ut-probes",
    category: "Probe Accessories",
    name: "Customised Ultrasonic Probes",
    description:
      "Ultrasonic probes built to a specified frequency, element configuration and connector type for non-standard inspection geometries.",
    spec: "Made to customer frequency and connector specification",
    icon: "transducer",
    image: "/products/customised-ut-probes.png",
  },
  {
    id: "aod-cod-wedges",
    category: "Accessories",
    name: "AOD & COD Wedges",
    description:
      "Angle-on-demand and crack-opening-displacement wedges for angle beam and weld inspection setups.",
    spec: "Supplied as matched sets or individually",
    icon: "wedge",
    image: "/products/aod-cod-wedges.png",
  },
  {
    id: "probe-cables-connectors",
    category: "Accessories",
    name: "Probe Cables & Connectors",
    description:
      "Coaxial probe cables and connectors in the common instrument terminations, supplied to length.",
    spec: "Lemo · BNC · Microdot terminations",
    icon: "probe",
    image: "/products/probe-cables-connectors.png",
  },
  {
    id: "astm-e127-fbh-block-set",
    category: "Calibration Standards",
    name: "ASTM E127 FBH Block Set",
    description:
      "Flat-bottom-hole reference block sets for ultrasonic distance-amplitude and area-amplitude calibration per ASTM E127.",
    spec: "Basic, area-amplitude and distance-amplitude sets",
    icon: "testBlock",
    image: "/products/astm-e127-fbh-block-set.png",
  },
  {
    id: "navships-test-block",
    category: "Calibration Standards",
    name: "NAVSHIPS Test Block",
    description:
      "Multi-hole ultrasonic reference block for sensitivity and resolution checks to the NAVSHIPS specification.",
    spec: "AISI 1018 steel · metric and imperial",
    icon: "testBlock",
    image: "/products/navships-test-block.png",
  },
  {
    id: "dc-test-block",
    category: "Calibration Standards",
    name: "DC Test Block",
    description:
      "Distance-calibration block for angle beam probe index and refracted-angle verification.",
    spec: "ASTM E164 · BRR/AWS X-1 — CS / MS / SS / AL",
    icon: "testBlock",
    image: "/products/dc-test-block.png",
  },
  {
    id: "dsc-test-block",
    category: "Calibration Standards",
    name: "DSC Test Block",
    description:
      "Distance and sensitivity calibration block with engraved angle scale for shear-wave probe setup.",
    spec: "ASTM E164 · AWS 6.16.1B — CS / MS / SS / AL",
    icon: "testBlock",
    image: "/products/dsc-test-block.png",
  },
  {
    id: "fbh-30-resolution-block",
    category: "Calibration Standards",
    name: "30 FBH Resolution Block",
    description:
      "Thirty flat-bottom holes from 0.050 in. to 1.250 in. depth across eight rows, for checking the depth resolution of straight-beam ultrasonic setups.",
    spec: "1018 steel · metric and imperial",
    icon: "testBlock",
    image: "/products/fbh-30-resolution-block.png",
  },
  {
    id: "custom-pipe-blocks",
    category: "Calibration Standards",
    name: "Custom Pipe Blocks",
    description:
      "Pipe-section and welded plate calibration blocks machined to the curvature, wall thickness and reflector set a specific procedure calls for.",
    spec: "Chrome-nickel alloy, aluminium, cast iron, refractory alloy and more",
    icon: "testBlock",
    image: "/products/custom-pipe-blocks.png",
  },
  {
    id: "mpi-test-block",
    category: "Conventional NDT",
    name: "MPI Test Block",
    description:
      "Reference block for verifying magnetic particle system sensitivity and field adequacy before inspection.",
    spec: "Part of the MPI accessory kit",
    icon: "magneticParticle",
    image: "/products/mpi-test-block.png",
  },
  {
    id: "mpi-field-indicator",
    category: "Conventional NDT",
    name: "MPI Field Indicator",
    description:
      "Pie-type field indicators for confirming magnetic field direction and strength at the inspection surface.",
    spec: "Supplied in three sizes",
    icon: "magneticParticle",
    image: "/products/mpi-field-indicator.jpg",
  },
  {
    id: "mpi-blower",
    category: "Conventional NDT",
    name: "MPI Powder Blower",
    description:
      "Hand blower for applying dry magnetic particle powder evenly across the test surface.",
    spec: "Part of the MPI accessory kit",
    icon: "magneticParticle",
    image: "/products/mpi-blower.png",
  },
  {
    id: "insitu-metallography-camera",
    category: "Metallography",
    name: "In-Situ Metallography Camera Unit",
    description:
      "Portable metallurgical microscope and camera head for capturing microstructure directly on the component, without cutting a sample.",
    spec: "On-site microstructure imaging",
    icon: "metallography",
    image: "/products/insitu-metallography-camera.png",
  },
  {
    id: "electrolytic-polisher-etcher",
    category: "Metallography",
    name: "Electrolytic Polisher & Etcher",
    description:
      "Bench unit for preparing a polished and etched surface in the field ahead of in-situ microstructure examination.",
    spec: "Adjustable current and etch time",
    icon: "metallography",
    image: "/products/electrolytic-polisher-etcher.png",
  },
  {
    id: "pwht-control-panel",
    category: "Post Weld Heat Treatment",
    name: "PWHT Control Panel",
    description:
      "Multi-zone heat treatment control panels with programmable ramp, soak and cool cycles and chart recording.",
    spec: "Multi-zone · programmable cycle control",
    icon: "welding",
    image: "/products/pwht-control-panel.png",
  },
  {
    id: "pwht-heating-accessories",
    category: "Post Weld Heat Treatment",
    name: "PWHT Cables & Heating Accessories",
    description:
      "Ceramic pad heating elements, power and extension cables, connectors and insulation for post weld heat treatment set-ups.",
    spec: "Heating pads · cables · connectors · insulation",
    icon: "welding",
    image: "/products/pwht-heating-accessories.png",
  },
  {
    id: "welded-specimen-set",
    category: "Welded Specimens",
    name: "Welded Flawed Specimen Set",
    description:
      "Calibration tube and welded step-wedge plates with carry handles, for PAUT/TOFD/UT procedure qualification and training.",
    spec: "Custom mock-up exchangers and tube bundles on request",
    icon: "weldedSpecimen",
    image: "/products/welded-specimen-set.png",
  },
  {
    id: "angle-beam-probes",
    category: "Probe Accessories",
    name: "Angle Beam Probes",
    description:
      "Precision-machined tubular inspection probes with gold-plated connectors, built for consistent, repeatable readings.",
    spec: "Manufactured per ASME standards — custom orders ship in 3–6 days",
    icon: "probe",
    image: "/products/angle-beam-probes.png",
  },
  {
    id: "calibration-step-block-a",
    category: "Calibration Standards",
    name: "Calibration Step Wedge Block",
    description:
      "5-step 1018 carbon steel wedge block for ultrasonic thickness and sensitivity calibration.",
    spec: "Dimensional traceability available on request",
    icon: "testBlock",
    image: "/products/calibration-step-block-a.png",
  },
  {
    id: "calibration-step-block-b",
    category: "Calibration Standards",
    name: "Calibration Step Wedge Block — 1018 Steel",
    description:
      "Precision-ground 5-step calibration block, CNC/EDM machined to IIW-style tolerances.",
    spec: "Dimensional traceability available on request",
    icon: "testBlock",
    image: "/products/calibration-step-block-b.png",
  },
  {
    id: "iiw-type1-block",
    category: "Calibration Standards",
    name: "IIW Type 1 Calibration Block",
    description:
      "Precision-machined 1018 carbon steel reference block with an angle-beam scale, radius, and reference holes for probe calibration and sensitivity checks.",
    spec: "ISO 2400-1972E · ASTM E164 — CS / MS / SS / AL",
    icon: "testBlock",
    image: "/products/iiw-type1-block.png",
  },
  {
    id: "v1-calibration-block",
    category: "Calibration Standards",
    name: "V1/5 (A2) Test Block",
    description:
      "IIW-style V1 reference block with a graduated angle scale and reference hole, used to verify probe index point, beam angle, and resolution.",
    spec: "ISO 2400 · BS 2704 — CS / MS / SS / AL",
    icon: "testBlock",
    image: "/products/v1-calibration-block.png",
  },
  {
    id: "v2-calibration-block",
    category: "Calibration Standards",
    name: "V2 Test Block",
    description:
      "Compact 12.5mm V2 block in 1018 steel with a graduated 35°–85° angle scale, used to set probe index point, beam angle and range where access is tight.",
    spec: "BS 2704 · ISO 7963 — CS / MS / SS / AL",
    icon: "testBlock",
    image: "/products/v2-calibration-block.png",
  },
  {
    // Listed as its own product at the client's request. Worth knowing for
    // anyone editing this later: the IIW Type 2 and the V2 are the same
    // physical block (BS 2704 A4 / ISO 7963), sold under both names, so the
    // two cards carry different photographs of it rather than one image
    // repeated — they are not an accidental duplicate.
    id: "iiw-type2-block",
    category: "Calibration Standards",
    name: "IIW Type 2 Calibration Block",
    description:
      "The compact IIW Type 2 reference block, with 25mm and 50mm radii and an engraved angle scale, for probe index, refracted-angle and range calibration on thinner sections.",
    spec: "ISO 7963 · BS 2704 (A4) — CS / MS / SS / AL",
    icon: "testBlock",
    image: "/products/iiw-type2-block.png",
  },
  {
    id: "clad-step-block",
    category: "Calibration Standards",
    name: "Stainless-Clad Step Wedge Block",
    description:
      "5-step calibration block with a stainless steel cladding layer over a 1018 carbon steel base, used for thickness and sensitivity calibration on clad or overlay welds.",
    spec: "1018 Carbon Steel base with 1mm stainless steel cladding",
    icon: "testBlock",
    image: "/products/clad-step-block.png",
  },
  {
    id: "radius-gauge-block",
    category: "Calibration Standards",
    name: "Radius Reference Gauge Set",
    description:
      "Set of curved reference gauges spanning multiple radii, used to verify probe contact and calibrate curved-surface inspection setups.",
    spec: "Radii from 2.5 to 20 (as marked on each gauge)",
    icon: "testBlock",
    image: "/products/radius-gauge-block.png",
  },
  {
    id: "cod-wedge-block",
    category: "Calibration Standards",
    name: "COD Reference Wedge Block",
    description:
      "Machined wedge-profile reference block used for crack-opening-displacement (COD) gauge calibration.",
    spec: "Custom sizes available on request",
    icon: "wedge",
    image: "/products/cod-wedge-block.png",
  },
  {
    id: "magnetic-yoke",
    category: "Conventional NDT",
    name: "AC Electromagnetic Yoke",
    description:
      "Vardann-branded electromagnetic yoke with an on/off switch and articulating pole legs for magnetic particle testing on welds and castings.",
    spec: "Compatible with wet and dry magnetic particle media",
    icon: "magneticParticle",
    image: "/products/magnetic-yoke.png",
  },
  {
    id: "pm50-yoke",
    category: "Conventional NDT",
    name: "PM-50 Permanent Magnetic Yoke",
    description:
      "Permanent-magnet yoke with articulating pole shoes and carry handle, used for magnetic particle inspection where an electrical supply isn't available.",
    spec: "Compatible with wet and dry magnetic particle media",
    icon: "magneticParticle",
    image: "/products/pm50-yoke.png",
  },
  {
    id: "gauss-meter",
    category: "Conventional NDT",
    name: "Gauss Meter",
    description:
      "Pocket-style gauss meter used to verify residual magnetic field strength on parts after magnetic particle testing and demagnetization.",
    spec: "Field-parallel pointer scale, 10 gauss range",
    icon: "magneticParticle",
    image: "/products/gauss-meter.png",
  },
  {
    id: "uv-lamp",
    category: "Conventional NDT",
    name: "UV-A Inspection Lamp",
    description:
      "Handheld UV-A black light torch for fluorescent penetrant and fluorescent magnetic particle inspection.",
    spec: "Battery-powered, multi-LED array",
    icon: "penetrant",
    image: "/products/uv-lamp.png",
  },
  {
    id: "tr-probe",
    category: "Probe Accessories",
    name: "TR Probe",
    description:
      "Twin-crystal transmit-receive probe for near-surface flaw detection and thickness gauging.",
    spec: "Straight and flexible ECT-RFT-NFT probes with TUD cables",
    icon: "wedge",
    image: "/products/tr-probe.png",
  },
  {
    id: "normal-beam-probe",
    category: "Probe Accessories",
    name: "Normal Beam Probe",
    description:
      "Single-element straight-beam probe engineered for consistent coupling and stable amplitude response.",
    spec: "Compatible with all major NDT instruments",
    icon: "probe",
    image: "/products/normal-beam-probe.png",
  },
  {
    id: "transducer-cable",
    category: "Accessories",
    name: "Ultrasonic Transducer Cable",
    description:
      "Shielded, low-noise transducer cable with locking connectors for stable, drift-free readings in the field.",
    spec: "Compatible with all major NDT instruments",
    icon: "transducer",
    image: "/products/transducer-cable.png",
  },
  {
    id: "weld-scanner",
    category: "Inspection Equipment",
    name: "Weld Scanner",
    description:
      "Vardann-built wheel scanner for phased array and TOFD weld inspection, with tool-free height adjustment.",
    spec: "Manufactured per ASME standards — custom orders ship in 3–6 days",
    icon: "manufacturing",
    image: "/products/weld-scanner.png",
  },
  {
    id: "cleaning-bulb",
    category: "Accessories",
    name: "Coupling & Cleaning Bulb",
    description:
      "Squeeze-bulb applicator for couplant and surface cleaning ahead of probe contact.",
    spec: "Compatible with all major NDT instruments",
    icon: "wedge",
    image: "/products/cleaning-bulb.png",
  },
  {
    id: "mini-tr-probe",
    category: "Probe Accessories",
    name: "Miniature TR Probe",
    description:
      "Compact twin-crystal transmit-receive probe in a machined stainless housing, for near-surface flaw detection in restricted-access areas.",
    spec: "Twin-crystal, 5x5mm element configuration",
    icon: "wedge",
    image: "/products/mini-tr-probe.png",
  },
  {
    id: "single-element-probe",
    category: "Probe Accessories",
    name: "Single Element Probe",
    description:
      "Knurled single-crystal contact probe for general-purpose ultrasonic thickness and flaw testing.",
    spec: "Compatible with all major NDT instruments",
    icon: "probe",
    image: "/products/single-element-probe.png",
  },
  {
    id: "probe-membranes",
    category: "Accessories",
    name: "Membranes & Probe Shoes",
    description:
      "Set of couplant membranes and contact wedges in round and rectangular profiles, used with immersion and wheel-probe scanning setups.",
    spec: "Custom sizes available on request",
    icon: "transducer",
    image: "/products/probe-membranes.png",
  },
  {
    id: "pie-gauge",
    category: "Inspection Equipment",
    name: "Weld Pie Gauge",
    description:
      "Octagonal weld pie gauge for measuring fillet weld leg length, throat size, and undercut depth on-site.",
    spec: "Made in USA",
    icon: "welding",
    image: "/products/pie-gauge.png",
  },
  {
    id: "pwht-thermocouple",
    category: "Post Weld Heat Treatment",
    name: "K-Type Thermocouple Wire",
    description:
      "K-type thermocouple wire spool used to monitor and control temperature during post weld heat treatment cycles.",
    spec: "K-type, supplied on spool",
    icon: "welding",
    image: "/products/pwht-thermocouple.png",
  },
];

export const industriesServed = [
  "Oil & Gas",
  "Petrochemical & Refining",
  "Power Generation",
  "Marine & Shipping",
  "Pipeline & Storage",
  "Heavy Manufacturing",
];

// ---------------------------------------------------------------------------
// Services experience — /services and its four detail routes.
// Every line below is sourced from the company brochure/catalogue (see
// Company Brouchure.pdf); nothing here is invented copy.
// ---------------------------------------------------------------------------

export type ServiceMethod = {
  code: string;
  name: string;
  scope: string;
  points: string[];
  advantages?: string[];
  icon: IconKey;
};

export type ServiceMethodGroup = {
  title: string;
  intro?: string;
  image: string;
  methods: ServiceMethod[];
};

export type ServiceMeta = {
  id: string;
  number: string;
  slug: string;
  title: string;
  /** Slash-separated method tag line shown under the eyebrow on the hub. */
  eyebrow: string;
  /** Directional editorial headline for the individual page hero. */
  headline: string;
  /** Method-group tag line for the individual page hero. */
  subtitle: string;
  intro: string;
  cardDescriptor: string;
  heroVisualLabel: string;
  /** Real photography extracted from the company brochure (public/services). */
  heroImage: string;
  galleryImage: string;
  ctaImage: string;
  icon: IconKey;
  accent: "vblue" | "gold";
};

export const serviceMeta: ServiceMeta[] = [
  {
    id: "advanced-ndt",
    number: "01",
    slug: "advanced-ndt",
    title: "Advanced NDT",
    eyebrow: "ECT · RFT · IRIS · NFT · PAUT · TOFD · LRUT · PECT · RVI",
    headline: "Seeing what conventional inspection cannot.",
    subtitle:
      "Tube & Tubular Inspection · Advanced Ultrasonic Inspection · Pipeline Inspection",
    intro:
      "We specialize in Eddy Current, Remote Field, Near Field, and IRIS Ultrasonic Testing for both ferrous and non-ferrous tubes used in heat exchangers, boilers, and condensers.",
    cardDescriptor: "Tube inspection, advanced ultrasonic & pipeline screening",
    heroVisualLabel: "PAUT weld scan in progress",
    heroImage: "/services/advanced-ndt-hero.jpg",
    galleryImage: "/services/advanced-ndt-gallery.jpg",
    ctaImage: "/services/advanced-ndt-cta.jpg",
    icon: "eddyCurrent",
    accent: "vblue",
  },
  {
    id: "conventional-ndt",
    number: "02",
    slug: "conventional-ndt",
    title: "Conventional NDT",
    eyebrow: "UT · UTG · HTTG · RT · MPT · LPT · HT · CTM · PWHT",
    headline: "Proven inspection. Precise decisions.",
    subtitle: "Field-Proven Flaw Detection & Material Verification",
    intro:
      "Ultrasonic Testing uses high-frequency sound waves to detect and evaluate internal and surface-connected discontinuities in materials and welds, while Ultrasonic Thickness Gauging measures the remaining wall thickness of pipes, tanks, tubes and components from one accessible surface.",
    cardDescriptor: "Field-proven flaw detection & material verification",
    heroVisualLabel: "UT thickness gauging on a pressure line",
    heroImage: "/services/conventional-ndt-hero.jpg",
    galleryImage: "/services/conventional-ndt-gallery.jpg",
    ctaImage: "/services/conventional-ndt-cta.jpg",
    icon: "ultrasonic",
    accent: "vblue",
  },
  {
    id: "specialized-inspection",
    number: "03",
    slug: "specialized-inspection",
    title: "Specialized & Third-Party Inspection",
    eyebrow: "QA/QC · VENDOR SURVEILLANCE · PMI · OES · PWHT",
    headline: "Independent verification, on site.",
    subtitle: "QA/QC Supervision · Vendor Surveillance · Third-Party Inspection",
    intro:
      "Independent QA/QC supervision, welding inspection and vendor surveillance, supported by on-site material verification and post weld heat treatment.",
    cardDescriptor: "QA/QC supervision, vendor surveillance & material verification",
    heroVisualLabel: "Third-party weld inspection on site",
    heroImage: "/services/conventional-ndt-cta.jpg",
    galleryImage: "/services/group-conventional-methods.jpg",
    ctaImage: "/services/hub-cta.jpg",
    icon: "inspection",
    accent: "vblue",
  },
  {
    // Renamed from "Destructive Testing": PMI, portable XRF and in-situ
    // metallography are not destructive techniques, so grouping them under
    // that heading was inaccurate.
    id: "metallography-material-analysis",
    number: "04",
    slug: "metallography-material-analysis",
    title: "Metallography and Material Analysis",
    eyebrow: "PMI · OES · METALLOGRAPHY · MICROSTRUCTURE",
    headline: "Understand the material.",
    subtitle: "Chemical Analysis · Material Verification · Metallurgical Evaluation",
    intro:
      "Portable XRF and optical emission analysis confirm material chemistry on site, and in-situ metallography examines microstructure directly on the component without damaging it.",
    cardDescriptor: "Chemical analysis, material verification & metallurgical evaluation",
    heroVisualLabel: "In-situ metallography on a weld cross-section",
    heroImage: "/services/destructive-testing-hero.jpg",
    galleryImage: "/services/group-chemical-metallurgical.jpg",
    ctaImage: "/services/destructive-testing-cta.jpg",
    icon: "metallography",
    accent: "gold",
  },
  {
    id: "training-certification",
    number: "05",
    slug: "training-certification",
    title: "Training & Certification",
    eyebrow: "ASNT LEVEL I · II · III",
    headline: "Build the expertise.",
    subtitle: "NDT Level I, II & III Training",
    intro:
      "Professional training and in-house certification in NDT Level I, II and III, aligned with applicable ASNT recommended practices — theory combined with hands-on practical sessions across PAUT, TOFD, ECT, RFT, IRIS, UT, MPT and LPT methods.",
    cardDescriptor: "ASNT-aligned NDT Level I, II & III training",
    heroVisualLabel: "ASNT-aligned NDT training session",
    heroImage: "/services/group-training.jpg",
    galleryImage: "/services/hub-gallery-training.jpg",
    ctaImage: "/services/group-training.jpg",
    icon: "training",
    accent: "gold",
  },
  {
    id: "manufacturing",
    number: "06",
    slug: "manufacturing",
    title: "Manufacturing & Products",
    eyebrow: "CNC · VMC · EDM · WIRE CUT · FABRICATION",
    headline: "Precision engineered to specification.",
    subtitle: "Precision Manufacturing & Fabrication",
    intro:
      "Comprehensive precision manufacturing and fabrication services for industrial, engineering, and NDT applications — from prototype to batch production.",
    cardDescriptor: "Precision fabrication for NDT & industrial applications",
    heroVisualLabel: "CNC turning of a calibration tube blank",
    heroImage: "/services/manufacturing-hero.jpg",
    galleryImage: "/services/manufacturing-gallery.jpg",
    ctaImage: "/services/manufacturing-cta.jpg",
    icon: "manufacturing",
    accent: "vblue",
  },
];

export const advancedNdtGroups: ServiceMethodGroup[] = [
  {
    title: "Tube & Tubular Inspection",
    intro:
      "We specialize in Eddy Current, Remote Field, Near Field, and IRIS Ultrasonic Testing for both ferrous and non-ferrous tubes used in heat exchangers, boilers, and condensers.",
    image: "/services/group-tube-inspection.jpg",
    methods: [
      {
        code: "ECT",
        name: "Eddy Current Testing",
        scope: "Non-ferrous tubing",
        points: ["Wall thinning", "Pitting", "Cracking"],
        advantages: ["Absolute channels", "Differential channels"],
        icon: "eddyCurrent",
      },
      {
        code: "RFT",
        name: "Remote Field Testing",
        scope: "Ferrous tubing",
        // Approved description. The earlier "up to 12mm" figure is gone: the
        // client could not verify it for a specific equipment and probe range.
        points: [
          "Detects and assesses wall thinning and corrosion in carbon-steel and ferritic-alloy tubes",
        ],
        icon: "probe",
      },
      {
        code: "IRIS",
        name: "Internal Rotary Inspection System",
        scope: "All tube materials",
        points: [
          "Precision ultrasonic technique measuring remaining wall thickness",
          "Identifies corrosion or erosion",
        ],
        advantages: ["Detailed B-scan and C-scan imaging"],
        icon: "ultrasonic",
      },
      {
        code: "NFT",
        name: "Near Field Testing",
        scope: "Fin-fan / air cooler tubes",
        points: ["Internal corrosion", "Pitting near tube inlet"],
        advantages: ["Used during plant shutdowns"],
        icon: "probe",
      },
    ],
  },
  {
    title: "Advanced Ultrasonic Inspection",
    image: "/services/group-advanced-ultrasonic.jpg",
    methods: [
      {
        code: "PAUT",
        name: "Phased Array Ultrasonic Testing",
        scope: "Weld & component flaw detection",
        points: ["Multiple beams detect, size and image internal flaws"],
        advantages: ["Real-time imaging", "No radiation hazard"],
        icon: "ultrasonic",
      },
      {
        code: "TOFD",
        name: "Time of Flight Diffraction",
        scope: "New construction & in-service welds",
        points: ["Sizes weld defects using diffracted sound waves"],
        advantages: ["Accurate sizing", "Full weld coverage", "Digital record"],
        icon: "ultrasonic",
      },
    ],
  },
  {
    title: "Pipeline Inspection",
    image: "/services/group-pipeline.jpg",
    methods: [
      {
        code: "LRUT",
        name: "Long Range Ultrasonic Testing",
        scope: "Pipelines, above and below ground",
        points: ["Guided waves screen long pipe sections without direct access"],
        icon: "pipeline",
      },
      {
        code: "PECT",
        name: "Pulsed Eddy Current Testing",
        scope: "Corrosion under insulation (CUI)",
        points: [
          "Measures wall thickness through insulation, coatings or marine growth",
        ],
        advantages: ["Suited to corrosion-under-insulation inspection"],
        icon: "eddyCurrent",
      },
      {
        code: "RVI",
        name: "Remote Visual Inspection",
        scope: "Borescope / Videoscope",
        points: ["Inaccessible areas in engines", "Exchangers", "Turbines", "Welds"],
        icon: "borescope",
      },
    ],
  },
];

export const conventionalNdtGroups: ServiceMethodGroup[] = [
  {
    title: "Conventional Methods",
    intro:
      "Field-proven techniques for thickness measurement, flaw detection and material verification — single-sided access, immediate, actionable results.",
    image: "/services/group-conventional-methods.jpg",
    methods: [
      {
        code: "UT",
        name: "Ultrasonic Testing",
        scope: "Materials & welds",
        points: [
          "High-frequency sound waves detect and evaluate internal and surface-connected discontinuities",
        ],
        advantages: ["Single-sided access", "Immediate results"],
        icon: "ultrasonic",
      },
      {
        // Split from the combined "UT / UTG" entry: thickness gauging is a
        // distinct scope of work, not a footnote to flaw detection.
        code: "UTG",
        name: "Ultrasonic Thickness Gauging",
        scope: "Pipes, vessels, tanks, structural steel",
        points: [
          "Measures the remaining wall thickness of pipes, tanks, tubes and components",
        ],
        advantages: ["Reads from one accessible surface", "Immediate results"],
        icon: "ultrasonic",
      },
      {
        code: "HTTG",
        name: "High-Temperature Thickness Gauging",
        scope: "In-service equipment at elevated temperature",
        points: [
          "Thickness measurement without shutting the asset down",
          "High-temperature probes and couplants",
        ],
        advantages: ["No production interruption", "Live-plant monitoring"],
        icon: "ultrasonic",
      },
      {
        code: "RT",
        name: "Radiographic Testing",
        scope: "Welds, castings, pressure components",
        points: ["X-ray / gamma ray inspection"],
        advantages: ["Volumetric inspection", "Permanent visual record"],
        icon: "radiography",
      },
      {
        code: "MPT",
        name: "Magnetic Particle Testing",
        scope: "Ferromagnetic materials",
        points: ["Magnetic fields + iron particles reveal surface / near-surface cracks"],
        advantages: ["Portable", "Fast on-site inspection"],
        icon: "magneticParticle",
      },
      {
        code: "LPT",
        name: "Liquid Penetrant Testing",
        scope: "Non-porous materials",
        points: ["Detects surface discontinuities"],
        advantages: ["Quick", "Cost-effective"],
        icon: "penetrant",
      },
      {
        code: "HT",
        name: "Hardness Testing",
        scope: "Metal surfaces",
        points: ["Verifies material strength", "Heat-treatment effectiveness"],
        icon: "hardness",
      },
      {
        code: "CTM",
        name: "Coating Thickness Measurement",
        scope: "Dry film thickness",
        points: ["Quality control for corrosion protection"],
        icon: "testBlock",
      },
      {
        code: "PWHT",
        name: "Post Weld Heat Treatment",
        scope: "Pressure vessels, piping, process equipment",
        points: ["Relieves residual stress", "Restores mechanical properties after welding"],
        icon: "welding",
      },
    ],
  },
];

// Renamed from destructiveTestingGroups when the service became
// "Metallography and Material Analysis" — the work is chemical and
// metallurgical characterisation, not destructive mechanical testing.
export const metallographyGroups: ServiceMethodGroup[] = [
  {
    title: "Chemical & Metallurgical Analysis",
    intro:
      "Alloy verification and microstructural evaluation — confirming that the material in the asset is the material the specification called for.",
    image: "/services/group-chemical-metallurgical.jpg",
    methods: [
      {
        code: "PMI",
        name: "Positive Material Identification",
        scope: "Welds, castings, components",
        points: ["Portable XRF analyzers identify alloy composition"],
        advantages: ["Supports NACE material compliance"],
        icon: "spectroscopy",
      },
      {
        code: "OES",
        name: "Optical Emission Spectroscopy",
        scope: "Spark testing",
        points: ["Identifies elements via emitted light spectrum"],
        advantages: ["Prevents material mix-ups"],
        icon: "spectroscopy",
      },
      {
        code: "ISM",
        name: "In-Situ Metallography",
        scope: "Welds, power plants, pipelines",
        points: ["On-site microstructure analysis without damaging the component"],
        icon: "metallography",
      },
      {
        code: "MSA",
        name: "Microstructure Analysis",
        scope: "Weldments, heat-affected zones, base metal",
        points: [
          "Grain structure, phase distribution and inclusion assessment",
          "Evaluates heat-treatment and welding effects on the material",
        ],
        advantages: ["Supports failure investigation", "Confirms metallurgical condition"],
        icon: "metallography",
      },
    ],
  },
];

// Cross-listed service: QA/QC and third-party inspection scopes are sold
// as their own engagement, while PMI / OES / ISM / PWHT also appear under
// their originating disciplines. Duplication here is deliberate — the
// client asked for these methods on both pages.
export const specializedInspectionGroups: ServiceMethodGroup[] = [
  {
    title: "Third-Party & Vendor Inspection",
    intro:
      "Independent oversight on your behalf — at the vendor's works, during fabrication and before despatch.",
    image: "/services/group-chemical-metallurgical.jpg",
    methods: [
      {
        code: "QA/QC",
        name: "QA / QC Inspection Services",
        scope: "Fabrication, welding, pressure equipment",
        points: [
          "Stage-wise inspection against approved drawings and procedures",
          "Documentation review and inspection reporting",
        ],
        advantages: ["Independent verification", "Traceable records"],
        icon: "inspection",
      },
      {
        code: "VS",
        name: "Vendor Surveillance & Expediting",
        scope: "Supplier works and sub-vendors",
        points: [
          "Witness and hold-point attendance at the vendor's premises",
          "Progress monitoring through to final despatch clearance",
        ],
        advantages: ["Reduces rework on delivery", "Schedule visibility"],
        icon: "inspection",
      },
      {
        code: "PMI",
        name: "Positive Material Identification",
        scope: "Incoming material and installed components",
        points: ["Portable XRF alloy verification during inspection scopes"],
        advantages: ["Catches material substitution at source"],
        icon: "spectroscopy",
      },
      {
        code: "OES",
        name: "Optical Emission Spectroscopy",
        scope: "Spark testing",
        points: ["Full elemental composition where XRF is not sufficient"],
        advantages: ["Carbon and light-element analysis"],
        icon: "spectroscopy",
      },
      {
        code: "ISM",
        name: "In-Situ Metallography",
        scope: "Welds, power plants, pipelines",
        points: ["On-site microstructural assessment without removing material"],
        icon: "metallography",
      },
      {
        code: "PWHT",
        name: "Post Weld Heat Treatment",
        scope: "Pressure vessels, piping, process equipment",
        points: [
          "Relieves residual stress",
          "Restores mechanical properties after welding",
        ],
        advantages: ["Calibrated cycle records", "Chart verification"],
        icon: "welding",
      },
    ],
  },
];

// Split out of the metallography groups when Destructive Testing and
// Training & Certification became two separate services — the brochure
// already treated them as two distinct sub-sections.
export const trainingGroups: ServiceMethodGroup[] = [
  {
    title: "Training & Certification",
    intro:
      "NDT Level I, II and III aligned with applicable ASNT recommended practices — theory paired with hands-on practicals across every method we operate in the field.",
    image: "/services/group-training.jpg",
    methods: [
      {
        code: "L1–L3",
        name: "ASNT-Aligned NDT Training",
        scope: "PAUT · TOFD · ECT · RFT · IRIS · UT · MPT · LPT",
        points: ["Theory + hands-on practicals for each method"],
        advantages: [
          "Practical learning",
          "Certification readiness",
          "Flexible schedules",
          "Industry-recognized credential",
        ],
        icon: "training",
      },
    ],
  },
];

export type ManufacturingProduct = {
  name: string;
  description: string;
  specs: string[];
  icon: IconKey;
  image: string;
};

export const manufacturingContent = {
  capabilities: [
    "Precision Welding",
    "CNC Turning",
    "CNC Milling",
    "VMC Machining",
    "EDM",
    "Wire Cut EDM",
    "Conventional Machining",
    "Fabrication & Assembly",
  ],
  materials: [
    "Carbon Steel",
    "Stainless Steel",
    "Alloy Steel",
    "Duplex Stainless Steel",
    "Nickel Alloys",
    "Aluminium",
    "Copper Alloys",
    "Titanium",
    "Engineering Plastics",
    "Other Customer-Specified Materials",
  ],
  services: [
    "Prototype development",
    "Reverse engineering",
    "Job work",
    "Batch production from customer drawings, samples and specifications",
  ],
  products: [
    {
      name: "Welded Flawed Specimens",
      description:
        "Used for NDT training, personnel qualification, and procedure validation — every specimen manufactured to a specified flaw type, size and location.",
      specs: [
        "Carbon Steel · Stainless Steel · Alloy Steel · Duplex Steel",
        "Nickel Alloys · Aluminium · Titanium · Copper Alloys",
        "Fully customizable: material, dimensions, flaw type/size/location, standard",
      ],
      icon: "weldedSpecimen",
      image: "/services/product-welded-specimens.jpg",
    },
    {
      name: "Calibration Tubes & ECT / RFT / NFT Probes",
      description:
        "Precision-machined tubular inspection standards for tube and probe qualification work.",
      specs: [
        "30+ materials",
        "Manufactured in accordance with applicable ASME, ASTM, ISO or customer-specified requirements",
        "3–6 day custom shipping",
      ],
      icon: "calibrationTube",
      image: "/services/product-calibration-tubes-probes.jpg",
    },
    {
      name: "Calibration Blocks",
      description:
        "CNC / EDM machined calibration standards manufactured to IIW and ASME tolerances.",
      specs: [
        "V1/5 (A2) · IIW Type 1 · IIW Type 2 · V1 · V2 · DC · DSC",
        "ASTM E127 FBH block sets · NAVSHIPS test blocks",
        "Step wedges · Custom pipe blocks",
        "Calibration and dimensional traceability available where applicable",
      ],
      icon: "testBlock",
      image: "/services/product-calibration-blocks.jpg",
    },
  ] as ManufacturingProduct[],
};

export const whyVardann = [
  "Complete NDT Solutions under one roof",
  "Custom Manufacturing & Engineering Support",
  "Fast Delivery for Standard Products",
  "Precision CNC & EDM Manufacturing",
  "Technical Expertise & Application Support",
  "Global Supply Capability",
  "Customer-Focused Engineering Solutions",
];

// Every method/discipline code across all six services, deduped — used by
// the marquee strip on the services hub.
export const allMethodCodes = Array.from(
  new Set(serviceMeta.flatMap((s) => s.eyebrow.split(" · "))),
);
