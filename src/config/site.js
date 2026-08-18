// Troque PUBLIC_SITE_URL pelo dominio definitivo quando ele estiver configurado.
// Enquanto PUBLIC_SITE_IS_FINAL nao for "true", as paginas usam noindex para
// reduzir o risco de indexacao de ambientes temporarios.
export const SITE_URL = process.env.PUBLIC_SITE_URL || "https://example.com";
export const SITE_IS_FINAL = process.env.PUBLIC_SITE_IS_FINAL === "true";
export const SITE_NAME = "ConverteUp";
export const CONTACT_EMAIL = "growleads.solutions@gmail.com";
export const CONTACT_PHONE = "41991816988";
export const WHATSAPP_HREF = "https://wa.me/5541991816988";

export const DEFAULT_ROBOTS = SITE_IS_FINAL ? "index, follow" : "noindex, follow";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: absoluteUrl("/"),
};
