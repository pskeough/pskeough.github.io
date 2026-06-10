import { z, defineCollection } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    arxivLink: z.string().url().optional(),
    pdfLink: z.string().optional(),
    repoLink: z.string().url().optional(),
    status: z.string().optional(),
    order: z.number().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    githubLink: z.string().url().optional(),
    liveLink: z.string().url().optional(),
    screenshot: z.string().optional(),
    order: z.number().optional(),
  }),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    category: z.enum(['Major Works', 'Short Fiction', 'Essays & Poetry']),
    genre: z.string().optional(),
    isExcerpt: z.boolean().default(false),
    status: z.string().optional(),
    pdfLink: z.string().optional(),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    contactEmail: z.string().email().optional(),
    githubUrl: z.string().url().optional(),
  }),
});

export const collections = {
  research: researchCollection,
  projects: projectsCollection,
  writing: writingCollection,
  about: aboutCollection,
};
