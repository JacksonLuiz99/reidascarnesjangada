// Dados centrais do Rei das Carnes. Atualize aqui quando houver novidades
// (horário, data de inauguração, área de entrega etc.).

const whatsappNumber = "5565998058091";

export const site = {
  name: "Rei das Carnes",
  city: "Jangada-MT",
  tagline: "Carnes selecionadas. Qualidade todos os dias.",
  description:
    "Açougue em Jangada-MT com carnes selecionadas, variedade, kits para churrasco e delivery. Qualidade todos os dias!",
  instagram: {
    handle: "@reidascarnesjangada",
    url: "https://www.instagram.com/reidascarnesjangada/",
  },
  phoneDisplay: "(65) 9 9805-8091",
  phoneHref: "tel:+5565998058091",
  whatsappUrl: (message = "Olá, Rei das Carnes! Gostaria de fazer um pedido.") =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
  address: {
    street: "Rua Natalino Piovesan, S/N",
    district: "Centro",
    city: "Jangada",
    state: "MT",
    mapsQuery: "Rua Natalino Piovesan, Centro, Jangada - MT",
  },
  // Ainda não definidos — quando definir, troque `null` pelo valor
  // (ex.: openingDate: "2026-11-20", hours: ["Seg a Sáb: 7h às 19h", "Dom: 7h às 12h"]).
  openingDate: null as string | null,
  hours: null as string[] | null,
};

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery,
)}&output=embed`;

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`;
