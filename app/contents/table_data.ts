export interface Item {
  name: string;
  image: string;
  price: number;
  rating: number;
  stock: boolean;
}

export const items = [
  {
    name: "Nebula GTX 3080",
    image: "1.png",
    price: 699.99,
    rating: 5,
    stock: true,
  },
  {
    name: "Galaxy RTX 3080",
    image: "2.png",
    price: 799.99,
    rating: 4,
    stock: false,
  },
  {
    name: "Orion RX 6800 XT",
    image: "3.png",
    price: 649.99,
    rating: 3,
    stock: true,
  },
  {
    name: "Vortex RTX 3090",
    image: "4.png",
    price: 1499.99,
    rating: 4,
    stock: true,
  },
  {
    name: "Cosmos GTX 1660 Super",
    image: "5.png",
    price: 299.99,
    rating: 4,
    stock: false,
  },
];

export interface Header {
  key: string;
  title: string;
}

export const headers = [
  { key: "name", title: "名称", nowrap: true },
  { key: "image", title: "画像", nowrap: true, sortable: false },
  { key: "price", title: "価格", nowrap: true },
  { key: "rating", title: "評価", nowrap: true },
  { key: "stock", title: "在庫", nowrap: true },
  { key: "actions", title: "詳細", nowrap: true, sortable: false },
];

export const default_headers = [
  "name",
  "image",
  "price",
  "rating",
  "stock",
  "actions",
];
