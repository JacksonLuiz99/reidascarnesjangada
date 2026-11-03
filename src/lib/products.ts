// Vitrine de produtos. Enquanto não houver fotos reais, cada item mostra um
// espaço reservado. Quando tiver a foto, salve em public/images/produtos/ e
// preencha `image` (ex.: image: "/images/produtos/picanha.jpg").

export type Product = {
  name: string;
  category: "Bovinos" | "Suínos" | "Aves" | "Embutidos" | "Churrasco";
  image?: string;
};

export const products: Product[] = [
  { name: "Picanha", category: "Bovinos" },
  { name: "Costela", category: "Bovinos" },
  { name: "Alcatra", category: "Bovinos" },
  { name: "Fraldinha", category: "Bovinos" },
  { name: "Carne suína", category: "Suínos" },
  { name: "Frango", category: "Aves" },
  { name: "Linguiça", category: "Embutidos" },
  { name: "Espetinhos", category: "Churrasco" },
];
