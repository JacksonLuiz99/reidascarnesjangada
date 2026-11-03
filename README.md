# Rei das Carnes – Jangada-MT

Site do açougue **Rei das Carnes**, em Jangada-MT.

🌐 **No ar:** https://reidascarnesjangada.vercel.app
📸 **Instagram:** [@reidascarnesjangada](https://www.instagram.com/reidascarnesjangada/)

## O que tem no site

- **Topo:** fachada, logo, data da inauguração e botões para WhatsApp e Instagram.
- **Inauguração:** sábado, 28/11/2026, pela manhã, com 500 espetinhos. Tem contagem regressiva e botão para salvar na agenda.
- **Sobre:** apresentação da loja e diferenciais.
- **Produtos:** categorias (Ofertas, Produtos, Churrasco, Delivery), cada uma abre o WhatsApp com uma mensagem pronta, e uma vitrine de produtos com fotos provisórias.
- **Disk Entrega:** (65) 9 9805-8091, com botões de WhatsApp e ligação.
- **Novidades:** posts do Instagram.
- **Onde estamos:** endereço, horário (seg. a sáb. 07h às 12h e 15h às 19h30; domingos e feriados até as 18h), contato e Street View da fachada.
- **Botão flutuante do WhatsApp** em todas as telas.

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- Fontes Oswald e Inter via `next/font`
- Hospedagem na [Vercel](https://vercel.com)

## Rodando localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev     # http://localhost:3000
```

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| Endereço, telefone, horário, inauguração, mapa | `src/lib/site.ts` |
| Lista de produtos da vitrine e suas fotos | `src/lib/products.ts` |
| Textos e seções da página | `src/app/page.tsx` |
| Cores e estilos globais | `src/app/globals.css` |
| Título e descrição para buscadores e WhatsApp | `src/app/layout.tsx` |
| Imagens | `public/images/` (produtos em `public/images/produtos/`) |
| Ícone da aba do navegador | `src/app/icon.png` |

## Deploy

O site está na Vercel, no projeto `reidascarnesjangada`. Para publicar uma nova versão:

```bash
vercel deploy --prod
```

> O repositório do GitHub ainda não está conectado à Vercel, então um `git push` não publica sozinho. Depois de conectar em *Vercel → Project → Settings → Git*, cada push na `main` passa a publicar automaticamente.

## Pendências

O que ainda é provisório (logo em alta resolução, fotos reais, abertura aos domingos etc.) está em **[PENDENCIAS.md](PENDENCIAS.md)**.

## Commits

Um commit por etapa, em português e no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/) (`feat:`, `fix:`, `docs:`, `chore:`).
