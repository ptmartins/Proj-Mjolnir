import { defineConfig } from 'astro/config';

export default defineConfig({
    outDir: 'dist',
    srcDir: 'src',
    integrations: [],
    mode: 'development', 
    buildOptions: {
      sitemap: true,
    },
});
