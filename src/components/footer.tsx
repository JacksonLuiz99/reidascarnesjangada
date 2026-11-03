import Image from "next/image";
import {
  ClockIcon,
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
  WhatsappIcon,
} from "@/components/icons";
import { developer } from "@/lib/developer";
import { mapsLinkUrl, site } from "@/lib/site";

const footerNav = [
  { href: "#inauguracao", label: "Inauguração" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#produtos", label: "Produtos" },
  { href: "#delivery", label: "Delivery" },
  { href: "#localizacao", label: "Onde estamos" },
];

const devIcons = {
  globe: GlobeIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.25em] text-white">
      {children}
      <span className="mt-2 block h-0.5 w-8 bg-brand" aria-hidden />
    </h2>
  );
}

export function Footer() {
  const { address } = site;

  return (
    <footer className="relative bg-black">
      {/* Faixa vermelha no topo, como nas artes */}
      <div className="h-1.5 bg-gradient-to-r from-brand-dark via-brand to-brand-dark" aria-hidden />

      <div className="embers">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div className="col-span-2 flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-1">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt=""
                width={64}
                height={64}
                className="rounded-full border-2 border-brand"
              />
              <div>
                <p className="font-display text-2xl font-bold uppercase leading-none">
                  {site.name}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                  {site.city}
                  <span className="flex" aria-hidden>
                    <StarIcon className="size-2.5" />
                    <StarIcon className="size-2.5" />
                    <StarIcon className="size-2.5" />
                  </span>
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm text-stone-400">
              {site.tagline} Variedade e aquele atendimento que faz a diferença,
              no balcão ou no delivery.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${site.instagram.handle}`}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand hover:bg-brand"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={site.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand hover:bg-brand"
              >
                <WhatsappIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé">
            <ColumnTitle>Navegação</ColumnTitle>
            <ul className="space-y-0.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-1.5 text-stone-400 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Horário */}
          <div>
            <ColumnTitle>Horário</ColumnTitle>
            {site.hours ? (
              <ul className="space-y-3 text-sm text-stone-400">
                {site.hours.map((line) => {
                  const [days, time] = line.split(": ");
                  return (
                    <li key={line} className="flex gap-2">
                      <ClockIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>
                        <span className="block font-semibold text-white">{days}</span>
                        {time}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-stone-400">Em breve.</p>
            )}
          </div>

          {/* Contato */}
          <address className="col-span-2 not-italic lg:col-span-1">
            <ColumnTitle>Contato</ColumnTitle>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 py-1 transition hover:text-white"
                >
                  <PinIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    {address.street}
                    <br />
                    {address.district} · {address.city}-{address.state}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex gap-2 py-1 transition hover:text-white"
                >
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    <span className="block font-semibold text-white">Disk entrega</span>
                    {site.phoneDisplay}
                  </span>
                </a>
              </li>
            </ul>
            <a
              href={site.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              <WhatsappIcon className="size-4" />
              Fazer pedido
            </a>
          </address>
        </div>
      </div>

      {/* Barra inferior: direitos e créditos */}
      <div className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 pb-24 pt-6 text-xs text-stone-500 md:flex-row md:pb-6">
          <p className="text-center md:text-left">
            © <CurrentYear /> {site.name} {site.city}. Todos os direitos reservados.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <p>
              Desenvolvido por{" "}
              <a
                href={developer.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 font-semibold text-stone-300 transition hover:text-brand"
              >
                {developer.name}
              </a>
            </p>
            <ul className="flex gap-1.5">
              {developer.links.map((link) => {
                const Icon = devIcons[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} de ${developer.name}`}
                      title={link.label}
                      className="flex size-10 items-center justify-center rounded-full text-stone-500 transition hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
