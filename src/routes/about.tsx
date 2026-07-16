import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WHATSAPP_NUMBER } from "@/lib/products";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "Our Story — Imperial Mangoes" },
      { name: "description", content: "A family legacy of growing the finest mangoes Pakistan has to offer — 100% natural, carbide free, handpicked from our own orchard." },
      { property: "og:title", content: "Our Story — Imperial Mangoes" },
      { property: "og:description", content: "A family legacy — the finest mangoes Pakistan has to offer." },
    ],
  }),
});

const CREAM = "#FBF5EB";
const ACCENT = "#F5A623";
const INK = "#2B2B2B";

const promises = [
  { icon: "🌿", title: "100% Natural", copy: "No artificial ripening agents. Our mangoes ripen naturally on the tree." },
  { icon: "🚫", title: "Carbide Free", copy: "We never use calcium carbide or any chemical ripening agents." },
  { icon: "👐", title: "Hand Picked", copy: "Every single mango is carefully selected by hand for finest quality." },
  { icon: "❤️", title: "Packed with Love", copy: "Each order is packed personally with care for perfect delivery." },
  { icon: "🚚", title: "Nationwide Delivery", copy: "We ship fresh mangoes all over Pakistan." },
  { icon: "🥭", title: "7+ Varieties", copy: "From Anwar Ratol to Black Chaunsa, over seven premium varieties." },
];

function About() {
  return (
    <div style={{ backgroundColor: CREAM, color: INK, fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 300 }} className="min-h-screen">
      <SiteHeader />
      <section className="px-6 pt-16 pb-8 text-center max-w-3xl mx-auto">
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-3xl mb-2">
          Our Heritage Since 5,000 Years Ago
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          Our Story — <em>A Family Legacy</em>
        </h1>
        <p className="mt-6 opacity-70 leading-relaxed">
          For generations, our family has tended to our orchard with love, patience, and a dedication to growing the finest mangoes Pakistan has to offer.
        </p>
      </section>

      <section className="px-6 py-20 max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-10 items-start">
        <div>
          <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-2xl mb-2">
            Origins
          </div>
          <h2 className="text-3xl md:text-4xl font-light">The King of Fruits</h2>
          <div className="mt-6 space-y-4 opacity-80 leading-relaxed">
            <p>Known as the 'King of Fruits' mangoes are a tropical fruit that originated in South East Asia around 5,000 years ago.</p>
            <p>Pakistan is considered the 'Kingdom of Mangoes' and is the 5th largest mango producer in the world.</p>
            <p>Our mangoes are world renowned and unsurpassable in freshness, quality, and flavour.</p>
            <p>We bring you the finest mangoes exclusively handpicked from our own family orchard.</p>
            <p>With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan.</p>
            <p>Each mango is carefully handpicked and packed with love and care, ensuring that there is no compromise on quality.</p>
            <p>Our premium mangoes are rich in vitamins, minerals and antioxidants and have been associated with improved immunity and numerous health benefits.</p>
            <p>Our mangoes are 100% natural and mature carbide free.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-[0.2em] uppercase opacity-70">
            <span>5,000 Years of Heritage</span>
            <span>· 5th Largest Producer</span>
            <span>· World Renowned</span>
          </div>
        </div>
        <div className="text-7xl text-center opacity-60">🥭</div>
      </section>

      <section className="px-6 py-20 text-center" style={{ backgroundColor: "#F3EBDA" }}>
        <div className="text-4xl mb-2">🏡</div>
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-3xl mb-2">
          Our Orchard
        </div>
        <h2 className="text-3xl md:text-5xl font-light">Our Family Orchard</h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-4 opacity-80 leading-relaxed">
          <p>Each mango is carefully hand picked with love and care, ensuring that there is no compromise on quality. With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan.</p>
          <p>Our premium mangoes are rich in vitamins, minerals and antioxidants and have been associated with improved immunity and numerous health benefits.</p>
          <p>Our mangoes are 100% natural and mature carbide free.</p>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-14">Our Promise to You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {promises.map((p) => (
            <div key={p.title}>
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="text-lg tracking-wide mb-2">{p.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{p.copy}</p>
            </div>
          ))}
        </div>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
          className="inline-block mt-14 px-10 py-4 text-xs tracking-[0.25em] uppercase text-white"
          style={{ backgroundColor: "#25D366" }}>
          Order on WhatsApp
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}