import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { whatsappOrderUrl } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group text-center">
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="block relative overflow-hidden aspect-square bg-cream-2"
      >
        {product.tag && (
          <span
            className={`absolute top-4 left-4 z-10 text-[10px] tracking-[0.2em] px-3 py-1 text-white uppercase ${
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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="text-[11px] tracking-[0.2em] uppercase text-ink-soft mt-6">
        {product.season}
      </div>
      <h3 className="mt-2 text-xl font-light text-ink tracking-tight">
        <Link to="/shop/$slug" params={{ slug: product.slug }} className="hover:text-orange">
          {product.name}
        </Link>
      </h3>
      <div className="mt-2 text-ink-soft">{product.priceRange}</div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <Link
          to="/shop/$slug"
          params={{ slug: product.slug }}
          className="px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase text-white bg-orange hover:bg-orange-dark transition"
        >
          Read More
        </Link>
        <a
          href={whatsappOrderUrl({
            product: product.name,
            price: product.minPrice,
            url: `https://imperialmangoes.com/shop/${product.slug}/`,
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase text-ink bg-white border border-black/10 hover:border-ink transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}