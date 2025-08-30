import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hardcodedlife.github.io',
  output: 'static',
  build: {
    assets: 'assets'
  },
  env: {
    schema: {
      FORMSPREE_FORM_ID: {
        context: 'client',
        access: 'public',
        optional: true
      }
    }
  }
});