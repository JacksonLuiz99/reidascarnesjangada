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
  },
  inauguration: {
    date: "2026-11-28",
    weekday: "Sábado",
    period: "pela manhã",
    // Horário exato de início ainda não confirmado (ver PENDENCIAS.md);
    // 07h = abertura da loja. Fuso de Cuiabá: UTC-4.
    startsAt: "2026-11-28T07:00:00-04:00",
    endsAt: "2026-11-28T12:00:00-04:00",
    skewers: 500,
  },
  // Dias da semana ainda não confirmados (ver PENDENCIAS.md).
  hours: ["Manhã: 07h às 12h", "Tarde: 15h às 19h30"] as string[] | null,
};

// Coordenadas exatas da loja (Street View enviado pelo cliente).
export const coordinates = { lat: -15.23843657139266, lng: -56.49159566883414 };

// Street View da fachada, gerado em "Compartilhar > Incorporar mapa" no Google Maps.
export const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1793717494667!5m2!1spt-BR!2sbr!6m8!1m7!1sZXFrsbZEvJXUXNTxtWniZQ!2m2!1d-15.23843657139266!2d-56.49159566883414!3f269.26471290907415!4f6.7692573878611455!5f0.7820865974627469";

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
