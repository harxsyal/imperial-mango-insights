import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/mangoes-hero.jpg";
import sindhri from "@/assets/mango-sindhri.jpg";
import chaunsa from "@/assets/mango-chaunsa.jpg";
import anwar from "@/assets/mango-anwar.jpg";
import langra from "@/assets/mango-langra.jpg";
import leaves from "@/assets/leaves-ornament.png";
import { Search, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const CREAM = "#FBF5EB";
const ACCENT = "#F5A623";
const PINK = "#E5325B";
const INK = "#2B2B2B";

const products = [
  { name: "Sindhri", img: sindhri, price: 45, old: 55, tag: "-18%", desc: "Golden, honey-sweet — the queen of Pakistani mangoes." },
  { name: "Chaunsa", img: chaunsa, price: 55, old: null, tag: null, desc: "Aromatic, fiberless flesh with legendary flavor." },
  { name: "Anwar Ratol", img: anwar, price: 60, old: null, tag: "New", desc: "Small, intensely sweet — an heirloom favorite." },
  { name: "Langra", img: langra, price: 40, old: 50, tag: "-20%", desc: "Firm, tangy-sweet with a distinctive green skin." },
];

const trustBadges = [
  { title: "100% Natural", copy: "Ripened on the tree, never in a chamber." },
  { title: "Carbide Free", copy: "No chemicals. Ever. We test every crate." },
  { title: "Hand Picked", copy: "Selected fruit by fruit at peak ripeness." },
  { title: "Family Orchard", copy: "Four generations in the Sindh mango belt." },
];

function Index() {
  return (
    <div
      style={{ backgroundColor: CREAM, color: INK, fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 300 }}
      className="min-h-screen"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 py-6">
        <a href="#" className="flex items-baseline gap-1 text-2xl tracking-tight">
          <span className="font-light">Imperial</span>
          <span style={{ color: ACCENT }} className="font-medium">Mangoes</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase">
          {["Home", "Varieties", "Orchard", "Shop", "Contact"].map((l, i) => (
            <a key={l} href="#" className="relative hover:opacity-70 transition"
              style={i === 0 ? { borderBottom: `2px solid ${ACCENT}`, paddingBottom: 4 } : undefined}>
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <button aria-label="Cart" className="relative">
            <ShoppingBag size={20} strokeWidth={1.25} />
            <span
              className="absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: PINK }}
            >0</span>
          </button>
          <button aria-label="Search"><Search size={20} strokeWidth={1.25} /></button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-8 text-center relative">
        <img src={leaves} alt="" className="mx-auto w-24 opacity-90" width={512} height={512} />
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-5xl -mt-8 mb-6">
          Kingdom
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto leading-[1.05]">
          Finest Sindhri &amp; Chaunsa Mangoes
        </h1>
        <p className="max-w-xl mx-auto mt-8 text-base opacity-70 leading-relaxed">
          Hand-picked from our family orchards in Sindh, Pakistan. Carbide-free,
          tree-ripened, and shipped the day they're cut — the way mangoes were
          meant to taste.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a href="#shop" className="px-10 py-4 text-xs tracking-[0.25em] uppercase text-white transition hover:brightness-110"
            style={{ backgroundColor: ACCENT }}>
            Shop the Harvest
          </a>
          <a href="#contact" className="px-10 py-4 text-xs tracking-[0.25em] uppercase transition hover:bg-black hover:text-white"
            style={{ border: `1px solid ${INK}` }}>
            Order on WhatsApp
          </a>
        </div>

        {/* Hero image */}
        <img
          src={heroImg}
          alt="Assorted Pakistani mangoes"
          className="mt-16 w-full max-w-6xl mx-auto"
          width={1920}
          height={900}
        />
      </section>

      {/* Trust badges */}
      <section className="px-8 md:px-16 py-24 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {trustBadges.map((b) => (
          <div key={b.title} className="text-center">
            <div className="mx-auto mb-5 w-14 h-14 rounded-full flex items-center justify-center"
              style={{ border: `1px solid ${ACCENT}`, color: ACCENT }}>
              <span style={{ fontFamily: "'Sacramento', cursive" }} className="text-2xl">M</span>
            </div>
            <h3 className="text-sm tracking-[0.2em] uppercase mb-2 font-medium">{b.title}</h3>
            <p className="text-sm opacity-60 leading-relaxed">{b.copy}</p>
          </div>
        ))}
      </section>

      {/* Shop */}
      <section id="shop" className="px-6 pb-24 text-center">
        <img src={leaves} alt="" className="mx-auto w-16 opacity-80" width={512} height={512} />
        <h2 className="text-4xl md:text-5xl font-light tracking-tight -mt-4">Our Mangoes</h2>
        <h4 className="mt-4 text-sm opacity-60 max-w-md mx-auto tracking-wide">
          Four heirloom varieties, harvested May through September.
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16 px-4">
          {products.map((p) => (
            <div key={p.name} className="group text-left">
              <div className="relative overflow-hidden aspect-square" style={{ backgroundColor: "#F3EBDA" }}>
                {p.tag && (
                  <span
                    className="absolute top-4 left-4 z-10 text-[10px] tracking-[0.2em] px-3 py-1 text-white uppercase"
                    style={{ backgroundColor: p.tag === "New" ? ACCENT : PINK }}
                  >
                    {p.tag}
                  </span>
                )}
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-lg font-normal">{p.name}</h3>
              <p className="text-sm opacity-60 mt-1 leading-relaxed">{p.desc}</p>
              <div className="mt-3 flex items-baseline gap-2 text-sm">
                {p.old && <span className="line-through opacity-40">${p.old}</span>}
                <span style={{ color: PINK }} className="font-medium">${p.price}</span>
                <span className="opacity-50">/ box</span>
              </div>
              <button
                className="mt-4 text-[11px] tracking-[0.25em] uppercase pb-1 hover:opacity-70 transition"
                style={{ borderBottom: `1px solid ${INK}` }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Story band */}
      <section className="px-8 md:px-16 py-24 max-w-4xl mx-auto text-center">
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-4xl mb-2">
          Our Story
        </div>
        <h2 className="text-3xl md:text-4xl font-light leading-snug">
          Four generations of mango growers, one obsession — the perfect fruit.
        </h2>
        <p className="mt-8 opacity-70 leading-relaxed">
          Our orchards sit along the banks of the Indus, where the summer sun and
          alluvial soil produce mangoes with a depth of flavor you simply can't
          find in supermarket fruit. We grow, we pick, we pack — and we ship
          direct, so what arrives at your door is exactly what came off the tree.
        </p>
        <a href="#" className="inline-block mt-8 text-[11px] tracking-[0.25em] uppercase pb-1"
          style={{ borderBottom: `1px solid ${ACCENT}`, color: ACCENT }}>
          Read More
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t px-8 md:px-16 py-12 text-sm"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-xl mb-2">
              <span className="font-light">Imperial</span>
              <span style={{ color: ACCENT }} className="font-medium"> Mangoes</span>
            </div>
            <p className="opacity-60 max-w-xs">Kingdom of Pakistan — shipping the King of Fruits since 1962.</p>
          </div>
          <div className="opacity-60">
            <div>hello@imperialmangoes.com</div>
            <div>+92 300 000 0000</div>
            <div>Mirpur Khas, Sindh, Pakistan</div>
          </div>
          <div className="opacity-40 text-xs">© {new Date().getFullYear()} Imperial Mangoes</div>
        </div>
      </footer>
    </div>
  );
}
