import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import { WHATSAPP_NUMBER } from "@/lib/products";
import aboutTree from "@/assets/about-tree.jpg.asset.json";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — Imperial Mangoes" },
      { name: "description", content: "A family legacy of growing the finest mangoes Pakistan has to offer — 100% natural, carbide free, handpicked from our own orchard." },
      { property: "og:title", content: "About Us — Imperial Mangoes" },
      { property: "og:description", content: "A family legacy — the finest mangoes Pakistan has to offer." },
    ],
  }),
});

const promises = [
  { title: "Vitamins", copy: "Rich in Vitamin A, C, and E — nature's daily boost." },
  { title: "Minerals", copy: "Iron, potassium, folate and magnesium in every bite." },
  { title: "Antioxidants", copy: "Naturally supports immunity and cellular health." },
  { title: "High-Fiber", copy: "Aids digestion and keeps you feeling great all day." },
];

function About() {
  return (
    <div className="bg-cream min-h-screen">
      <SiteHeader />
      <PageBanner script="Our Heritage" title="About Us" />

      <section className="max-w-4xl mx-auto px-5 md:px-6 py-16 md:py-20 text-center">
        <div className="script text-2xl md:text-4xl">Our Story</div>
        <h2 className="text-3xl md:text-5xl font-semibold text-ink mt-3 md:mt-4 tracking-tight">
          A Family Legacy
        </h2>
        <p className="mt-6 md:mt-8 text-ink leading-relaxed text-sm md:text-base">
          For generations, our family has tended to our orchard with love, patience, and a
          dedication to growing the finest mangoes Pakistan has to offer.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
        {promises.map((p) => (
          <div key={p.title}>
            <div className="w-10 h-[2px] bg-orange mx-auto" />
            <h3 className="mt-4 text-xl md:text-2xl font-semibold text-ink">{p.title}</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.copy}</p>
          </div>
        ))}
      </section>

      <section className="bg-cream-2 py-16 md:py-24 px-5 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <div className="script text-2xl md:text-3xl">Origins</div>
            <h2 className="text-3xl md:text-5xl font-semibold text-ink mt-2 tracking-tight">
              The King of Fruits
            </h2>
            <div className="mt-5 md:mt-6 text-ink leading-relaxed text-sm md:text-base space-y-3 md:space-y-4">
              <p>Known as the King of Fruits, mangoes are a tropical fruit that originated in South East Asia around 5,000 years ago.</p>
              <p>Pakistan is considered the Kingdom of Mangoes and is the 5th largest mango producer in the world.</p>
              <p>Our mangoes are world renowned and unsurpassable in freshness, quality, and flavour. We bring you the finest mangoes exclusively handpicked from our family orchard.</p>
              <p>With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan.</p>
              <p>Each mango is carefully handpicked and packed with love and care, ensuring that there is no compromise on quality.</p>
              <p>Our premium mangoes are rich in vitamins, minerals and antioxidants — 100% natural and mature carbide free.</p>
            </div>
          </div>
          <img src={aboutTree.url} alt="Fresh mangoes from our orchard" className="w-full aspect-[4/5] object-cover" width={900} height={1100} loading="lazy" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24 grid grid-cols-3 gap-4 md:gap-8 text-center">
        {[
          { n: "5,000+", l: "Years of Heritage" },
          { n: "5th", l: "Largest Producer" },
          { n: "7+", l: "Premium Varieties" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-3xl md:text-5xl lg:text-6xl font-semibold text-orange">{s.n}</div>
            <div className="mt-2 md:mt-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft">{s.l}</div>
          </div>
        ))}
      </section>

      <section className="bg-cream-2 py-16 md:py-20 px-5 md:px-6 text-center">
        <div className="script text-2xl md:text-3xl">Our Orchard</div>
        <h2 className="text-2xl md:text-4xl font-semibold text-ink mt-2 tracking-tight">
          Our Family Orchard
        </h2>
        <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-ink leading-relaxed text-sm md:text-base">
          Each mango is carefully hand-picked with love and care, ensuring that there is no compromise on
          quality. Our premium mangoes are rich in vitamins, minerals and antioxidants and have been
          associated with improved immunity and numerous health benefits. Our mangoes are 100% natural
          and mature carbide free.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-10 inline-block px-8 md:px-10 py-3.5 md:py-4 text-[11px] tracking-[0.25em] uppercase font-semibold text-white bg-orange hover:bg-orange-dark transition"
        >
          Order on WhatsApp
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}