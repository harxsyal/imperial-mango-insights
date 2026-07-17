import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/products";
import logo from "@/assets/imperial-mangoes-logo.png";
import { Facebook, Instagram, Phone, MessageCircle, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-black px-5 md:px-12 pt-12 md:pt-16 pb-6 md:pb-8 text-sm text-white/70">
      <div className="max-w-7xl mx-auto grid gap-8 md:gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={logo.url} alt="Imperial Mangoes" className="h-12 md:h-16 w-auto" />
          <p className="mt-4 md:mt-5 max-w-xs leading-relaxed">
            <span className="text-orange font-semibold">King of Fruits · Kingdom of Pakistan.</span><br />
            Handpicked from our family orchard — 100% natural, carbide free, delivered fresh across Pakistan.
          </p>
          <div className="flex items-center gap-3 mt-4 md:mt-5">
            <a href="https://www.facebook.com/imperialmangoes" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 grid place-items-center border border-white/20 hover:border-orange hover:text-orange transition">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/imperialmangoes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 grid place-items-center border border-white/20 hover:border-orange hover:text-orange transition">
              <Instagram size={16} />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 grid place-items-center border border-white/20 hover:border-orange hover:text-orange transition">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase mb-3 md:mb-4 text-white font-semibold">Explore</div>
          <ul className="space-y-2.5">
            <li><a href="#home" className="hover:text-orange transition">Home</a></li>
            <li><a href="#varieties" className="hover:text-orange transition">Varieties</a></li>
            <li><a href="#story" className="hover:text-orange transition">Our Story</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase mb-3 md:mb-4 text-white font-semibold">More</div>
          <ul className="space-y-2.5">
            <li><a href="#benefits" className="hover:text-orange transition">Health Benefits</a></li>
            <li><a href="#nutrition" className="hover:text-orange transition">Nutrition</a></li>
            <li><a href="#contact" className="hover:text-orange transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase mb-3 md:mb-4 text-white font-semibold">Get In Touch</div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Phone size={14} className="mt-1 text-orange shrink-0" />
              <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-orange transition">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle size={14} className="mt-1 text-orange shrink-0" />
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition">Order on WhatsApp</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-1 text-orange shrink-0" />
              <span>Shipping All Over Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 md:mt-14 pt-5 md:pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row gap-2 justify-between text-white/50 text-center md:text-left">
        <span>© {new Date().getFullYear()} Imperial Mangoes. All rights reserved.</span>
        <span>Made with mango in Pakistan</span>
      </div>
    </footer>
  );
}