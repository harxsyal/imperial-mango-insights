import { Link } from "@tanstack/react-router";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";

const ACCENT = "#F5A623";

export function SiteFooter() {
  return (
    <footer
      className="border-t px-8 md:px-16 py-14 text-sm"
      style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "#FBF5EB" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="text-xl mb-3">
            <span className="font-light">Imperial</span>
            <span style={{ color: ACCENT }} className="font-medium"> Mangoes</span>
          </div>
          <p className="opacity-60 max-w-xs leading-relaxed">
            King of Fruits · Kingdom of Pakistan. Handpicked from our own family orchard — 100% natural, carbide free.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase mb-3 font-medium">Explore</div>
          <ul className="space-y-2 opacity-70">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase mb-3 font-medium">Contact</div>
          <ul className="space-y-2 opacity-70">
            <li>{PHONE_DISPLAY}</li>
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                WhatsApp Order
              </a>
            </li>
            <li>Shipping All Over Pakistan</li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase mb-3 font-medium">Follow</div>
          <ul className="space-y-2 opacity-70">
            <li><a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t opacity-40 text-xs flex justify-between"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <span>© {new Date().getFullYear()} Imperial Mangoes. All rights reserved.</span>
        <span>Made with 🥭 in Pakistan</span>
      </div>
    </footer>
  );
}