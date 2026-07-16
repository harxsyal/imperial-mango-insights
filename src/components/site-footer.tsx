import { Link } from "@tanstack/react-router";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="bg-ink border-t border-white/10 px-6 md:px-12 py-16 text-sm text-white/70">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="text-[22px] mb-3 text-white leading-none">
            <span>Imperial</span><span className="text-orange">.</span><span>Mangoes</span>
          </div>
          <p className="max-w-xs leading-relaxed">
            King of Fruits · Kingdom of Pakistan. Handpicked from our family orchard — 100% natural, carbide free.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase mb-4 text-white">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange">Home</Link></li>
            <li><Link to="/shop" className="hover:text-orange">Shop</Link></li>
            <li><Link to="/about" className="hover:text-orange">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase mb-4 text-white">Contact</div>
          <ul className="space-y-2">
            <li>{PHONE_DISPLAY}</li>
            <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange">WhatsApp Order</a></li>
            <li>Shipping All Over Pakistan</li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase mb-4 text-white">Follow</div>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Facebook</a></li>
            <li><a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 opacity-70 text-xs flex flex-wrap gap-2 justify-between">
        <span>© {new Date().getFullYear()} Imperial Mangoes. All rights reserved.</span>
        <span>Made with mangoes in Pakistan</span>
      </div>
    </footer>
  );
}