import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop/")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Shop — Imperial Mangoes" },
      { name: "description", content: "Shop the finest Pakistani mangoes — Sindhri, Anwar Ratol, Chaunsa, Langra and more. Handpicked, carbide-free, delivered nationwide." },
      { property: "og:title", content: "Shop — Imperial Mangoes" },
      { property: "og:description", content: "Handpicked, carbide-free Pakistani mangoes shipped across Pakistan." },
    ],
  }),
});

function Shop() {
  return (
    <div className="bg-cream min-h-screen">
      <SiteHeader />
      <PageBanner script="Market" title="Shop" />

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 md:mb-12">
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft">
            Showing all {products.length} results
          </div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft">
            Default sorting
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-8 gap-y-8 md:gap-y-16">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}