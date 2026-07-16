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

      <div className="max-w-7xl mx-auto px-6 pt-8 text-[11px] tracking-[0.2em] uppercase text-ink-soft">
        <Link to="/" className="hover:text-orange">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-orange">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16">
        <div className="relative overflow-hidden aspect-square bg-black border border-orange/20">
          {product.tag && (
            <span
              className={`absolute top-4 left-4 z-10 text-[10px] tracking-[0.25em] px-3 py-1 uppercase ${
                product.tag === "Best Seller" ? "bg-orange text-cream" : "bg-pink text-ink"
              }`}
            >
              {product.tag}
            </span>
          )}
          <img src={product.img} alt={product.name} width={1000} height={1000} className="w-full h-full object-cover" />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-normal text-ink">{product.name}</h1>
          <span className="mt-5 inline-block h-px w-16 bg-orange" aria-hidden />
          <div className="mt-5 text-2xl text-orange font-light" style={{ fontFamily: "var(--font-sans)" }}>{product.priceRange}</div>
          <div className="label text-ink-soft mt-3">
            SKU: {product.sku} · Season: {product.season}
          </div>
          <p className="mt-8 text-ink-soft leading-relaxed italic text-lg" style={{ fontFamily: "var(--font-sans)" }}>{product.description}</p>

          <div className="mt-10">
            <div className="label text-orange mb-3">Kilogram</div>
            <div className="flex gap-2">
              {product.sizes.map((s: Size, i: number) => (
                <button
                  key={s.label}
                  onClick={() => setSizeIdx(i)}
                  className={`px-5 py-3 label transition-colors ${
                    i === sizeIdx
                      ? "bg-orange text-cream border border-orange"
                      : "bg-transparent text-ink border border-orange/40 hover:border-orange"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border border-orange/40 text-ink">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:text-orange" aria-label="Decrease">−</button>
              <span className="px-4 min-w-10 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 hover:text-orange" aria-label="Increase">+</button>
            </div>
            <div className="text-ink-soft">
              Total: <span className="text-orange text-lg" style={{ fontFamily: "var(--font-sans)" }}>₨ {(size.price * qty).toLocaleString()}</span>
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
            className="mt-8 inline-flex items-center justify-center w-full py-4 label text-cream bg-orange hover:bg-orange-dark transition-colors"
          >
            Buy via WhatsApp
          </a>

          <div className="mt-12 border-t border-orange/25 pt-8">
            <div className="label text-orange mb-3">Product Details</div>
            <ul className="text-ink-soft space-y-1 list-disc pl-5" style={{ fontFamily: "var(--font-sans)" }}>
              <li>100% Carbide Free</li>
              <li>100% Natural</li>
              <li>Rich in Vitamin A, C, iron, folate and magnesium</li>
              <li>Naturally Ripened</li>
              <li>Store in a cool and dry place</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="script text-xs">Also from the orchard</div>
            <h2 className="text-3xl md:text-4xl font-normal text-ink mt-3">Related Varieties</h2>
            <span className="mt-5 inline-block h-px w-16 bg-orange" aria-hidden />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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