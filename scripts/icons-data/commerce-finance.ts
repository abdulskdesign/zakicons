import { RawIconDefinition } from "./types";

export const commerceFinanceIcons: RawIconDefinition[] = [
  // Commerce
  {
    name: "shopping-cart",
    category: "commerce",
    title: "Shopping Cart",
    tags: ["store", "ecommerce", "buy", "purchase", "checkout"],
    aliases: ["ecommerce trolley", "buy cart"],
    elements: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'
  },
  {
    name: "shopping-bag",
    category: "commerce",
    title: "Shopping Bag",
    tags: ["store", "retail", "merchandise", "purchase"],
    aliases: ["retail bag", "tote bag"],
    elements: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>'
  },
  {
    name: "tag",
    category: "commerce",
    title: "Price Tag",
    tags: ["discount", "price", "label", "sale", "offer"],
    aliases: ["discount tag", "sale label"],
    elements: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'
  },
  {
    name: "credit-card",
    category: "commerce",
    title: "Credit Card",
    tags: ["payment", "visa", "mastercard", "debit", "banking"],
    aliases: ["bank card", "payment swipe"],
    elements: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>'
  },
  {
    name: "receipt",
    category: "commerce",
    title: "Receipt",
    tags: ["bill", "transaction", "proof", "payment slip"],
    aliases: ["sales receipt", "invoice slip"],
    elements: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/>'
  },
  {
    name: "barcode",
    category: "commerce",
    title: "Barcode",
    tags: ["sku", "upc", "product code", "scan"],
    aliases: ["upc barcode", "product code"],
    elements: '<path d="M3 5v14M6 5v14M8 5v8M8 17v2M12 5v14M15 5v14M17 5v9M17 18v1M21 5v14"/>'
  },
  {
    name: "qr-code",
    category: "commerce",
    title: "QR Code",
    tags: ["matrix", "scan", "quick response", "mobile pay"],
    aliases: ["quick response code", "scan square"],
    elements: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01"/>'
  },
  {
    name: "store",
    category: "commerce",
    title: "Storefront",
    tags: ["shop", "marketplace", "vendor", "retail"],
    aliases: ["storefront", "retail shop"],
    elements: '<path d="M2 9l2-6h16l2 6v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z"/><path d="M2 9c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3"/><path d="M9 22V15h6v7"/>'
  },
  {
    name: "gift",
    category: "commerce",
    title: "Gift",
    tags: ["present", "reward", "bonus", "loyalty", "package"],
    aliases: ["gift box", "present reward"],
    elements: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>'
  },
  // Finance
  {
    name: "wallet",
    category: "finance",
    title: "Wallet",
    tags: ["money", "cash", "funds", "crypto", "balance"],
    aliases: ["money wallet", "funds holder"],
    elements: '<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><circle cx="18" cy="14" r="1"/>'
  },
  {
    name: "banknote",
    category: "finance",
    title: "Banknote",
    tags: ["currency", "cash", "dollar", "bill", "paper money"],
    aliases: ["cash note", "currency bill"],
    elements: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>'
  },
  {
    name: "coins",
    category: "finance",
    title: "Coins",
    tags: ["gold", "change", "currency", "tokens", "cents"],
    aliases: ["coin stack", "cash change"],
    elements: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4H7z"/>'
  },
  {
    name: "landmark",
    category: "finance",
    title: "Bank Landmark",
    tags: ["institution", "federal", "court", "treasury"],
    aliases: ["bank building", "federal treasury"],
    elements: '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>'
  },
  {
    name: "scale",
    category: "finance",
    title: "Balance Scale",
    tags: ["justice", "equity", "audit", "compliance", "weigh"],
    aliases: ["justice scale", "balance beam"],
    elements: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/>'
  },
  {
    name: "dollar-sign",
    category: "finance",
    title: "Dollar",
    tags: ["usd", "money", "currency", "wealth", "payment"],
    aliases: ["dollar sign", "usd currency"],
    elements: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
  },
  {
    name: "percent",
    category: "finance",
    title: "Percent",
    tags: ["rate", "interest", "commission", "discount", "ratio"],
    aliases: ["percentage", "ratio sign"],
    elements: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>'
  },
  // Analytics
  {
    name: "bar-chart-2",
    category: "analytics",
    title: "Bar Chart",
    tags: ["metrics", "stats", "graph", "performance", "kpi"],
    aliases: ["vertical bar chart", "stats graph"],
    elements: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'
  },
  {
    name: "line-chart",
    category: "analytics",
    title: "Line Chart",
    tags: ["trend", "forecast", "growth", "timeseries"],
    aliases: ["trend chart", "timeseries graph"],
    elements: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>'
  },
  {
    name: "pie-chart",
    category: "analytics",
    title: "Pie Chart",
    tags: ["proportions", "breakdown", "segment", "division"],
    aliases: ["segment chart", "pie breakdown"],
    elements: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>'
  },
  {
    name: "trending-up",
    category: "analytics",
    title: "Trending Up",
    tags: ["bullish", "profit", "growth", "rise", "increase"],
    aliases: ["bullish trend", "growth arrow"],
    elements: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>'
  },
  {
    name: "trending-down",
    category: "analytics",
    title: "Trending Down",
    tags: ["bearish", "loss", "decline", "fall", "decrease"],
    aliases: ["bearish trend", "decline arrow"],
    elements: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>'
  },
  {
    name: "activity",
    category: "analytics",
    title: "Activity Pulse",
    tags: ["ecg", "heartbeat", "vital", "monitoring", "realtime"],
    aliases: ["realtime pulse", "ecg trace"],
    elements: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'
  }
];
