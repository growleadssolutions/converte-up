export const BLOG_CATEGORY_NAMES = ["SEO", "Criação de Sites", "Google Ads", "Aquisição Digital"] as const;

export type BlogCategoryName = (typeof BLOG_CATEGORY_NAMES)[number];

export const BLOG_CATEGORY_SLUGS = {
  SEO: "seo",
  "Criação de Sites": "criacao-de-sites",
  "Google Ads": "google-ads",
  "Aquisição Digital": "aquisicao-digital",
} as const satisfies Record<BlogCategoryName, string>;

export const BLOG_CATEGORIES = BLOG_CATEGORY_NAMES.map((name) => ({
  name,
  slug: BLOG_CATEGORY_SLUGS[name],
}));

export function getBlogCategorySlug(category: BlogCategoryName) {
  return BLOG_CATEGORY_SLUGS[category];
}

export function getBlogCategoryBySlug(slug: string) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
}

export function getBlogCategoryPath(category: BlogCategoryName) {
  return `/blog/${getBlogCategorySlug(category)}/`;
}

export function getBlogPostPath(post: { id: string; data: { category: BlogCategoryName } }) {
  return `/blog/${getBlogCategorySlug(post.data.category)}/${post.id}/`;
}

export function formatBlogDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

