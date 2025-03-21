import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
// import vercel from "@astrojs/vercel/serverless";
import unocss from "unocss/astro";
// @ts-ignore
import vesper from "./src/lib/vesper.json";
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://creekmore.io',
  // base: '/creekmore.io/', 
  // adapter: vercel(),
  // output: "hybrid",
  integrations: [
    expressiveCode({
      themes: ["catppuccin-mocha"]
    }),
    mdx(),
    sitemap(),
    solidJs(),
    unocss({ injectReset: true }),
    vue(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  server: {
    port: 6969
  },
  // @ts-expect-error
  markdown: { shikiConfig: { theme: vesper, wrap: true } },
  output: 'static', // Ensure static output
});
