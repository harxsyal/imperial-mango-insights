import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { whatsappOrderUrl } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group text-center">
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="block relative overflow-hidden aspect-square bg-black border border-orange/20 hover:border-orange/60 transition-colors"
      >
        {product.tag && (
          <span
            className={`absolute top-4 left-4 z-10 text-[10px] tracking-[0.25em] px-3 py-1 uppercase ${
              product.tag === "Best Seller" ? "bg-orange text-cream" : "bg-pink text-ink"
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

      <div className="label text-ink-soft mt-6">
        {product.season}
      </div>
      <h3 className="mt-3 text-lg font-normal text-ink">
        <Link to="/shop/$slug" params={{ slug: product.slug }} className="hover:text-orange">
          {product.name}
        </Link>
      </h3>
      <div className="mt-2 text-orange" style={{ fontFamily: "var(--font-sans)" }}>{product.priceRange}</div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <Link
          to="/shop/$slug"
          params={{ slug: product.slug }}
          className="px-5 py-2.5 label text-cream bg-orange hover:bg-orange-dark transition-colors"
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
          className="px-5 py-2.5 label text-orange border border-orange/50 hover:border-orange hover:bg-orange/10 transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}