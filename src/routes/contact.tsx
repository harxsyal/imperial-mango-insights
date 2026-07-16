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

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="script text-3xl">Say Hello</div>
        <h2 className="text-4xl md:text-5xl font-extralight text-ink mt-2 tracking-tight">
          Order in a message
        </h2>
        <p className="mt-6 text-ink-soft leading-relaxed">
          The fastest way to order is on WhatsApp — we reply personally, confirm your box size, and
          arrange delivery anywhere in Pakistan.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">
        <div className="bg-cream-2 p-10 text-center">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink-soft">WhatsApp</div>
          <div className="text-2xl font-light text-ink mt-2">{PHONE_DISPLAY}</div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 text-[11px] tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition"
          >
            Message Us
          </a>
        </div>
        <div className="bg-cream-2 p-10 text-center">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink-soft">Phone</div>
          <div className="text-2xl font-light text-ink mt-2">{PHONE_DISPLAY}</div>
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="mt-6 inline-block px-8 py-3 text-[11px] tracking-[0.25em] uppercase text-ink bg-white border border-black/10 hover:border-ink transition"
          >
            Call Now
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">Market Hours</div>
          <div className="text-ink">Mon – Fri · 10am – 9pm</div>
          <div className="text-ink">Saturday · 10am – 6pm</div>
          <div className="text-ink">Sunday · 10am – 3pm</div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">Location</div>
          <div className="text-ink">Mirpur Khas, Sindh</div>
          <div className="text-ink">Pakistan</div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">Follow</div>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Facebook</a>
            <a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Instagram</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}