import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './src/utils/remark-wikilinks.ts';

export default defineConfig({
  site: 'https://orchid.quest',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
