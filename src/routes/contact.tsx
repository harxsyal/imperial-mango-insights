import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Imperial Mangoes" },
      { name: "description", content: "Contact Imperial Mangoes. Order via WhatsApp or phone — shipping fresh mangoes all over Pakistan." },
      { property: "og:title", content: "Contact — Imperial Mangoes" },
      { property: "og:description", content: "Order via WhatsApp — shipping all over Pakistan." },
    ],
  }),
});

function Contact() {
  return (
    <div className="bg-cream min-h-screen">
      <SiteHeader />
      <PageBanner script="Get in Touch" title="Contact" />

      <section className="max-w-4xl mx-auto px-5 md:px-6 py-16 md:py-20 text-center">
        <div className="script text-2xl md:text-3xl">Say Hello</div>
        <h2 className="text-3xl md:text-5xl font-semibold text-ink mt-2 tracking-tight">
          Order in a message
        </h2>
        <p className="mt-4 md:mt-6 text-ink leading-relaxed text-sm md:text-base">
          The fastest way to order is on WhatsApp — we reply personally, confirm your box size, and
          arrange delivery anywhere in Pakistan.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-6 pb-16 md:pb-24 grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-cream-2 p-7 md:p-10 text-center">
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft">WhatsApp</div>
          <div className="text-xl md:text-2xl font-semibold text-ink mt-2">{PHONE_DISPLAY}</div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 md:mt-6 inline-block px-6 md:px-8 py-3 text-[11px] tracking-[0.25em] uppercase font-semibold text-white bg-orange hover:bg-orange-dark transition"
          >
            Message Us
          </a>
        </div>
        <div className="bg-cream-2 p-7 md:p-10 text-center">
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft">Phone</div>
          <div className="text-xl md:text-2xl font-semibold text-ink mt-2">{PHONE_DISPLAY}</div>
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="mt-5 md:mt-6 inline-block px-6 md:px-8 py-3 text-[11px] tracking-[0.25em] uppercase font-semibold text-ink bg-white border border-black/10 hover:border-ink transition"
          >
            Call Now
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-6 pb-16 md:pb-24 grid md:grid-cols-3 gap-8 md:gap-10 text-center">
        <div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">Market Hours</div>
          <div className="text-ink text-sm md:text-base">Mon – Fri · 10am – 9pm</div>
          <div className="text-ink text-sm md:text-base">Saturday · 10am – 6pm</div>
          <div className="text-ink text-sm md:text-base">Sunday · 10am – 3pm</div>
        </div>
        <div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">Location</div>
          <div className="text-ink text-sm md:text-base">Mirpur Khas, Sindh</div>
          <div className="text-ink text-sm md:text-base">Pakistan</div>
        </div>
        <div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">Follow</div>
          <div className="flex justify-center gap-4 text-sm md:text-base">
            <a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Facebook</a>
            <a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Instagram</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}