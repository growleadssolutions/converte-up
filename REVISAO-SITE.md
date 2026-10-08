# Revisão local — ConverteUp

Data: 07/10/2026. Ambiente: http://localhost:4321/.

## Alterações realizadas

- Aviso visível na seção Case Reecell da home: inserir capturas reais do site antigo e do site novo.
- Correção de “conversoes” para “conversões” na home.
- Correção da referência acessível do FAQ: o título agora recebe o `id` usado por `aria-labelledby`.

## Resultado dos testes

- Build de produção concluído sem erro.
- 32 páginas de conteúdo acessíveis via HTTP 200: seis páginas principais, blog, quatro categorias e 21 artigos.
- Página 404 e URL inexistente retornam HTTP 404.
- A rota antiga `/blog/como-aparecer-no-google/` retorna 301 para `/blog/seo/como-aparecer-no-google/` no servidor local.
- 704 ocorrências de links examinadas no HTML gerado: nenhum destino interno ou fragmento inexistente encontrado.
- 14 referências únicas a arquivos locais examinadas: nenhuma ausente no build.
- 33 páginas abertas no navegador, incluindo a 404, em larguras de 390 e 1440 px: sem overflow horizontal do documento, todas com um H1 e conteúdo principal. Nenhuma imagem carregada apresentou erro nos checkpoints.
- Títulos, descrições e canonical presentes nas 33 páginas; títulos sem duplicação.
- FAQ da home abre ao clique. Aviso confirmado no navegador em desktop e celular.
- `robots.txt` e `llms.txt` respondem com HTTP 200. Sitemap gerado pelo build.

## Pendências prioritárias

Atualização: o menu móvel e os links de Blog e Sistemas foram corrigidos no código local após esta revisão. A listagem do blog agora usa “categorias”. O usuário confirmou que o site já está publicado; esta revisão não verificou a configuração desse ambiente nem publicou as alterações locais.

| Prioridade | Local | Constatação | Próximo ajuste |
| --- | --- | --- | --- |
| Alta | Home, SEO, Google Ads, Criação de Sites e Contato | Os cinco formulários usam `mailto:`; não existe envio para um serviço de formulário. A home ainda usa GET, enquanto os demais usam POST/text/plain. | Definir envio efetivo e retorno de sucesso/erro, ou preparar a solicitação pelo WhatsApp de forma explícita. Não foi realizado envio de teste. |
| Média | Home / Case Reecell | Comparação ainda usa desenhos em CSS. | Inserir as duas capturas reais; o aviso solicitado já está visível nessa seção. |
| Média | Home / Case Reecell | “Ver o projeto completo” leva ao WhatsApp, não a uma página do projeto. | Ajustar o texto do botão ou informar a URL real do case. |
| Média | Publicação | O build local usa `localhost` em canonical e sitemap; canonical remove a barra final, mas sitemap e links internos a mantêm. | Confirmar `PUBLIC_SITE_URL` no ambiente publicado e alinhar o padrão de URL sem alterar endereços existentes arbitrariamente. A configuração remota não foi inspecionada. |
| Média | Identidade e compartilhamento | Favicon SVG ainda é o símbolo do Astro. Nenhuma das 33 páginas fornece `og:image`. | Usar favicon da marca e imagem real de compartilhamento. |
| Baixa | Blog | Aquisição Digital tem zero artigos. Os 21 artigos existentes não têm imagem cadastrada. A listagem exibe o termo técnico “4 silos”. | Planejar conteúdo da categoria, imagens quando disponíveis e trocar o termo por “4 categorias”. Ausência de imagem editorial não impede leitura. |
| Baixa | Home / Hero | A tela do notebook mostra “MacBook Mockup”, enquanto o texto alternativo diz que exibe o método da ConverteUp. | Inserir a arte real na tela ou adequar o texto alternativo à imagem. |
| Baixa | 404 e home | Textos da 404 estão sem acentuação; há “Decisões baseadas em dado” no comparativo. | Fazer revisão final de microtextos. |
| A confirmar | Case Reecell e mensuração | Existem alegações de PageSpeed e diferença de faturamento sem evidência anexada neste projeto; atributos `data-conversion` estão presentes, mas não foi encontrado código de analytics enviando eventos. | Confirmar os dados do case e a mensuração antes de usá-los como prova comercial ou conversões rastreadas. |

## Páginas examinadas

- Principais: `/`, `/seo/`, `/google-ads/`, `/criacao-de-sites/`, `/criacao-de-sistemas/`, `/contato/`.
- Blog: `/blog/`, `/blog/seo/`, `/blog/google-ads/`, `/blog/criacao-de-sites/`, `/blog/aquisicao-digital/`.
- Artigos de SEO: `como-aparecer-no-google`, `como-aparecer-no-google-maps`, `como-colocar-minha-empresa-no-google`, `como-conseguir-avaliacoes-no-google`, `como-melhorar-posicionamento-google-maps`, `google-meu-negocio-guia-completo`, `por-que-meu-site-nao-aparece-no-google`, `quanto-custa-seo`, `quanto-tempo-seo-demora`, `seo-local`, `seo-vale-a-pena-pequenas-empresas`.
- Artigos de Google Ads: `como-anunciar-no-google`, `como-conseguir-clientes-com-google-ads`, `google-ads-para-pequenas-empresas`, `google-ads-vale-a-pena`, `quanto-custa-anunciar-no-google-ads`.
- Artigos de Criação de Sites: `preciso-de-um-site-para-minha-empresa`, `quanto-custa-criar-um-site`, `quanto-tempo-leva-criar-site-profissional`, `site-ou-instagram`, `site-profissional-gerar-clientes`.
- Erro e compatibilidade: `/404.html`, URL inexistente e redirecionamento legado do artigo “Como aparecer no Google”.

## Limites da revisão

Revisão local de estrutura, navegação, carregamento, metadados e pendências visíveis. Não houve publicação, envio de mensagens, medição de PageSpeed, comprovação dos resultados comerciais, teste de entrega dos formulários nem validação de indexação em produção. As medidas de largura não substituem uma revisão visual minuciosa de cada seção em todos os dispositivos.
