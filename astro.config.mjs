import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hardcodedlife.github.io',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    define: {
      __FORMSPREE_FORM_ID__: JSON.stringify(process.env.FORMSPREE_FORM_ID || 'myzdwkdl')
    }
  }
});