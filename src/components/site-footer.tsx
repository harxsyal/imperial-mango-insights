import { Link } from "@tanstack/react-router";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";
import { ImperialCrown } from "@/components/imperial-logo";

export function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-orange/25 px-6 md:px-12 py-20 text-sm text-ink-soft">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5 text-orange">
            <ImperialCrown className="w-8 h-8" color="var(--color-orange)" />
            <div className="flex flex-col leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.32em" }}>
              <span className="text-[12px] font-semibold">IMPERIAL</span>
              <span className="text-[12px] font-semibold">MANGOES</span>
            </div>
          </div>
          <p className="max-w-xs leading-relaxed italic">
            King of Fruits · Kingdom of Pakistan. Handpicked from our family orchard — 100% natural, carbide free.
          </p>
        </div>
        <div>
          <div className="label mb-4 text-orange">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange">Home</Link></li>
            <li><Link to="/shop" className="hover:text-orange">Shop</Link></li>
            <li><Link to="/about" className="hover:text-orange">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="label mb-4 text-orange">Contact</div>
          <ul className="space-y-2">
            <li>{PHONE_DISPLAY}</li>
            <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange">WhatsApp Order</a></li>
            <li>Shipping All Over Pakistan</li>
          </ul>
        </div>
        <div>
          <div className="label mb-4 text-orange">Follow</div>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Facebook</a></li>
            <li><a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-orange/20 opacity-70 text-xs flex flex-wrap gap-2 justify-between">
        <span>© {new Date().getFullYear()} Imperial Mangoes. All rights reserved.</span>
        <span>Made with mangoes in Pakistan</span>
      </div>
    </footer>
  );
}