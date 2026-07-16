import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { products, WHATSAPP_NUMBER } from "@/lib/products";
import leaves from "@/assets/mango-leaves.png";
import welcomeCover from "@/assets/welcome-cover.jpg.asset.json";
import aboutSection from "@/assets/about-section.jpg.asset.json";
import aboutTree from "@/assets/about-tree.jpg.asset.json";
import varietiesMix from "@/assets/varieties-mix.png.asset.json";
import mangoHanging from "@/assets/mango-hanging.jpg.asset.json";
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

function Home() {
  return (
    <div className="bg-cream min-h-screen">
      {/* HERO */}
      <section id="home" className="relative w-full h-[92vh] min-h-[560px] overflow-hidden">
        <img src={welcomeCover.url} alt="Imperial Mangoes orchard" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        <SiteHeader overlay />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="mt-6 max-w-2xl mx-auto text-white/85 leading-relaxed">
            Handpicked from our own family orchard — the finest, freshest, most flavourful
            mangoes Pakistan has to offer. 100% natural, carbide free, delivered nationwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a href="#varieties" className="px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition">
              Explore Varieties
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-white bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 transition">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img src={aboutTree.url} alt="Mango tree in our orchard" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div>
            <img src={leaves} alt="" aria-hidden className="w-14 h-14 opacity-80" />
            <div className="script text-3xl mt-1">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-ink mt-3">Kingdom of Mangoes</h2>
            <p className="text-ink-soft mt-6 leading-relaxed">
              Pakistan is considered the ‘Kingdom of Mangoes’ and is the 5th largest mango producer in the world.
              Our mangoes are world renowned and unsurpassable in freshness, quality, and flavour.
            </p>
            <p className="text-ink-soft mt-4 leading-relaxed">
              Every fruit is handpicked from our family orchard — grown the traditional way, ripened naturally,
              never touched by carbide, and shipped fresh across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* VARIETIES */}
      <section id="varieties" className="px-6 py-24 bg-cream-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <SectionHeading
              script="Market"
              title="Mango Varieties"
              subtitle="With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ORCHARD PARALLAX BAND */}
      <section
        className="relative h-[380px] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutSection.url})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6">
          <div className="script text-3xl">From our orchard</div>
          <h3 className="text-3xl md:text-4xl font-extralight tracking-tight mt-2">
            Sun-ripened. Hand-picked. Nothing added.
          </h3>
        </div>
      </section>

      {/* PROMISE TRIO */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-12 text-center">
        {[
          { title: "Organic Farming", copy: "Traditional methods, zero chemicals — the way our grandfathers grew mangoes." },
          { title: "Fresh Products", copy: "Cut this morning, packed this afternoon, on their way to you by evening." },
          { title: "Nationwide Delivery", copy: "Shipped fresh from our orchard to your doorstep across Pakistan." },
        ].map((b) => (
          <div key={b.title}>
            <img src={leaves} alt="" aria-hidden className="mx-auto w-12 h-12 opacity-80" />
            <h3 className="mt-3 text-2xl font-light text-ink tracking-tight">{b.title}</h3>
            <p className="mt-4 text-ink-soft leading-relaxed whitespace-pre-line">{b.copy}</p>
          </div>
        ))}
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-cream-2 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img src={mangoHanging.url} alt="Ripe mangoes on the tree" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            <div>
              <img src={leaves} alt="" aria-hidden className="w-14 h-14 opacity-80" />
              <div className="script text-3xl mt-1">Health Benefits</div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-ink mt-3">Nature's multivitamin</h2>
              <p className="text-ink-soft leading-relaxed mt-6">
                Mango is rich in vitamins, minerals and antioxidants and has been associated with many health benefits,
                including improved immunity, digestive, eye, skin and hair health. Best of all — it's tasty and easy to add to your diet.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 text-center">
            {[
              { title: "High in antioxidants", copy: "Over a dozen polyphenols including mangiferin, functioning as powerful antioxidants inside your body." },
              { title: "Boosts Immunity", copy: "A good source of folate, several B vitamins, plus vitamins A, C, K and E — all supporting immunity." },
              { title: "Supports Heart Health", copy: "Magnesium, potassium and the antioxidant mangiferin support healthy heart function." },
              { title: "Improves Digestion", copy: "Digestive enzymes, water, dietary fiber and other compounds aid different aspects of digestive health." },
              { title: "Supports Eye Health", copy: "Lutein, zeaxanthin and vitamin A support eye health and help protect from sun damage." },
              { title: "Skin, Hair & Nails", copy: "Vitamin C gives skin elasticity and prevents wrinkling. Vitamin A promotes healthy hair." },
            ].map((b) => (
              <div key={b.title}>
                <h3 className="text-2xl font-light text-ink tracking-tight">{b.title}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img src={leaves} alt="" aria-hidden className="w-14 h-14 opacity-80" />
              <div className="script text-3xl mt-1">Nutritional Value</div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-ink mt-3">One cup, packed.</h2>
              <p className="text-ink-soft leading-relaxed mt-6">
                Mangoes are one of the most widely consumed fruits in the world — delicious and nutritious.
                Low in calories, rich in nutrients. One cup (165 g) of sliced mango provides:
              </p>
            </div>
            <img src={varietiesMix.url} alt="Assorted mango varieties" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
          <div className="mt-14 bg-white border border-ink/10 p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {[
                { label: "Calories", value: "99" },
                { label: "Protein", value: "1.4 g" },
                { label: "Carbs", value: "24.7 g" },
                { label: "Fat", value: "0.6 g" },
                { label: "Dietary fiber", value: "2.6 g" },
                { label: "Vitamin C", value: "67% RDI" },
                { label: "Copper", value: "20% RDI" },
                { label: "Folate", value: "18% RDI" },
                { label: "Vitamin B6", value: "11.6% RDI" },
                { label: "Vitamin A", value: "10% RDI" },
                { label: "Vitamin E", value: "9.7% RDI" },
                { label: "Vitamin B5", value: "6.5% RDI" },
                { label: "Vitamin K", value: "6% RDI" },
                { label: "Niacin", value: "7% RDI" },
                { label: "Potassium", value: "6% RDI" },
                { label: "Riboflavin", value: "5% RDI" },
                { label: "Manganese", value: "4.5% RDI" },
                { label: "Thiamine", value: "4% RDI" },
                { label: "Magnesium", value: "4% RDI" },
                { label: "Natural sugars", value: "22.5 g" },
              ].map((item) => (
                <div key={item.label} className="p-4 border border-ink/5 bg-cream-2">
                  <div className="text-2xl md:text-3xl font-light text-ink">{item.value}</div>
                  <div className="text-sm uppercase tracking-wider text-ink-soft mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="relative py-28 px-6 overflow-hidden">
        <img src={mangoCrate.url} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <div className="script text-3xl">Order Fresh</div>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mt-2">Shipping All Over Pakistan</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Message us on WhatsApp with your variety, size and address — we'll pick, pack and ship the same day.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
