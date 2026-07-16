import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Imperial Mangoes" },
      { name: "description", content: "Contact Imperial Mangoes. Order via WhatsApp, phone or social — shipping fresh mangoes all over Pakistan." },
      { property: "og:title", content: "Contact — Imperial Mangoes" },
      { property: "og:description", content: "Order via WhatsApp — shipping all over Pakistan." },
    ],
  }),
});

const CREAM = "#FBF5EB";
const ACCENT = "#F5A623";
const INK = "#2B2B2B";

function Contact() {
  return (
    <div style={{ backgroundColor: CREAM, color: INK, fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 300 }} className="min-h-screen">
      <SiteHeader />
      <section className="px-6 pt-16 pb-8 text-center max-w-3xl mx-auto">
        <div style={{ fontFamily: "'Sacramento', cursive", color: ACCENT }} className="text-3xl mb-2">
          Get in Touch
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">Contact Us</h1>
        <p className="mt-6 opacity-70 leading-relaxed">
          The fastest way to order is on WhatsApp — we reply personally, confirm your box size, and arrange delivery anywhere in Pakistan.
        </p>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-8 text-center" style={{ backgroundColor: "#F3EBDA" }}>
          <div className="text-4xl mb-3">💬</div>
          <div className="text-xs tracking-[0.25em] uppercase opacity-70">WhatsApp</div>
          <div className="text-lg mt-2">{PHONE_DISPLAY}</div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 text-xs tracking-[0.25em] uppercase text-white"
            style={{ backgroundColor: "#25D366" }}>
            Message Us
          </a>
        </div>
        <div className="p-8 text-center" style={{ backgroundColor: "#F3EBDA" }}>
          <div className="text-4xl mb-3">📞</div>
          <div className="text-xs tracking-[0.25em] uppercase opacity-70">Phone</div>
          <div className="text-lg mt-2">{PHONE_DISPLAY}</div>
          <a href={`tel:${WHATSAPP_NUMBER}`}
            className="inline-block mt-6 px-8 py-3 text-xs tracking-[0.25em] uppercase text-white"
            style={{ backgroundColor: ACCENT }}>
            Call Now
          </a>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-4xl mx-auto text-center">
        <div className="text-xs tracking-[0.25em] uppercase opacity-70 mb-4">Follow Our Journey</div>
        <div className="flex justify-center gap-6 text-sm">
          <a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer" className="underline">Facebook</a>
          <a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>
        </div>
        <div className="mt-10 text-sm opacity-70">
          🚚 Shipping All Over Pakistan · Fresh from our orchard to your doorstep
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}