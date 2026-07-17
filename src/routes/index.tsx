import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hand, ShieldCheck, HeartPulse, ArrowDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ContactForm } from "@/components/contact-form";
import { useInView } from "@/hooks/use-in-view";
import { products, WHATSAPP_NUMBER } from "@/lib/products";
import welcomeCover from "@/assets/welcome-cover.jpg";
import varietiesMix from "@/assets/varieties-mix.png";
import mangoCrate from "@/assets/mango-crate.jpg";
import aboutSection from "@/assets/about-section.jpg";
import aboutTree from "@/assets/about-tree.jpg";
import mangoHanging from "@/assets/mango-hanging.jpg";

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
  const { ref: storyRef, inView: storyVisible } = useInView();

  return (
    <div className="bg-cream min-h-screen">
      <SiteHeader overlay />
      {/* HERO */}
      <section id="home" className="relative w-full pt-[72px] md:pt-[92px]">
        <div className="relative w-full aspect-[16/9] min-h-[420px] md:min-h-[520px] overflow-hidden">
          <img
            src={welcomeCover.url}
            alt="Imperial Mangoes orchard at golden hour"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center px-5 md:px-6 pb-8 md:pb-14">
            <p className="max-w-xl mx-auto text-white text-sm md:text-lg font-medium leading-relaxed md:leading-relaxed drop-shadow-lg">
              Handpicked from our own family orchard — the finest, freshest, most flavourful
              mangoes Pakistan has to offer. 100% natural, carbide free, delivered nationwide.
            </p>
            <div className="mt-5 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto">
              <a href="#varieties" className="w-full sm:w-auto px-6 md:px-10 py-3.5 md:py-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition text-center">
                Explore Varieties
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 md:px-10 py-3.5 md:py-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-white bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 transition text-center">
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        ref={storyRef}
        className="relative py-14 md:py-24 px-5 md:px-6 bg-cream overflow-hidden"
      >
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
            storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="script text-2xl md:text-4xl text-orange">Our Story</div>
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-ink mt-1.5">King of Fruits</h2>

          <div className="mt-6 md:mt-10 mx-auto space-y-5 md:space-y-6 text-ink leading-[1.75] md:leading-[1.8] text-[17px] md:text-lg text-balance">
            <p>
              Known as the <span className="font-semibold text-ink">King of Fruits</span>, mangoes are a tropical treasure that originated in Pakistan and South East Asia around 5,000 years ago. We bring you the finest quality mangoes, exclusively hand picked from our own family orchard, and take pride in producing some of the best mangoes in Pakistan across seven distinctive varieties.
            </p>
            <p>
              Each mango is carefully selected with love and care, ensuring that there is no compromise on quality. Our premium mangoes are rich in vitamins, minerals and antioxidants, supporting health benefits and improved immunity — <span className="font-semibold text-ink">100% natural and mature carbide free</span>.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="mt-8 md:mt-14 grid sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
            {[
              { icon: Hand, title: "Hand-picked", copy: "Every mango is selected with care from our family orchard." },
              { icon: ShieldCheck, title: "Carbide free", copy: "100% natural ripening — no chemicals, no shortcuts." },
              { icon: HeartPulse, title: "Health benefits", copy: "Packed with vitamins, minerals and antioxidants." },
            ].map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="bg-cream-2 p-5 md:p-6 border border-ink/5 text-center hover:border-orange/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 mx-auto rounded-full bg-orange/10 flex items-center justify-center">
                  <Icon size={20} className="text-orange" strokeWidth={1.75} />
                </div>
                <h3 className="mt-3 md:mt-4 text-sm md:text-base font-semibold text-ink tracking-tight uppercase">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>

          {/* Explore Varieties CTA */}
          <a
            href="#varieties"
            className="inline-flex items-center gap-3 mt-8 md:mt-14 px-6 md:px-10 py-3 md:py-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition group"
          >
            Explore Varieties
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </section>


      {/* VARIETIES */}
      <section id="varieties" className="px-5 md:px-6 py-12 md:py-14 bg-cream-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto px-1">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink">Mango Varieties</h2>
            <p className="mt-2 md:mt-3 text-ink leading-relaxed text-sm md:text-base">
              With over seven different varieties offered, we take pride in producing some of the best mangoes in Pakistan.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 md:gap-x-6 gap-y-8 md:gap-y-10 mt-8 md:mt-10 justify-items-center">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-cream py-12 md:py-14 px-5 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 px-1">
            <div className="script text-2xl md:text-3xl text-orange">Health Benefits</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mt-1">Nature's multivitamin</h2>
            <p className="text-ink leading-relaxed mt-3 text-sm md:text-base">
              Mango is rich in vitamins, minerals and antioxidants — supporting immunity, digestion, eye, skin and hair health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "High in antioxidants", copy: "Over a dozen polyphenols including mangiferin, functioning as powerful antioxidants inside your body." },
              { title: "Boosts Immunity", copy: "A good source of folate, several B vitamins, plus vitamins A, C, K and E — all supporting immunity." },
              { title: "Supports Heart Health", copy: "Magnesium, potassium and the antioxidant mangiferin support healthy heart function." },
              { title: "Improves Digestion", copy: "Digestive enzymes, water, dietary fiber and other compounds aid different aspects of digestive health." },
              { title: "Supports Eye Health", copy: "Lutein, zeaxanthin and vitamin A support eye health and help protect from sun damage." },
              { title: "Skin, Hair & Nails", copy: "Vitamin C gives skin elasticity and prevents wrinkling. Vitamin A promotes healthy hair." },
            ].map((b) => (
              <div key={b.title} className="bg-cream-2 p-5 md:p-6 border border-ink/5 hover:border-orange/40 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-10 h-[2px] bg-orange mx-auto" />
                <h3 className="mt-4 text-base md:text-lg font-semibold text-ink tracking-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section id="nutrition" className="bg-cream-2 py-12 md:py-14 px-5 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto px-1">
            <div className="script text-2xl md:text-3xl text-orange">Nutritional Value</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink mt-1">One cup, packed.</h2>
            <p className="text-ink leading-relaxed mt-3 text-sm md:text-base">
              One cup (165 g) of sliced mango — low in calories, rich in nutrients.
            </p>
          </div>

          {/* Animated tabs */}
          <div className="mt-6 md:mt-8 flex justify-center px-1">
            <div className="inline-flex bg-white border border-ink/10 p-1 rounded-full shadow-sm">
              {tabKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-4 md:px-8 py-2 md:py-2.5 text-[11px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold rounded-full transition-colors ${
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

          <div key={activeTab} className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {NUTRITION_TABS[activeTab].map((item) => (
              <div key={item.label} className="p-3 md:p-4 bg-white border border-ink/5 text-center hover:border-orange/40 transition">
                <div className="text-xl md:text-3xl font-semibold text-orange">{item.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-ink font-semibold mt-1.5">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10">
            <img
              src={varietiesMix.url}
              alt="Assorted mango varieties"
              className="w-full max-h-48 md:max-h-64 object-cover"
              loading="lazy"
              decoding="async"
              width={1600}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="relative py-12 md:py-16 px-5 md:px-6 overflow-hidden">
        <img
          src={mangoCrate.url}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <div className="script text-2xl md:text-3xl text-orange">Order Fresh</div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-1">Shipping All Over Pakistan</h2>
          <p className="mt-3 text-white leading-relaxed text-sm md:text-base">
            Fill in your details and we'll deliver straight to your door — same-day pick, pack and ship.
          </p>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}