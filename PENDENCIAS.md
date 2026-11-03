# Pendências do site – Rei das Carnes Jangada-MT

Itens provisórios que precisam ser trocados ou confirmados.

## Imagens

- [ ] **Logo em alta resolução**: o logo atual (`public/images/logo.png`, ~240px) e o ícone da aba (`src/app/icon.png`, 150px) foram recortados das artes do Instagram. Trocar pelo arquivo original (PNG transparente ou SVG) e manter o mesmo nome de arquivo.
- [ ] **Fotos reais dos produtos**: a vitrine mostra "Foto em breve" até termos as fotos (a loja ainda vai inaugurar). Salvar as fotos em `public/images/produtos/` e preencher o campo `image` de cada item em `src/lib/products.ts`. Revisar também a lista de produtos.
- [ ] **Foto da fachada pronta**: o fundo do topo (`public/images/fachada.jpg`) é um recorte da arte "Tem novidade". Trocar por uma foto real da loja.
- [ ] **Foto da seção "Sobre"**: `public/images/preparativos.jpg` mostra a montagem da loja. Trocar por uma foto da loja funcionando depois da inauguração.

## Informações

- [ ] **Abertura aos domingos e feriados**: já está definido que fecha às 18h. Falta confirmar o horário de abertura e se há pausa para o almoço (como de segunda a sábado). Ajustar em `src/lib/site.ts` → `hours`.
- [ ] **Horário de início da inauguração**: definido como "sábado, 28/11, pela manhã". A contagem regressiva usa 07h. Confirmar e ajustar `inauguration.startsAt` em `src/lib/site.ts`.
- [ ] **Área de entrega do delivery**: bairros atendidos, taxa e pedido mínimo, se houver.
- [ ] **Ofertas da semana**: definir como serão divulgadas no site.

## Depois da inauguração (28/11)

- [ ] Trocar o topo de "Tem novidade chegando" por um destaque da loja aberta.
- [ ] Remover ou arquivar a seção da inauguração.
