import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

const base = "/portfolio-site";

// https://astro.build/config
export default defineConfig({
  site: "https://yuta-shibuya-sy.github.io",
  base: base,
  integrations: [svelte()],
});
