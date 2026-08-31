import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `User-agent: *
Allow: /

# Confirme se o sitemap aponta para a URL final de producao.
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
