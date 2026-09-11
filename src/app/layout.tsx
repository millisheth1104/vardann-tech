import type { Metadata } from "next";
import { DM_Serif_Display, Lato, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import BrochureFloatingButton from "@/components/layout/BrochureFloatingButton";
import "./globals.css";

// Typography system: DM Serif Display for headings, Lato for
// sub-headings/eyebrow labels, Poppins for body copy. Mapped to
// --font-display / --font-heading / --font-sans in globals.css.
//
// The italic is loaded deliberately, not for completeness: the site's
// headings are two-tone, with the accent word set italic in engineering
// blue ("Company <em>Profile.</em>"). Russo One, which this replaced, had
// no italic at all, so that accent was a browser-synthesized slant on
// every page. This face ships a drawn italic.
//
// One 400 weight, like Russo One before it — `font-bold` on a display
// heading would be synthesized, which `.font-display` in globals.css
// blocks.
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vardann Tech and Engg LLP | Powering Precision Globally",
  description:
    "Vardann Tech and Engg LLP delivers Non-Destructive Testing, Inspection Services, Metallography, and Precision Manufacturing solutions to clients across India, the Middle East, Africa, and Asia-Pacific.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${lato.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BrochureFloatingButton />
      </body>
    </html>
  );
}
