import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const writingFolder = {
  'Major Works': 'major-works',
  'Short Fiction': 'short-fiction',
  'Essays & Poetry': 'essays-and-poetry',
};

export async function GET(context) {
  const research = await getCollection('research');
  const writing = await getCollection('writing');

  const items = [
    ...research.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description,
      link: `/research/${entry.slug}/`,
      categories: ['Research'],
    })),
    ...writing.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description ?? '',
      link: `/writing/${writingFolder[entry.data.category]}/${entry.slug}/`,
      categories: ['Writing', entry.data.category],
    })),
  ].sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: 'Patrick Keough',
    description:
      'Research, writing, and projects from Patrick Keough, independent AI evaluation researcher and writer in Sydney.',
    site: context.site,
    items,
    customData: '<language>en-us</language>',
  });
}
