import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { products, WHATSAPP_NUMBER } from "@/lib/products";
import banner from "@/assets/mango-banner.jpg";
import leaves from "@/assets/mango-leaves.png";
import welcomeCover from "@/assets/welcome-cover.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Imperial Mangoes — Fresh & Organic Pakistani Mangoes" },
      {
        name: "description",
        content:
          "Handpicked from our family orchard, we bring you the finest Pakistani mangoes — 100% natural, carbide free, shipped all over Pakistan.",
      },
      { property: "og:title", content: "Imperial Mangoes — Kingdom of Pakistan" },
      { property: "og:description", content: "Handpicked, carbide-free Pakistani mangoes shipped nationwide." },
    ],
  }),
});

function Home() {
  const featured = products.slice(0, 6);
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero with overlay header */}
      <section className="relative w-full h-[92vh] min-h-[560px] overflow-hidden">
        <img
          src={welcomeCover.url}
          alt="Imperial Mangoes — our family orchard"
          className="absolute inset-0 w-full h-full object-cover"
          width={1820}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        <SiteHeader overlay />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="mt-6 max-w-2xl mx-auto text-white/85 leading-relaxed">
            Handpicked from our own family orchard — the finest, freshest, most flavourful
            mangoes Pakistan has to offer. 100% natural, carbide free, delivered nationwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/shop"
              className="px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition"
            >
              Shop Mangoes
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-white bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mango Varieties / Products */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <SectionHeading
            script="Market"
            title="Mango Varieties"
            subtitle="With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition"
          >
            View All Varieties
          </Link>
        </div>
      </section>

      {/* Our Story split band */}
      <section className="bg-cream-2 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img src={leaves} alt="" aria-hidden className="w-16 h-16 opacity-80" width={128} height={128} />
            <div className="script text-3xl mt-1">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-ink mt-4">
              Our Story
            </h2>
            <p className="text-ink-soft mt-6 leading-relaxed">
              Pakistan is considered the ‘Kingdom of Mangoes’ and is the 5th largest mango producer in the world.
              Our mangoes are world renowned and unsurpassable in freshness, quality, and flavour.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block px-8 py-3 text-[11px] tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition"
            >
              Read More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={products[1].img} alt="Sindhri mango" className="w-full aspect-[3/4] object-cover" width={600} height={800} loading="lazy" />
            <img src={products[6].img} alt="Black Chaunsa mango" className="w-full aspect-[3/4] object-cover mt-10" width={600} height={800} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Info bands */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-12 text-center">
        {[
          { title: "Organic Farming", copy: "Traditional methods, zero chemicals — the way our grandfathers grew mangoes." },
          { title: "Fresh Products", copy: "Cut this morning, packed this afternoon, on their way to you by evening." },
          { title: "Market Hours", copy: "MON – FRI · 10am – 9pm\nSATURDAY · 10am – 6pm\nSUNDAY · 10am – 3pm" },
        ].map((b) => (
          <div key={b.title}>
            <img src={leaves} alt="" aria-hidden className="mx-auto w-12 h-12 opacity-80" width={96} height={96} />
            <h3 className="mt-3 text-2xl font-light text-ink tracking-tight">{b.title}</h3>
            <p className="mt-4 text-ink-soft leading-relaxed whitespace-pre-line">{b.copy}</p>
          </div>
        ))}
      </section>

      {/* Health Benefits */}
      <section className="bg-cream-2 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <img src={leaves} alt="" aria-hidden className="w-16 h-16 opacity-80" width={128} height={128} />
            <div className="script text-3xl -mt-2 mb-3">Health Benefits</div>
            <p className="max-w-3xl mx-auto text-ink-soft leading-relaxed mt-2">
              Mango is rich in vitamins, minerals and antioxidants and has been associated with many health benefits,
              including potential anticancer effects as well as improved immunity, digestive, eye, skin and hair health.
              Best of all, it's tasty and easy to add to your diet!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 text-center">
            {[
              { title: "High in antioxidants", copy: "Mango has over a dozen different type of polyphenols, including mangiferin, which is especially powerful. Polyphenols function as antioxidants inside your body." },
              { title: "Boosts Immunity", copy: "Mango is a good source of folate, several B vitamins, as well as vitamins A, C, K and E — all of which help boost immunity." },
              { title: "Supports Heart Health", copy: "Mango contains magnesium, potassium and the antioxidant mangiferin, which all support healthy heart function." },
              { title: "Improves Digestive Health", copy: "Mango has digestive enzymes, water, dietary fiber and other compounds that aid different aspects of digestive health." },
              { title: "Supports Eye Health", copy: "Mango contains lutein, zeaxanthin and vitamin A — which support eye health. Lutein and zeaxanthin may protect from the sun, while a lack of vitamin A can create vision problems." },
              { title: "Improves Skin Hair & Nails", copy: "Mango contains vitamin C, which gives your skin its elasticity and prevents sagging and wrinkling. It also provides vitamin A, which promotes healthy hair." },
            ].map((b) => (
              <div key={b.title}>
                <h3 className="text-2xl font-light text-ink tracking-tight">{b.title}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <img src={leaves} alt="" aria-hidden className="w-16 h-16 opacity-80" width={128} height={128} />
            <div className="script text-3xl -mt-2 mb-3">Nutritional Value</div>
            <p className="max-w-3xl mx-auto text-ink-soft leading-relaxed mt-2">
              Mangoes are one of the most widely consumed fruits in the world and are not only delicious, but also nutritious.
            </p>
          </div>
          <div className="mt-14 bg-white border border-ink/10 p-8 md:p-12 shadow-sm">
            <p className="text-center text-ink font-light tracking-tight text-lg md:text-xl">
              Mangoes are low in calories but full of nutrients. One cup (165 grams) of sliced mango provides:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 text-center">
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

      {/* Shipping CTA */}
      <section className="py-20 px-6 text-center bg-cream">
        <div className="script text-3xl">Nationwide Delivery</div>
        <h2 className="text-3xl md:text-4xl font-extralight text-ink mt-2">Shipping All Over Pakistan</h2>
        <p className="mt-3 text-ink-soft">Fresh from our orchard to your doorstep.</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-10 py-4 text-[11px] tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition"
        >
          Order on WhatsApp
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}