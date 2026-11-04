# Revisão: tráfego pago em Bombinhas

Preparado em 04/11/2026. Alterações locais para revisão, sem publicação em produção.

## Páginas prontas para revisão

- `/trafego-pago-bombinhas/`: serviço de gestão de Google Ads e Meta Ads, aplicações para pousadas e restaurantes, processo, mensuração, mídia e gestão separadas, FAQ e WhatsApp existente.
- `/blog/google-ads/quanto-custa-anunciar-empresa-bombinhas/`: artigo completo com resposta inicial, dez tópicos, duas tabelas HTML e links para fontes oficiais. A URL mantém o padrão de categoria do blog; não foi criada uma segunda URL sem categoria.

Não havia página equivalente sobre Bombinhas. Os artigos gerais de custo do Google Ads e comparação Google/Meta foram preservados, com links contextuais. A página `/google-ads/` também aponta para o novo serviço. Foi removida do comparativo geral a afirmação de que a ConverteUp não oferecia gestão de Meta Ads, incompatível com o novo escopo solicitado.

## Rascunhos para revisão editorial

Todos com `draft: true`, sem rota, listagem pública ou entrada no sitemap:

- `src/content/blog/google-ads-ou-instagram-ads-pousadas-bombinhas.md`: escolha de canal conforme disponibilidade, origem do viajante e materiais.
- `src/content/blog/trafego-pago-restaurantes-bombinhas.md`: público, operação de salão/retirada/entrega e capacidade de atendimento.
- `src/content/blog/divulgar-pousada-bombinhas-baixa-temporada.md`: calendário real da pousada, viabilidade da oferta e divulgação sem desconto automático.

Cada texto tem exemplo identificado como hipotético e links para o artigo principal e a página comercial. As páginas disponíveis não apontam para rascunhos. As datas editoriais devem ser revistas quando esses rascunhos forem aprovados para publicação.

## Fontes consultadas

Consultadas em 04/11/2026 e vinculadas junto às orientações pertinentes no conteúdo:

- [Google Ads: orçamentos diários médios](https://support.google.com/google-ads/answer/6385083?hl=pt-BR).
- [Google Ads: opções de local](https://support.google.com/google-ads/answer/1722038?hl=pt-BR).
- [Google Ads: medição de conversões](https://support.google.com/google-ads/answer/1722022?hl=pt-BR).
- [Google Ads: onde os anúncios podem aparecer](https://support.google.com/google-ads/answer/1704373?hl=pt-BR).
- [Meta / WhatsApp Business: anúncios que abrem conversas](https://whatsappbusiness.com/products/ads-that-click-to-whatsapp/?lang=en).
- [Meta / WhatsApp Business: configuração desses anúncios](https://whatsappbusiness.com/products/create-ads-that-click-to-whatsapp/).

As páginas de Facebook Business consultadas redirecionaram para login; a documentação pública oficial do WhatsApp Business foi usada para fundamentar os recursos da Meta. Não foram reproduzidos passos de configuração dependentes de acesso à conta.

## Verificações realizadas

- `npm.cmd run build`: 47 páginas geradas, sem erros ou avisos de compilação no build final.
- `git diff --check`: sem erros de whitespace; apenas avisos locais de normalização LF/CRLF.
- Duas novas rotas: HTTP 200, um H1, títulos e descrições únicos, canonical conforme `SeoHead`, dados estruturados válidos em JSON.
- Layout das novas páginas verificado em 1440, 390 e 320 px. Sem transbordamento horizontal da página.
- Tabelas com caption, cabeçalhos com scope e região focável com rolagem horizontal no celular.
- Links internos e âncora `#proposta`: destinos HTTP 200 e âncora existente.
- CTAs de WhatsApp reutilizam `WHATSAPP_HREF`, sem envio de mensagem durante os testes.
- Nenhum erro JavaScript capturado durante a verificação das novas rotas.
- Rascunhos ausentes de todos os HTMLs e XMLs do build. Somente as duas novas páginas entram no sitemap.
- Revisão editorial: valores são simulações de mídia, sem estimativas de desempenho; gestão sem preço tabelado. Exemplos hipotéticos não são cases. Sem escritório, certificações ou resultados locais inventados.

## Limites e pendências

- Preço e escopo definitivo da gestão serão definidos em proposta, como solicitado.
- Três artigos complementares aguardam revisão; continuam excluídos da publicação.
- Não há captura real de campanha local comprovada utilizada. Os elementos visuais são tabelas e organização textual, sem imagens genéricas ou prints simulados.
- Canonical e sitemap usam `SITE_URL`, como o restante do projeto; na validação local, a origem é localhost. Nenhuma configuração de domínio foi alterada.
- Sem commit, push ou deploy. As alterações anteriores de preços e FAQ foram preservadas.
