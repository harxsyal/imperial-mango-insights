import lalBadshah from "@/assets/products/lal-badshah.jpg";
import sindhri from "@/assets/products/sindhri.jpg";
import anwarRatol from "@/assets/products/anwar-ratol.jpg";
import gulabKhas from "@/assets/products/gulab-khas.jpg";
import langra from "@/assets/products/langra.jpg";
import dusehri from "@/assets/products/dusehri.jpg";
import blackChaunsa from "@/assets/products/black-chaunsa.jpg";
import whiteChaunsa from "@/assets/products/white-chaunsa.jpg";
import saroli from "@/assets/products/saroli.jpg";

export const WHATSAPP_NUMBER = "923001062646";
export const PHONE_DISPLAY = "+92 300 10 MANGO";

export type Size = { label: string; kg: number; price: number };

export type Product = {
  slug: string;
  name: string;
  img: string;
  tag: string | null;
  season: string;
  sku: string;
  priceRange: string;
  minPrice: number;
  shortDesc: string;
  description: string;
  sizes: Size[];
};

export const products: Product[] = [
  {
    slug: "lal-badshah",
    name: "LAL BADSHAH",
    img: lalBadshah,
    tag: "Premium",
    season: "June – July",
    sku: "Lal",
    priceRange: "₨ 2,500 – ₨ 4,500",
    minPrice: 2500,
    shortDesc:
      "The majestic Lal Badshah or Red King is one of the finest and rarest varieties of mangoes in Pakistan.",
    description:
      "The majestic Lal Badshah or Red King is one of the finest and rarest varieties of mangoes in Pakistan. The medium sized mango is extremely flavourful and delicious and exudes an excellent aroma. Lal Badshah derives its name from the shades of red it displays, but wears different colours at different stages of its growth.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2500 },
      { label: "9 Kilogram", kg: 9, price: 4500 },
    ],
  },
  {
    slug: "sindhri",
    name: "SINDHRI",
    img: sindhri,
    tag: "Best Seller",
    season: "May – July",
    sku: "Sin01",
    priceRange: "₨ 2,700 – ₨ 4,700",
    minPrice: 2700,
    shortDesc:
      "Large, fibre-less and golden yellow with a sweet, rich flavour. Pakistan's Queen of Mangoes.",
    description:
      "Sindhri is one of the most popular varieties of mango in Pakistan. It is large in size with a unique lemon-yellow peel and a distinct elongated shape. The deep yellow, soft and melting flesh makes Sindhri the queen of mangoes. It is fibre-less with a very pleasant aroma and is a rich source of Vitamin C.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2700 },
      { label: "9 Kilogram", kg: 9, price: 4700 },
    ],
  },
  {
    slug: "anwar-ratol",
    name: "ANWAR RATOL",
    img: anwarRatol,
    tag: "Premium",
    season: "June – August",
    sku: "anr01",
    priceRange: "₨ 3,000 – ₨ 5,000",
    minPrice: 3000,
    shortDesc:
      "A symbol of pride for Pakistan, Anwar Ratol is one of the best mango varieties in the world.",
    description:
      "A symbol of pride for Pakistan, Anwar Ratol is one of the best mango varieties in the world. The sweet and delicious mango is renowned for its rich flavour, strong aroma and unmatchable taste. This mini-sized powerhouse is bright yellow in colour, fully loaded with nutritional values and highly coveted amongst mango enthusiasts.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 3000 },
      { label: "9 Kilogram", kg: 9, price: 5000 },
    ],
  },
  {
    slug: "gulab-khas",
    name: "GULAB KHAS",
    img: gulabKhas,
    tag: null,
    season: "June – July",
    sku: "gk01",
    priceRange: "₨ 2,700 – ₨ 4,500",
    minPrice: 2700,
    shortDesc:
      "Known for its rosy flavour and gorgeous blush, Gulab Khas is a favourite among mango connoisseurs.",
    description:
      "Known for its rosy flavour and gorgeous blush, Gulab Khas is a favourite among mango connoisseurs. Its delicate rose-like aroma and honeyed sweetness make it a treasured heirloom variety, hand-picked at peak ripeness from our family orchard.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2700 },
      { label: "9 Kilogram", kg: 9, price: 4500 },
    ],
  },
  {
    slug: "langra",
    name: "LANGRA",
    img: langra,
    tag: null,
    season: "July – August",
    sku: "lng01",
    priceRange: "₨ 2,500 – ₨ 4,300",
    minPrice: 2500,
    shortDesc:
      "Firm, tangy-sweet with a distinctive greenish skin — a classic Punjabi favourite.",
    description:
      "Langra is celebrated for its unique flavour profile — a perfect balance of sweetness and tang, with firm, fibre-less flesh. The skin retains its greenish hue even when fully ripe, making it instantly recognisable among mango lovers.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2500 },
      { label: "9 Kilogram", kg: 9, price: 4300 },
    ],
  },
  {
    slug: "dusehri",
    name: "DUSEHRI",
    img: dusehri,
    tag: null,
    season: "June – July",
    sku: "dsh01",
    priceRange: "₨ 2,600 – ₨ 4,400",
    minPrice: 2600,
    shortDesc:
      "Elongated, honey-sweet and aromatic — one of the most loved traditional varieties.",
    description:
      "Dusehri is prized for its elongated shape, smooth golden-yellow skin and exceptionally sweet, juicy flesh. Its fine fibre and rich aroma make it a household favourite across the subcontinent.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2600 },
      { label: "9 Kilogram", kg: 9, price: 4400 },
    ],
  },
  {
    slug: "black-chaunsa",
    name: "BLACK CHAUNSA",
    img: blackChaunsa,
    tag: "Premium",
    season: "August – September",
    sku: "bc01",
    priceRange: "₨ 3,200 – ₨ 5,200",
    minPrice: 3200,
    shortDesc:
      "Deep-hued, richly aromatic Chaunsa — the crown jewel of late-season mangoes.",
    description:
      "Black Chaunsa is renowned worldwide for its intoxicating aroma, luscious sweetness and buttery, fibre-less flesh. Its deep greenish-black skin ripens to a stunning golden bloom, revealing one of the finest eating mangoes on earth.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 3200 },
      { label: "9 Kilogram", kg: 9, price: 5200 },
    ],
  },
  {
    slug: "white-chaunsa",
    name: "WHITE CHAUNSA",
    img: whiteChaunsa,
    tag: null,
    season: "July – August",
    sku: "wc01",
    priceRange: "₨ 2,900 – ₨ 4,900",
    minPrice: 2900,
    shortDesc:
      "Pale golden Chaunsa with silky flesh and a delicate, honeyed sweetness.",
    description:
      "White Chaunsa is prized for its light golden skin and exceptionally smooth, sweet, fibre-less flesh. A more delicate cousin of the Black Chaunsa, it offers a mellow, refined flavour that mango lovers cherish.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2900 },
      { label: "9 Kilogram", kg: 9, price: 4900 },
    ],
  },
  {
    slug: "saroli",
    name: "SAROLI",
    img: saroli,
    tag: null,
    season: "June – July",
    sku: "srl01",
    priceRange: "₨ 2,400 – ₨ 4,200",
    minPrice: 2400,
    shortDesc:
      "A rare regional variety with sweet, juicy flesh and a distinctive character.",
    description:
      "Saroli is a treasured regional variety with juicy, sweet flesh and a lovely aroma. Grown in limited quantities in our family orchard, each mango is carefully hand-picked at the perfect stage of ripeness.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2400 },
      { label: "9 Kilogram", kg: 9, price: 4200 },
    ],
  },
];

export function whatsappOrderUrl(opts: {
  product?: string;
  size?: string;
  price?: number;
  quantity?: number;
  url?: string;
}) {
  const lines = [
    "Assalamu Alaikum — I'd like to place an order with Imperial Mangoes.",
    "",
  ];
  if (opts.product) {
    lines.push(`• Variety: ${opts.product}`);
    if (opts.size) lines.push(`• Box size: ${opts.size}`);
    if (opts.quantity) lines.push(`• Quantity: ${opts.quantity} box(es)`);
    if (opts.price) lines.push(`• Price: ₨ ${opts.price.toLocaleString()} per box`);
    if (opts.url) lines.push(`• Product: ${opts.url}`);
    lines.push("");
  }
  lines.push("Delivery details:");
  lines.push("• Full name: ");
  lines.push("• Delivery address: ");
  lines.push("• City / Postal code: ");
  lines.push("• Preferred delivery date: ");
  lines.push("");
  lines.push("Thank you!");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}