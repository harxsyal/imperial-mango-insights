import lalBadshahA from "@/assets/products/lal_badshah.png";
import sindhriA from "@/assets/products/sindhri.png";
import anwarRatolA from "@/assets/products/anwar_ratol.png";
import gulabKhasA from "@/assets/products/ghulab_khas.png";
import langraA from "@/assets/products/langra.png";
import dusehriA from "@/assets/products/duseri.png";
import blackChaunsaA from "@/assets/products/black_chaunsa.png";
import whiteChaunsaA from "@/assets/products/white_chaunsa.png";
import saroliA from "@/assets/products/saroli.png";
import totaPuriA from "@/assets/products/Tota_puri.png";

const lalBadshah = lalBadshahA.url;
const sindhri = sindhriA.url;
const anwarRatol = anwarRatolA.url;
const gulabKhas = gulabKhasA.url;
const langra = langraA.url;
const dusehri = dusehriA.url;
const blackChaunsa = blackChaunsaA.url;
const whiteChaunsa = whiteChaunsaA.url;
const saroli = saroliA.url;
const totaPuri = totaPuriA.url;

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
      "The Lal Badshah is one of the finest and rarest varieties of mangoes from Pakistan.",
    description:
      "The Lal Badshah is one of the finest and rarest varieties of mangoes from Pakistan. The medium sized mango is extremely flavourful and delicious and exudes an excellent aroma. Lal Badshah derives its name from the shades of red it displays but wears different colours at different stages of its growth.",
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
      "Sindhri is a leading variety of mango from the province of Sindh and is the national fruit of Pakistan.",
    description:
      "Sindhri is a leading variety of mango from the province of Sindh and is the national fruit of Pakistan. It is a large, oval-shaped mango with a yellowish skin, is low in fibre, and is highly aromatic. For many, Sindhri mango is the epitome of taste and texture in mangoes. While they are generally sweet, Sindhri mangoes might be a bit tangy early in the season.",
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
      "Anwar Ratol is considered to be one of the best varieties of mango and is recognized for its rich flavour and strong aroma all around the globe.",
    description:
      "Anwar Ratol is considered to be one of the best varieties of mango and is recognized for its rich flavour and strong aroma all around the globe. Its sweetness and delicious flavour distinguish it from all the other mangoes. Small, medium-sized and bright yellow in colour this yummy mango is fully loaded with nutritional values.",
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
      "The major factor that distinguishes Langra from all the other types of mangoes is that it maintains its green colour even after it's ripe.",
    description:
      "The major factor that distinguishes Langra from all the other types of mangoes is that it maintains its green colour even after it's ripe. Langra's flesh is fibreless and has a strong aroma when ripe. Although this mango is only available as a medium-sized fruit, the flavour can range from extremely sweet to a bitter sourness, depending on the ripeness of the fruit.",
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
      "Mouth-watering and lip-smacking, the Dusehri mango has the juiciest pulp with an exquisite taste and delightful aroma.",
    description:
      "Mouth-watering and lip-smacking, the Dusehri mango has the juiciest pulp with an exquisite taste and delightful aroma. The mango is long and oval shaped, with a light green or yellow-green skin when mature, becoming golden yellow when ripe. Dasheri mangoes have a fibreless, peach-coloured flesh and are high in vitamin C.",
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
      "Chaunsa is also one of the most loved types of mangoes across the world because it is exceptionally sweet and juicy.",
    description:
      "Chaunsa is also one of the most loved types of mangoes across the world because it is exceptionally sweet and juicy. The deliciously soft mango has a wonderful fragrance, minimum fibre, and light-yellow flesh. It doesn't get any fresher than this!",
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
      "Chaunsa is also one of the most loved types of mangoes across the world because it is exceptionally sweet and juicy.",
    description:
      "Chaunsa is also one of the most loved types of mangoes across the world because it is exceptionally sweet and juicy. The deliciously soft mango has a wonderful fragrance, minimum fibre, and light-yellow flesh. It doesn't get any fresher than this!",
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
      "One of the first mangoes to appear during the season, Saroli is a popular variety in Pakistan.",
    description:
      "One of the first mangoes to appear during the season, Saroli is a popular variety in Pakistan. The sweet green mangoes are aromatic and delicious and are a rich source of vitamins, potassium and iron.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2400 },
      { label: "9 Kilogram", kg: 9, price: 4200 },
    ],
  },
  {
    slug: "tota-puri",
    name: "TOTA PURI",
    img: totaPuri,
    tag: null,
    season: "June – August",
    sku: "tp01",
    priceRange: "₨ 2,300 – ₨ 4,100",
    minPrice: 2300,
    shortDesc:
      "Distinctively beak-shaped mango with a tangy-sweet flavour and firm, aromatic flesh.",
    description:
      "Tota Puri is named for its parrot-beak shape and blushed green-gold skin. It offers a lively, tangy-sweet flavour with firm, fibre-less flesh — perfect for eating fresh or in traditional preserves.",
    sizes: [
      { label: "5 Kilogram", kg: 5, price: 2300 },
      { label: "9 Kilogram", kg: 9, price: 4100 },
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