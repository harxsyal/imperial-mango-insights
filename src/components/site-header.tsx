import { Link } from "@tanstack/react-router";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";
import { Search, ShoppingBag } from "lucide-react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#varieties", label: "Varieties" },
  { href: "#story", label: "Story" },
  { href: "#benefits", label: "Benefits" },
  { href: "#nutrition", label: "Nutrition" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const wrap = overlay
    ? "absolute top-0 left-0 right-0 z-40 bg-transparent"
    : "bg-cream sticky top-0 z-40 border-b border-black/5";
  const textCls = overlay ? "text-white" : "text-ink";
  const dotCls = overlay ? "text-orange" : "text-orange";
  return (
    <header className={wrap}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#home" className={`flex items-baseline text-[26px] tracking-tight leading-none ${textCls}`}>
          <span className="font-normal">Imperial</span>
          <span className={dotCls}>.</span>
          <span className="font-normal">Mangoes</span>
        </a>

        <nav className={`hidden md:flex items-center gap-10 text-[13px] tracking-[0.18em] uppercase font-normal ${textCls}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="relative py-2 hover:text-orange transition">
              {item.label}
            </a>
          ))}
        </nav>

        <div className={`flex items-center gap-5 ${textCls}`}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${PHONE_DISPLAY}`}
            className="relative"
          >
            <ShoppingBag size={20} strokeWidth={1.25} />
            <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white bg-pink">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}