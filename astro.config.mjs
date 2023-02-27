import { defineConfig } from 'astro/config';
import { inlineSVG } from '@jsdevtools/rehype-inline-svg';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  markdown: {
    rehypePlugins: [inlineSVG]
  },
  site: 'https://dabolichin.github.io',
});
