import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { products, WHATSAPP_NUMBER } from "@/lib/products";
import welcomeCover from "@/assets/welcome-cover.jpg.asset.json";
import { ImperialCrown } from "@/components/imperial-logo";

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
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width={1820}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
        <SiteHeader overlay />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <ImperialCrown className="w-16 h-16 mb-6" color="var(--color-orange)" />
          <div className="script text-orange text-sm md:text-base">Est. Family Orchard</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-normal text-ink" style={{ letterSpacing: "0.14em" }}>
            IMPERIAL <span className="text-orange">MANGOES</span>
          </h1>
          <span className="mt-6 inline-block h-px w-24 bg-orange" aria-hidden />
          <p className="mt-6 max-w-2xl mx-auto text-ink/85 leading-relaxed italic text-lg" style={{ fontFamily: "var(--font-sans)" }}>
            Handpicked from our own family orchard — the finest, freshest, most flavourful
            mangoes Pakistan has to offer. 100% natural, carbide free, delivered nationwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/shop"
              className="px-10 py-4 label text-cream bg-orange hover:bg-orange-dark transition-colors"
            >
              Shop Mangoes
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 label text-ink border border-orange/60 hover:bg-orange/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Fresh Mangoes / Products */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <SectionHeading
            script="Our Orchard"
            title="Fresh Mangoes"
            subtitle="With over seven premium varieties, harvested May through September — every mango handpicked from our family orchard."
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
            className="inline-block px-10 py-4 label text-cream bg-orange hover:bg-orange-dark transition-colors"
          >
            View All Varieties
          </Link>
        </div>
      </section>

      {/* Our Story split band */}
      <section className="bg-cream-2 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <ImperialCrown className="w-10 h-10 mb-4" color="var(--color-orange)" />
            <div className="script text-xs mb-3">Our Story</div>
            <h2 className="text-3xl md:text-4xl font-normal text-ink">
              Handpicked from our<br />family orchard
            </h2>
            <span className="mt-5 inline-block h-px w-16 bg-orange" aria-hidden />
            <p className="text-ink-soft mt-6 leading-relaxed italic text-lg" style={{ fontFamily: "var(--font-sans)" }}>
              For generations, our family has tended to our orchard along the Indus with love, patience,
              and a dedication to growing the finest mangoes Pakistan has to offer. Every fruit is
              harvested at peak ripeness and packed with care — the way mangoes were meant to taste.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block px-8 py-3 label text-cream bg-orange hover:bg-orange-dark transition-colors"
            >
              Read More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={products[1].img} alt="Sindhri mango" className="w-full aspect-[3/4] object-cover border border-orange/20" width={600} height={800} loading="lazy" />
            <img src={products[6].img} alt="Black Chaunsa mango" className="w-full aspect-[3/4] object-cover mt-10 border border-orange/20" width={600} height={800} loading="lazy" />
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
          <div key={b.title} className="border border-orange/20 p-10">
            <ImperialCrown className="mx-auto w-10 h-10" color="var(--color-orange)" />
            <h3 className="mt-4 text-xl font-normal text-ink">{b.title}</h3>
            <span className="mt-4 inline-block h-px w-10 bg-orange" aria-hidden />
            <p className="mt-4 text-ink-soft leading-relaxed whitespace-pre-line italic" style={{ fontFamily: "var(--font-sans)" }}>{b.copy}</p>
          </div>
        ))}
      </section>

      {/* Quote */}
      <section className="bg-cream-2 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <ImperialCrown className="mx-auto w-12 h-12 mb-6" color="var(--color-orange)" />
          <div className="script text-xs mb-6">Our Promise</div>
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-ink" style={{ fontFamily: "var(--font-sans)" }}>
            “Each mango is carefully handpicked and packed with love and care, ensuring that there is no
            compromise on quality.”
          </blockquote>
          <div className="mt-6 label text-orange">
            — Imperial Mangoes Family
          </div>
        </div>
      </section>

      {/* Shipping CTA */}
      <section className="py-20 px-6 text-center bg-cream">
        <div className="script text-xs">Nationwide Delivery</div>
        <h2 className="text-3xl md:text-4xl font-normal text-ink mt-3">Shipping All Over Pakistan</h2>
        <p className="mt-4 text-ink-soft italic" style={{ fontFamily: "var(--font-sans)" }}>Fresh from our orchard to your doorstep.</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-10 py-4 label text-cream bg-orange hover:bg-orange-dark transition-colors"
        >
          Order on WhatsApp
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}