import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products, whatsappOrderUrl, WHATSAPP_NUMBER } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Imperial Mangoes — King of Fruits · Kingdom of Pakistan" },
      {
        name: "description",
        content:
          "Handpicked from our own family orchard, we bring you the finest, freshest, and most flavourful mangoes Pakistan has to offer — 100% natural, carbide free.",
      },
      { property: "og:title", content: "Imperial Mangoes — Kingdom of Pakistan" },
      { property: "og:description", content: "Handpicked from our family orchard — 100% natural, carbide free." },
    ],
  }),
});

const CREAM = "#FBF5EB";
const ACCENT = "#F5A623";
const INK = "#2B2B2B";

const badges = [
  { icon: "🌿", label: "100% Natural" },
  { icon: "🚫", label: "Carbide Free" },
  { icon: "👐", label: "Hand Picked" },
  { icon: "🏡", label: "Family Orchard" },
  { icon: "🚚", label: "All Pakistan" },
  { icon: "🥭", label: "7+ Varieties" },
];

function Home() {
  const featured = products.slice(0, 4);
  return (
    <div style={{ backgroundColor: CREAM, color: INK, fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 300 }} className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="px-6 pt-16 pb-8 text-center">
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-4xl mb-2">
          King of Fruits · Kingdom of Pakistan
        </div>
        <div className="text-6xl mb-4">🥭</div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-[1.05]">
          Imperial<span style={{ color: ACCENT }}>Mangoes</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-8 text-base opacity-70 leading-relaxed">
          Handpicked from our own family orchard, we bring you the finest, freshest, and most flavourful mangoes Pakistan has to offer — 100% natural, carbide free.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link to="/shop" className="px-10 py-4 text-xs tracking-[0.25em] uppercase text-white transition hover:brightness-110"
            style={{ backgroundColor: ACCENT }}>
            🛒 Shop Now
          </Link>
          <Link to="/about" className="px-10 py-4 text-xs tracking-[0.25em] uppercase transition hover:bg-black hover:text-white"
            style={{ border: `1px solid ${INK}` }}>
            Our Story
          </Link>
        </div>
      </section>

      {/* Trust badges */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {badges.map((b) => (
          <div key={b.label}>
            <div className="text-3xl mb-2">{b.icon}</div>
            <div className="text-xs tracking-[0.15em] uppercase opacity-80">{b.label}</div>
          </div>
        ))}
      </section>

      {/* Products */}
      <section className="px-6 pb-24 text-center">
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-3xl mb-2">
          Handpicked From Our Family Orchard
        </div>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">Our Finest Varieties</h2>
        <p className="mt-4 opacity-70 max-w-xl mx-auto">
          With over 7 different varieties, we take pride in producing some of the best mangoes in Pakistan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-14 px-4">
          {featured.map((p) => (
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
                <span className="opacity-50"> per box · varies by size</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Link to="/shop/$slug" params={{ slug: p.slug }}
                  className="text-[11px] tracking-[0.2em] uppercase pb-1"
                  style={{ borderBottom: `1px solid ${ACCENT}`, color: ACCENT }}>
                  View Details
                </Link>
                <a href={whatsappOrderUrl({ product: p.name, price: p.minPrice, url: `https://imperialmangoes.com/shop/${p.slug}/` })}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.2em] uppercase pb-1"
                  style={{ borderBottom: "1px solid #25D366", color: "#25D366" }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <Link to="/shop" className="inline-block mt-14 text-sm tracking-[0.2em] uppercase pb-1"
          style={{ borderBottom: `1px solid ${INK}` }}>
          View All Varieties →
        </Link>
      </section>

      {/* Heritage */}
      <section className="px-6 py-24 text-center" style={{ backgroundColor: "#F3EBDA" }}>
        <div className="text-4xl mb-2">🌳</div>
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-3xl mb-2">
          Our Heritage
        </div>
        <h2 className="text-3xl md:text-5xl font-light max-w-3xl mx-auto leading-tight">
          Pakistan — The Kingdom of Mangoes
        </h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 opacity-75 leading-relaxed">
          <p>
            Mangoes are a tropical fruit that originated in South East Asia around 5,000 years ago. Pakistan is considered the 'Kingdom of Mangoes' and is the 5th largest mango producer in the world.
          </p>
          <p>
            Our mangoes are world renowned and unsurpassable in freshness, quality, and flavour. We bring you the finest mangoes exclusively handpicked from our own family orchard.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { n: "5th", l: "Largest Producer" },
            { n: "7+", l: "Varieties" },
            { n: "100%", l: "Natural" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl font-light" style={{ color: ACCENT }}>{s.n}</div>
              <div className="text-xs tracking-[0.2em] uppercase mt-1 opacity-70">{s.l}</div>
            </div>
          ))}
        </div>
        <Link to="/about" className="inline-block mt-12 text-xs tracking-[0.25em] uppercase pb-1"
          style={{ borderBottom: `1px solid ${ACCENT}`, color: ACCENT }}>
          Read Our Full Story
        </Link>
      </section>

      {/* Quote */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed">
          “Each mango is carefully handpicked and packed with love and care, ensuring that there is no compromise on quality.”
        </blockquote>
        <div className="mt-6 text-xs tracking-[0.25em] uppercase opacity-60">
          — Imperial Mangoes Family
        </div>
      </section>

      {/* Shipping CTA */}
      <section className="px-6 py-16 text-center" style={{ backgroundColor: INK, color: CREAM }}>
        <div className="text-4xl mb-3">🚚</div>
        <div className="text-2xl font-light">Shipping All Over Pakistan</div>
        <div className="opacity-70 mt-2">Fresh from our orchard to your doorstep</div>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
          className="inline-block mt-8 px-10 py-4 text-xs tracking-[0.25em] uppercase text-white"
          style={{ backgroundColor: "#25D366" }}>
          💬 Order Now · +92 300 10 MANGO
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}