import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products, whatsappOrderUrl } from "@/lib/products";

export const Route = createFileRoute("/shop/")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Shop Mangoes — Imperial Mangoes" },
      { name: "description", content: "Shop the finest Pakistani mangoes — Sindhri, Anwar Ratol, Chaunsa, Langra and more. Handpicked, carbide-free, delivered all over Pakistan." },
      { property: "og:title", content: "Shop — Imperial Mangoes" },
      { property: "og:description", content: "Handpicked, carbide-free Pakistani mangoes shipped across Pakistan." },
    ],
  }),
});

const CREAM = "#FBF5EB";
const ACCENT = "#F5A623";
const INK = "#2B2B2B";

function Shop() {
  return (
    <div style={{ backgroundColor: CREAM, color: INK, fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 300 }} className="min-h-screen">
      <SiteHeader />
      <section className="px-6 pt-16 pb-8 text-center">
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-3xl mb-2">
          Our Shop
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">The Finest Varieties</h1>
        <p className="opacity-70 mt-4 max-w-xl mx-auto">
          Every mango handpicked from our family orchard. Nationwide delivery via WhatsApp order.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((p) => (
            <div key={p.slug} className="text-left group">
              <Link to="/shop/$slug" params={{ slug: p.slug }} className="block relative overflow-hidden aspect-square" style={{ backgroundColor: "#F3EBDA" }}>
                {p.tag && (
                  <span className="absolute top-4 left-4 z-10 text-[10px] tracking-[0.2em] px-3 py-1 text-white uppercase"
                    style={{ backgroundColor: p.tag === "Best Seller" ? "#E5325B" : ACCENT }}>
                    {p.tag}
                  </span>
                )}
                <img src={p.img} alt={`${p.name} mango`} loading="lazy" width={800} height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <div className="text-xs opacity-60 mt-4">🗓 {p.season}</div>
              <h3 className="mt-1 text-lg tracking-wide">
                <Link to="/shop/$slug" params={{ slug: p.slug }}>{p.name}</Link>
              </h3>
              <p className="text-sm opacity-60 mt-1 leading-relaxed">{p.shortDesc}</p>
              <div className="mt-3 text-sm">
                <span style={{ color: "#E5325B" }}>{p.priceRange}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Link to="/shop/$slug" params={{ slug: p.slug }}
                  className="text-[11px] tracking-[0.2em] uppercase pb-1"
                  style={{ borderBottom: `1px solid ${ACCENT}`, color: ACCENT }}>
                  View Details
                </Link>
                <a href={whatsappOrderUrl({ product: p.name, price: p.minPrice })}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.2em] uppercase pb-1"
                  style={{ borderBottom: "1px solid #25D366", color: "#25D366" }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}