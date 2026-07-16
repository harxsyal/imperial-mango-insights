import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products, WHATSAPP_NUMBER } from "@/lib/products";
import leaves from "@/assets/mango-leaves.png";
import welcomeCover from "@/assets/welcome-cover.jpg.asset.json";
import varietiesMix from "@/assets/varieties-mix.png.asset.json";
import mangoCrate from "@/assets/mango-crate.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Imperial Mangoes — Fresh & Organic Pakistani Mangoes" },
      { name: "description", content: "Handpicked from our family orchard — the finest Pakistani mangoes. 100% natural, carbide free, shipped nationwide." },
      { property: "og:title", content: "Imperial Mangoes — Kingdom of Pakistan" },
      { property: "og:description", content: "Handpicked, carbide-free Pakistani mangoes shipped nationwide." },
      { property: "og:image", content: welcomeCover.url },
    ],
  }),
});

const NUTRITION_TABS = {
  Macros: [
    { label: "Calories", value: "99" },
    { label: "Protein", value: "1.4 g" },
    { label: "Carbs", value: "24.7 g" },
    { label: "Fat", value: "0.6 g" },
    { label: "Dietary fiber", value: "2.6 g" },
    { label: "Natural sugars", value: "22.5 g" },
  ],
  Vitamins: [
    { label: "Vitamin C", value: "67% RDI" },
    { label: "Folate", value: "18% RDI" },
    { label: "Vitamin B6", value: "11.6% RDI" },
    { label: "Vitamin A", value: "10% RDI" },
    { label: "Vitamin E", value: "9.7% RDI" },
    { label: "Vitamin B5", value: "6.5% RDI" },
    { label: "Vitamin K", value: "6% RDI" },
    { label: "Niacin", value: "7% RDI" },
    { label: "Riboflavin", value: "5% RDI" },
    { label: "Thiamine", value: "4% RDI" },
  ],
  Minerals: [
    { label: "Copper", value: "20% RDI" },
    { label: "Potassium", value: "6% RDI" },
    { label: "Manganese", value: "4.5% RDI" },
    { label: "Magnesium", value: "4% RDI" },
  ],
} as const;

type TabKey = keyof typeof NUTRITION_TABS;

function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("Macros");
  const tabKeys = Object.keys(NUTRITION_TABS) as TabKey[];

  return (
    <div className="bg-cream min-h-screen">
      {/* HERO */}
      <section id="home" className="relative w-full h-[92vh] min-h-[560px] overflow-hidden">
        <img src={welcomeCover.url} alt="Imperial Mangoes orchard" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        <SiteHeader overlay />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="mt-6 max-w-2xl mx-auto text-white text-lg font-medium leading-relaxed drop-shadow">
            Handpicked from our own family orchard — the finest, freshest, most flavourful
            mangoes Pakistan has to offer. 100% natural, carbide free, delivered nationwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a href="#varieties" className="px-10 py-4 text-[11px] font-bold tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition">
              Explore Varieties
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 text-[11px] font-bold tracking-[0.25em] uppercase text-white bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 transition">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="script text-3xl text-orange">Our Story</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mt-2">Kingdom of Mangoes</h2>
          <p className="text-ink mt-6 leading-relaxed font-medium">
            Pakistan is considered the ‘Kingdom of Mangoes’ and is the 5th largest mango producer in the world.
            Our mangoes are world renowned and unsurpassable in freshness, quality, and flavour.
          </p>
          <p className="text-ink-soft mt-4 leading-relaxed">
            Every fruit is handpicked from our family orchard — grown the traditional way, ripened naturally,
            never touched by carbide, and shipped fresh across Pakistan.
          </p>
        </div>
      </section>

      {/* VARIETIES */}
      <section id="varieties" className="px-6 py-20 bg-cream-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">Mango Varieties</h2>
            <p className="mt-4 text-ink font-medium leading-relaxed">
              With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-12">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="script text-3xl text-orange">Health Benefits</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mt-2">Nature's multivitamin</h2>
            <p className="text-ink font-medium leading-relaxed mt-4">
              Mango is rich in vitamins, minerals and antioxidants — supporting immunity, digestion, eye, skin and hair health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "High in antioxidants", copy: "Over a dozen polyphenols including mangiferin, functioning as powerful antioxidants inside your body." },
              { title: "Boosts Immunity", copy: "A good source of folate, several B vitamins, plus vitamins A, C, K and E — all supporting immunity." },
              { title: "Supports Heart Health", copy: "Magnesium, potassium and the antioxidant mangiferin support healthy heart function." },
              { title: "Improves Digestion", copy: "Digestive enzymes, water, dietary fiber and other compounds aid different aspects of digestive health." },
              { title: "Supports Eye Health", copy: "Lutein, zeaxanthin and vitamin A support eye health and help protect from sun damage." },
              { title: "Skin, Hair & Nails", copy: "Vitamin C gives skin elasticity and prevents wrinkling. Vitamin A promotes healthy hair." },
            ].map((b) => (
              <div key={b.title} className="bg-cream-2 p-8 border border-ink/5 hover:border-orange/40 transition">
                <img src={leaves} alt="" aria-hidden className="w-10 h-10 opacity-80" />
                <h3 className="mt-3 text-xl font-bold text-ink tracking-tight">{b.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="bg-cream-2 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <div className="script text-3xl text-orange">Nutritional Value</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mt-2">One cup, packed.</h2>
            <p className="text-ink font-medium leading-relaxed mt-4">
              One cup (165 g) of sliced mango — low in calories, rich in nutrients.
            </p>
          </div>

          {/* Animated tabs */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex bg-white border border-ink/10 p-1 rounded-full shadow-sm">
              {tabKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-6 md:px-8 py-2.5 text-xs md:text-sm uppercase tracking-[0.2em] font-bold rounded-full transition-colors ${
                    activeTab === key ? "text-white" : "text-ink hover:text-orange"
                  }`}
                >
                  {activeTab === key && (
                    <span className="absolute inset-0 bg-orange rounded-full -z-10" />
                  )}
                  <span className="relative z-10">{key}</span>
                </button>
              ))}
            </div>
          </div>

          <div key={activeTab} className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {NUTRITION_TABS[activeTab].map((item) => (
              <div key={item.label} className="p-5 bg-white border border-ink/5 text-center hover:border-orange/40 transition">
                <div className="text-2xl md:text-3xl font-bold text-orange">{item.value}</div>
                <div className="text-xs uppercase tracking-wider text-ink font-semibold mt-2">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <img src={varietiesMix.url} alt="Assorted mango varieties" className="w-full max-h-72 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="relative py-24 px-6 overflow-hidden">
        <img src={mangoCrate.url} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <div className="script text-3xl text-orange">Order Fresh</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Shipping All Over Pakistan</h2>
          <p className="mt-4 text-white font-medium leading-relaxed">
            Message us on WhatsApp with your variety, size and address — we'll pick, pack and ship the same day.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-10 py-4 text-[11px] font-bold tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}