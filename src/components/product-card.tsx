import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { whatsappOrderUrl } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group text-center w-full flex flex-col">
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="block relative overflow-hidden aspect-square bg-cream-2 rounded-sm"
      >
        {product.tag && (
          <span
            className={`absolute top-3 left-3 md:top-4 md:left-4 z-10 text-[9px] md:text-[10px] tracking-[0.2em] px-2 md:px-3 py-1 text-white uppercase ${
              product.tag === "Best Seller" ? "bg-pink" : "bg-orange"
            }`}
          >
            {product.tag}
          </span>
        )}
        <img
          src={product.img}
          alt={`${product.name} mango`}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-[10px] tracking-[0.25em] uppercase text-white bg-orange px-3 md:px-4 py-1.5 md:py-2">
          View
        </span>
      </Link>

      <div className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-ink-soft mt-3 md:mt-5 font-semibold">
        {product.season}
      </div>
      <h3 className="mt-1 md:mt-1.5 text-base md:text-lg font-semibold text-ink tracking-tight uppercase">
        <Link to="/shop/$slug" params={{ slug: product.slug }} className="hover:text-orange transition">
          {product.name}
        </Link>
      </h3>
      <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-ink-soft leading-relaxed line-clamp-3 min-h-[2.8rem] md:min-h-[3.75rem]">
        {product.shortDesc}
      </p>
      <div className="mt-1.5 md:mt-2 text-xs md:text-sm font-semibold text-orange">{product.priceRange}</div>

      <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 flex-wrap">
        <Link
          to="/shop/$slug"
          params={{ slug: product.slug }}
          className="px-3 md:px-4 py-2 text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-semibold text-white bg-orange hover:bg-orange-dark transition"
        >
          Details
        </Link>
        <a
          href={whatsappOrderUrl({
            product: product.name,
            price: product.minPrice,
            url: `https://imperialmangoes.com/shop/${product.slug}/`,
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 md:px-4 py-2 text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-semibold text-ink bg-white border border-black/10 hover:border-ink transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}