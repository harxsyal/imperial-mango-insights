import { Link } from "@tanstack/react-router";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";

const ACCENT = "#F5A623";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <>
      <div
        className="w-full text-xs px-6 py-2 flex flex-wrap items-center justify-between gap-3"
        style={{ backgroundColor: "#2B2B2B", color: "#FBF5EB" }}
      >
        <div className="flex items-center gap-4">
          <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:opacity-80">📞 {PHONE_DISPLAY}</a>
          <a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">Facebook</a>
          <a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">Instagram</a>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-full text-xs"
          style={{ backgroundColor: "#25D366", color: "white" }}
        >
          💬 Order on WhatsApp
        </a>
      </div>
      <header
        className="flex items-center justify-between px-8 md:px-16 py-6"
        style={{ backgroundColor: "#FBF5EB" }}
      >
        <Link to="/" className="flex items-baseline gap-1 text-2xl tracking-tight">
          <span className="font-light">Imperial</span>
          <span style={{ color: ACCENT }} className="font-medium">Mangoes</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:opacity-70 transition"
              activeProps={{ style: { borderBottom: `2px solid ${ACCENT}`, paddingBottom: 4 } }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}