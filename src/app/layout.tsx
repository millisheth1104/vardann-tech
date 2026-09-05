import type { Metadata } from "next";
import { Lato, Poppins, Russo_One } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import "./globals.css";

// Typography system: Russo One for headings (the same face as the logo's
// "VARDANN" wordmark), Lato for sub-headings/eyebrow labels, Poppins for
// body copy. Mapped to --font-display / --font-heading / --font-sans in
// globals.css. Russo One ships a single 400 weight and no italic, so
// `font-bold`/`italic` on a display heading is browser-synthesized.
const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${russoOne.variable} ${lato.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
