import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hardcodedlife.github.io',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    define: {
      'import.meta.env.FORMSPREE_FORM_ID': JSON.stringify(process.env.FORMSPREE_FORM_ID || 'YOUR_FORM_ID')
    }
  }
});