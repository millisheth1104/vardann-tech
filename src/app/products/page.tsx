import type { Metadata } from "next";
import { bestsellerProducts } from "@/lib/content";
import PageHeader from "@/components/ui/PageHeader";
import ProductGrid from "@/components/products/ProductGrid";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Products | Vardann Tech and Engg LLP",
};

export default function ProductsPage() {
  return (
    <>
      <div className="bg-continuous-light">
      <PageHeader
        eyebrow="Our Products"
        title={
          <>
            Precision You Can <span className="text-vblue italic">Measure.</span>
          </>
        }
        subtitle="Calibration tubes, probes, test blocks and welded specimens — manufactured in accordance with applicable ASME, ASTM, ISO or customer-specified requirements, with calibration and dimensional traceability available where applicable. Custom orders typically ship within 3–6 days."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ProductGrid products={bestsellerProducts} />
        </div>
      </section>
      </div>

      <CtaSection />
    </>
  );
}
