import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import {
  BasketIcon,
  ClockIcon,
  CrownIcon,
  GrillIcon,
  InstagramIcon,
  MotoIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
  TagIcon,
  WhatsappIcon,
} from "@/components/icons";
import { Countdown } from "@/components/countdown";
import { developer } from "@/lib/developer";
import { products } from "@/lib/products";
import { mapsEmbedUrl, mapsLinkUrl, site } from "@/lib/site";

const nav = [
  { href: "#inauguracao", label: "Inauguração" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#delivery", label: "Delivery" },
  { href: "#localizacao", label: "Localização" },
];

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const categories: { icon: Icon; title: string; text: string; message: string }[] = [
  {
    icon: TagIcon,
    title: "Ofertas",
    text: "Promoções da semana nos cortes que você mais gosta. Fique de olho!",
    message: "Olá! Quais são as ofertas desta semana?",
  },
  {
    icon: BasketIcon,
    title: "Produtos",
    text: "Bovinos, suínos, frango, linguiças e muito mais, sempre frescos.",
    message: "Olá! Gostaria de saber quais produtos vocês têm.",
  },
  {
    icon: GrillIcon,
    title: "Churrasco",
    text: "Cortes nobres e kits completos para o seu fim de semana.",
    message: "Olá! Quero montar um churrasco. Podem me ajudar?",
  },
  {
    icon: MotoIcon,
    title: "Delivery",
    text: "Peça pelo WhatsApp e receba no conforto da sua casa.",
    message: "Olá! Gostaria de fazer um pedido para entrega.",
  },
];

const highlights = [
  {
    title: "Carnes selecionadas",
    text: "Cada corte escolhido com cuidado, do fornecedor até o balcão.",
  },
  {
    title: "Qualidade todos os dias",
    text: "Produtos frescos e padrão de qualidade em todas as compras.",
  },
  {
    title: "Atendimento que faz a diferença",
    text: "Gente da cidade atendendo a cidade, do jeito que você merece.",
  },
];

function WhatsappButton({
  className = "",
  label = "Pedir pelo WhatsApp",
  message,
}: {
  className?: string;
  label?: string;
  message?: string;
}) {
  return (
    <a
      href={site.whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-display text-lg font-medium uppercase tracking-wide text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      <WhatsappIcon className="size-5" />
      {label}
    </a>
  );
}

// Espaço reservado até termos as fotos reais dos produtos (ver PENDENCIAS.md).
function PhotoPlaceholder() {
  return (
    <div
      className="flex size-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-800 via-stone-900 to-black text-stone-500"
      role="img"
      aria-label="Foto em breve"
    >
      <Image src="/images/logo.png" alt="" width={56} height={56} className="rounded-full opacity-40 grayscale" />
      <span className="text-xs font-semibold uppercase tracking-widest">Foto em breve</span>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
  });
}

const toCalendarDate = (iso: string) =>
  new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const { inauguration } = site;
const inaugurationDay = formatDate(inauguration.date);

const calendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams({
  action: "TEMPLATE",
  text: "Inauguração Rei das Carnes – Jangada-MT",
  dates: `${toCalendarDate(inauguration.startsAt)}/${toCalendarDate(inauguration.endsAt)}`,
  details: `Inauguração do Rei das Carnes com ${inauguration.skewers} espetinhos para comemorar!`,
  location: `${site.address.street}, ${site.address.district}, ${site.address.city}-${site.address.state}`,
})}`;

export default function Home() {
  const openingLabel = `Inauguração: ${inauguration.weekday.toLowerCase()}, ${inaugurationDay}`;

  return (
    <>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <a href="#" className="flex items-center gap-3" aria-label={site.name}>
            <Image
              src="/images/logo.png"
              alt=""
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="font-display text-xl font-bold uppercase leading-none">
              Rei das Carnes
              <span className="block text-xs font-medium tracking-[0.25em] text-brand">
                {site.city}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide text-muted transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={site.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            <WhatsappIcon className="size-4" />
            <span className="hidden sm:inline">Fazer pedido</span>
            <span className="sm:hidden">Pedir</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <Image
            src="/images/fachada.jpg"
            alt="Fachada do Rei das Carnes em Jangada-MT"
            fill
            preload
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/75 to-background" />
          <div className="embers absolute inset-0 -z-10" />

          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:pt-24">
            <Image
              src="/images/logo.png"
              alt="Logo Rei das Carnes Jangada-MT"
              width={180}
              height={180}
              preload
              className="rounded-full border-4 border-brand shadow-2xl shadow-brand/40"
            />

            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/60 bg-black/50 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {openingLabel}
            </p>

            <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
              Tem novidade
              <span className="ribbon mx-auto mt-3 block w-fit px-5 py-2 text-3xl sm:text-5xl">
                chegando em Jangada!
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg text-stone-300">
              O Rei das Carnes chega trazendo variedade, qualidade e aquele
              atendimento que você merece. Carnes selecionadas, todos os dias.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton />
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-display text-lg font-medium uppercase tracking-wide transition hover:border-white hover:bg-white/5"
              >
                <InstagramIcon className="size-5" />
                Siga no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Inauguração */}
        <section id="inauguracao" className="relative overflow-hidden bg-brand py-16">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #000 0 2px, transparent 2px 22px)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-white/80">
                Grande inauguração
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                {inauguration.weekday}, {inaugurationDay}
                <span className="block text-2xl text-black sm:text-3xl">
                  {inauguration.period}
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/90">
                Vamos comemorar a chegada do Rei das Carnes com muita festa e
                churrasco. Traga a família e venha conhecer a loja!
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-display text-lg font-medium uppercase tracking-wide text-white transition hover:bg-stone-900"
                >
                  <ClockIcon className="size-5" />
                  Salvar na agenda
                </a>
                <a
                  href="#localizacao"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-display text-lg font-medium uppercase tracking-wide text-white transition hover:bg-white hover:text-brand"
                >
                  <PinIcon className="size-5" />
                  Como chegar
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="relative flex size-60 flex-col items-center justify-center rounded-full border-8 border-white bg-black text-center shadow-2xl sm:size-72">
                <GrillIcon className="size-10 text-brand" />
                <span className="font-display text-7xl font-bold leading-none sm:text-8xl">
                  {inauguration.skewers}
                </span>
                <span className="font-display text-2xl font-bold uppercase text-brand">
                  espetinhos
                </span>
                <span className="mt-1 text-xs uppercase tracking-widest text-muted">
                  para comemorar
                </span>
              </div>
              <Countdown target={inauguration.startsAt} />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="/images/preparativos.jpg"
                alt="Equipe montando a loja do Rei das Carnes"
                width={1080}
                height={720}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-2xl object-cover"
              />
              <div className="absolute -bottom-5 -right-3 rounded-xl bg-brand px-5 py-3 font-display text-lg font-bold uppercase shadow-xl sm:-right-5">
                Preparativos a todo vapor!
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-brand">
                Sobre nós
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
                O novo endereço da carne de qualidade em Jangada
              </h2>
              <p className="mt-5 text-stone-300">
                Estamos cuidando de cada detalhe para oferecer qualidade,
                variedade e o melhor atendimento para você. O Rei das Carnes
                está chegando para fazer parte do seu dia a dia, no churrasco do
                fim de semana e na mesa de todo dia.
              </p>
              <ul className="mt-8 space-y-5">
                {highlights.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <CrownIcon className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium uppercase">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section id="produtos" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle eyebrow="O que você encontra" title="Tudo para a sua mesa" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map(({ icon: CategoryIcon, title, text, message }) => (
                <a
                  key={title}
                  href={site.whatsappUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center rounded-2xl border border-white/10 bg-surface-2 p-6 text-center transition hover:-translate-y-1 hover:border-brand"
                >
                  <span className="flex size-20 items-center justify-center rounded-full border-4 border-brand bg-black text-white ring-4 ring-white/10 transition group-hover:bg-brand">
                    <CategoryIcon className="size-9" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{text}</p>
                  <span className="mt-4 text-sm font-semibold text-brand">
                    Consultar no WhatsApp →
                  </span>
                </a>
              ))}
            </div>

            <h3 className="mb-6 mt-16 text-center font-display text-2xl font-bold uppercase">
              Nossa vitrine
            </h3>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {products.map((product) => (
                <li
                  key={product.name}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-surface-2"
                >
                  <div className="relative aspect-square">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <PhotoPlaceholder />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-widest text-brand">
                      {product.category}
                    </p>
                    <p className="font-display text-lg font-medium uppercase">
                      {product.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Delivery */}
        <section id="delivery" className="relative overflow-hidden py-20">
          <div className="embers absolute inset-0 -z-10" />
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand">
              <MotoIcon className="size-8" />
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase sm:text-5xl">
              Disk entrega
            </h2>
            <a
              href={site.phoneHref}
              className="mt-3 block font-display text-4xl font-bold tracking-wide text-brand sm:text-6xl"
            >
              {site.phoneDisplay}
            </a>
            <p className="mx-auto mt-5 max-w-xl text-stone-300">
              Faça seu pedido pelo WhatsApp e receba suas carnes em casa, com a
              mesma qualidade do balcão.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsappButton />
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-display text-lg font-medium uppercase tracking-wide transition hover:border-white hover:bg-white/5"
              >
                <PhoneIcon className="size-5" />
                Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* Novidades do Instagram */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle eyebrow={site.instagram.handle} title="Acompanhe as novidades" />
            <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
              {[
                {
                  src: "/images/post-tem-novidade.jpg",
                  alt: "Arte: Tem novidade chegando em Jangada!",
                },
                {
                  src: "/images/post-preparativos.jpg",
                  alt: "Arte: Estamos preparando tudo para você!",
                },
              ].map((post) => (
                <a
                  key={post.src}
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-2xl border border-white/10 transition hover:border-brand"
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    width={1080}
                    height={1350}
                    sizes="(min-width: 640px) 384px, 100vw"
                    className="transition duration-500 hover:scale-105"
                  />
                </a>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-brand hover:underline"
              >
                <InstagramIcon className="size-5" />
                Ver tudo no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle eyebrow="Venha nos visitar" title="Onde estamos" />
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div className="flex gap-4 rounded-2xl bg-surface p-5">
                <PinIcon className="size-6 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-lg font-medium uppercase">Endereço</h3>
                  <p className="text-stone-300">
                    {site.address.street}
                    <br />
                    {site.address.district} · {site.address.city}-{site.address.state}
                  </p>
                  <a
                    href={mapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-surface p-5">
                <ClockIcon className="size-6 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-lg font-medium uppercase">Horário</h3>
                  {site.hours ? (
                    <ul className="text-stone-300">
                      {site.hours.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-stone-300">
                      Em breve! Vamos divulgar o horário de funcionamento na
                      inauguração.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-surface p-5">
                <PhoneIcon className="size-6 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-lg font-medium uppercase">Contato</h3>
                  <a href={site.phoneHref} className="text-stone-300 hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            <div className="min-h-80 overflow-hidden rounded-2xl border border-white/10 lg:col-span-3">
              <iframe
                title="Street View da fachada do Rei das Carnes em Jangada-MT"
                src={mapsEmbedUrl}
                className="size-full min-h-80"
                loading="lazy"
                allowFullScreen
                allow="accelerometer; gyroscope; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center">
          <Image src="/images/logo.png" alt="" width={72} height={72} className="rounded-full" />
          <p className="font-display text-xl font-bold uppercase">
            {site.name} <span className="text-brand">{site.city}</span>
          </p>
          <div className="flex text-brand" aria-label="Três estrelas">
            <StarIcon className="size-4" />
            <StarIcon className="size-4" />
            <StarIcon className="size-4" />
          </div>
          <div className="flex gap-4">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full bg-surface-2 transition hover:bg-brand"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={site.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full bg-surface-2 transition hover:bg-brand"
            >
              <WhatsappIcon className="size-5" />
            </a>
          </div>
          <p className="text-xs text-muted">
            © <CurrentYear /> {site.name} · {site.address.street},{" "}
            {site.address.district} · {site.address.city}-{site.address.state}
          </p>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 pb-24 text-xs text-muted sm:flex-row sm:pb-5">
            <p>
              Desenvolvido por{" "}
              <a
                href={developer.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline-offset-4 hover:text-brand hover:underline"
              >
                {developer.name}
              </a>{" "}
              · {developer.role}
            </p>
            <ul className="flex gap-4">
              {developer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={developer.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Portfólio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={site.whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <WhatsappIcon className="size-7" />
      </a>
    </>
  );
}
