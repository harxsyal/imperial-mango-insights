import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { getProduct, whatsappOrderUrl, products, type Size } from "@/lib/products";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — Imperial Mangoes" }] };
    return {
      meta: [
        { title: `${p.name} — Imperial Mangoes` },
        { name: "description", content: p.shortDesc },
        { property: "og:title", content: `${p.name} — Imperial Mangoes` },
        { property: "og:description", content: p.shortDesc },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div>Product not found. <Link to="/shop" className="underline text-orange">Back to shop</Link></div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-cream text-sm">
      Error loading product: {error.message}
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const size = product.sizes[sizeIdx];
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-cream min-h-screen">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-5 md:px-6 pt-6 md:pt-8 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-ink-soft">
        <Link to="/" className="hover:text-orange">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-orange">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-16">
        <div className="relative overflow-hidden aspect-square bg-cream-2">
          {product.tag && (
            <span
              className={`absolute top-3 left-3 md:top-4 md:left-4 z-10 text-[9px] md:text-[10px] tracking-[0.2em] px-2 md:px-3 py-1 text-white uppercase ${
                product.tag === "Best Seller" ? "bg-pink" : "bg-orange"
              }`}
            >
              {product.tag}
            </span>
          )}
          <img src={product.img} alt={product.name} width={1000} height={1000} className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink">{product.name}</h1>
          <div className="mt-3 md:mt-4 text-xl md:text-2xl text-ink-soft font-semibold">{product.priceRange}</div>
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink-soft mt-2 md:mt-3">
            SKU: {product.sku} · Season: {product.season}
          </div>
          <p className="mt-5 md:mt-8 text-ink leading-relaxed text-sm md:text-base">{product.description}</p>

          <div className="mt-8 md:mt-10">
            <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink mb-3">Kilogram</div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((s: Size, i: number) => (
                <button
                  key={s.label}
                  onClick={() => setSizeIdx(i)}
                  className={`px-4 md:px-5 py-2.5 md:py-3 text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition ${
                    i === sizeIdx
                      ? "bg-ink text-white border border-ink"
                      : "bg-white text-ink border border-black/10 hover:border-ink"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 md:mt-6 flex items-center gap-3 md:gap-4">
            <div className="flex items-center border border-black/15 bg-white">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:text-orange" aria-label="Decrease">−</button>
              <span className="px-4 min-w-10 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 hover:text-orange" aria-label="Increase">+</button>
            </div>
            <div className="text-ink-soft text-sm md:text-base">
              Total: <span className="text-ink text-lg md:text-xl font-semibold">₨ {(size.price * qty).toLocaleString()}</span>
            </div>
          </div>

          <a
            href={whatsappOrderUrl({
              product: product.name,
              size: size.label,
              price: size.price,
              quantity: qty,
              url: `https://imperialmangoes.com/shop/${product.slug}/`,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-8 inline-flex items-center justify-center w-full py-3.5 md:py-4 text-[11px] tracking-[0.25em] uppercase font-semibold text-white bg-orange hover:bg-orange-dark transition"
          >
            Buy via WhatsApp
          </a>

          <div className="mt-8 md:mt-12 border-t border-black/10 pt-6 md:pt-8">
            <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink mb-3">Product Details</div>
            <ul className="text-ink text-sm md:text-base space-y-1 list-disc pl-5">
              <li>100% Carbide Free</li>
              <li>100% Natural</li>
              <li>Rich in Vitamin A, C, iron, folate and magnesium</li>
              <li>Naturally Ripened</li>
              <li>Store in a cool and dry place</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 py-16 md:py-20 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="script text-2xl md:text-3xl">Also from the orchard</div>
            <h2 className="text-2xl md:text-4xl font-semibold text-ink mt-2">Related Varieties</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-8 gap-y-8 md:gap-y-16">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}