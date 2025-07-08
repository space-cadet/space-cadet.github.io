import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://space-cadet.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
