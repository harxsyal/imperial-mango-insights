import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/imperial-mangoes-logo.png.asset.json";
import { useActiveSection } from "@/hooks/use-active-section";
import { useEffect, useRef, useState } from "react";

const primaryNav = [
  { href: "#home", label: "HOME" },
  { href: "#varieties", label: "VARIETIES" },
  { href: "#story", label: "STORY" },
] as const;

const moreNav = [
  { href: "#benefits", label: "BENEFITS" },
  { href: "#nutrition", label: "NUTRITION" },
  { href: "#contact", label: "CONTACT" },
] as const;

const allNav = [...primaryNav, ...moreNav];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const active = useActiveSection(allNav.map((n) => n.href.replace("#", "")));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = !overlay || scrolled;
  const wrap = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    solid ? "bg-cream/95 backdrop-blur border-b border-black/5 shadow-sm" : "bg-transparent"
  }`;
  const textCls = solid ? "text-ink" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]";
  const moreActive = moreNav.some((m) => active === m.href.replace("#", ""));

  return (
    <>
      <header className={wrap}>
        <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 md:px-12 py-3">
          <a href="#home" className="flex items-center shrink-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cream" aria-label="Imperial Mangoes">
            <img
              src={logo.url}
              alt="Imperial Mangoes"
              className={`h-12 md:h-14 w-auto transition ${solid ? "invert" : ""}`}
            />
          </a>

          <nav className={`hidden md:flex items-center justify-center gap-10 text-[13px] tracking-[0.18em] uppercase font-bold ${textCls}`}>
            {primaryNav.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${isActive ? "text-orange" : "hover:text-orange"}`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-orange transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}

            <div ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className={`relative py-2 flex items-center gap-1 transition rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${moreActive || moreOpen ? "text-orange" : "hover:text-orange"}`}
                aria-haspopup="menu"
                aria-expanded={moreOpen}
              >
                MORE
                <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
                <span
                  className={`absolute left-0 right-6 -bottom-0.5 h-[2px] bg-orange transition-transform origin-left ${
                    moreActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 top-full mt-2 min-w-[180px] bg-cream border border-black/5 shadow-lg py-2 transition-all duration-200 origin-top ${
                  moreOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                {moreNav.map((item) => {
                  const isActive = active === item.href.replace("#", "");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-bold transition focus:outline-none focus-visible:bg-cream-2 focus-visible:text-orange ${
                        isActive ? "text-orange bg-cream-2" : "text-ink hover:text-orange hover:bg-cream-2"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className={`flex items-center justify-end gap-4 ${textCls}`}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${PHONE_DISPLAY}`}
              className="relative rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 hover:text-orange transition"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white bg-pink">
                0
              </span>
            </a>
            <button
              className="md:hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 hover:text-orange transition"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition ${mobileOpen ? "visible" : "invisible"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
            <img src={logo.url} alt="Imperial Mangoes" className="h-10 w-auto invert" />
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-ink">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-2">
            {allNav.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-5 py-4 text-[13px] tracking-[0.2em] uppercase font-bold border-b border-black/5 transition focus:outline-none focus-visible:bg-cream-2 focus-visible:text-orange ${
                    isActive ? "text-orange" : "text-ink hover:text-orange"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-6 mx-3 text-center px-6 py-3 text-[11px] tracking-[0.25em] uppercase font-bold text-white bg-orange hover:bg-orange-dark transition"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}