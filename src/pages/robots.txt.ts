import type { APIRoute } from "astro";
import { SITE_IS_FINAL } from "../config/site.js";

const getRobotsTxt = (sitemapURL: URL) => `User-agent: *
Allow: /

# Quando o dominio definitivo entrar, confirme se o sitemap aponta para a URL final.
${SITE_IS_FINAL ? "" : "# Dominio definitivo pendente: paginas usam meta robots noindex ate PUBLIC_SITE_IS_FINAL=true.\n"}Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
