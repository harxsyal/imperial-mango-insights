import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";
import { ShoppingBag } from "lucide-react";
import logo from "@/assets/imperial-mangoes-logo.png.asset.json";
import { useActiveSection } from "@/hooks/use-active-section";
import { useEffect, useState } from "react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#varieties", label: "Varieties" },
  { href: "#story", label: "Story" },
  { href: "#benefits", label: "Benefits" },
  { href: "#nutrition", label: "Nutrition" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const active = useActiveSection(nav.map((n) => n.href.replace("#", "")));
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const solid = !overlay || scrolled;
  const wrap = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    solid ? "bg-cream/95 backdrop-blur border-b border-black/5 shadow-sm" : "bg-transparent"
  }`;
  const textCls = solid ? "text-ink" : "text-white";
  return (
    <header className={wrap}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
        <a href="#home" className="flex items-center" aria-label="Imperial Mangoes">
          <img
            src={logo.url}
            alt="Imperial Mangoes"
            className={`h-12 md:h-14 w-auto transition ${solid ? "invert" : ""}`}
          />
        </a>

        <nav className={`hidden md:flex items-center gap-10 text-[13px] tracking-[0.18em] uppercase font-semibold ${textCls}`}>
          {nav.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-2 transition ${isActive ? "text-orange" : "hover:text-orange"}`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-orange transition-transform origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
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