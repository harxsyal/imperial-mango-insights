import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import { WHATSAPP_NUMBER } from "@/lib/products";
import banner from "@/assets/mango-banner.jpg";
import { ImperialCrown } from "@/components/imperial-logo";

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

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <ImperialCrown className="mx-auto w-12 h-12" color="var(--color-orange)" />
        <div className="script text-xs mt-4">Our Story</div>
        <h2 className="text-4xl md:text-5xl font-normal text-ink mt-4">
          A Family Legacy
        </h2>
        <span className="mt-6 inline-block h-px w-16 bg-orange" aria-hidden />
        <p className="mt-6 text-ink-soft leading-relaxed italic text-lg" style={{ fontFamily: "var(--font-sans)" }}>
          For generations, our family has tended to our orchard with love, patience, and a
          dedication to growing the finest mangoes Pakistan has to offer.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-center">
        {promises.map((p) => (
          <div key={p.title} className="border border-orange/20 p-8">
            <ImperialCrown className="mx-auto w-10 h-10" color="var(--color-orange)" />
            <h3 className="mt-4 text-xl font-normal text-ink">{p.title}</h3>
            <span className="mt-4 inline-block h-px w-10 bg-orange" aria-hidden />
            <p className="mt-4 text-ink-soft leading-relaxed italic" style={{ fontFamily: "var(--font-sans)" }}>{p.copy}</p>
          </div>
        ))}
      </section>

      <section className="bg-cream-2 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="script text-xs">Origins</div>
            <h2 className="text-4xl md:text-5xl font-normal text-ink mt-3">
              The King of Fruits
            </h2>
            <span className="mt-5 inline-block h-px w-16 bg-orange" aria-hidden />
            <div className="mt-6 text-ink-soft leading-relaxed space-y-4 italic text-lg" style={{ fontFamily: "var(--font-sans)" }}>
              <p>Known as the King of Fruits, mangoes are a tropical fruit that originated in South East Asia around 5,000 years ago.</p>
              <p>Pakistan is considered the Kingdom of Mangoes and is the 5th largest mango producer in the world.</p>
              <p>Our mangoes are world renowned and unsurpassable in freshness, quality, and flavour. We bring you the finest mangoes exclusively handpicked from our family orchard.</p>
              <p>With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan.</p>
              <p>Each mango is carefully handpicked and packed with love and care, ensuring that there is no compromise on quality.</p>
              <p>Our premium mangoes are rich in vitamins, minerals and antioxidants — 100% natural and mature carbide free.</p>
            </div>
          </div>
          <img src={banner} alt="Fresh mangoes from our orchard" className="w-full aspect-[4/5] object-cover border border-orange/25" width={900} height={1100} loading="lazy" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-3 gap-8 text-center">
        {[
          { n: "5,000+", l: "Years of Heritage" },
          { n: "5th", l: "Largest Producer" },
          { n: "7+", l: "Premium Varieties" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-5xl md:text-6xl font-light text-orange" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
            <span className="mt-4 inline-block h-px w-10 bg-orange" aria-hidden />
            <div className="mt-3 label text-ink-soft">{s.l}</div>
          </div>
        ))}
      </section>

      <section className="bg-cream-2 py-20 px-6 text-center">
        <ImperialCrown className="mx-auto w-12 h-12 mb-4" color="var(--color-orange)" />
        <div className="script text-xs">Our Orchard</div>
        <h2 className="text-3xl md:text-4xl font-normal text-ink mt-3">
          Our Family Orchard
        </h2>
        <span className="mt-5 inline-block h-px w-16 bg-orange" aria-hidden />
        <p className="max-w-3xl mx-auto mt-6 text-ink-soft leading-relaxed italic text-lg" style={{ fontFamily: "var(--font-sans)" }}>
          Each mango is carefully hand-picked with love and care, ensuring that there is no compromise on
          quality. Our premium mangoes are rich in vitamins, minerals and antioxidants and have been
          associated with improved immunity and numerous health benefits. Our mangoes are 100% natural
          and mature carbide free.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-10 py-4 label text-cream bg-orange hover:bg-orange-dark transition-colors"
        >
          Order on WhatsApp
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}