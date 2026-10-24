import { z, defineCollection } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    arxivLink: z.string().url().optional(),
    coauthors: z.string().optional(),
    pdfLink: z.string().optional(),
    repoLink: z.string().url().optional(),
    status: z.string().optional(),
    plate: z.string().optional(),
    plateCaption: z.string().optional(),
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
    status: z.string().optional(),
    order: z.number().optional(),
  }),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    category: z.enum(['Major Works', 'Short Fiction', 'Essays & Poetry']),
    genre: z.string().optional(),
    isExcerpt: z.boolean().default(false),
    status: z.string().optional(),
    wordCount: z.number().optional(),
    pdfLink: z.string().optional(),
    videoLink: z.string().url().optional(),
  }),
});

// A film or video. `story` is the slug of the writing entry an adaptation comes from, and `stages`
// is the "from text to frame" strip: one shot's narration line and its clay pass, still and clip frame.
const filmsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.enum(['Adaptation', 'Other']),
    youtube: z.string().url(),
    pubDate: z.date(),
    runtime: z.string(),
    shots: z.number().optional(),
    story: z.string().optional(),
    storyCategory: z.enum(['major-works', 'short-fiction', 'essays-and-poetry']).optional(),
    storyWords: z.number().optional(),
    look: z.string().optional(),
    tools: z.array(z.string()).default([]),
    stages: z
      .array(
        z.object({
          line: z.string(),
          clay: z.string().optional(),
          still: z.string(),
          frame: z.string(),
          note: z.string().optional(),
        }),
      )
      .default([]),
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
  films: filmsCollection,
  about: aboutCollection,
};
