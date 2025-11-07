import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://spiritpathlight.com", // Update with your actual domain
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
