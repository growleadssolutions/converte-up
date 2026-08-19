import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { BLOG_CATEGORY_NAMES } from "./lib/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().min(1),
      category: z.enum(BLOG_CATEGORY_NAMES),
      tags: z.array(z.string().min(1)).default([]),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().optional(),
      pillar: z.boolean().default(false),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      faq: z
        .array(
          z.object({
            question: z.string().min(1),
            answer: z.string().min(1),
          }),
        )
        .optional(),
      enableFaqSchema: z.boolean().default(false),
    })
    .refine((data) => !data.image || Boolean(data.imageAlt), {
      message: "Preencha imageAlt quando image for usada.",
      path: ["imageAlt"],
    }),
});

export const collections = { blog };
