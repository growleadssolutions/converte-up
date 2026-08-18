import type { APIRoute } from "astro";
import { absoluteUrl } from "../config/site.js";

export const GET: APIRoute = () => {
  const body = `# ConverteUp

> A ConverteUp ajuda empresas a desenvolver canais digitais de aquisicao por meio de SEO, Google Ads, criacao de sites e sistemas.

## Servicos

- SEO
- Google Ads
- Criacao de sites
- Criacao de sistemas

## Principais paginas

- ${absoluteUrl("/")}
- ${absoluteUrl("/seo")}
- ${absoluteUrl("/google-ads")}
- ${absoluteUrl("/criacao-de-sites")}
- ${absoluteUrl("/criacao-de-sistemas")}
- ${absoluteUrl("/contato")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
