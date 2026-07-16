import { Link } from "@tanstack/react-router";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";
import { Search, ShoppingBag } from "lucide-react";
import { ImperialCrown } from "@/components/imperial-logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const wrap = overlay
    ? "absolute top-0 left-0 right-0 z-40 bg-transparent"
    : "bg-cream sticky top-0 z-40 border-b border-orange/20";
  const textCls = "text-ink";
  const goldCls = "text-orange";
  return (
    <header className={wrap}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <Link to="/" className={`flex items-center gap-3 leading-none ${goldCls}`}>
          <ImperialCrown className="w-8 h-8" color="var(--color-orange)" />
          <div className="flex flex-col">
            <span style={{ fontFamily: "var(--font-display)", letterSpacing: "0.32em" }} className="text-[13px] font-semibold">IMPERIAL</span>
            <span style={{ fontFamily: "var(--font-display)", letterSpacing: "0.32em" }} className="text-[13px] font-semibold">MANGOES</span>
          </div>
        </Link>

        <nav className={`hidden md:flex items-center gap-10 label ${textCls}`}>
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-2 hover:text-orange transition-colors"
              activeProps={{
                className:
                  "relative py-2 text-orange after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-px after:w-6 after:bg-orange",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={`flex items-center gap-5 ${goldCls}`}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${PHONE_DISPLAY}`}
            className="relative hover:text-ink transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.25} />
          </a>
          <button aria-label="Search" className="hover:text-ink transition-colors">
            <Search size={20} strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </header>
  );
}