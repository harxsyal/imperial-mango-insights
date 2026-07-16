import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getProduct, whatsappOrderUrl } from "@/lib/products";

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
  component: Product,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      Product not found. <Link to="/shop" className="ml-2 underline">Back to shop</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-sm">
      Error loading product: {error.message}
    </div>
  ),
});

const CREAM = "#FBF5EB";
const ACCENT = "#F5A623";
const INK = "#2B2B2B";

function Product() {
  const { product } = Route.useLoaderData();
  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const size = product.sizes[sizeIdx];

  return (
    <div style={{ backgroundColor: CREAM, color: INK, fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 300 }} className="min-h-screen">
      <SiteHeader />
      <div className="px-6 md:px-16 pt-6 text-xs opacity-70">
        <Link to="/">Home</Link> → <Link to="/shop">Shop</Link> → <span>{product.name}</span>
      </div>
      <section className="px-6 md:px-16 py-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="relative overflow-hidden aspect-square" style={{ backgroundColor: "#F3EBDA" }}>
          {product.tag && (
            <span className="absolute top-4 left-4 z-10 text-[10px] tracking-[0.2em] px-3 py-1 text-white uppercase"
              style={{ backgroundColor: product.tag === "Best Seller" ? "#E5325B" : ACCENT }}>
              {product.tag}
            </span>
          )}
          <img src={product.img} alt={product.name} width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">{product.name}</h1>
          <div className="text-2xl mt-4" style={{ color: "#E5325B" }}>{product.priceRange}</div>
          <div className="text-xs opacity-60 mt-2 tracking-wide">SKU: {product.sku} | Season: {product.season}</div>
          <p className="mt-6 opacity-80 leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <div className="text-xs tracking-[0.2em] uppercase mb-3">Kilogram</div>
            <div className="flex gap-2">
              {product.sizes.map((s, i) => (
                <button key={s.label} onClick={() => setSizeIdx(i)}
                  className="text-[11px] tracking-[0.15em] px-4 py-2 uppercase transition"
                  style={i === sizeIdx
                    ? { backgroundColor: INK, color: "white", border: `1px solid ${INK}` }
                    : { border: `1px solid rgba(0,0,0,0.15)`, color: INK }}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border" style={{ borderColor: "rgba(0,0,0,0.2)" }}>
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2">−</button>
              <span className="px-4 min-w-10 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2">+</button>
            </div>
            <div className="text-sm">
              <span style={{ color: "#E5325B" }} className="text-lg">₨ {(size.price * qty).toLocaleString()}</span>
              <span className="opacity-60"> total</span>
            </div>
          </div>

          <a href={whatsappOrderUrl({
              product: product.name,
              size: size.label,
              price: size.price,
              quantity: qty,
              url: `https://imperialmangoes.com/shop/${product.slug}/`,
            })}
            target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full py-4 text-xs tracking-[0.25em] uppercase text-white transition hover:brightness-110"
            style={{ backgroundColor: "#25D366" }}>
            💬 Buy via WhatsApp
          </a>

          <div className="mt-10">
            <div className="text-sm font-medium mb-3">Product Details</div>
            <ul className="text-sm opacity-75 space-y-1 list-disc pl-5">
              <li>100% Carbide Free</li>
              <li>100% Natural</li>
              <li>Rich in Vitamin A, C, iron, folate and magnesium</li>
              <li>Naturally Ripened</li>
              <li>Store in cool and dry place</li>
            </ul>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}