import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeCaption from './src/plugins/rehype-caption.mjs';

export default defineConfig({
  site: 'https://pskeough.github.io',
  markdown: { rehypePlugins: [rehypeCaption] },
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
  output: 'static',
  redirects: {
    '/research/access-not-capability': '/research/local-llms-privacy-constrained-research',
    '/research/private-documents-local-models': '/research/local-llms-privacy-constrained-research',
  },
});
