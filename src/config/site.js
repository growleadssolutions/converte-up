// Paginas publicas devem ser indexaveis por padrao. Use robots explicito em
// paginas que nao devem entrar no Google, como 404 ou ambientes internos.
const normalizeUrl = (url) => (url.endsWith("/") ? url : `${url}/`);
const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const fallbackSiteUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:4321";

export const SITE_URL = normalizeUrl(process.env.PUBLIC_SITE_URL || fallbackSiteUrl);
export const SITE_IS_FINAL =
  process.env.PUBLIC_SITE_IS_FINAL === "true" || process.env.VERCEL_ENV === "production";
export const SITE_NAME = "ConverteUp";
export const CONTACT_EMAIL = "growleads.solutions@gmail.com";
export const CONTACT_PHONE = "41991816988";
export const WHATSAPP_HREF = "https://wa.me/5541991816988";

export const DEFAULT_ROBOTS = "index, follow";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: absoluteUrl("/"),
};
